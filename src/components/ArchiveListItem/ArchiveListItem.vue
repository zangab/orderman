<template>
  <li class="ArchiveListItem" @click="open">
    <div class="head">
      <strong>#{{ item.id|orderNumber }} <i>T: {{ item.table }}</i></strong>
      <span :class="['status', { 'is-done': item.completed.drinks, 'is-in-prep': item.completed.drinks == false } ]" title="Getränke erledigt!"></span>
      <span :class="['status', { 'is-done': item.completed.food, 'is-in-prep': item.completed.food == false } ]" title="Essen erledigt!"></span>
    </div>
    <div class="main" v-show="isOpen">
      <ul>
        <li
          v-for="listing in item.products"
          :key="listing.id"
          track-by="listing.id">
          <span class="title">{{ listing.count }}x {{ getProductName(listing.id) }}</span>
          <span class="price">€ {{ listing.count * listing.price | currency }}</span>
        </li>
      </ul>
    </div>
    <div class="foot">
      <span>Total</span>
      <strong>€ {{ item.total|currency }}</strong>
    </div>
  </li>
</template>

<script>
/* eslint-disable no-unused-vars */
import Order from '../../utils/order'
import { drinks, food } from '../../utils/mockdata'

export default {
  name: 'ArchiveListItem',
  props: [ 'item' ],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    open () {
      this.isOpen = !this.isOpen
    },
    getProductName (id) {
      return drinks.hasOwnProperty(id) ? drinks[id].name : food[id].name
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./item";
</style>
