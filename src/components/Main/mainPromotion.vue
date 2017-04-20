<template>
<div id="promotion"> 
  <div class="title_name"><img src="../../assets/temporyPic/clock.png" ><span>檔期活動</span></div>
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
    </carousel>
</div>

</template>
<script>
import {Carousel, Slide} from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  }
}

</script>
<style>
.title_name img{  
  width:60px;
  height:60px;
}
.title_name {  
  text-align: center;
}
#promotion .VueCarousel-slide {
  margin:5px
}
</style>
