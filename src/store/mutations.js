import types from './types'

export default {
  [types.IncreaseProduct] (state, {itemShow, itemSize}) {
    itemShow.totalAmt = itemShow.SalePrice * itemSize
    state.cartProdID += `${itemShow.ProdID},`
    console.log('test', state.cartProdID)
    state.shoppingCartItem.push({
      prodID: itemShow.ProdID,
      itemNo: itemShow.ItemNo,
      name: itemShow.ProdName,
      style: itemShow.ItemName,
      unitPrice: itemShow.SalePrice,
      count: itemSize,
      totalAmt: itemShow.totalAmt
    })
  },
  [types.IncreaseAddProduct](state, item) {
    state.shoppingCartItem.push({
      prodID: item.ProdID,
      itemNo: item.ItemNo,
      name: item.ProdName,
      style: item.ItemName,
      unitPrice: item.AddPrice,
      count: item.quentity,
      totalAmt: item.quentity * item.AddPrice
    })
  },
  [types.ReduceProduct] (state, item) {
    state.shoppingCartItem.pop(item)
  },
  [types.ClearShoppingCartItem] (state) {
    state.shoppingCartItem = []
  },
  [types.ClearProductList] (state) {
    state.productList = []
  }
}
