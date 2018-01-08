<template>
  <div>
    <div class="container">
      <div class="category_title ">
        <div class="title_intro">我們致力於打造質感居家平台</div>
        <div class="about_dhshop">
          <p>「dHSHOP・點一下」的宗旨是成為每個人完成夢想居家的捷徑，啟發群眾對生活品質的重視與審美觀。</p>
          <p>專注於細節，連結值得關注的人事物，質感品味親手打造，共同創造分享價值。</p>
        </div>
        <!-- <div class="style_intro">消費者使用實例</div> -->
      </div>
    </div>
    <!-- <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../../assets/temporyPic/Index/User5.png" class="img-responsive">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/temporyPic/Index/User7.png" class="img-responsive">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/temporyPic/Index/User8.png" class="img-responsive">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/temporyPic/Index/User6.png" class="img-responsive">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/temporyPic/Index/User4.png" class="img-responsive">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/temporyPic/Index/User1.png" class="img-responsive">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/temporyPic/Index/User2.png" class="img-responsive">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/temporyPic/Index/User3.png" class="img-responsive">
      </swiper-slide>\
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper> -->
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
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
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
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
<style>
.title_intro {
  margin: 15px 0px;
  padding: 10px 0px;
  position: relative;
  margin-top: 30px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 3px;
}

.about_dhshop {
  font-size: 18px;
  letter-spacing: 3px;
}

</style>
