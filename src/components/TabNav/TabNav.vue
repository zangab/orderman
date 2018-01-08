<template>
  <nav class="TabNav">
    <router-link :to="{ name: 'kellner-produkte' }" class="link">
      <span class="fi flaticon-cooker"></span>
    </router-link>
    <router-link :to="{ name: 'kellner-archiv' }" class="link">
      <span class="fi flaticon-archive"></span>
    </router-link>
    <button class="link button" @click="resetOrder">
      <span class="fi flaticon-trash"></span>
    </button>
    <router-link :to="{ name: 'home' }" class="link">
      <span class="fi flaticon-right-arrow"></span>
    </router-link>
  </nav>
</template>

<script>
import Order from '../../utils/order'

export default {
  name: 'TabNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    resetOrder () {
      // TODO: modal confirm
      console.log('reset ...')
      Order.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./tabnav";
</style>
