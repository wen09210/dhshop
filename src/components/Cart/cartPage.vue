<template>
  <div>
    <!-- <button @click="testcookie" class="btn btn-info">測試cookie</button>
    <br>
    <label>test123:</label> {{test123}}
    <br>
    <label for="">test1015</label>{{test1015}}
    <br>
    <label>testloginInfo:</label> {{testloginInfo}}
    <br>
    <label>testshoppingCartItem</label>:{{testshoppingCartItem}} -->
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
      <cartAddProd></cartAddProd>
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
import cart from './cart'
import cartAddProd from './cartAddProd'
import cartBuyerDetail from './cartBuyerDetail'
import cartPayDetail from './cartPayDetail'
import mebLogin from '../Member/mebLogin.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
// import Cookies from 'js-cookie'
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
      current: 0,
      testloginInfo: {},
      testshoppingCartItem: {},
      test123: {},
      test1015: {}
    }
  },
  computed: {
    ...mapGetters([
      'GetLoginInfo',
      'GetLoginModal',
      'GetShoppingCartItem'
    ]),
    ...mapState(['CartStepBar'])
  },
  methods: {
    ...mapActions([
      'PostGetTotalAmt',
      'SetLoginModal',
      'PostAnoyLogin'
    ])
    // testcookie() {
    //   this.test123 = document.cookie
    //   this.test1015 = this.$decodeCookies.get('testCart')
    //   this.testloginInfo = this.$decodeCookies.getJSON('loginInfo')
    //   this.testshoppingCartItem = Lockr.get('shoppingCartItem')
    // }
  }
}

</script>
<style >
.detailBlock {
  font-size: 18px;
  border: 1px solid #77C9FF;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
}

.detailTitle {
  font-size: 25px;
  color: #777;
  font-weight: bold;
  background: #f8cc2b;
  margin-bottom: 10px;
  padding: 5px;
}
.ivu-steps .ivu-steps-tail{
   top:20px;
 }
 .ivu-steps .ivu-steps-head{
   top:5px;
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
    border: 1px solid #8c8d8e;
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
    border: 1px solid #8c8d8e;
    font-size: 20px;
  }
}

@media (max-width: 413px) {
  .ivu-steps .ivu-steps-title {
    font-size: 16px;
    color: #495060;
  }
}

.ivu-form .ivu-form-item-label {
  /* form字體 */
  font-size: 16px;
  padding: 10px 0;
}

.ivu-checkbox-inner {
  /* checkbox 大小*/
  width: 25px !important;
  height: 25px !important;
  border: solid 1px #333 !important;
}

.ivu-steps .ivu-steps-head-inner>.ivu-steps-icon.ivu-icon {
  /* 圖示 */
  font-size: 30px;
}

.ivu-steps-item.ivu-steps-status-process .ivu-steps-title {
  /* 進行中Bar */
  color: #FF5722;
}

.ivu-steps-item.ivu-steps-custom.ivu-steps-status-process .ivu-steps-head-inner>.ivu-steps-icon {
  color: #FF5722;
}

.ivu-steps-item.ivu-steps-status-finish .ivu-steps-title {
  color: #2b85e4;
  /* 進行中Bar end */
}

</style>
