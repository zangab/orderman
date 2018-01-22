<template>
  <div class="Cashout">
    <h3>Bestellung abschließen</h3>
    <div class="list">
      <div class="child">
        <label>Tischnummer</label>
        <!-- <v-select v-model="tableNum" :options="options" :class="['table-select', { 'has-error': tableNumError }]" id="selection"></v-select> -->
        <input type="text" @click="openSelect">
      </div>
      <div class="child">
        <button class="button" @click="checkout">
          <i class="fi flaticon-tick"></i>
        </button>
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
      tableNum: '101',
      tableNumError: false,
      options: [
        '100', '101', '102', '103', '104', '105',
        '200', '201', '202', '203', '204', '205',
        '300', '301', '302', '303', '304', '305'
      ]
    }
  },
  methods: {
    checkout () {
      if (this.tableNum !== null) {
        this.tableNumError = false
        this.$swal({
          title: 'Bestellung abschicken?',
          text: 'Ist die Bestellung auf Tischnummer #' + this.tableNum + ' soweit richtig?',
          type: 'question',
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Abbrechen',
          confirmButtonColor: '#03B4D9',
          showLoaderOnConfirm: true,
          allowOutsideClick: () => !this.$swal.isLoading(),
          preConfirm: () => {
            return new Promise((resolve) => {
              // TODO: api request
            })
          }
        }).then((res) => {
          if (res.value) {
            this.$swal(
              'Erfolgreich',
              'Die Bestellung wurde erfolgreich abgeschickt!',
              'success'
            )
          }
        })
      } else {
        // is null
        this.tableNumError = true
      }
    },
    openSelect () {
      this.$swal({
        title: 'Tischnummer',
        input: 'select',
        inputOptions: {
          '101': '101',
          '201': '201',
          '301': '301'
        },
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Abbrechen',
        confirmButtonColor: '#03B4D9'
      }).then((res) => {
        if (res.value) {

        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  @import "./cashout";
</style>
