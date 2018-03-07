<template>
  <div class="">
    <div v-html="ContentUp"></div>
    <!-- Carousel 上半-->
    <div class="container" id="CarouselDown">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <!-- 左半邊 -->
          <template v-for="(item,index) in CarouselUp">
            <template v-for="(itemChild,secIndex) in CarouselUp[index]">
              <!-- Order 0 為索引 -->
              <div class="col-xs-3 col-md-6 padding5" v-if="secIndex===0" :key="secIndex">
                <img v-if="secIndex===0" :src="itemChild.ImgUrl|UrlTransIP" class="carousel_Index" @click="changeCarousel(index)">
              </div>
            </template>
          </template>
        </div>
        <!-- 右半邊 -->
        <template v-for="(item,index) in CarouselUp">
          <div v-show="CtrlPanel[index]" class="col-xs-12 col-md-8" :key="index">
            <swiper :options="swiperOption_Up">
              <template v-for="(itemChild,secIndex) in CarouselUp[index]">
                <swiper-slide v-if="secIndex!==0" :key="secIndex">
                  <img :src="itemChild.ImgUrl|UrlTransIP" class="imgHover carousel_Img">
                </swiper-slide>
              </template>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </div>
        </template>
      </div>
    </div>
    <!-- Carousel 上半 end-->
    <!-- html -->
    <div v-html="ContentDown"></div>
    <!-- Carousel 下半-->
    <div class="container" id="CarouselDown">
      <div class="col-xs-12 col-md-12">
        <swiper :options="swiperOption_Down">
          <template v-for="(item,index) in CarouselDown">
            <swiper-slide :key="index">
              <img :src="item.ImgUrl|UrlTransIP" class="img-responsive imgHover">
            </swiper-slide>
          </template>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <!-- Carousel 下半 end-->
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data: function() {
    return {
      // html 第一部分
      ContentUp: '',
      // html 第二部分
      ContentDown: '',
      // 輪播上
      CarouselUp: [],
      // 輪播下
      CarouselDown: [],
      // 輪播控制
      CtrlPanel: [],
      // 輪播上設定
      swiperOption_Up: {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      // 輪播下設定
      swiperOption_Down: {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this.SetLoading(true)
    axios.get(`/api/Product/GetProductContent?prodID= ${this.$route.params.prodID}`)
      .then((response) => {
        if (response.data.statu === 'err') {
          // this.$noty.ShowAlert(response.data.msg)
          this.$Notice.warning({
            title: 'dHSHOP 提醒',
            desc: response.data.msg
          })
          this.SetLoading(false)
        } else {
          this.ContentUp = response.data.data[0].DetailContent
          this.ContentDown = response.data.data[0].DetailContentDown
          this.CarouselUp = response.data.data[0].CarouselUp
          this.CarouselDown = response.data.data[0].CarouselDown
          for (var i = 0; i < Object.keys(this.CarouselUp).length; i++) {
            if (i === 0) {
              this.CtrlPanel.push(true)
            } else {
              this.CtrlPanel.push(false)
            }
          }
          this.SetLoading(false)
          // console.log(this.item)
        }
      })
  },
  methods: {
    ...mapActions([
      'SetLoading'
    ]),
    // 切換caresoul
    changeCarousel(index) {
      // console.log(index)
      for (var item in this.CtrlPanel) {
        this.CtrlPanel[item] = false
      }
      this.CtrlPanel[index] = true
      this.CtrlPanel = this.CtrlPanel.map(v => v)
    }
  }
}

</script>
<style>
.swiper-slide img.img-responsive.imgHover {
    width: 100%;
    max-width: 100%;
}
.carousel_Index {
  margin-top: 2.5px;
  margin-bottom: 2.5px;
}

.carousel_Img {
  width: 100%;
  height: 600px;
}

img {
  width: 100%;
}

.col-md-6,
.col-md-4 {
  padding: 0px;
}

@media (max-width:768px) {
  .carousel_Img {
    width: 100%;
    height: 250px;
  }
  .padding5 {
    padding-left: 2px;
    padding-right: 2px;
  }
}

</style>
