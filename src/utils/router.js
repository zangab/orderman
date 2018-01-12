import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Templates/Login'
import Home from '@/components/Templates/Home'
import KellnerHome from '@/components/Templates/Kellner/Home'
import KellnerOrder from '@/components/Templates/Kellner/Order'
import ProductList from '@/components/ProductList/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/kellner',
      name: 'kellner-home',
      component: KellnerHome,
      children: [
        {
          path: 'produkte',
          name: 'kellner-produkte',
          component: ProductList
        },
        {
          path: 'archiv',
          name: 'kellner-archiv',
          component: KellnerOrder
        },
        {
          path: 'bestellung',
          name: 'kellner-bestellung',
          component: KellnerOrder,
          meta: {
            blueCol: true
          }
        }
      ]
    }
  ]
})
