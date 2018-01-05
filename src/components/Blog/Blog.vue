<template>
  <div class="BlogAll">
      <div class="mainTitle">{{BlogDetail.title}}</div>
      <div class="blogtime"><Icon type="android-calendar"></Icon> {{BlogDetail.time}}</div>
      <div class="main_img"> <img src="https://scontent.ftpe7-4.fna.fbcdn.net/v/t31.0-8/26171131_1733669640017357_4015216463912208599_o.jpg?_nc_fx=ftpe7-1&oh=709f7224a64eacb4ca93a9c02edc50f5&oe=5AF7D858" alt=""></div> 
      <div class="quote"><Icon type="chatbox-working"></Icon>{{BlogDetail.quote}}</div>
      <div class="content" v-html="BlogDetail.content"></div>
    <div class="clearfix"></div>
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
    console.log(this.Blog)
    console.log(this.$route.params.BlogID)
    let CC = this.Blog.data.find(x => x.BlogID === this.$route.params.BlogID)
    this.BlogDetail = CC
    console.log(this.BlogDetail)
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
<style scoped>
p {
  font-size: 20px;
}

.BlogAll{
  margin:0 auto;
  text-align: center;
  font-size: 18px;
  max-width:1000px;
}
.blogtime{
  text-align:right;
  color:#484848;
}
.quote{
  margin:20px 0px;
  color:#00a6ff
}
.main_img>img{
  max-width:100%;
}
.mainTitle{
  margin:0x auto;
  text-align: center;
  font-weight: 700 ;
  margin: 0px ;
  word-wrap: break-word ;
  font-size: 36px ;
  line-height: 40px ;
  letter-spacing: -0.6px ;
  padding-top: 6px ;
  padding-bottom: 6px ;
  color: #484848 ;
}
.content{
  line-height: 3rem;
}
@media  (max-width:768px){
}
</style>
