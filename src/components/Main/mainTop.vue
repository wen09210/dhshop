<template>
  <div class="">
    <!-- <span v-scroll-to="'#blogger'" style="cursor:pointer">
    <img src="../../assets/temporyPic/Index/banner_1.png" class="img-responsive">
  </span> -->
    <swiper :options="swiperOption" class="hidden-xs">
      <swiper-slide>
        <div>
          <router-link to="/BlogCategory">
            <img src="../../assets/temporyPic/Index/banner_1.png" class="img-responsive">
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <router-link to="/Product/22">
            <img src="../../assets/temporyPic/Index/banner_2.png" class="img-responsive">
          </router-link>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
    <swiper :options="swiperOption" class="hidden-lg hidden-md hidden-sm">
      <swiper-slide>
        <div>
          <router-link to="/BlogCategory">
            <img src="../../assets/temporyPic/Index/banner_1_m.png" class="img-responsive">
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <router-link to="/Product/22">
            <img src="../../assets/temporyPic/Index/banner_2_m.png" class="img-responsive ">
          </router-link>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
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
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
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
  }
}

</script>
<style scoped>
>>>.swiper-pagination-bullet-active {
  background: #ffc900
}

</style>
