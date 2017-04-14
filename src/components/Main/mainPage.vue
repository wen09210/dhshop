<template>
  <div>
    <mainCarousel></mainCarousel>
    <mainPromotion></mainPromotion>
    <mainHotSale></mainHotSale>
    <mainAllProduct></mainAllProduct>
  </div>
</template>

<script>
  import mainCarousel from './mainCarousel'
  import mainHotSale from './mainHotSale'
  import mainPromotion from './mainPromotion'
  import mainAllProduct from './mainAllProduct'
  export default {
    components: {
      mainCarousel,
      mainHotSale,
      mainPromotion,
      mainAllProduct
    }
  }
</script>
