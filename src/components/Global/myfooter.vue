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
                <template v-for="(item,index) in oldHistory">
                  <swiper-slide :key="index">
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
        <tooltip content="購物車" placement="left-start">
          <Icon type="bag iconcolor" size=35></Icon>
        </tooltip>
      </div>
    </div>
    <Modal v-model="checkCartModal">
      <p slot="header" style="color:#ff9900;text-align:center">
        <Icon type="bag iconcolor" size=20></Icon>
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
            <tr v-for="(item,index) in GetShoppingCartItem" :key="index">
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
      <div class="col-md-4 col-xs-12">
        <div class="footer_title">聯絡我們</div>
        <hr class="style3">
        <p><Icon type="ios-telephone"></Icon> 服務專線:<span>0966-140567</span></p>
        <p><Icon type="email"></Icon> 客服信箱:
          <a href="mailto:cs.dhshop@gmail.com">cs.dhshop@gmail.com</a></p>
        
        <p><Icon type="social-facebook"></Icon> 私訊FB小編:<a href="https://m.me/684624661588532" target="_blank">dHSHOP</a></p>
        <p><Icon type="iphone"></Icon> line@帳號:<a href="https://line.me/R/ti/p/%40eat5207g">@eat5207g</a></p>
        <p><Icon type="social-instagram-outline"></Icon> Instagram:<a href="https://www.instagram.com/dhshop_tw/">dhshop_tw</a></p>
        <!-- <div class="col-md-5 col-xs-12 ">
          <a href="https://line.me/R/ti/p/%40eat5207g"><img src="../../assets/icon/lineat.jpg" alt="" style="width:150px"></a>
        </div> -->
      </div>
      <div class="col-md-4 col-xs-12">
        <div class="footer_title">消費者服務</div>
        <hr class="style3">
        <div class="col-md-12 col-xs-12 ">
            <p>服務時間:周一至周五 am 9:30 - pm 18:30</p>
            
          <p>
            <router-link to="/QandA"><Icon type="help-circled"></Icon> 常見問題集</router-link>
          </p>
          <p>
              <router-link to="/CaseCategory"><Icon type="ios-location"></Icon> 展示店點</router-link>
            </p>
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
    <div class="fb_chat circleHis">
      <tooltip content="聯絡客服小編" placement="left-start">
        <a href="https://m.me/684624661588532" target="_blank">
          <Icon type="chatbubbles" size=35></Icon>
        </a>
      </tooltip>
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
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
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
  background:#f3ede7;
    width: 100%;
    padding: 15px 30px;
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
  background: #ffffff;
  width: 50px;
  height: 50px;
  font-size: 15px;
  color: #FFFFFF;
  border-radius: 50%;
  border: 2px solid #ff9900;
}

[tooltip] {
  float: left;
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

.fb_chat {
  z-index: 2;
  position: fixed;
  bottom: 150px;
  right: 0px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 100px;
}

.fb_chat.circleHis {
  border: 2px solid #2d8cf0;
}

</style>
