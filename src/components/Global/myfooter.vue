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
    <!-- 購物車-->
    <div class="fixRightHistory">
      <div class="circleHis" @click="openCART">
        <Icon type="ios-cart" size=40></Icon>
      </div>
    </div>
    <Modal v-model="checkCartModal">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-cart" size=20></Icon>
        <span style="font-size:2rem">購物車商品</span>
      </p>
      <div style="text-align:center">
        <template v-if="Object.keys(GetShoppingCartItem).length!== 0">
          <table class="table table-stripedd custTABLE">
            <thead>
              <tr>
                <th>商品</th>
                <th>樣式</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
                <th></th>
              </tr>
            </thead>
            <tr v-for="item in GetShoppingCartItem">
              <td>{{item.name}}</td>
              <td>{{item.style}}</td>
              <td>{{item.unitPrice}}</td>
              <td>{{item.count}}</td>
              <td>{{item.totalAmt}}</td>
            </tr>
          </table>
        </template>
        <template v-else>
          <label>尚未加入商品至購物車</label>
        </template>
      </div>
      <div slot="footer">
        <Button type="info" size="large" long @click="goCart" style="font-size:1.7rem">結帳</Button>
      </div>
    </Modal>
    <!-- 購物車END-->
    <div class="myrow row">
      <div class="col-md-3 col-xs-12">
        <div class="footer_title">客服中心</div>
        <hr class="style3">
        <div class="col-md-12 col-xs-12 ">
          <p>
            <router-link to="/QandA">常見問題</router-link>
          </p>
        </div>
        <div class="col-md-12 col-xs-4">
          <!-- <p><a href="http://www.dhshop.tw/salepage/corporation.html">廠商合作專區</a></p> -->
        </div>
      </div>
      <div class="col-md-5 col-xs-12">
        <div class="footer_title">聯絡我們</div>
        <hr class="style3">
        <div class="col-md-7  col-xs-12">
          <p>客服電話:<span>0966-140567</span></p>
          <p>客服信箱:
            <br><a href="mailto:cs.dhshop@gmail.com">cs.dhshop@gmail.com</a></p>
          <p>服務時間:
            <br>周一至周五 am 9:00 - pm 21:00</p>
          <p>line@帳號:<a href="https://line.me/R/ti/p/%40eat5207g">@eat5207g</a></p>
        </div>
        <div class="col-md-5 col-xs-12 ">
          <a href="https://line.me/R/ti/p/%40eat5207g"><img src="../../assets/icon/lineat.jpg" alt="" style="width:150px"></a>
        </div>
      </div>
      <div class="col-md-4 col-xs-12">
        <div class="footer_title">Facebook</div>
        <hr class="style3">
        <div id="fb-root"></div>
        <div class="fb-page" data-href="https://www.facebook.com/dhshoptw/" data-tabs="timeline" data-height="70" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/dhshoptw/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/dhshoptw/">dHSHOP</a></blockquote>
        </div>
      </div>
    </div>
    <!-- fb messager -->
    <div class="fb_chat">
      <a href="https://m.me/684624661588532" target="_blank"><img src="../../assets/icon/fbmessenger.png" alt=""></a>
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
import { mapActions, mapGetters } from 'vuex'
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
    ...mapGetters([
      'GetShoppingCartItem',
      'GetOpenCart'
    ]),
    updateHis() {
      let oldHistory = Lockr.get('oldCartItem')
      // console.log(oldHistory)
      this.oldHistory = oldHistory
    },
    checkCartModal: {
      get() {
        return this.$store.state.cartModal
      },
      set() {
        this.$store.commit('openCART')
      }
    }
  },
  methods: {
    ...mapActions([
      'openCART'
    ]),
    goCart() {
      this.$router.push({
        name: 'cart'
      })
      this.openCART()
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
  margin-top: 10px;
}

.custTABLE {
  font-size: 1.7rem;
}

div .myrow {
  float: none;
  background: #f7f7f7;
  width: 100%;
  padding-top: 0px;
  margin: 0 auto;
  font-size: 16px;
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

.table>tbody>tr>td,
.table>tbody>tr>th,
.table>tfoot>tr>td,
.table>tfoot>tr>th,
.table>thead>tr>td,
.table>thead>tr>th {
  padding: 5px;
}

.footer_title .style3 .col-md-7 {
  text-align: left;
}

.fb_chat img {
  z-index: 2;
  position: fixed;
  bottom: 150px;
  right: 20px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 100px;
}

</style>
