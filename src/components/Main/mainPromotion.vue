<template>
<div id="myprom"> 
  <div class="title_name"><img src="../../assets/temporyPic/clock.png" ><label>檔期活動</label></div>
      <carousel :autoplay="true" :perPage="3" :autoplayTimeout="1000">
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

#myprom .VueCarousel-Carousel {
  padding:50px
}

</style>
