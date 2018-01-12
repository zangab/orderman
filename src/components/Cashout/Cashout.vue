<template>
  <div class="Cashout">
    <h3>Bestellung abschließen</h3>
    <div class="list">
      <div class="child">
        <label>Tischnummer</label>
        <input v-model="tableNum" placeholder="0">
      </div>
      <div class="child">
        <label>&nbsp;</label>
        <button class="button">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
import Order from '../../utils/order'
import EventBus from '../../utils/eventbus'

export default {
  name: 'OrderList',
  mounted () {
    EventBus.$on('resetOrder', () => {
      this.products = this.$set(this, 'products', Order.getProducts())
      this.$router.push({ name: 'kellner-produkte' })
    })
  },
  data () {
    return {
      tableNum: 0
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./cashout";
</style>
