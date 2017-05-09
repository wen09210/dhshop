import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'
// import { GetKey } from './store/test'
// axios.post(`http://localhost:53912/api/Ecpay/post/1`, {'MerchantID': '1234'})
// axios({
//   method: 'post',
//   url: `http://localhost:53912/api/Ecpay/post/1`,
//   data: {
//     MerchantID: '2000132',
//     MerchantTradeNo: 'skl00003112',
//     MerchantTradeDate: '2017/05/02 22:55:15',
//     PaymentType: 'aio',
//     TotalAmount: '1000',
//     TradeDesc: 'SKL',
//     ItemName: 'cellPhone',
//     ReturnURL: 'https://ecpay20170417.azurewebsites.net/Home/PayOK',
//     OrderResultURL: 'https://ecpay20170417.azurewebsites.net/Home/PayComplete',
//     ChoosePayment: 'ATM',
//     ChooseSubPayment: 'TAISHIN',
//     CheckMacValue: '691CB79C692D3E0596C8227E122202199689F26DC805423C82A5CBCE18EC8EFC',
//     EncryptType: '1',
//     ExpireDate: '4',
//     PaymentInfoURL: 'http://localhost:56483/Home/ServerGetAtm',
//     ClientRedirectURL: 'http://localhost:56483/Home/ClientGetAtm'
//   }
// }).then(val => console.log(val))

// Promise.resolve(GetKey())
// .then((value) => {
//   setTimeout(() => {
//     console.log(value)
//     return value
//   }, 3000)
// }).then((value) => {
//   setTimeout(() => {
//     console.log(value)
//     return value
//   }, 3000)
// }).catch((err) => console.log(err.message))

Vue.config.productionTip = false

Vue.filter('test', (val) => {
  return `${val} 元`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
