import Vue from 'vue'

import TopNav from '@/components/TopNav/TopNav'
import TabNav from '@/components/TabNav/TabNav'
import ProductListItem from '@/components/ProductListItem/Item'
import PriceBar from '@/components/PriceBar/PriceBar'

Vue.component('topNav', TopNav)
Vue.component('tabNav', TabNav)
Vue.component('productListItem', ProductListItem)
Vue.component('priceBar', PriceBar)

Vue.filter('currency', (value) => {
  return value.toFixed(2)
})
