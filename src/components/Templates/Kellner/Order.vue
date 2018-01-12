<template>
  <div class="Order">
    <order-list></order-list>
    <cash-out></cash-out>
  </div>
</template>

<script>
export default {
  name: 'KellnerOrder',
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
