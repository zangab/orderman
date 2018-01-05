<template>
  <ul class="ProductList">
    <li class="sectiontitle">Alle Getränke ({{ drinks.length }})</li>
    <product-list-item v-for="(item, index) in drinks" :key="item.id" :item="item"></product-list-item>
    <li class="sectiontitle has-margin">Alle Essen ({{ food.length }})</li>
    <product-list-item v-for="(item, index) in food" :key="item.id" :item="item"></product-list-item>
  </ul>
</template>

<script>
import { drinks, food } from './data'

export default {
  name: 'ProductList',
  data () {
    return {
      drinks,
      food
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./list";
</style>
