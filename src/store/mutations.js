import types from './types'
import Cookies from 'js-cookie'
import Lockr from 'lockr'

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
    Lockr.set('shoppingCartItem', state.shoppingCartItem)
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
    Lockr.set('shoppingCartItem', state.shoppingCartItem)
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
    Lockr.set('shoppingCartItem', state.shoppingCartItem)
  },
  [types.ClearShoppingCartItem] (state) {
    state.shoppingCartItem = []
  },
  [types.PostGetTotalAmt](state, showAmt) {
    state.showAmtData = showAmt
  },
  [types.PostLogin](state, logininfo) {
    console.log(logininfo)
    state.LoginInfo = logininfo
    state.openLoginModal = false
  },
  [types.LoginOut](state) {
    state.LoginInfo = {}
    Cookies.remove('loginInfo')
  },
  [types.SetLoginModal](state, setvalue) {
    state.openLoginModal = setvalue
  }
}
