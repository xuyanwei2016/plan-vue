
import Vue from 'vue';
import App from './App';
import router from './router';


import 'bootstrap/dist/css/bootstrap.css';
import {store} from "./store";
import 'animate.css';

new Vue({
  el: '#app',
  router,
  ...App,
  store//相当于注入到vue的实例上
  // 送一个this.$store
})
