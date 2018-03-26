<template>
  <div class="row">
    <div class="container">
      <div class=" padding5 ">
        <div class="style_intro">如何讓鋪設完的空間再升級</div>
        <div class="style_sub_intro">掌握三大重點，開啟理想居家新篇章</div>
        <div class="col-xs-4"><img src="../../assets/temporyPic/Index/space.jpg" alt="" class="img-responsive">
          <div class="s_t">空間</div>
          <div class="style_sub_intro">依據空間的機能需求
            <br>選擇適合的環境氛圍</div>
        </div>
        <div class="col-xs-4"><img src="../../assets/temporyPic/Index/light.jpg" alt="" class="img-responsive">
          <div class="s_t">光源</div>
          <div class="style_sub_intro">冷白光 暖黃光
            <br>光源傳遞了空間最直接的感受</div>
        </div>
        <div class="col-xs-4"> <img src="../../assets/temporyPic/Index/color.jpg" alt="" class="img-responsive">
          <div class="s_t">色調</div>
          <div class="style_sub_intro">利用色彩搭配
            <br>形塑出各式風格的理想居家</div>
        </div>
        <div class="col-md-12 outsee"><span class="seemore"><router-link to="/pickfilter">加速升級居家>></router-link></span></div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import proposal from '../../../static/file/proposal.json'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      proposal: proposal,
      reproposal: proposal.reverse(),
      proposalIn: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
    this.proposalIn = this.reproposal.slice(0, 6)
    console.log(this.reproposal)
    // 隨機排列
    // var random = function(array) {
    //   return array.sort(function() { return Math.random() > 0.5 })
    // }
    // console.log(random(proposal.data))
  }
}

</script>
<style scoped>
.padding5 {
  margin-top: 10px;
}

.col-xs-4 {
  text-align: center;
}

.col-xs-4 img {
  text-align: center;
  margin: 0 auto;
}

.facebook_content {
  margin: 0px;
  word-wrap: break-word;
  font-size: 20px;
  line-height: 30px;
  padding-top: 20px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;
  margin-bottom: 10px;
}

.outsee {
  text-align: center;
}

.s_intro {
  font-weight: bold;
  color: #53546a;
  font-size: 25px;
  margin-bottom: 15px;
  margin-top: 10px;
}

.s_t {
  font-weight: bold;
  color: #53546a;
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 0px;
  text-align: center;
}

.s_editor {
  margin-top: 10px;
  text-align: right;
  color: #808080;
  font-size: 16px;
  font-style: italic;
}

@media(max-width:768px) {
  .fb_connect {
    padding: 0px;
  }
  .s_intro {
    font-size: 18px;
    margin-bottom: 5px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .facebook_content {
    font-size: 16px;
    line-height: 22px;
    padding-top: 10px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .fb_inside {
    padding: 0px 15px;
  }

}

</style>
