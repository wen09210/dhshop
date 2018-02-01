<template>
  <div id="mainpage">
    <mainTop></mainTop>
    <mainIntro></mainIntro>
    <mainBlogger></mainBlogger>
    <mainPromotion></mainPromotion>
    <mainCardContent></mainCardContent>
    <!-- <mainArtical></mainArtical> -->
    <mainAllProduct></mainAllProduct>
    <mainIgFrame></mainIgFrame>
  </div>
</template>

<script>
  import mainTop from './mainTop'
  import mainIntro from './mainIntro'
  import mainPromotion from './mainPromotion'
  // import mainArtical from './mainAtrical.vue'
  import mainAllProduct from './mainAllProduct'
  import mainIgFrame from './mainIgFrame.vue'
  import mainCardContent from './mainCardContent'
  import mainBlogger from './mainBlogger'
  import Lockr from 'lockr'
  export default {
    created() {
      Lockr.set('utmTrack', JSON.stringify(this.$route.query))
    },
    components: {
      mainTop,
      mainIntro,
      mainBlogger,
      mainPromotion,
      // mainArtical,
      mainAllProduct,
      mainIgFrame,
      mainCardContent
    }
  }
</script>
<style>

@media (min-width:768px) {
  .imgHover:hover{
    background-color: #FFC442;
    padding: 5px;
    display: inline-block;
    cursor: pointer;
    border-radius: 3px;
  }
}
.style_intro {
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
  margin-top: 35px;
}
@media (max-width:480px) {
  .style_intro {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 25px;
}
}
</style>
