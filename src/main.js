import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

axios({
  method: 'get',
  url: `http://localhost:53912/api/Member`
}).then(val => console.log(val))

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
  components: { App }
})
