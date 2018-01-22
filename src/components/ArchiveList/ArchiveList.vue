<template>
  <ul class="ArchiveList">
    <li class="sectiontitle" :style="{'position': 'fixed', 'top': '71px'}">Alle Bestellungen</li>
    <archive-list-item
      v-for="item in history"
      :key="item.id"
      :item="item"
      track-by="item.id"
    ></archive-list-item>
  </ul>
</template>

<script>
/* eslint-disable no-unused-vars */
import Order from '../../utils/order'
import { history } from '../../utils/mockdata'

export default {
  name: 'ArchiveList',
  data () {
    return {
      history
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./list";
</style>
