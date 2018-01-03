import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Templates/Login'
// import Home from '@/components/Templates/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
