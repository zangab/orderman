import EventBus from './eventbus'

const defaultOrder = {
  table: 0,
  completed: {
    drinks: false,
    food: false
  },
  total: 0.00,
  waiterId: 0,
  products: [],
  updated_at: null,
  created_at: null
}

let orderList = Object.assign({}, defaultOrder)

function add (product) {
  product.inList = false
  for (let i in orderList.products) {
    const item = orderList.products[i]
    if (item.id === product.id) {
      product.inList = true
      item.count += 1
    }
    product.count = item.count
  }
  if (!product.inList) {
    orderList.products.push({
      id: product.id,
      price: product.price,
      count: 1
    })
    product.count = 1
  }
  if (orderList.products.length === 0) orderList.created_at = new Date()
  orderList.total = calcTotalAmount()

  EventBus.$emit('updatedOrder', {
    orderList,
    itemId: product.id,
    itemCount: product.count
  })
}

function remove (product) {
  for (let i in orderList.products) {
    const item = orderList.products[i]
    if (item.id === product.id) {
      if (item.count > 1) item.count -= 1
      else orderList.products.splice(i, 1)
      product.count = item.count
    }
  }
  orderList.total = calcTotalAmount()
  EventBus.$emit('updatedOrder', {
    orderList,
    itemId: product.id,
    itemCount: (orderList.products.hasOwnProperty(product.id) ? orderList.products[product.id].count : 0)
  })
}

function calcTotalAmount () {
  let sum = 0
  for (let i in orderList.products) {
    const item = orderList.products[i]
    sum += (item.count * item.price)
  }
  return sum
}

function reset () {
  orderList = Object.assign({}, defaultOrder)
  orderList.products.length = 0
  EventBus.$emit('resetOrder', orderList)
}

function cashOut (table) {
  orderList.table = table
  reset()
}

function getTotalAmount () {
  return orderList.total
}

function getProducts () {
  return orderList.products
}

export default {
  getProducts,
  add,
  remove,
  reset,
  cashOut,
  getTotalAmount
}
