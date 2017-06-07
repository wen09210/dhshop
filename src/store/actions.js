import types from './types'
import axios from 'axios'
import {ecpost} from './ecpost'
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
    axios({
      method: 'post',
      url: `/api/Ecpay/Post`,
      data: BuyerDetail
    }).then(function (response) {
      console.log(response.data)
      ecpost('https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V4?', response.data, 'POST')
    })
      .catch(function (r) {
        console.log(r)
      })
  },
  [types.PostGetTotalAmt]({ commit, state }) {
    axios.post(`/api/Ecpay/PostGetTotalAmt?`, state.shoppingCartItem)
        .then((response) => {
          console.log(response)
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
            commit(types.PostLogin, response.data.data)
          })
          .catch((error) => {
            console.log(error)
          })
  },
  [types.LoginOut]({ commit }) {
    commit(types.LoginOut)
  },
  [types.SetLoginModal]({ commit }, setvalue) {
    commit(types.SetLoginModal, setvalue)
  }
}

