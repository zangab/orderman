<template>
  <nav class="TabNav">
    <router-link :to="{ name: 'kellner-produkte' }" class="link">
      <span class="fi flaticon-cooker"></span>
    </router-link>
    <router-link :to="{ name: 'login' }" class="link">
      <span class="fi flaticon-archive"></span>
    </router-link>
    <router-link :to="{ name: 'login' }" class="link">
      <span class="fi flaticon-trash"></span>
    </router-link>
    <router-link :to="{ name: 'login' }" class="link">
      <span class="fi flaticon-right-arrow"></span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'TabNav',
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
  @import "./tabnav";
</style>
