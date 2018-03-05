<template>
  <div class="">
    <span v-scroll-to="'#fbpostger'" style="cursor:pointer">
    <img src="../../assets/temporyPic/Index/newyear.jpg" class="img-responsive">
  </span>
    <div class="row">
      <router-link to="/Product/22">
        <div class="col-md-4 padding5 " style="padding-right:0px">
          <div class="fb_connect" style="padding:10px">
            <img src="https://www.dhshop.tw/static/img/F&W_combine%20sale.e247daf.jpg" class="img-responsive ">
          </div>
        </div>
      </router-link>
      <div class="col-md-8 padding5 ">
         
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in fbpost">
            <div class="fb_connect">
              <div class="col-md-6 fb_inside ">
                <div class="s_editor">小編編精選 <span> {{item.date}}</span> </div>
                <div class="s_intro">{{item.mainTitle}}</div>
                <div class="facebook_content ">{{item.content}}</div>
                <span class="seemore"><router-link to="/fbpost">更多精選>></router-link></span>
              </div>
              <div class="col-md-6 ">
                 
                
                <img :src="item.photo" alt="" class="img-responsive" style="margin:10px 0px">
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import fbpost from '../../../static/file/fbpost.json'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      fbpost: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
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
    this.fbpost = fbpost.slice(0, 6)
    // 隨機排列
    // var random = function(array) {
    //   return array.sort(function() { return Math.random() > 0.5 })
    // }
    // console.log(random(fbpost.data))
  }
}

</script>
<style scoped>
.padding5 {
  margin-top: 10px;
}

.fb_inside {
  padding: 0px 35px;
}

.fb_connect {
  border: 1px solid #d7d7d7;
  background-color: white;
  display: inline-block;
  border-radius: 3px;
  padding-bottom: 10px;
}

.facebook_content {
  margin: 0px;
  word-wrap: break-word;
  font-size: 19px;
  line-height: 30px;
  padding-top: 10px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;


}
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
.s_intro {
  font-weight: bold;
  color: #53546a;
  font-size: 25px;
  margin-bottom: 15px;
  margin-top: 10px;
}

.s_editor {
  margin-top: 10px;
  text-align: right;
  color: #808080;
  font-size: 16px;
  font-style: italic;
}

</style>
