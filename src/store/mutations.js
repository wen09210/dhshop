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
    let sameProd = false
    state.shoppingCartItem.forEach(function (el) {
      if (el.prodID === itemShow.ProdID &&
        el.itemNo === itemShow.ItemNo &&
        el.prodType === prodType) {
        el.count += parseInt(itemSize)
        el.totalAmt = el.count * el.unitPrice
        sameProd = true
      }
    })
    if (sameProd === false) {
      itemShow.totalAmt = itemShow.SalePrice * parseInt(itemSize)
      let cartNo = Lockr.get('cartNo')
      state.shoppingCartItem.push({
        no: cartNo++,
        prodID: itemShow.ProdID,
        itemNo: itemShow.ItemNo,
        name: itemShow.ProdName,
        style: itemShow.ItemName,
        unitPrice: parseInt(itemShow.SalePrice),
        count: parseInt(itemSize),
        totalAmt: parseInt(itemShow.totalAmt),
        unit: itemShow.Unit,
        prodType: prodType
      })
      Lockr.set('cartNo', cartNo)
    }
    Lockr.set('shoppingCartItem', state.shoppingCartItem)
    noty.ShowAlert('恭喜你! 商品已成功加入購物車囉!', 'success')
  },
  [types.IncreaseAddProduct](state, item) {
    console.log(item)
    let sameProd = false
    state.shoppingCartItem.forEach(function (el) {
      if (el.prodID === item.ProdID &&
        el.itemNo === item.ItemNo &&
        el.prodType === '2') {
        sameProd = true
        noty.ShowAlert('提醒您! 購物車已經有相同加購商品囉，請直接於「數量」上添加即可。', 'warning')
      }
    })
    if (sameProd === false) {
      let cartNo = Lockr.get('cartNo')
      state.shoppingCartItem.push({
        no: cartNo++,
        prodID: item.ProdID,
        itemNo: item.ItemNo,
        name: item.ProdName,
        style: item.ItemName,
        unitPrice: item.AddPrice,
        count: item.quentity,
        totalAmt: item.quentity * item.AddPrice,
        unit: item.Unit,
        prodType: '2',
        MainProdName: item.MainProdName
      })
      Lockr.set('cartNo', cartNo)
      Lockr.set('shoppingCartItem', state.shoppingCartItem)
      noty.ShowAlert('恭喜你! <br>加購商品已成功加入購物車囉!', 'success')
    }
  },
  [types.ReduceProduct](state, reduceNo) {
    console.log(reduceNo)
    for (var i = 0; i < state.shoppingCartItem.length; i++) {
      console.log(state.shoppingCartItem[i])
      for (var s = 0; s < reduceNo.length; s++) {
        if (state.shoppingCartItem[i].no === reduceNo[s]) {
          state.shoppingCartItem.splice(i, 1)
        }
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
  [types.keyNumCartCount](state, {
    item,
    count
  }) {
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
    state.openLoginModal = false
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
