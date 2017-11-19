<template>
  <div class="container">
    <div class="style_intro">歐巴影片精選</div>
    <swiper :options="swiperFB">
      <swiper-slide>
        <!-- <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/1627499783967677/ " data-allowfullscreen="true"></div> -->
        <!-- <div class="col-xs-12"> -->
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhshoptw%2Fvideos%2F1627499783967677%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        <!-- </div> -->
      </swiper-slide>
      <swiper-slide>
        <!-- <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/1629616513756004/ " data-allowfullscreen="true"></div> -->
        <!-- <div class="col-xs-12"> -->
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhshoptw%2Fvideos%2F1629616513756004%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        <!-- </div> -->
      </swiper-slide>
      <swiper-slide>
        <!-- <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/1630318883685767/ " data-allowfullscreen="true"></div> -->
        <!-- <div class="col-xs-12"> -->
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhshoptw%2Fvideos%2F1630318883685767%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        <!-- </div> -->
      </swiper-slide>
      <swiper-slide>
        <!-- <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/1631494156901573/ " data-allowfullscreen="true"></div> -->
        <!-- <div class="col-xs-12"> -->
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhshoptw%2Fvideos%2F1631494156901573%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        <!-- </div> -->
      </swiper-slide>
      <swiper-slide>
        <!-- <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/1633163543401301/ " data-allowfullscreen="true"></div> -->
        <!-- <div class="col-xs-12"> -->
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhshoptw%2Fvideos%2F1633163543401301%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        <!-- </div > -->
      </swiper-slide>
      <swiper-slide>
        <!-- <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/1595018953882427/ " data-allowfullscreen="true"></div> -->
        <!-- <div class="col-xs-12"> -->
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhshoptw%2Fvideos%2F1595018953882427%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        <!-- </div> -->
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
  </div>
  <!-- <router-link to="/prodPromte/1/1">
    </router-link> -->
</template>
<script>
// import '../extension/FBSDK'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  mounted() {
    // alert(process.env.testVar)
    // window.fbAsyncInit = function() {
    //   /* global FB */
    //   FB.init({
    //     appId: '{1238259759578123}',
    //     xfbml: true,
    //     version: 'v2.5'
    //   })
    //   // Get Embedded Video Player API Instance
    //   var myvideoplayer
    //   FB.Event.subscribe('xfbml.ready', function(msg) {
    //     if (msg.type === 'video') {
    //       myvideoplayer = msg.instance
    //       myvideoplayer.unmute()
    //     }
    //   })
    // }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperFB: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 5
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 5
          }
        }
      }
    }
  }
}

</script>
<style scoped>


</style>
