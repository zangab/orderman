import EventBus from './eventbus'
import { drinks, food } from './mockdata'

const defaultOrder = {
  table: 0,
  completed: {
    drinks: false,
    food: false
  },
  total: 0.00,
  waiterId: 0,
  products: {},
  updated_at: null,
  created_at: null
}

let orderList = Object.assign({}, defaultOrder)

function get () {
  return orderList
}

function add (product) {
  if (orderList.products.hasOwnProperty(product.id)) orderList.products[product.id].count += 1
  else {
    orderList.products[product.id] = {
      count: 1
    }
  }
  orderList.total = getTotalAmount()
  EventBus.$emit('updatedOrder', orderList)
}

function remove (product) {
  if (orderList.products.hasOwnProperty(product.id)) {
    if (orderList.products[product.id].count > 1) orderList.products[product.id].count -= 1
    else delete orderList.products[product.id]

    orderList.total = getTotalAmount()
    EventBus.$emit('updatedOrder', orderList)
  }
}

function getTotalAmount () {
  let sum = 0
  for (let prop in orderList.products) {
    const prod = (drinks.hasOwnProperty(prop) ? drinks[prop] : food[prop])
    sum += (orderList.products[prop].count * prod.price)
  }
  return sum
}

function reset () {
  orderList = Object.assign({}, defaultOrder)
  orderList.products = {}
  EventBus.$emit('updatedOrder', orderList)
}

function cashOut (table) {
  orderList.table = table
  reset()
}

export default {
  get,
  add,
  remove,
  reset,
  cashOut,
  getTotalAmount
}
