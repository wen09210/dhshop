import types from './types'

export default {
  [types.IncreaseProduct] (state, {itemShow, itemSize}) {
    itemShow.totalAmt = itemShow.SalePrice * itemSize
    let cartNo = state.cartNo++
    state.shoppingCartItem.push({
      no: cartNo,
      prodID: itemShow.ProdID,
      itemNo: itemShow.ItemNo,
      name: itemShow.ProdName,
      style: itemShow.ItemName,
      unitPrice: itemShow.SalePrice,
      count: itemSize,
      totalAmt: itemShow.totalAmt,
      prodType: '0'
    })
  },
  [types.IncreaseAddProduct](state, item) {
    let cartNo = state.cartNo++
    state.shoppingCartItem.push({
      no: cartNo,
      prodID: item.ProdID,
      itemNo: item.ItemNo,
      name: item.ProdName,
      style: item.ItemName,
      unitPrice: item.AddPrice,
      count: item.quentity,
      totalAmt: item.quentity * item.AddPrice,
      prodType: '1'
    })
  },
  [types.ReduceProduct](state, item) {
    console.log(item)
    for (var i = 0; i <= state.shoppingCartItem.length; i++) {
      console.log(state.shoppingCartItem[i])
      if (state.shoppingCartItem[i].no === item.no) {
        state.shoppingCartItem.splice(i, 1)
        break
      }
    }
  },
  [types.ClearShoppingCartItem] (state) {
    state.shoppingCartItem = []
  },
  [types.ClearProductList] (state) {
    state.productList = []
  },
  [types.PostGetTotalAmt](state, showAmt) {
    state.showAmtData = showAmt
  }
}
