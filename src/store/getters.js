import types from './types'

export default {
  [types.GetShoppingCartItem]: (state) => state.shoppingCartItem,
  [types.GetshowAmtData]: (state) => state.showAmtData
}
