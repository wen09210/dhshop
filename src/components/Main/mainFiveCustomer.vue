<template>
  <div class="container">
    <div class="style_intro">你家的狀況是....?</div>
    <div class="style_sub_intro">裝潢家裡，遇到什麼狀況，我們都能解決</div>
    <br>
    <swiper :options="swiperOption">
      <swiper-slide>
        <router-link to="monandbaby"><img src="https://www.dhshop.tw/Image/other/fivecustomer/mon/img3.jpg" alt="" class="img-responsive">
          <div class="title_sub">家有萌孩</div>
          <div class="title_sub_s">遠離環境過敏原，為孩子提供更舒適的環境</div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="oldhouse"><img src="https://www.dhshop.tw/Image/other/fivecustomer/oldhouse/img27.jpg" alt="" class="img-responsive">
          <div class="title_sub">老宅新生</div>
          <div class="title_sub_s">不用重新裝潢，小改變就有大不同</div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="pet"><img src="https://www.dhshop.tw/Image/other/fivecustomer/pet/20.jpg" alt="" class="img-responsive">
          <div class="title_sub">家有毛孩</div>
          <div class="title_sub_s">可拆可洗，面對亂抓亂尿尿都不怕</div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="newhouse"><img src="https://www.dhshop.tw/Image/other/fivecustomer/newhouse/img11.jpg" alt="" class="img-responsive">
          <div class="title_sub">新屋裝潢</div>
          <div class="title_sub_s">省去裝潢時間，輕鬆升級木地板質感</div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="rent"><img src="https://www.dhshop.tw/Image/other/fivecustomer/rent/img2.jpg" alt="" class="img-responsive">
          <div class="title_sub">租屋空間</div>
          <div class="title_sub_s">不能敲敲打打，但你有更多選擇，還能隨時帶著走</div>
        </router-link>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
  <!-- <router-link to="/prodPromte/1/1">
      </router-link> -->
</template>
<script>
// import '../extension/FBSDK'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      }
    }
  },
  created() {}
}

</script>
<style scoped>
.title_sub {
  color: #4caf50;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: .4px;
    padding-top: 12px;
    padding-bottom: 6px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.title_sub_s{
  color: #484848;
    font-size: 14px;
    font-weight: 600;
}
.img-responsive {
  border-radius: 3px;
}

</style>
