<template>
  <div>
    <cartPay></cartPay>
    <cartAddProd></cartAddProd>
    <modal v-model="openModal" title="讓我認識您~" :footer=false>
      <p><span>請選擇購買身份</span></p>
      <button type="button" @click="gologin" class="btn btn-success btn-lg">登入購買</button>
      <button type="button" @click="" class="btn btn-primary btn-lg">無痕購買</button>
    </modal>
    <mebLogin></mebLogin>
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
  import mebLogin from '../Member/mebLogin.vue'
  import {
    Modal
  } from 'uiv'
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {
    components: {
      Modal,
      mebLogin,
      cartPay,
      cartAddProd,
      cartBuyerDetail
    },
    data() {
      return {
        showBuyerDetail: false,
        openModal: false
      }
    },
    computed: {
      ...mapGetters([
        'GetLoginInfo',
        'GetLoginModal'
      ])
    },
    methods: {
      ...mapActions([
        'PostGetTotalAmt',
        'SetLoginModal'
      ]),
      goBuyerDetail() {
        if (Object.keys(this.GetLoginInfo).length === 0) {
          this.openModal = true
        } else {
          this.showBuyerDetail = true
        }
        this.PostGetTotalAmt()
      },
      gologin() {
        this.SetLoginModal(true)
        this.openModal = false
      }
    }
  }

</script>
<<style>
  .btntoDetail{ margin-top:20px; margin-bottom:50px; }
  </style>
