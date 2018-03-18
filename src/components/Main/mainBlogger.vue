<template>
  <div>
    <div class="container" id="blogger">
      <div class="style_intro">看看不凡的故事，完整你的居家拼圖</div>
      <div class="style_sub_intro">自己動手付出努力，讓居家生活大不同</div>
      <!-- <div v-for="item in BlogDetail">
      {{item.title}}
    </div>   -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in Blog" :key="item.BlogID">
          <router-link :to="{name: 'Blog', params: {BlogID: item.BlogID}}">
            <img :src="item.coverPhoto" class="img-responsive ">
            <div class="views">
              <Icon type="eye"></Icon> {{item.views}}次瀏覽</div>
            <div class="Blog_name">【{{item.title}}】</div>
            <div class="Blog_description">{{item.quote}}</div>
            <!-- <div class="blog_space">空間:{{item.spacetag}}  <span class="blog_space2">坪數:{{item.squarFt}}坪</span> </div>-->
            <div class="Blog_tag">
              <Icon type="ios-location" color="#ccc"></Icon> {{item.spacetag}}
              <Icon type="crop" color="#ccc"></Icon>{{item.squarFt}}坪
              <Icon type="person" color="#ccc"></Icon>{{item.name}}
            </div>
          </router-link>
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
      <span class="seemore"><router-link to="/BlogCategory">更多煥然一新的居家>></router-link></span>
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
        grabCursor: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
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
  color: #4CAF50;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.4px;
  padding-top: 12px;
  padding-bottom: 6px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Blog_description {
  font-size: 16px;
  color: #484848;
  font-weight: 400;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.blog_space {
  font-size: 14px;
  color: #484848;
  font-weight: 400;
  padding-top: 0px;
  line-height: 20px;
}

.Blog_tag {
  margin-top: 10px;
  color: #484848;
  font-size: 14px;
  font-weight: 600;
}

.views {
  float: right;
  padding: 3px;
  margin-top: -25px;
  right: 0px;
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.267);
  z-index: 2;
}

@media (max-width:768px) {}

</style>
