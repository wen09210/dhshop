<template>
  <div class="row">
    <div class="container" id="proposal">
      <div class=" padding5 ">
        <div class="style_intro">每周風格提案</div>
        <div class="style_sub_intro">想擺脫一成不變的生活？快來找尋靈感</div>
        <swiper :options="swiperOption">
          <template v-for="(item,index) in proposalIn">
            <swiper-slide :key="index">
              <div class="fb_connect">
                <div class="col-md-4 ">
                  <img :src="item.photo" alt="" class="img-responsive">
                </div>
                <div class="col-md-8 fb_inside ">
                  <div class="s_editor"><span> {{item.date}}</span></div>
                  <div class="s_intro">{{item.mainTitle}}</div>
                  <div class="facebook_content ">{{item.content}}</div>
                </div>
              </div>
            </swiper-slide>
          </template>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
        <span class="seemore"><router-link to="/proposal">更多提案>></router-link></span>
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
      proposalIn: {},
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
    this.proposalIn = proposal.reverse().slice(0, 6)
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

.fb_inside {
  padding: 0px 35px;
}

.fb_connect {
  border: 1px solid #d7d7d7;
  background-color: white;
  display: inline-block;
  border-radius: 3px;
  padding: 15px;
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

@media(max-width:768px) {
  .fb_connect {
    padding: 0px;
  }
  .s_intro {
    font-size: 18px;
    margin-bottom: 5px;
  }
  .facebook_content {
    font-size: 16px;
    line-height: 22px;
    padding-top: 10px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .fb_inside {
    padding: 0px 15px;
  }

}

</style>
