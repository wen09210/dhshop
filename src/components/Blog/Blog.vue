<template>
  <div class="BlogAll">
    <div class="mainTitle">{{BlogDetail.title}}</div>
    <div class="blogtime">
      <Icon type="pricetag"></Icon>{{BlogDetail.prodtag}}
      <Icon type="android-calendar"></Icon> {{BlogDetail.time}}</div>
    <div class="main_img"> <img :src="BlogDetail.mainImg" alt=""></div>
    <div class="quote">
      <Icon type="chatbox-working"></Icon>『{{BlogDetail.quote}}』-d粉{{BlogDetail.name}}</div>
    <div class="content col-md-12" v-html="BlogDetail.content"></div>
    <div class="clearfix"></div>
    <div class="productPart needLine">
      <p class="subtitle">使用產品</p>
      <div>
        <div class="productIn">
          <router-link to="/product/1">
            <button type="button" class="prodBtn">
              <div>
                <div class="productLeftImg">
                  <img :src="BlogDetail.productImg1" alt="" class="img-responsive">
                </div>
                <span>
                        {{BlogDetail.productName}}
                      </span>
              </div>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="needLine">
      <p class="subtitle">相關文章 </p>
      <template v-for="(item,i) in BlogDetail.guesslike">
        <div class="col-md-4 col-xs-12">
          <div class="otherlike">
            <a :href="'/Blog/'+item.sid">     
                  <img :src="item.simg" class="img-responsive">
                  <div class="centerword">
                    <div class="Blog_name">{{item.stitle}}</div>
                    <div class="Blogtag">{{item.stag}}</div>  
                  </div>
                </a>
          </div>
        </div>
      </template>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Blog from '../../../static/file/Blog.json'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      Blog: Blog,
      BlogDetail: {},
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
    console.log(this.Blog)
    console.log(this.$route.params.BlogID)
    let CC = this.Blog.data.find(x => x.BlogID === this.$route.params.BlogID)
    this.BlogDetail = CC
    console.log(this.BlogDetail)
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
  font-size: 20px;
}

img {
  max-width: 100%;
}

.BlogAll {
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  max-width: 1000px;
}

.blogtime {
  text-align: right;
  color: #484848;
}

.quote {
  margin: 20px 0px;
  color: #00a6ff
}

.needLine {
  border-top: 1px solid #f3f3f3;
  padding: 10px 0px;
  margin-top: 15px;
}

.subtitle {
  font-weight: 500;
  margin: 15px 0px 15px 10px;
  word-wrap: break-word;
  font-size: 22px;
  letter-spacing: -0.6px;
  color: #484848;
  text-align: left;
}

.main_img>img {
  max-width: 100%;
}

.otherlike {
  padding-bottom: 20px;
  border-radius: 3px;
  margin-top: 10px;
}

.mainTitle {
  margin: 0x auto;
  text-align: center;
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

.img-responsive {
  border-radius: 3px;
}

.content {
  line-height: 3rem;
  text-align: left;
}

.col-md-6 {
  padding-left: 0px;
  margin-left: 0px;
}
.col-md-6,
.col-md-4 {
  padding-left: 15px;
  padding-right: 15px;
}
.centerword {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.Blog_name {
  text-align: left;
  font-weight: bold;
  color: #424242;
  margin-top: 5px;
}

.Blogtag {
  text-align: left;
  color: #f38c8c;
  font-size: 16px;
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
  margin-left: 10px;
}

.productIn>div {
  display: table-row;
}

.productLeftImg {
  max-width: 120px;
  display: table-cell;
}

.productIn span {
  display: table-cell;
  color: #484848;
  padding: 10px 25px;
  vertical-align: middle;
}

@media (max-width:768px) {
  .content {
    padding: 5px;
  }
}

</style>
