<template>
  <div :class="['PriceBar', {'is-blue': isBlue}]">
    <strong>€ {{ sum | currency }}</strong>
    <small>Bestellsumme</small>
  </div>
</template>

<script>
import Order from '../../utils/order'
import EventBus from '../../utils/eventbus'

export default {
  name: 'PriceBar',
  mounted () {
    EventBus.$on('updatedOrder', (payload) => {
      this.sum = Order.getTotalAmount()
    })
    EventBus.$on('resetOrder', () => {
      this.sum = Order.getTotalAmount()
    })
  },
  data () {
    return {
      sum: Order.getTotalAmount(),
      isBlue: false
    }
  },
  watch: {
    '$route': function (newVal, oldVal) {
      this.isBlue = this.$route.meta.hasOwnProperty('blueCol') ? this.$route.meta.blueCol : false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./price";
</style>
