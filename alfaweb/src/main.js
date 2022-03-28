import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzYnY8WdbNkmG-LSl29QNFX4hOa4WSZa0",
  authDomain: "alfaweb-2ee01.firebaseapp.com",
  projectId: "alfaweb-2ee01",
  storageBucket: "alfaweb-2ee01.appspot.com",
  messagingSenderId: "46538716321",
  appId: "1:46538716321:web:53341724c882383904ace0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
