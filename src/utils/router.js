import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Templates/Login'
import Home from '@/components/Templates/Home'
import ProductList from '@/components/ProductList/List'
import OrderList from '@/components/OrderList/OrderList'

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
      component: Home,
      children: [
        {
          path: 'produkte',
          name: 'kellner-produkte',
          component: ProductList
        },
        {
          path: 'archiv',
          name: 'kellner-archiv',
          component: OrderList
        }
      ]
    }
  ]
})
