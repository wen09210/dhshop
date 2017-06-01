<template>
  <div >
    <cartPay></cartPay>
    <cartAddProd></cartAddProd>
    <div class=container>
    <div class="btntoDetail col-xs-12  col-md-offset-3 col-md-6">
      <button type="button" @click="goBuyerDetail" class="btn btn-info btn-lg btn-block">結帳去~早買早想享受!</button>
    </div>
    </div>
    <cartBuyerDetail v-if='showBuyerDetail'></cartBuyerDetail>

  </div>
</template>

<script>
  import cartPay from './cartPay'
  import cartAddProd from './cartAddProd'
  import cartBuyerDetail from './cartBuyerDetail.vue'
  import {mapActions} from 'vuex'
  export default {
    components: {
      cartPay,
      cartAddProd,
      cartBuyerDetail
    },
    data() {
      return {
        showBuyerDetail: false
      }
    },
    methods: {
      ...mapActions(['PostGetTotalAmt']),
      goBuyerDetail() {
        this.showBuyerDetail = true
        this.PostGetTotalAmt()
      }
    }
  }

</script>
<<style>
.btntoDetail{
  margin-top:20px;
  margin-bottom:50px;
}
</style>
