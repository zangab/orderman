import Vue from 'vue'
import App from './App'
import router from './utils/router'
import VueSweetalert2 from 'vue-sweetalert2'
import './utils/components'

Vue.use(VueSweetalert2)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
