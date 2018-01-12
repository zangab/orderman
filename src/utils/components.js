import Vue from 'vue'

import TopNav from '@/components/TopNav/TopNav'
import TabNav from '@/components/TabNav/TabNav'
import ProductListItem from '@/components/ProductListItem/Item'
import OrderList from '@/components/OrderList/OrderList'
import OrderListItem from '@/components/OrderListItem/Item'
import PriceBar from '@/components/PriceBar/PriceBar'
import Cashout from '@/components/Cashout/Cashout'

Vue.component('topNav', TopNav)
Vue.component('tabNav', TabNav)
Vue.component('productListItem', ProductListItem)
Vue.component('orderList', OrderList)
Vue.component('orderListItem', OrderListItem)
Vue.component('priceBar', PriceBar)
Vue.component('cashOut', Cashout)

Vue.filter('currency', (value) => {
  return value.toFixed(2)
})
