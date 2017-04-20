import types from './types'

export default {
  [types.IncreaseProduct] ({ commit }, item) {
    commit(types.IncreaseProduct, item)
  },
  [types.ReduceProduct] ({ commit }, item) {
    commit(types.ReduceProduct, item)
  },
  [types.ClearShoppingCartItem] ({ commit }) {
    console.log('ClearShoppingCartItem')
    commit(types.ClearShoppingCartItem)
  },
  [types.ClearProductList] ({ commit }) {
    commit(types.ClearProductList)
  }
}
