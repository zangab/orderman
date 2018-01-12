<template>
  <li class="OrderListItem" @click="update">
    <span class="badge" :style="{'background-image': 'url(' + product.img + ')'}" >
      <i>{{ count }}</i>
    </span>
    <span class="name">{{ product.name }}</span>
    <strong class="price">€ {{ count * product.price | currency }}</strong>
  </li>
</template>

<script>
/* eslint-disable no-unused-vars */
import Order from '../../utils/order'

export default {
  name: 'OrderListItem',
  props: [ 'product', 'count' ],
  data () {
    return {
      delay: 300,
      clicks: 0,
      timer: null
    }
  },
  methods: {
    update () {
      this.clicks++
      if (this.clicks === 1) {
        this.timer = setTimeout(() => {
          this.clicks = 0
          Order.add(this.product)
        }, this.delay)
      } else {
        clearTimeout(this.timer)
        this.clicks = 0
        Order.remove(this.product)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./item";
</style>
