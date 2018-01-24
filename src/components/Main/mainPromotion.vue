<template>
  <div class="container">
    <div class="style_intro">歐巴影片精選</div>
    <swiper :options="swiperFB">
      <template v-for="item in FBiframeDetail">
        <swiper-slide>
          <div @click="item.modal = true">
            <img :src="item.coverPhoto" class="img-responsive imgHover">
          </div>
        </swiper-slide>
      </template>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper> 
    <template v-for="item in FBiframeDetail">
      <modal v-model="item.modal" :title="item.title"  :mask-closable="false" width="768" class="videoiframe vertical-center-modal">
        <div class="embed-responsive embed-responsive-16by9 ">
          <iframe :src="item.iframeUrl" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        </div>
      </modal>
    </template>
    <!-- <div @click="modal1 = true">Display dialog box</div>
    <div @click="modal2 = true">Display dialog box</div>
    <div  @click="modal3 = true">Display dialog box</div>
    <template v-for="item in FBiframeDetail">
        <div @click="item.modal = true"><img :src="item.coverPhoto" class="img-responsive imgHover"></div>
    </template>
    <modal v-model="modal1" title="sd" class="videoiframe vertical-center-modal">
      <div class="embed-responsive embed-responsive-16by9 ">
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhshoptw%2Fvideos%2F1679406182110370%2F" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
      </div>
    </modal>
    <modal v-model="modal2" title="sd" class="videoiframe vertical-center-modal">
        <div class="embed-responsive embed-responsive-16by9 ">
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhshoptw%2Fvideos%2F1679406182110370%2F" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        </div>
      </modal>
      <modal v-model="modal3" title="sd" class="videoiframe vertical-center-modal">
          <div class="embed-responsive embed-responsive-16by9 ">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhshoptw%2Fvideos%2F1679406182110370%2F" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
          </div>
        </modal> -->
  </div>
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
      FBiframeDetail: {},
      modal1: false,
      modal2: false,
      modal3: false,
      swiperFB: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
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
    let CC = this.FBiframe
    this.FBiframeDetail = CC
    console.log(this.FBiframeDetail)
  }
  // computed: {
  //   removeModal() {
  //     this.$Modal.remove()
  //   }
  // }

}

</script>
<style scoped>
.videoiframe>>>div.ivu-modal-footer {
  display: none;
}

.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vertical-center-modal .ivu-modal {
  top: 0;
}

</style>
