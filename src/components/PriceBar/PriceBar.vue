<template>
  <div class="PriceBar">
    <strong>€ 14.50</strong>
    <small>Bestellsumme</small>
  </div>
</template>

<script>
export default {
  name: 'PriceBar',
  data () {
    return {
      data: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./price";
</style>
