<template>
  <div class="container">
    <!--<div class="title_name"><img src="../../assets/temporyPic/clock.png" ><label class="titleLabel">檔期活動</label></div>
      <carousel :autoplay="true" :perPage="4" :autoplayTimeout="1000">
      <slide>
        <img src="../../assets/temporyPic/pro1.jpg" class="img-responsive">
      </slide>
      <slide>
        <img src="../../assets/temporyPic/pro2.jpg" class="img-responsive">
      </slide>
      <slide>
        <img src="../../assets/temporyPic/pro3.jpg" class="img-responsive">
      </slide>
      <slide>
        <img src="../../assets/temporyPic/pro4.jpg" class="img-responsive">
      </slide>
    </carousel>-->
    <div class="artBlock_Title">人氣部落客熱情推薦</div>
    <router-link to="/prodPromte/1/1">
    <div class="col-md-8 ">
      <img src="../../assets/temporyPic/artical/artical1.jpg" class="img-responsive">
    </div>
    <div class="col-md-4 ">
      <img src="../../assets/temporyPic/artical/artical3.jpg" class="img-responsive displaySix">
      <img src="../../assets/temporyPic/artical/artical4.jpg" class="img-responsive displaySix">
      <img src="../../assets/temporyPic/artical/artical16.jpg" class="img-responsive displaySix">
      <img src="../../assets/temporyPic/artical/artical12.jpg" class="img-responsive displaySix">
      <img src="../../assets/temporyPic/artical/artical14.jpg" class="img-responsive displaySix">
      <img src="../../assets/temporyPic/artical/artical15.jpg" class="img-responsive displaySix">
      <span class="art_title"><b>人氣親子部落客Miss Lulu</b></span>
      <span class="art_content">一直以來都很喜歡木紋地板質樸的溫馨感，但因為目前的房子...</span>
    </div>
    </router-link>
  </div>
  </div>

</template>
<script>
  // import {
  //   Carousel,
  //   Slide
  // } from 'vue-carousel'
  export default {
    // components: {
    //   Carousel,
    //   Slide
    // }
  }

</script>
<style scoped>
.displaySix {
    width: 48%;
    float: left;
    margin: 1%;
}
.art_title{
    text-align: left;
    font-size: 25px;
    color: #ab845a;
    display: block;

}
.art_content{
  text-align: left;
  font-size: 20px;
}
.artBlock_Title{
  margin: 25px 0px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}
</style>
