<template>
  <div class="CaseAll">
    <div class="col-md-8">
      <div class="leftPart">
        <div>
          <!-- <div class="main-image">
          <img src="../../assets/temporyPic/Case/case1.jpg" alt="" class="img-responsive">
          </div> -->
          <!-- <swiper :options="swiperOptionThumbs" ref="swiperThumbs">
          <template v-for="(prod,i) in item">
            <swiper-slide :class="{'selectedCarousel':i===isSelectedCarousel}">
              <img :src="prod.ImgUrl| UrlTransIP" class="img-responsive" @click="selectCarousel(i,prod.ItemNo)">
            </swiper-slide>
          </template>
          <div class="swiper-button-prev swiper-button-white" style="left:1px" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" style="right:1px" slot="button-next"></div>
        </swiper> -->
          <div class="main-image">
            <template v-for="(item,i) in caseDetail.img">
              <template v-if="i===isSelectedCarousel">
                <div class="">
                  <img :src="item.url" class="img-responsive">
                </div>
              </template>
            </template>
          </div>
          <swiper :options="swiperOptionThumbs" ref="swiperThumbs">
            <template v-for="(item,i) in caseDetail.img">
              <swiper-slide :class="{'selectedCarousel':i===isSelectedCarousel}">
                <img :src="item.url" class="img-responsive" @click="selectCarousel(i,item.itemNo)">
              </swiper-slide>
            </template>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="rightPart ">
        <div class="case_title">
          {{caseDetail.name}}
        </div>
        <p>{{caseDetail.address}}</p>
        <p>營業時間：{{caseDetail.opentime}}</p>
        <div class="discription ">
          <div class="subtitle needLine">簡介</div>
          <p v-html='caseDetail.description'></p>
          <br>
          <p>歡迎來【{{caseDetail.name}}】親身體驗dH歐巴地板的魅力，現場還有專屬優惠喔！</p>
          <a :href="caseDetail.caseUrl" target="_blank">
            <button class=" btn btn-primary btn_call btn-lg">{{caseDetail.btnname}}</button>
          </a>
        </div>
        <div class="productPart needLine">
          <p class="subtitle">使用產品</p>
          <div>
            
            <div class="productIn">
              <router-link to="/product/1">
                <button type="button" class="prodBtn">
                  <div>
                    <div class="productLeftImg">
                      <img :src="caseDetail.productImg1" alt="" class="img-responsive">
                    </div>
                    <span>
                        {{caseDetail.productName}}
                      </span>
                  </div>
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="needLine">
          <p class="subtitle">猜你也喜歡</p>
          <template v-for="(item,i) in caseDetail.guesslike">
          <div class="col-md-4 col-xs-4">
            <div class="otherlike">   
                <a :href="'/Case/'+item.sid">     
                  <img :src="item.simg" class="img-responsive">
                  <div class="case_name">{{item.stitle}}</div>
                </a> 
            </div>
          </div>
          </template>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Case from '../../../static/file/case.json'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      Case: Case,
      caseDetail: {},
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // 已選擇的輪播圖
      isSelectedCarousel: 0,
      swiperOptionThumbs: {
        slidesPerView: 4,
        spaceBetween: 20,
        slideToClickedSlide: true,
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
            slidesPerView: 3,
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
    console.log(this.Case)
    console.log(this.$route.params.caseID)
    let CC = this.Case.data.find(x => x.caseID === this.$route.params.caseID)
    this.caseDetail = CC
    console.log(this.caseDetail)
  },
  methods: {
    // 選擇輪播圖
    selectCarousel(index, itemNo) {
      this.itemNo = itemNo
      this.isSelectedCarousel = index
      // 移至該位置
      // console.log(index)
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperThumbs.slideTo(index, 1000, false) // 切换到第一个slide，速度为1秒
    }
  }
}
</script>
<style scoped>
p {
  font-size: 17px;
}

.main-image {
  max-width: 565px;
  margin: 10px auto;
}

.img-responsive {
  display: inline-block;
}

.clearfix {
  clear: both;
}

.CaseAll {
  text-align: center;
  background-color: #f4f4f4;
}

.CaseAll .col-md-4 {
  padding: 0px;
  background-color:#fff;
}

.leftPart {
  /* overflow-y: scroll;
    overflow-x: hidden; */
  position: relative;
  min-height: 1px;
  /* margin-top:30px; */
  padding-right: 10px;
  padding-left: 10px;
}

.selectedCarousel {
  border: 4px solid #2d8cf0;
  cursor: pointer;
}
/* 右邊部分 */

.btn_call {
  margin-top: 15px;
  width: 100%;
}

.rightPart {
  border-left: 1px solid #f3f3f3;
  text-align: left;
  font-size: 19px;
  line-height: 22px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
  height:83vh;
}

.case_name {
  font-weight: 700 !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: 0.4px !important;
}

.subtitle {
  margin-top: 10px;
  font-weight: 500;
  margin: 0px;
  word-wrap: break-word;
  font-size: 22px;
  letter-spacing: -0.6px;
  color: #484848;
}

.needLine {
  border-top: 1px solid #f3f3f3;
  padding: 10px 0px;
}

.productPart>div {
  display: inline-block;
}

.discription {
  margin: 0px;
  word-wrap: break-word;
  padding: 15px 0px;
}

.case_title {
  margin-top: 10px;
  font-weight: 700;
  margin: 0px;
  word-wrap: break-word;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.6px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: #484848;
}

.productIn {
  float: left;
  display: table;
  position: relative;
  margin: 10px 10px 0px 0px;
}

.productIn .prodBtn {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  margin-bottom: 4px;
  padding: 0px;
  overflow: hidden;
  text-align: left;
  width: 100%;
}

.productIn>div {
  display: table-row;
}

.productLeftImg {
  max-width: 80px;
  display: table-cell;
}

.productIn span {
  display: table-cell;
  color: #484848;
  padding: 10px;
}

.otherlike {
  margin: 10px 10px 10px 0px;
}
@media  (max-width:768px){
  .rightPart {
    height: auto;
    overflow-y: hidden;
  }
}
</style>
