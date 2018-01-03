<template>
  <ul class="ProductList">
    <product-list-item></product-list-item>
  </ul>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
  .ProductList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
