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
            <template v-for="(item,i) in list">
              <template v-if="i===isSelectedCarousel">
                <div class="">
                  <img :src="item.imgUrl" class="img-responsive">
                </div>
              </template>
            </template>
          </div>
           <swiper :options="swiperOptionThumbs" ref="swiperThumbs">
            <template v-for="(item,i) in list">
              <swiper-slide :class="{'selectedCarousel':i===isSelectedCarousel}">
                    <img :src="item.imgUrl" class="img-responsive" @click="selectCarousel(i,item.itemNo)">
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
          犬宇宙美容中心
        </div>
        <p>地址：桃園市楊梅區梅獅路二段94號</p>
        <p>營業時間：9AM-6PM (週三休息)</p>
        <div class="discription ">
        
        <div class="subtitle needLine">簡介</div>
        <p>神人級的黃先生採用人字型法將地板鋪的美美的！</p>
        <p>「耐磨抗抓」以及「零甲醛」的特性是開寵物spa館的黃先生
       選擇歐巴地板的主要原因，若是家中有養毛小孩的朋友，仍在考慮是否要購入歐巴地板可以帶著你們的毛小孩前往犬宇宙寵物美容spa館，
        幫毛小孩做spa順便體驗一下歐巴地板的驚人魅力！
        </p>
        <br>
        <p>現場還有【犬宇宙寵物美容spa館】專屬的優惠
        還在等什麼 趕快帶著您家中的毛小孩出發吧!</p>
        
        
        <a href="https://m.me/684624661588532" target="_blank"><button class=" btn btn-primary btn_call btn-lg" >私訊小編預約</button> </a>
        </div>  
        
        <div class="productPart needLine">
          <p class="subtitle">使用產品</p>
          <div>
            <div class="productIn">
              <router-link to="/product/1">
                  <button type="button" class="prodBtn">
                  <div>
                    <div class="productLeftImg">
                      <img src="https://www.dhshop.tw//Image/商品樣式圖/經典胡桃木/p1.jpg" alt="" class="img-responsive">
                    </div>
                    
                      <span>
                        歐巴地板
                      </span>
                  </div>
                  </button>       
              </router-link>
            </div>
            <div class="productIn">
              <router-link to="/product/1">
                  <button type="button" class="prodBtn">
                  <div>
                    <div class="productLeftImg">
                      <img src="https://www.dhshop.tw//Image/商品樣式圖/經典胡桃木/p1.jpg" alt="" class="img-responsive">
                    </div>
                    
                      <span>
                        歐巴地板
                      </span>
                  </div>
                  </button>       
              </router-link>

            </div>
          </div>
        </div>
        <div class="needLine">
          <p class="subtitle">猜你也喜歡</p>

            <div class="col-md-4">
              <div class="otherlike">
                <!-- <img src="../../assets/temporyPic/Case/case1.jpg" class="img-responsive"> -->
                <div class="case_name">犬宇宙美容spa會館</div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="otherlike">
                <!-- <img src="../../assets/temporyPic/Case/case2.jpg" class="img-responsive"> -->
                <div class="case_name">犬宇宙美容spa會館</div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="otherlike">
                <!-- <img src="../../assets/temporyPic/Case/case3.jpg" class="img-responsive"> -->
                <div class="case_name">犬宇宙美容spa會館</div>
              </div>
            </div>
        </div>
      </div>   
      
    </div> 
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20
      },
       // 已選擇的輪播圖
      isSelectedCarousel: 0,
      swiperOptionThumbs: {
        slidesPerView: 3,
        spaceBetween: 20,
        slideToClickedSlide: true,
        loop: false,
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
      },
      list: [
      {imgUrl: 'https://www.dhshop.tw/Image/other/Case/case2.jpg', itemNo: '0'},
      {imgUrl: 'https://www.dhshop.tw/Image/other/Case/case3.jpg', itemNo: '1'},
      {imgUrl: 'https://www.dhshop.tw/Image/other/Case/case4.jpg', itemNo: '2'},
      {imgUrl: 'https://www.dhshop.tw/Image/other/Case/case1.jpg', itemNo: '3'}
      ]
    }
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
    font-size: 18px;
  }
  .main-image{
    margin:10px;
  }
  .img-responsive{
    display: inline-block;
  }
  .clearfix{
    clear: both;
  }
  .CaseAll {
    text-align: center;
  }
 .CaseAll .col-md-4{
   padding:0px;
 }
  .leftPart {
    /* overflow-y: scroll;
    overflow-x: hidden; */
    position: relative;
    min-height: 1px;
    margin-top:30px;
    padding-right: 10px;
    padding-left: 10px;
  }
  .selectedCarousel {
  border: 4px solid #2d8cf0;
  cursor: pointer; 
  }
   /* 右邊部分 */
   .btn_call{
     margin-top: 15px;
     width:100%;
   }
  .rightPart {
    border-left: 1px solid #f3f3f3;
    text-align: left;
    font-size: 19px ;
    line-height: 22px ;
    padding-top: 0px ;
    padding-bottom: 0px ;
    color: #484848 ;
    font-weight: 300 ;
     overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
    height:100vh;
  }
  .case_name{
    font-weight: 700 !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 12px !important;
    line-height: 16px !important;
    letter-spacing: 0.4px !important;
  }
   .subtitle{
    margin-top: 10px;
    font-weight: 500 ;
    margin: 0px ;
    word-wrap: break-word ;
    font-size: 24px ;
    letter-spacing: -0.6px ;
    color: #484848 ;
  }
  .needLine{
    border-top: 1px solid #f3f3f3 ;
    padding:15px 0px;
  }
  .productPart>div{
    display: inline-block;
  }
  .discription {
   margin: 0px ;
   word-wrap: break-word ;
   padding:15px 0px;
  }
  .case_title{
    margin-top: 10px;
    font-weight: 700 ;
    margin: 0px ;
    word-wrap: break-word ;
    font-size: 36px ;
    line-height: 40px ;
    letter-spacing: -0.6px ;
    padding-top: 6px ;
    padding-bottom: 6px ;
    color: #484848 ;
  }
  .productIn{
    float:left;
    display:table;
    position: relative;
    margin:10px 10px 0px 0px;
  }
  .productIn .prodBtn{
    background-color: transparent ;
    border: 1px solid rgba(0,0,0,0.1) ;
    border-radius: 3px ;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.06) ;
    margin-bottom: 4px ;
    padding: 0px ;
    overflow: hidden ;
    text-align: left ;
    width: 100% ;

  }
  .productIn>div{
    display: table-row;
  }
  .productLeftImg{
    max-width:80px;
    display: table-cell;
  }
  .productIn span{
    display: table-cell;
    color: #484848;
    padding:10px;
  }
  .otherlike{
    margin:10px;

  }
</style>
