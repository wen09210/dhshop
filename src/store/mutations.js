import types from './types'

export default {
  [types.IncreaseProduct] (state, {item, itemSize}) {
    console.log(item)
    console.log(itemSize)
    item.count = itemSize
    item.totalAmt = item.unitPrice * itemSize
    state.shoppingCartItem.push({
      name: item.name,
      unitPrice: item.unitPrice,
      count: item.count,
      totalAmt: item.totalAmt
    })
    console.log(state.shoppingCartItem)
  },
  [types.ReduceProduct] (state, item) {
    state.shoppingCartItem.pop(item)
  },
  [types.ClearShoppingCartItem] (state) {
    state.shoppingCartItem = []
    console.log(state.shoppingCartItem)
  },
  [types.ClearProductList] (state) {
    state.productList = []
  }
}
