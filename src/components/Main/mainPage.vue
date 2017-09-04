<template>
  <div id="mainpage">
    <mainCarousel></mainCarousel>
    <mainPromotion></mainPromotion>
    <mainIntro></mainIntro>
    <mainAllProduct></mainAllProduct>
  </div>
</template>

<script>
  import mainCarousel from './mainCarousel'
  import mainIntro from './mainIntro'
  import mainPromotion from './mainPromotion'
  import mainAllProduct from './mainAllProduct'
  export default {
    components: {
      mainCarousel,
      mainIntro,
      mainPromotion,
      mainAllProduct
    }
  }
</script>
<style>
.imgHover:hover{
    background-color: #FFC442;
    padding: 5px;
    display: inline-block;

}
</style>
