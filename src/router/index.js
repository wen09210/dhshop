import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/Main/mainPage'
import prodPage from '../components/Product/prodPage'
import login from '../components/Member/mebLogin'
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
      path: '/product',
      name: 'product',
      component: prodPage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }

  ]
})
