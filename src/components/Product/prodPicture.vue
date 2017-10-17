<template>
  <div class="">
    <div v-html="ContentUp"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <!-- 左半邊 -->
          <template v-for="(item,index) in CarouselUp">
            <template v-for="(itemChild,secIndex) in CarouselUp[index]">
              <!-- Order 0 為索引 -->
              <div class="col-md-6" v-if="secIndex===0">
                <img v-if="secIndex===0" :src="imgWithLoacl(itemChild.ImgUrl)" class="carousel_Index" @click="changeCarousel(index)">
              </div>
            </template>
          </template>
        </div>
        <!-- 右半邊 -->
        <template v-for="(item,index) in CarouselUp">
          <div v-show="CtrlPanel[index]" class="col-md-6">
            <swiper :options="swiperOption_Up">
              <template v-for="(itemChild,secIndex) in CarouselUp[index]">
                <swiper-slide v-if="secIndex!==0">
                  <img :src="imgWithLoacl(itemChild.ImgUrl)" class="img-responsive imgHover">
                </swiper-slide>
              </template>
              <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
            </swiper>
          </div>
        </template>
      </div>
    </div>
    <!-- html -->
    <div v-html="ContentDown"></div>
    <!-- Carousel -->
    <div class="container">
      <div class="col-md-6">
        <swiper :options="swiperOption_Down">
          <template v-for="item in CarouselDown">
            <swiper-slide>
              <img :src="imgWithLoacl(item.ImgUrl)" class="img-responsive imgHover">
            </swiper-slide>
          </template>
          <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
        </swiper>
      </div>
    </div>
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
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      },
      // 輪播下設定
      swiperOption_Down: {
        slidesPerView: 1,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
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
          this.$noty.ShowAlert(response.data.msg)
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
          console.log(this.item)
        }
      })
  },
  methods: {
    ...mapActions([
      'SetLoading'
    ]),
    imgWithLoacl(url) {
      // return 'http://223.27.48.157/' + url
      return 'http://localhost:53912/' + url
    },
    // 切換caresoul
    changeCarousel(index) {
      console.log(index)
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
.carousel_Index {
  margin: 5px;
  width: 200px;
  height: 130px;
}

img {
  width: 100%
}

</style>
