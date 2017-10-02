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

Vue.use(iView, { zhLocale })
Vue.config.productionTip = false
Vue.use(extension)
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
