import Vue from 'vue'

import TopNav from '@/components/TopNav/TopNav'
import TabNav from '@/components/TabNav/TabNav'
import ArchiveList from '@/components/ArchiveList/ArchiveList'
import ArchiveListItem from '@/components/ArchiveListItem/ArchiveListItem'
import ProductListItem from '@/components/ProductListItem/Item'
import OrderList from '@/components/OrderList/OrderList'
import OrderListItem from '@/components/OrderListItem/Item'
import PriceBar from '@/components/PriceBar/PriceBar'
import Cashout from '@/components/Cashout/Cashout'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)
Vue.component('topNav', TopNav)
Vue.component('tabNav', TabNav)
Vue.component('productListItem', ProductListItem)
Vue.component('orderList', OrderList)
Vue.component('orderListItem', OrderListItem)
Vue.component('archiveList', ArchiveList)
Vue.component('archiveListItem', ArchiveListItem)
Vue.component('priceBar', PriceBar)
Vue.component('cashOut', Cashout)

Vue.filter('currency', (value) => {
  return value.toFixed(2)
})

Vue.filter('orderNumber', (value) => {
  return ('0000' + value).substr(-4)
})
