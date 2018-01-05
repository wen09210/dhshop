<template>
  <div>
    <div class="container">
    <div class="style_intro">消費者使用實例</div>  
    
    <swiper :options="swiperOption">
      <swiper-slide>
        <router-link to="/Blog/1">
            <img src="https://www.dhshop.tw/Image/other/Blog/09blog1.png" class="img-responsive">
            <div class="Blog_name">9月精選居家#楊恬恬</div>
            <div class="Blog_description">總而言之，好清理是很大的優點，有木地板的質感，卻沒有木地板的缺點。</div>
        </router-link>    
      </swiper-slide>
      <swiper-slide>
        <router-link to="/Blog/2">
            <img src="https://www.dhshop.tw/Image/other/Blog/09blog2.png" class="img-responsive">
            <div class="Blog_name">9月精選居家#柯繽淳</div>
            <div class="Blog_description">重點是...我們租屋如果要換租屋處還可以帶走👍完全沒有拆除施工這問題～真的是太棒了😍</div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/Blog/3">
            <img src="https://www.dhshop.tw/Image/other/Blog/09blog3.png" class="img-responsive">
            <div class="Blog_name">9月精選居家#盧俊光</div>
            <div class="Blog_description">親手打造的感覺是怎麼可以這麼簡單啊，哈哈我也可以成為小設計師。</div>
        </router-link>    
      </swiper-slide>
      <swiper-slide>
        <router-link to="/Blog/4">
            <img src="https://www.dhshop.tw/Image/other/Blog/10blog4.png" class="img-responsive">
            <div class="Blog_name">10月精選居家#侯雅吟</div>
            <div class="Blog_description">滿滿的成就感，覺得自己辦得到，好像親手自己做，發現原來自己可以做到得更多！</div>
        </router-link>    
      </swiper-slide>
      <!-- <swiper-slide>
        <router-link to="/Blog/5">
            <img src="https://www.dhshop.tw/Image/other/Blog/11blog5.png" class="img-responsive">
            <div class="Blog_name">11月精選居家#Yunhsin</div>
            <div class="Blog_description">居家風格不一樣，連小朋友都稱讚新地板好看，冬天不怕冰地板、實現了想要木地板的臥室fu</div>
        </router-link>    
      </swiper-slide>
      <swiper-slide>
        <router-link to="/Blog/6">
            <img src="https://www.dhshop.tw/Image/other/Blog/11blog6.png" class="img-responsive">
            <div class="Blog_name">11月精選居家#Yoko</div>
            <div class="Blog_description">我家女娃現在4歲，本就是要讓孩子有個人空間，學習自我打理。舖設那天才發現，女兒是真的會思考如何擺設地板~~超開心的！</div>
        </router-link>    
      </swiper-slide> -->
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
.Blog_name{
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    padding-top: 8px;
    padding-bottom: 0px; 
    color: #484848; 
    font-weight: 700;
}
.Blog_description{
    font-size: 17px;
    line-height: 22px;
    padding-top: 0px;
    padding-bottom: 0px;
    color: #484848;
    font-weight: 700;
}

</style>
