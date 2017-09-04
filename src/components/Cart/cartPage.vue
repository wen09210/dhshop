<template>
  <div>

    <template v-if="showCart">
      <!-- 購物車 -->
      <cartPay></cartPay>
      
      <!-- 下一步按鈕 -->
      <template v-if="Object.keys(GetShoppingCartItem).length !== 0">
      <div class=container>
        <div class="btntoDetail col-xs-12  col-md-offset-3 col-md-6">
          <button type="button" @click="goBuyerDetail" class="btn btn-info btn-lg btn-block">下一步 結帳去!</button>
        </div>
      </div>
      <!-- 加購 -->      
      <cartAddProd></cartAddProd>
      </template>
      <!-- 登入 -->
      <mebLogin></mebLogin>

    </template>

  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import Lockr from 'lockr'
  import cartPay from './cartPay'
  import cartAddProd from './cartAddProd'
  import mebLogin from '../Member/mebLogin.vue'
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {
    components: {
      mebLogin,
      cartPay,
      cartAddProd
    },
    data() {
      return {
        showCart: true
      }
    },
    computed: {
      ...mapGetters([
        'GetLoginInfo',
        'GetLoginModal',
        'GetShoppingCartItem'
      ])
      // showDetail() {
      //   if (Object.keys(this.GetLoginInfo).length !== 0) {
      //     this.showBuyerDetail = true
      //   } else {
      //     this.showBuyerDetail = false
      //   }
      //   return this.showBuyerDetail
      // }
    },
    methods: {
      ...mapActions([
        'PostGetTotalAmt',
        'SetLoginModal',
        'PostAnoyLogin'
      ]),
      goBuyerDetail() {
        if (Object.keys(this.GetLoginInfo).length === 0) {
          this.SetLoginModal(true)
        } else {
          this.$router.push({
            name: 'cartBuyerDetail'
          })
        }
        this.PostGetTotalAmt()
      },
      testcookie() {
        alert(Cookies.getJSON('testCart'))
        alert(Cookies.getJSON('loginInfo'))
        alert(Lockr.get('shoppingCartItem'))
      }
    }
  }

</script>
<style>
  .btntoDetail {
    margin-top: 20px;
    margin-bottom: 50px;
  }

</style>
