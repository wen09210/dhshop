import types from './types'
import Cookies from 'js-cookie'
import Lockr from 'lockr'
import {
  noty
} from '../../src/assets/AlertDialog'

export default {
  [types.IncreaseProduct](state, {
    itemShow,
    itemSize,
    prodType
  }) {
    console.log(itemShow)
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
      unit: itemShow.Unit,
      prodType: prodType
    })
    Lockr.set('shoppingCartItem', state.shoppingCartItem)
    noty.ShowAlert('恭喜你! 商品已成功加入購物車囉!', 'success')
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
      unit: item.Unit,
      prodType: '2'
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
  [types.ReduceListProduct](state, errID) {
    for (var i = 0; i <= state.shoppingCartItem.length; i++) {
      console.log(state.shoppingCartItem[i])
      if (errID.includes(state.shoppingCartItem[i].no)) {
        state.shoppingCartItem.splice(i, 1)
        break
      }
    }
    Lockr.set('shoppingCartItem', state.shoppingCartItem)
  },
  [types.ClearShoppingCartItem](state) {
    state.shoppingCartItem = []
  },
  [types.addCartCount](state, item) {
    console.log(item)
    for (var i = 0; i < state.shoppingCartItem.length; i++) {
      if (state.shoppingCartItem[i].no === item.no) {
        let count = state.shoppingCartItem[i].count
        if (count++ < 999) {
          state.shoppingCartItem[i].count++
        }
        state.shoppingCartItem[i].totalAmt = state.shoppingCartItem[i].count * state.shoppingCartItem[i].unitPrice
        Lockr.set('shoppingCartItem', state.shoppingCartItem)
        break
      }
    }
  },
  [types.minusCartCount](state, item) {
    console.log(item)
    for (var i = 0; i < state.shoppingCartItem.length; i++) {
      if (state.shoppingCartItem[i].no === item.no) {
        let count = state.shoppingCartItem[i].count
        if (count-- > 1) {
          state.shoppingCartItem[i].count--
        }
        state.shoppingCartItem[i].totalAmt = state.shoppingCartItem[i].count * state.shoppingCartItem[i].unitPrice
        Lockr.set('shoppingCartItem', state.shoppingCartItem)
        break
      }
    }
  },
  [types.keyNumCartCount](state, { item, count }) {
    for (var i = 0; i < state.shoppingCartItem.length; i++) {
      if (state.shoppingCartItem[i].no === item.no) {
        if (count >= 1 && count <= 999) {
          state.shoppingCartItem[i].count = count
        }
        state.shoppingCartItem[i].totalAmt = state.shoppingCartItem[i].count * state.shoppingCartItem[i].unitPrice
        Lockr.set('shoppingCartItem', state.shoppingCartItem)
        break
      }
    }
  },
  [types.PostGetTotalAmt](state, showAmt) {
    state.showAmtData = showAmt
  },
  [types.PostLogin](state, logininfo) {
    console.log(logininfo)
    state.LoginInfo = logininfo
    state.openLoginModal = false
  },
  [types.PostAnoyLogin](state, logininfo) {
    console.log(logininfo)
    state.LoginInfo = logininfo
  },
  [types.LoginOut](state) {
    state.LoginInfo = {}
    Cookies.remove('loginInfo')
  },
  [types.PostRegister](state, logininfo) {
    console.log(logininfo)
    state.LoginInfo = logininfo
  },
  [types.SetLoginModal](state, setvalue) {
    state.openLoginModal = setvalue
  }
}
