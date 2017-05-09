import types from './types'

export default {
  [types.GetProductList]: (state) => state.productList,
  [types.GetProductItem]: (state) => state.productItem,
  [types.GetShoppingCartItem]: (state) => state.shoppingCartItem,
  [types.GetBuyerDetail]: (state) => state.BuyerDetail
}
