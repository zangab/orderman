<template>
  <div class="Home">
    <top-nav></top-nav>
    <price-bar></price-bar>
    <router-view :class="['content', {'is-small': contentSmall}]"></router-view>
    <tab-nav></tab-nav>
  </div>
</template>

<script>
export default {
  name: 'KellnerHome',
  data () {
    return {
      contentSmall: false
    }
  },
  watch: {
    '$route': function (newVal, oldVal) {
      this.contentSmall = this.$route.meta.hasOwnProperty('blueCol') ? this.$route.meta.blueCol : false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../styles/vars";
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

      &.is-small{
        min-height: calc(100vh - 220px); //220
        max-height: calc(100vh - 219px); //219
        align-items: flex-start;
      }
    }
  }
</style>
