<template>
  <div class="Order">
    <order-list></order-list>
    <cash-out></cash-out>
  </div>
</template>

<script>
import Order from '../../../utils/order'

export default {
  name: 'KellnerOrder',
  beforeMount () {
    if (Order.getTotalAmount() === 0) this.$router.push({ name: 'kellner-produkte' })
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../styles/vars";
  .Order{
    color: $text-color;
  }
</style>
