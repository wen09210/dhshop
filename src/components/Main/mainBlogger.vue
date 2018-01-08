<template>
  <div>
    <div class="container">
    <div class="style_intro">消費者使用實例</div>  
    <!-- <div v-for="item in BlogDetail">
      {{item.title}}
    </div>   -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="BlogDetail in BlogDetail">
        <router-link :to="{name: 'Blog', params: {BlogID: BlogDetail.BlogID}}">
          <img :src="BlogDetail.coverPhoto" class="img-responsive">
          <div class="Blog_name">{{BlogDetail.title}}</div>
          <div class="Blog_description">{{BlogDetail.quote}}</div>
          <div class="Blog_tag"><Icon type="pricetag"></Icon>{{BlogDetail.prodtag}}</div>   
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
import Blog from '../../../static/file/Blog.json'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      Blog: Blog,
      BlogDetail: {},
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
  },
  created() {
    let CC = this.Blog.data
    this.BlogDetail = CC
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
.Blog_tag{
  color:#FF9800;
}

</style>
