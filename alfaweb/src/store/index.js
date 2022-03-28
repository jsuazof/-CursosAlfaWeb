import Vue from 'vue'
import Vuex from 'vuex'

//FIREBASE
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";
import {getFirestore, onSnapshot, collection, addDoc} from 'firebase/firestore'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SIGN_OUT(state){
      state.user = null
    }
  },
  actions: {
  //REGISTRAR USUARIO
  async register_User(context, {email, password}){
    const auth = getAuth()
    await createUserWithEmailAndPassword(auth, email, password)
  },
  //AGREGAR USUARIO
  async add_User(context, usuario){
    const db = getFirestore()
    const collectionRef = collection(db,"usuarios")
    await addDoc(collectionRef, usuario)
  },
  //INICIAR SESIÓN
  async iniciar_Sesion({commit},{email, password}){
    const auth = getAuth()
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    console.log(user)
    commit("SET_USER", user)
  },
  
  //CERRAR SESIÓN
  async cerrar_Sesion({commit}){
    const auth = getAuth()
    await signOut(auth)
    commit("SIGN_OUT")
  }
  },
  modules: {
  }
})
