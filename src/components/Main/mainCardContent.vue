<template>
  <div>
    <div class="container">
    <div class="style_intro">實體店面展示</div>  
    
    <swiper :options="swiperOption">
      <swiper-slide>
        <router-link to="/Case/1">
            <img src="../../assets/temporyPic/Case/case1.jpg" class="img-responsive">
            <div class="case_name">中壢-實體旗艦店</div>
            <div class="case_description">中壢旗艦店，專業教學體驗</div>
        </router-link>    
      </swiper-slide>
      <swiper-slide>
        <router-link to="/Case/2">
            <img src="../../assets/temporyPic/Case/case2.jpg" class="img-responsive">
            <div class="case_name">楊梅-犬宇宙美容spa會館</div>
            <div class="case_description">給毛小孩最舒適的體驗</div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/Case/3">
            <img src="../../assets/temporyPic/Case/case4.jpg" class="img-responsive">
            <div class="case_name">台北-松江教會</div>
            <div class="case_description">互相交流享受溫暖的時光</div>
        </router-link>    
      </swiper-slide>
      <swiper-slide>
        <router-link to="/Case/4">
            <img src="../../assets/temporyPic/Case/case5.jpg" class="img-responsive">
            <div class="case_name">新竹-小人的衣櫃</div>
            <div class="case_description">每個小朋友都變成最時尚的model</div>
        </router-link>    
      </swiper-slide>
      <swiper-slide>
        <router-link to="/Case/5">
            <img src="../../assets/temporyPic/Case/case6.jpg" class="img-responsive">
            <div class="case_name">高雄-初樂Ture Love</div>
            <div class="case_description">人和毛孩子都能舒適享用美食</div>
        </router-link>    
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
    </div>
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
        loop: false,
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
<style scoped>
.img-responsive{
    border-radius:3px;
}
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
.case_name{

    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    padding-top: 8px;
    padding-bottom: 0px; 
    color: #484848; 
    font-weight: 700;
}
.case_description{
    font-size: 19px;
    line-height: 22px;
    padding-top: 0px;
    padding-bottom: 0px;
    color: #484848;
    font-weight: 700;
}

</style>
