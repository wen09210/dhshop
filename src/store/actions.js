import types from './types'
import axios from 'axios'
import {
  ecpost
} from './ecpost'
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
  [types.ClearProductList]({commit}) {
    commit(types.ClearProductList)
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
        // state.ECPayParm.CheckMacValue = r.data
      console.log(state.ECPayParm.CheckMacValue)
      ecpost('https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V4?', response.data, 'POST')
    })
      .catch(function (r) {
        console.log(r)
      })
  }
}

