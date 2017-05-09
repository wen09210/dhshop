import types from './types'

export default {
  [types.IncreaseProduct] (state, {itemShow, itemSize}) {
    console.log(itemShow)
    console.log(itemSize)
    itemShow.totalAmt = itemShow.SalePrice * itemSize
    state.shoppingCartItem.push({
      prodID: itemShow.ProdID,
      itemNo: itemShow.ItemNo,
      name: itemShow.ProdName,
      style: itemShow.ItemName,
      unitPrice: itemShow.SalePrice,
      count: itemSize,
      totalAmt: itemShow.totalAmt
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
