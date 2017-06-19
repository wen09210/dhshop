import types from './types'
import axios from 'axios'
import { ecpost } from './ecpost'
import { noty } from '../../src/assets/AlertDialog'
export default {
  [types.IncreaseProduct]({commit}, {itemShow, itemSize}) {
    commit(types.IncreaseProduct, {itemShow, itemSize})
  },
  [types.IncreaseAddProduct]({commit}, item) {
    commit(types.IncreaseAddProduct, item)
  },
  [types.ReduceProduct]({commit}, item) {
    commit(types.ReduceProduct, item)
  },
  [types.ClearShoppingCartItem]({commit}) {
    commit(types.ClearShoppingCartItem)
  },
  [types.GetMacValue]({state}, BuyerDetail) {
    BuyerDetail.listItem = state.shoppingCartItem
    console.log(BuyerDetail)
    console.log(state.LoginInfo.JWTAuthorization)
    // ATM
    if (BuyerDetail.PayType === '3') {
      axios.post(`/api/Ecpay/PosttoCashonDel`, BuyerDetail, {
        headers: {
          'Authorization': state.LoginInfo.JWTAuthorization
        }
      }).then(function (response) {
        console.log(response.data)
        if (response.data.statu === 'err') {
          noty.ShowAlert(response.data.msg, 'warning')
          return false
        }
        noty.ShowAlert(response.data.msg, 'success')
      })
        .catch(function (r) {
          console.log(r)
        })
    } else {
      // 信用卡 + 匯款
      axios.post(`/api/Ecpay/PosttoGetMacValue`, BuyerDetail, {
        headers: {
          'Authorization': state.LoginInfo.JWTAuthorization
        }
      }).then(function (response) {
        console.log(response.data)
        if (response.data.statu === 'err') {
          noty.ShowAlert(response.data.msg, 'warning')
          return false
        }
        ecpost('https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V4?', response.data, 'POST')
      })
        .catch(function (r) {
          console.log(r)
        })
    }
  },
  [types.PostGetTotalAmt]({ commit, state }) {
    axios.post(`/api/Ecpay/PostGetTotalAmt?`, state.shoppingCartItem)
        .then((response) => {
          console.log(response)
          if (response.data.statu === 'err') {
            noty.ShowAlert(response.data.msg, 'warning')
            return false
          }
          var showAmt = response.data.data
          commit(types.PostGetTotalAmt, showAmt)
        })
        .catch(function (error) {
          console.log(error)
        })
  },
  [types.PostLogin]({commit}, MemberAccount) {
    console.log(MemberAccount)
    axios.post('/api/MemberAccount/Login', MemberAccount)
          .then((response) => {
            console.log(response.data)
            if (response.data.statu === 'err') {
              noty.ShowAlert(response.data.msg, 'warning')
              return false
            }
            commit(types.PostLogin, response.data.data)
          })
          .catch((error) => {
            console.log(error)
          })
  },
  [types.PostAnoyLogin]({ commit }) {
    axios.post('/api/MemberAccount/AnonymousLogin')
          .then((response) => {
            console.log(response.data)
            commit(types.PostAnoyLogin, response.data.data)
          })
          .catch((error) => {
            console.log(error)
          })
  },
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
  }
}

