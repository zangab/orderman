<template>
  <ul class="ProductList">
    <li class="sectiontitle" ref="drinktitle" :style="{'position': 'fixed', 'top': '215px'}">Alle Getränke ({{ Object.keys(drinks).length }})</li>
    <product-list-item v-for="item in drinks" :key="item.id" :item="item" :count="getBadgeCount(item.id)" track-by="item.id"></product-list-item>
    <li class="sectiontitle has-margin" ref="foodtitle">Alle Essen ({{ Object.keys(food).length }})</li>
    <product-list-item v-for="item in food" :key="item.id" :item="item" :count="getBadgeCount(item.id)" track-by="item.id"></product-list-item>
  </ul>
</template>

<script>
import Order from '../../utils/order'
import EventBus from '../../utils/eventbus'
import { drinks, food } from '../../utils/mockdata'

export default {
  name: 'ProductList',
  mounted () {
    this.products = Order.getProducts()
    EventBus.$on('resetOrder', (payload) => {
      this.$forceUpdate()
    })
  },
  data () {
    return {
      drinks,
      food,
      sizes: {},
      products: []
    }
  },
  methods: {
    getBadgeCount (id) {
      for (let i in this.products) {
        const item = this.products[i]
        if (item.id === id) return item.count
      }
      return 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./list";
</style>
