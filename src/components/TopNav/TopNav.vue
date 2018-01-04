<template>
  <div class="TopNav">
    <router-link :to="{ name: 'login' }" class="left link">
      <span class="fi flaticon-building"></span>
    </router-link>

    <h3 class="title">
      Kirchtiman
    </h3>

    <router-link :to="{ name: 'login' }" class="right link">
      <span class="fi flaticon-logout"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
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
  @import "./topnav";
</style>
