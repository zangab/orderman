<template>
  <span>productItem</span>
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
