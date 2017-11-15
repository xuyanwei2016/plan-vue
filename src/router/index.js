import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Time from '@/components/Time.vue'
import Add from '@/components/Add.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/home',component:Home},
    {path:'/time',component:Time,
    children:[{path:'time-add',component:Add}]
    }
  ]
})
