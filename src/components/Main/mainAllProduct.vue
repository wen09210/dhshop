<template>

  <div class="container">
    <div class="allprod_title">好品嚴選</div>    
    <div class="col-md-12 col-xs-12">
    <carousel :autoplay="true" :perPageCustom="[[768, 2], [1024, 4]]" :autoplayTimeout="2000">
      <slide>
        <img src="../../assets/temporyPic/a1.jpg" class="img-responsive">
      </slide>
      <slide>
        <img src="../../assets/temporyPic/a2.png" class="img-responsive">
      </slide>
      <slide>
        <img src="../../assets/temporyPic/a3.jpg" class="img-responsive">
      </slide>
      <slide>
        <img src="../../assets/temporyPic/a5.jpg" class="img-responsive">
      </slide>
       <slide>
        <img src="../../assets/temporyPic/a6.jpg" class="img-responsive">
      </slide>
    </carousel>
    </div>
    <hr>
  </div>
  
</template>


<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
<style >
  .allprod_title {  
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
  margin-top: 35px;
}
 .VueCarousel-slide {
  margin:5px
}
</style>
