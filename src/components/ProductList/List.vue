<template>
  <ul class="ProductList">
    <li class="sectiontitle" ref="drinktitle" :style="{'position': 'fixed', 'top': '210px'}">Alle Getränke ({{ drinks.length }})</li>
    <product-list-item v-for="(item, index) in drinks" :key="item.id" :item="item"></product-list-item>
    <li class="sectiontitle has-margin" ref="foodtitle">Alle Essen ({{ food.length }})</li>
    <product-list-item v-for="(item, index) in food" :key="item.id" :item="item"></product-list-item>
  </ul>
</template>

<script>
import { drinks, food } from '../../utils/mockdata'

export default {
  name: 'ProductList',
  mounted () {
    this.sizes.mainOffset = this.$el.offsetTop || 0
    this.sizes.mainScrollTop = this.$el.scrollTop || 0
    this.sizes.drinkTitle = this.$refs.drinktitle.offsetTop || 0
    this.sizes.foodtitle = this.$refs.foodtitle.offsetTop || 0
  },
  data () {
    return {
      drinks,
      food,
      sizes: {}
    }
  },
  computed: {},
  beforeDestroy () {
    // TODO: remove listeners scroll
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./list";
</style>
