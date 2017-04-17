import types from './types'

export default {
  [types.IncreaseProduct] (state, item) {
    state.shoppingCartItem.push(item)
  },
  [types.ReduceProduct] (state) {
    return state.productItem
  },
  [types.ClearShoppingCartItem] (state) {
    state.shoppingCartItem = []
    console.log(state.shoppingCartItem)
  },
  [types.ClearProductList] (state) {
    state.productList = []
  }
}
