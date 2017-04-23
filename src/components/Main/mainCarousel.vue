<template>
  <div>
    <carousel :autoplay="true" :perPage="1" :autoplayTimeout="1000">
      <slide>
        <img src="../../assets/temporyPic/banner_index01.jpg" class="img-responsive">
      </slide>
      <slide>
        <img src="../../assets/temporyPic/bannernew.gif" class="img-responsive">
      </slide>
      <slide>
        <img src="../../assets/temporyPic/banner3.jpg" class="img-responsive">
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
<style>
.VueCarousel-slide {
  position: relative;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
