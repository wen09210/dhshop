<template>
  <div>
    <!-- 步驟條 -->
    <template>
      <div class="container">
        <div class="col-md-12 col-xs-12 stepbar">
          <Steps :current="CartStepBar">
            <Step title="購  物  車" icon="ios-cart"></Step>
            <Step title="訂購資料" icon="compose"></Step>
            <Step title="付款方式" icon="card"></Step>
            <Step title="恭喜完成" icon="checkmark-circled"></Step>
          </Steps>
        </div>
      </div>
    </template>
    <!-- 步驟條end -->
    <!-- 購物車 -->
    <template v-if="CartStepBar ===0">
      <cart></cart>
    </template>
    <!-- 購物車end -->
    <!-- 訂購人資料 -->
    <template v-if="CartStepBar ===1">
      <cartBuyerDetail></cartBuyerDetail>
    </template>
    <!-- 訂購人資料end -->
    <!-- 付款資料 -->
    <template v-if="CartStepBar ===2">
      <cartPayDetail></cartPayDetail>
    </template>
    <!-- 付款資料end -->
    <!-- 未登入，跳登入 -->
    <mebLogin></mebLogin>
    <!--未登入，跳登入end -->
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import Lockr from 'lockr'
import cart from './cart'
import cartAddProd from './cartAddProd'
import cartBuyerDetail from './cartBuyerDetail'
import cartPayDetail from './cartPayDetail'
import mebLogin from '../Member/mebLogin.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    mebLogin,
    cart,
    cartAddProd,
    cartBuyerDetail,
    cartPayDetail
  },
  data() {
    return {
      showCart: true,
      current: 0
    }
  },
  computed: {
    ...mapGetters([
      'GetLoginInfo',
      'GetLoginModal',
      'GetShoppingCartItem'
    ]),
    ...mapState(['CartStepBar'])
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
    // 下一步 填寫基本資料
    // goBuyerDetail() {
    //   if (Object.keys(this.GetLoginInfo).length === 0) {
    //     this.SetLoginModal(true)
    //   } else {
    //     this.$router.push({
    //       name: 'cartBuyerDetail'
    //     })
    //   }
    //   this.PostGetTotalAmt()
    // },
    testcookie() {
      alert(Cookies.getJSON('testCart'))
      alert(Cookies.getJSON('loginInfo'))
      alert(Lockr.get('shoppingCartItem'))
    }
  }
}

</script>
<style>
.detailBlock {
  font-size: 18px;
  border: 1px solid #77C9FF;
  border-radius: 10px;
  padding: 20px;
  margin: 0px;
}

.detailTitle {
  font-size: 25px;
  color: #777;
  font-weight: bold;
  background: #f8cc2b;
  margin-bottom: 10px;
  padding: 5px;
}

.btntoDetail {
  margin-top: 20px;
  margin-bottom: 50px;
}



@media (max-width: 762px) {
  .ivu-steps .ivu-steps-title {
    font-size: 16px;
    color: #495060;
  }

  .ivu-input {
    font-size: 16px;
  }
}

@media (min-width: 762px) {
  .stepbar {
  margin: 25px 0px;
}
  .ivu-steps .ivu-steps-title {
    font-size: 26px;
    color: #495060;
  }
  .ivu-input {
    font-size: 20px;
  }
}

@media (max-width: 413px) {
  .ivu-steps .ivu-steps-title {
    font-size: 16px;
    color: #495060;
  }
}


/* Form字體 */

.ivu-form .ivu-form-item-label {
  font-size: 16px;
  padding: 10px 0;
}


/* checkbox 大小*/

.ivu-checkbox-inner {
  width: 25px !important;
  height: 25px !important;
  border: solid 1px #333 !important;
}


/* 圖示 */

.ivu-steps .ivu-steps-head-inner>.ivu-steps-icon.ivu-icon {
  font-size: 30px;
}



/* 進行中Bar */

.ivu-steps-item.ivu-steps-status-process .ivu-steps-title {
  color: #FF5722;
}

.ivu-steps-item.ivu-steps-custom.ivu-steps-status-process .ivu-steps-head-inner>.ivu-steps-icon {
  color: #FF5722;
}



/* 進行中Bar end */

.ivu-steps-item.ivu-steps-status-finish .ivu-steps-title {
  color: #2b85e4;
}

</style>
