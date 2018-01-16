<template>
<div class="container">
  <div class="main_section col-md-12">
    <div class="category_title">消費者使用實例</div>
    <div class="subtitle">d粉們精心鋪設的空間，讓您輕鬆探索美好居家</div>
  </div>  
  <div class="col-md-3 col-xs-6 inblog"  v-for="BlogDetail in reverseItems  " :key="BlogDetail.BlogID">
      <router-link :to="{name: 'Blog', params: {BlogID: BlogDetail.BlogID}}">
        <img :src="BlogDetail.coverPhoto" class="img-responsive">
        <div class="Blog_name" >{{BlogDetail.title}}</div>
        <div class="Blog_description">{{BlogDetail.quote}}</div>
        <div class="Blog_tag">
          <Icon type="pricetag"></Icon>{{BlogDetail.prodtag}}</div>
      </router-link>
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
        slidesPerView: 1,
        spaceBetween: 20
      },
      // 已選擇的輪播圖
      isSelectedCarousel: 0,
      swiperOptionThumbs: {
        slidesPerView: 4,
        spaceBetween: 20,
        slideToClickedSlide: true,
        loop: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 5
          }
        }
      }
    }
  },
  created() {
    let CC = this.Blog.data
    this.BlogDetail = CC
  },
  computed: {
    reverseItems() {
      return this.BlogDetail.slice().reverse()
    }
  },
  methods: {
    // 選擇輪播圖
    selectCarousel(index, itemNo) {
      this.itemNo = itemNo
      this.isSelectedCarousel = index
      // 移至該位置
      // console.log(index)
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperThumbs.slideTo(index, 1000, false) // 切换到第一个slide，速度为1秒
    }
  }
}

</script>
<style lang="scss">
.img-responsive {
  border-radius: 3px;
}
.main_section{
  margin:20px 0px;
  border-bottom:1px solid #dbdbdb;
  padding-bottom:20px;

}
.category_title{
font-weight: 700 ;
margin-bottom: 0px ;
font-size: 28px ;
line-height: 32px ;
letter-spacing: -0.6px ;
padding-top: 2px ;
padding-bottom: 2px ;
color: #484848 ;
}
.subtitle{
margin: 0px ;
word-wrap: break-word ;
font-size: 19px ;
line-height: 24px ;
padding-top: 10px ;
padding-bottom: 0px ;
color: #484848 ;
font-weight: 300 ;
}
.inblog{
  margin:20px 0px;
}
.Blog_name {
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  padding-top: 8px;
  padding-bottom: 0px;
  font-weight: 400;
}

.Blog_description {
  font-size: 17px;
  line-height: 22px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 85px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.Blog_tag {
  color: #FF9800;
  padding-top:3px;
}
</style>
