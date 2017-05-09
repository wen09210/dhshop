import types from './types'
import axios from 'axios'
import {ecpost} from './ecpost'
export default {
  [types.IncreaseProduct]({
    commit
  }, {
    itemShow,
    itemSize
  }) {
    commit(types.IncreaseProduct, {
      itemShow,
      itemSize
    })
  },
  [types.ReduceProduct]({
    commit
  }, item) {
    commit(types.ReduceProduct, item)
  },
  [types.ClearShoppingCartItem]({
    commit
  }) {
    commit(types.ClearShoppingCartItem)
  },
  [types.ClearProductList]({
    commit
  }) {
    commit(types.ClearProductList)
  },
  [types.GetMacValue]({state}) {
    axios({
      method: 'post',
      url: `/api/Ecpay/Post`,
      data: state.shoppingCartItem
    }).then(function (r) {
      state.ECPayParm.CheckMacValue = r.data
      console.log(state.ECPayParm.CheckMacValue)
      ecpost('https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V4?', state.ECPayParm, 'POST')
    })
    .catch(function (r) {
      console.log(r)
    })
  }
}
  /*
      data: {
        MerchantID: '2000132',
        MerchantTradeNo: 'skl009999ss001',
        MerchantTradeDate: '2017/05/03 22:55:15',
        PaymentType: 'aio',
        TotalAmount: '1000',
        TradeDesc: 'SKL',
        ItemName: 'cellPhone',
        ReturnURL: 'https://ecpay20170417.azurewebsites.net/Home/PayOK',
        OrderResultURL: 'https://ecpay20170417.azurewebsites.net/Home/PayComplete',
        ChoosePayment: 'ATM',
        ChooseSubPayment: 'TAISHIN',
        CheckMacValue: 'C9485A72384C391EB32BBE618BF041AE8A0D23B2B3D686C75F72CD8D5CFE239B',
        EncryptType: '1',
        ExpireDate: '4',
        PaymentInfoURL: 'http://localhost:56483/Home/ServerGetAtm',
        ClientRedirectURL: 'http://localhost:56483/Home/ClientGetAtm'
      },
  */

