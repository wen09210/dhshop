<template>
  <div class="container">
    <div class="style_intro">影片精選<span class="seemore"><router-link to="/iframeCategory">查看更多>></router-link></span></div>
    <swiper :options="swiperFB">
      <swiper-slide v-for="item in FBiframe" v-cloak>
        <!-- <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/1627499783967677/ " data-allowfullscreen="true"></div> -->
        <!-- <div class="col-xs-12"> -->
        <div class="embed-responsive embed-responsive-16by9 ">
          <iframe :src="item.iframeUrl"></iframe>
        </div>
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
import FBiframe from '../../../static/file/FBiframe.json'
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
      FBiframe: FBiframe,
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
  },
  created() {
    // 隨機排列
    var random = function(array) {
      return array.sort(function() { return Math.random() - 0.5 })
    }
    this.FBiframe = random(FBiframe).slice(0, 6)
  }
}

</script>
<style scoped>
.seemore {
  float: right;
  font-size: 15px;
  padding-top: 15px;
  color: #484848;
  font-weight: 300;
}

.seemore a {
  color: #008489;
}

</style>
