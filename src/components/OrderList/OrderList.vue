<template>
  <ul class="OrderList">
    <order-list-item
      v-for="item in products"
      :count="item.count"
      :product="getProductInfo(item.id)"
      :key="item.id"
    ></order-list-item>
  </ul>
</template>

<script>
import Order from '../../utils/order'
import EventBus from '../../utils/eventbus'
import { drinks, food } from '../../utils/mockdata'

export default {
  name: 'OrderList',
  mounted () {
    this.products = Order.getProducts()
    EventBus.$on('resetOrder', () => {
      this.products = this.$set(this, 'products', Order.getProducts())
      this.$router.push({ name: 'kellner-produkte' })
    })
  },
  data () {
    return {
      drinks,
      food,
      products: []
    }
  },
  methods: {
    getProductInfo (id) {
      return drinks.hasOwnProperty(id) ? drinks[id] : food[id]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./list";
</style>
