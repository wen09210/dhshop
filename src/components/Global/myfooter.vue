<template>
  <div class="myfooter">
    {{updateHis}}
    <!-- <div class="fixRightHistory">
      <Tooltip placement="left" :always="true">
        <div class="circleHis" @click="openHis = !openHis">
          <Icon type="bookmark" size=40></Icon>
        </div>
        <div slot="content">
          <p>瀏覽紀錄</p>
        </div>
      </Tooltip>
    </div> -->
    <!-- 歷史紀錄 -->
    <transition name="slide-fade">
      <div v-if="openHis" class="HistorrBox">
        <div class="HisX" @click="openHis = !openHis">
          <Icon type="close-circled" color="white" size=40></Icon>
        </div>
        <div class="HisImgContent">
          <div class="row">
            {{this.oldHistory}}
            <template v-if="typeof (this.oldHistory) !== undefined">
              <swiper :options="swiperOption">
                <template v-for="item in oldHistory">
                  <swiper-slide>
                    <router-link :to="{name: 'product', params: {prodID: item.prodID}}">
                      <div class="">
                        <p class="HisItemTitle">{{item.name}}</p>
                        <img :src='item.ImgUrl |UrlTransIP' class="HistoryImg">
                      </div>
                    </router-link>
                  </swiper-slide>
                </template>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
              </swiper>
            </template>
            <template v-else>
              <div class="col-md-offset-5 col-md-4">
                <br>
                <h4 style="color:white">無任何紀錄喔，趕快買了別猶豫</h4>
                <br>
                <br>
              </div>
            </template>
          </div>
        </div>
      </div>
    </transition>
    <div class="myrow">
      <div class="col-md-3">
        <div class="footer_title">客服中心</div>
        <hr class="style3">
        <div class="col-md-12 col-xs-4  ">
          <p>
            <router-link to="/QandA">常見問題</router-link>
          </p>
        </div>
        <div class="col-md-12 col-xs-4">
          <!-- <p><a href="http://www.dhshop.tw/salepage/corporation.html">廠商合作專區</a></p> -->
        </div>
      </div>
      <div class="col-md-5">
        <div class="footer_title">聯絡我們</div>
        <hr class="style3">
        <div class="col-md-7  col-xs-7">
          <p>客服電話:<span>0966-140567</span></p>
          <p>客服信箱:<a href="mailto:cs.dhshop@gmail.com">cs.dhshop@gmail.com</a></p>
          <p>服務時間:周一至周五 am 9:00 - pm 21:00</p>
          <p>line@帳號:<a href="https://line.me/R/ti/p/%40eat5207g">@eat5207g</a></p>
        </div>
        <div class="col-md-5 col-xs-5 ">
          <a href="https://line.me/R/ti/p/%40eat5207g"><img src="../../assets/icon/lineat.jpg" alt="" style="width:150px"></a>
        </div>
      </div>
      <div class="col-md-4 ">
        <div class="footer_title">Facebook</div>
        <hr class="style3">
        <div id="fb-root"></div>
        <div class="fb-page" data-href="https://www.facebook.com/dhshoptw/" data-tabs="timeline" data-height="70" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/dhshoptw/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/dhshoptw/">dHSHOP</a></blockquote>
        </div>
      </div>
    </div>
    <div class="copyright col-md-12  col-xs-12">
      <p>Copyright © 2016 dPlus Co. Ltd.
        <span>Powered by <a href="https://www.dhshop.tw/" title="" target="_blank"> dHSHOP </a></span>
        <span>All Rights Reserved.</span>
      </p>
    </div>
  </div>
</template>
<script>
(function(d, s, id) {
  var fjs = d.getElementsByTagName(s)[0]
  var js = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.11&appId=1238259759578123'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Lockr from 'lockr'
export default {
  data: function() {
    return {
      openHis: false,
      oldHistory: [],
      swiperOption: {
        centeredSlides: true,
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
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
    // console.log(Lockr.get('oldCartItem'))
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    updateHis() {
      let oldHistory = Lockr.get('oldCartItem')
      console.log(oldHistory)
      this.oldHistory = oldHistory
    }
  }
}

</script>
<style>
.ivu-affix {
  bottom: 100px;
  right: 30px !important;
}

.myfooter {
  z-index: 9999999;
  margin-top: 100px;
}

div .myrow {
  float: none;
  background: #f7f7f7;
  width: 100%;
  text-align: center;
  padding-top: 0px;
  margin: 0 auto;
}

.footer_title {
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
}

hr.style3 {
  border-top: 1px dashed #8c8b8b;
  margin-top: 5px;
  margin-bottom: 20px;
}

div .copyright {
  margin-top: 10px;
  text-align: center;
}

.fixRightHistory {
  z-index: 2;
  position: fixed;
  bottom: 90px;
  right: 0;
  cursor: pointer;
}

.circleHis {
  padding-top: 5px !important;
  text-align: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  margin-right: 20px;
  padding-top: 1px;
  background: #f57e28;
  width: 50px;
  height: 50px;
  font-size: 15px;
  color: #FFFFFF;
  border-radius: 50%;
}

.HistorrBox {
  background: rgba(0, 0, 0, 0.6);
  z-index: 20000000;
  position: fixed;

  bottom: 0;
  width: 100%;
}

.HisImgContent {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 40px;
  padding-left: 40px;
}

.HistoryImg {
  max-height: 150px;
}

.HisX {
  right: 0;
  margin-right: 10px;
  position: fixed;
  z-index: 20000000;
  cursor: pointer;
}

.HisItemTitle {
  font-size: 16px;
  color: white;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

{
  transform: translateY(10px);
  opacity: 0;
}

</style>
