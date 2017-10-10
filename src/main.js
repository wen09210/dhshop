import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import filters from './filters'
import extension from './components/extension'
import Lockr from 'lockr'
import iView from 'iview'
import zhLocale from 'iview/dist/locale/zh-TW'
import { $decodeCookies } from './extension/DecodeCookies'
import { noty } from './extension/AlertDialog'
Vue.use(iView, { zhLocale })
Vue.config.productionTip = false
Vue.use(extension)

// Cookie擴展Decode
Vue.prototype.$decodeCookies = $decodeCookies
// 通知Alert
Vue.prototype.$noty = noty

// 購物車編號
let _cartno = Lockr.get('cartNo')
if (typeof _cartno === 'undefined') {
  Lockr.set('cartNo', 0)
}
// filter
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

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
