import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/Main/mainPage'
import prodPage from '../components/Product/prodPage'
import login from '../components/Member/mebLogin'
import member from '../components/Member/mebPage.vue'
import cart from '..//components/Cart/cartPage.vue'
import cartPay from '..//components/Cart/cartPay.vue'
import axios from 'axios'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainPage
    },
    {
      path: '/product/:prodID',
      name: 'product',
      component: prodPage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      beforeEnter: (to, from, next) => {
        alert(1)
        axios({
          method: 'get',
          url: '/api/Ecpay/Get'
        }).then(val => {
          alert(val)
        })
        next()
      }
    },
    {
      path: '/cartPay',
      component: cartPay
    }
  ]
})
