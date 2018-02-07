<template>
  <div>
    <div class="container">
      <div class="style_intro">粉絲熱情推薦 <span class="seemore"><router-link to="/BlogCategory">查看更多>></router-link></span></div>
      <!-- <div v-for="item in BlogDetail">
      {{item.title}}
    </div>   -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in Blog" :key="item.BlogID">
          <router-link :to="{name: 'Blog', params: {BlogID: item.BlogID}}">
            <img :src="item.coverPhoto" class="img-responsive ">
            <div class="Blog_name">{{item.title}}</div>
            <div class="Blog_description">{{item.quote}}</div>
            <div class="Blog_tag">
              <Icon type="pricetag"></Icon>{{item.prodtag}}</div>
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
import blog from '../../../static/file/Blog.json'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      Blog: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
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
    // 隨機排列
    var random = function(array) {
      return array.sort(function() { return Math.random() - 0.5 })
    }
    this.Blog = random(blog.data.slice().reverse()).slice(0, 6)
    // 隨機排列
    // var random = function(array) {
    //   return array.sort(function() { return Math.random() > 0.5 })
    // }
    // console.log(random(blog.data))
  }
}

</script>
<style scoped>
.img-responsive {
  border-radius: 3px;
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

.Blog_name {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  padding-top: 8px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.Blog_tag {
  color: #FF9800;
}

</style>
