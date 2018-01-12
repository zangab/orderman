<template>
  <nav class="TabNav">
    <router-link :to="{ name: 'kellner-produkte' }" class="link">
      <span class="fi flaticon-cooker"></span>
    </router-link>
    <router-link :to="{ name: 'kellner-archiv' }" class="link">
      <span class="fi flaticon-archive"></span>
    </router-link>
    <button class="link button is-red" @click="resetOrder">
      <span class="fi flaticon-trash"></span>
    </button>
    <button :class="['link button is-grey', {'is-allowed': isFilled}]" @click="toOrderList">
      <span class="fi flaticon-money"></span>
    </button>
  </nav>
</template>

<script>
import Order from '../../utils/order'
import EventBus from '../../utils/eventbus'

export default {
  name: 'TabNav',
  mounted () {
    this.isFilled = Order.getTotalAmount() > 0
    EventBus.$on('updatedOrder', (payload) => {
      this.isFilled = Order.getTotalAmount() > 0
    })
    EventBus.$on('resetOrder', (payload) => {
      this.isFilled = false
    })
  },
  data () {
    return {
      isFilled: false
    }
  },
  methods: {
    resetOrder () {
      // TODO: modal confirm
      console.log('reset ...')
      Order.reset()
    },
    toOrderList () {
      if (Order.getTotalAmount() > 0) this.$router.push({ name: 'kellner-bestellung' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./tabnav";
</style>
