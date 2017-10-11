import types from './types'
import axios from 'axios'
import { ecpost } from '../extension/ecpost'
import { noty } from '../extension/AlertDialog'
import router from '../router'
export default {
  // 控制Loading
  [types.SetLoading]({ commit }, setting) {
    commit(types.SetLoading, setting)
  },
  // 商品加入購物車
  [types.IncreaseProduct]({ commit }, { itemShow, itemSize, prodType }) {
    commit(types.IncreaseProduct, { itemShow, itemSize, prodType })
  },
  // 加購商品加入購物車
  [types.IncreaseAddProduct]({ commit }, item) {
    commit(types.IncreaseAddProduct, item)
  },
  // 購物車商品移除
  [types.ReduceProduct]({ state, commit }, reduceNo) {
    commit(types.ReduceProduct, reduceNo)
  },
  [types.ClearShoppingCartItem]({ commit }) {
    commit(types.ClearShoppingCartItem)
  },
  // 購物車商品 + 數量
  [types.addCartCount]({ commit }, item) {
    commit(types.addCartCount, item)
  },
  // 購物車商品 - 數量
  [types.minusCartCount]({ commit }, item) {
    commit(types.minusCartCount, item)
  },
  // 購物車商品 key 數量
  [types.keyNumCartCount]({ commit }, { item, count }) {
    commit(types.keyNumCartCount, { item, count })
  },
  // 送出訂單(綠界or貨到付款)
  [types.GetMacValue]({ state }, { $Spin, BuyerDetail }) {
    // loading 畫面
    $Spin.show()
    BuyerDetail.listItem = state.shoppingCartItem
    console.log(BuyerDetail)
    console.log(state.LoginInfo.JWTAuthorization)
    // 貨到付款
    if (BuyerDetail.PayType === '5') {
      axios.post(`/api/Ecpay/PosttoCashonDel`, BuyerDetail, {
        headers: {
          'Authorization': state.LoginInfo.JWTAuthorization
        }
      }).then((response) => {
        console.log(response.data)
        if (response.data.statu === 'err') {
          noty.ShowAlert(response.data.msg, 'warning')
          // loading 畫面 end
          $Spin.hide()
          return false
        }
        noty.ShowAlert(response.data.msg, 'success')
        // loading 畫面 end
        $Spin.hide()
        router.push({
          name: 'cartPayOK'
        })
      })
      .catch((r) => {
        console.log(r)
      })
    } else {
      // 信用卡 + 匯款
      axios.post(`/api/Ecpay/PosttoGetMacValue`, BuyerDetail, {
        headers: {
          'Authorization': state.LoginInfo.JWTAuthorization
        }
      }).then(function(response) {
        console.log(response.data)
        if (response.data.statu === 'err') {
          noty.ShowAlert(response.data.msg, 'warning')
          // loading 畫面 end
          $Spin.hide()
          return false
        }
        ecpost('https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V4?', response.data, 'POST')
      })
      .catch(function(r) {
        console.log(r)
      })
    }
  },
  // 取得計算後總價
  [types.PostGetTotalAmt]({ commit, state }) {
    let BuyerDetail = {}
    BuyerDetail.listItem = state.shoppingCartItem
    BuyerDetail.CouponCode = state.CouponCode
    axios.post(`/api/Ecpay/PostGetTotalAmt?`, BuyerDetail)
      .then((response) => {
        console.log(response)
        var showAmt = response.data.data
        commit(types.PostGetTotalAmt, showAmt)
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  // 存入優惠代碼
  [types.SetCouponCode]({ commit }, couponCode) {
    commit(types.SetCouponCode, couponCode)
  },
  [types.PostLogin]({ commit }, MemberAccount) {
    console.log(MemberAccount)
    axios.post('/api/MemberAccount/Login', MemberAccount)
      .then((response) => {
        console.log(response.data)
        if (response.data.statu === 'err') {
          noty.ShowAlert(response.data.msg, 'warning')
          return false
        }
        noty.ShowAlert('登入成功，dHshop歡迎您', 'success')
        commit(types.PostLogin, response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // 第三方登入
  [types.PostAnoyLogin]({ commit }) {
    axios.post('/api/MemberAccount/AnonymousLogin')
      .then((response) => {
        console.log(response.data)
        if (response.data.statu === 'err') {
          noty.ShowAlert(response.data.msg, 'warning')
          return false
        }
        noty.ShowAlert('dHshop歡迎您', 'success')
        commit(types.PostAnoyLogin, response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // 登出
  [types.LoginOut]({ commit }) {
    commit(types.LoginOut)
  },
  [types.PostRegister]({ commit }, MemberAccount) {
    console.log(MemberAccount)
    axios.post('/api/MemberAccount/Register', MemberAccount)
      .then((response) => {
        console.log(response.data)
        if (response.data.statu === 'err') {
          noty.ShowAlert(response.data.msg, 'warning')
        }
        commit(types.PostRegister, response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  [types.SetLoginModal]({ commit }, setvalue) {
    commit(types.SetLoginModal, setvalue)
  },
  // 購物車步驟條
  [types.SetCartStepBar]({ commit }, CartStep) {
    commit(types.SetCartStepBar, CartStep)
  },
  // 購物車儲存使用者資料
  [types.SetBuyerDetail]({ commit }, BuyerDetail) {
    commit(types.SetBuyerDetail, BuyerDetail)
  }
}
