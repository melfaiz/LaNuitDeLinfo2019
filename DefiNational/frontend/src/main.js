import Vue from 'vue'
import router from './router'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from '@chenfengyuan/vue-carousel';
import * as firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDWN8KBVaQ4CeAEi-ZALM--E-DLoq98gcc",
  authDomain: "here-to-help-6cf40.firebaseapp.com",
  databaseURL: "https://here-to-help-6cf40.firebaseio.com",
  projectId: "here-to-help-6cf40",
  storageBucket: "here-to-help-6cf40.appspot.com",
  messagingSenderId: "53446109796",
  appId: "1:53446109796:web:f1a2d1373817fb65294d71"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.component(VueCarousel.name, VueCarousel);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
