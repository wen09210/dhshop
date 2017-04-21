<template>

  <div class="container">
    <div class="title_name"><img src="../../assets/temporyPic/clock.png"><label>熱銷商品</label></div>    
    <carousel :autoplay="true" :perPageCustom="[[768, 2], [1024, 4]]" :autoplayTimeout="1000">
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
        <img src="../../assets/temporyPic/a4.jpg" class="img-responsive">
      </slide>
    </carousel>
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
  .title_name img{  
  width:60px;
  height:60px;
}
  .title_name {  
  text-align: center;
}
 .VueCarousel-slide {
  margin:5px
}
</style>
