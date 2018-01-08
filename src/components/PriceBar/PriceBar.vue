<template>
  <div class="PriceBar">
    <strong>€ {{ data | currency }}</strong>
    <small>Bestellsumme</small>
  </div>
</template>

<script>
import Order from '../../utils/order'
import EventBus from '../../utils/eventbus'

export default {
  name: 'PriceBar',
  mounted () {
    this.data = Order.getTotalAmount()
    EventBus.$on('updatedOrder', (payload) => {
      this.data = payload.total
    })
  },
  data () {
    return {
      data: 0
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./price";
</style>
