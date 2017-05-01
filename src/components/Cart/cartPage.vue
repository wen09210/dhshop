<template>
  <div>
    <cartPay></cartPay>
    <!--<cartAddProd></cartAddProd>-->
    <cartBuyerDetail></cartBuyerDetail>
  </div>
</template>

<script>
  import cartPay from './cartPay'
  import cartAddProd from './cartAddProd'
  import cartBuyerDetail from './cartBuyerDetail.vue'
  export default {
    components: {
      cartPay,
      cartAddProd,
      cartBuyerDetail
    },
    data() {
      return {
        test: 1
      }
    }
  }
</script>
