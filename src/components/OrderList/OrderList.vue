<template>
  <ul class="OrderList">
    Order
    <!-- <product-list-item v-for="(item, index) in data" :key="item.id" :item="item"></product-list-item> -->
  </ul>
</template>

<script>
import { list } from './data'

export default {
  name: 'OrderList',
  data () {
    return {
      data: list
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./list";
</style>
