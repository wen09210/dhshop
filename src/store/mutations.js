import types from './types'

export default {
  [types.IncreaseProduct] (state, item) {
    state.shoppingCartItem.push(item)
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
