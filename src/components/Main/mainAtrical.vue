<template>
  <div class="container">
    <!-- {{Articial}} -->
    <div class="style_intro">達人推薦</div>
    <swiper :options="swiper_Atical">
      <template v-for="item in Articial">
        <swiper-slide>
          <router-link :to="{name: 'prodPromte', params: {articalID: item.ArticalNo,prodID:item.ProdID}}">
            <div class="artDiv ">
              <img :src="item.ArticalIntroPic | UrlTransIP" class="img-responsive imgHover ">
              <div class="artTitle">{{item.ArticalTitle}}</div>
              <div class="artSub">{{item.ArticalBrief}}</div>
            </div>
          </router-link>
        </swiper-slide>
      </template>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  created() {
    this.$Modal.confirm({
      title: '确认对话框标题',
      content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
      onOk: () => {
        this.$Message.info('点击了确定')
      },
      onCancel: () => {
        this.$Message.info('点击了取消')
      }
    })

    axios.get(`/api/Artical/GetArticalList`)
      .then((response) => {
        if (response.data.statu === 'ok') {
          this.Articial = response.data.data
        }
      })
      .catch((err) => console.log(err))
  },
  data: function() {
    return {
      Articial: [],
      swiper_Atical: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 5
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 5
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {}
}

</script>
<style scoped>
.artDiv {
  border: 1px solid #dfdfdf;
  padding: 5px;
}

.artTitle {
  clear: both;
  text-align: left;
  font-weight: 500;
  font-weight: bold;
  font-size: 2rem;
  color: #ab845a;
  margin-top: 20px;
  overflow: hidden;
  display: block;
  line-height: 1.5;
}

.artSub {
  font-size: 1.8rem;
  line-height: 1.3;
  height: 50px;
  margin-bottom: 10px;
  margin-top: 5px;
  color: #666;
  padding-left: 10px;
  border-left: 5px solid #ffde97;
  margin-bottom: 20px;
}

</style>
