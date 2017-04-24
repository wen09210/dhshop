<template>
  <div id="mainpage">
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
<style>

.title_name img{  
  width:60px;
  height:60px;
}
.titleLabel{  
  font-size:20px;
}
.title_name {  
  text-align: center;
  margin-top: 100px;
  margin-bottom: 10px 
}
</style>
