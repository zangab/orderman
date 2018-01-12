<template>
  <li class="ProductListItem" :style="{'background-image': 'url(' + item.img + ')'}" @click="update">
    <span class="badge" v-show="count">{{ count }}</span>
    <strong class="name">{{ item.name }}</strong>
  </li>
</template>

<script>
import Order from '../../utils/order'

export default {
  name: 'ProductListItem',
  props: [ 'item', 'count' ],
  mounted () {},
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
          this.data += 1
          this.clicks = 0
          Order.add(this.item)
        }, this.delay)
      } else {
        clearTimeout(this.timer)
        this.data = Math.max(0, this.data - 1)
        this.clicks = 0
        Order.remove(this.item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./item";
</style>
