<template>
  <div>
    <div class="container">
      <div class="style_intro">一點小改變，你家也能變這樣</div>
      <div class="style_sub_intro">原來我家空間還能這樣改造!!</div>
      <!-- <div v-for="item in changeSpaceDetail">
      {{item.title}}
    </div>   -->
      <swiper :options="swiperOption">
        <template v-for="(item,index) in proposalIn">
          <swiper-slide :key="index">
            <div class="changeSpace " @click="instance(item)" :key="index">
              <img :src="item.photo" class="img-responsive ">
              <div class="views">
                <Icon type="eye"></Icon> {{item.views}}次瀏覽</div>
              <div class="changeSpace_name">【{{item.mainTitle}}】</div>
              <!-- <div class="changeSpace_description">{{item.content}}</div>
              <div class="changeSpace_space">空間:{{item.spacetag}} <span class="changeSpace_space2">坪數:{{item.squarFt}}坪</span> </div> -->
              <div class="changeSpace_tag">
                <Icon type="ios-location" color="#ccc"></Icon> {{item.area}}
                <Icon type="leaf" color="#ccc"></Icon>{{item.style}}
                <Icon type="android-home" color="#ccc"></Icon>{{item.city}}
              </div>
            </div>
          </swiper-slide>
        </template>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
      <span class="seemore"><router-link to="/proposal">更多使用者實例>></router-link></span>
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
      proposalIn: [],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
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
    // 隨機排列
    var random = function(array) {
      return array.sort(function() { return Math.random() > 0.5 })
    }
    this.proposalIn = random(this.proposal).slice(0, 6)
    console.log(this.proposalIn)
  },
  methods: {
    instance(item) {
      this.$Modal.info({
        title: item.mainTitle,
        content: '<img src="' + item.photo + '"class="img-responsive"><br><div class=" changeSpace_description">' + item.content + '<br><i class="ivu-icon ivu-icon-ios-location"></i>' + item.area + '<i class="ivu-icon ivu-icon-leaf"></i>' + item.style + '</div>',
        width: 400,
        okText: '關閉'
      })
    }
  }

}

</script>
<style>
.ivu-modal-confirm-body .ivu-modal-confirm-body-icon.ivu-modal-confirm-body-icon-info {
  display: none;
}

.ivu-modal-confirm-body {
  padding-left: 0px;
}

</style>
<style scoped>
.img-responsive {
  border-radius: 3px;
  max-width: 100%;
}

.changeSpace {
  /* border: 1px solid #d7d7d7;
  background-color: white;
  display: inline-block;
  border-radius: 3px;
  padding: 10px; */
  cursor: pointer;
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

.changeSpace_name {
  color: #4CAF50;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.4px;
  padding-top: 12px;
  padding-bottom: 6px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.changeSpace_description {
  font-size: 16px;
  color: #484848;
  font-weight: 400;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.changeSpace_space {
  font-size: 14px;
  color: #484848;
  font-weight: 400;
  padding-top: 0px;
  line-height: 20px;
}

.changeSpace_tag {
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
