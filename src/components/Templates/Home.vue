<template>
  <div class="Home">
    <top-nav></top-nav>
    <price-bar></price-bar>
    <router-view class="content"></router-view>

    <tab-nav></tab-nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../styles/vars";
  .Home{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

    .content{
      position: relative;
      flex: 0 1 auto;
      max-height: calc(100vh - 290px);
      overflow-y: scroll;
    }
  }
</style>
