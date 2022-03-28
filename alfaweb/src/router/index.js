import Vue from 'vue'
import VueRouter from 'vue-router'
import { getAuth } from "firebase/auth"
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const sesionActiva = auth.currentUser
  console.log(sesionActiva)
  if(sesionActiva && to.path == "/dashboard"){
    next()
  }else if(!sesionActiva && to.path == "/dashboard"){
    alert("lo sentimos, no tienes permisos de estar aquí, porfavor inicia sesion")
    next("/login")
  }else{
    next()
  }
})

export default router
