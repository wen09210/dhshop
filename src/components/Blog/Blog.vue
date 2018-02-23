<template>
  <div class="BlogAll">
    {{refresh}}
    <div class="main_img"> <img :src="BlogDetail.mainImg" alt=""></div>
    <div class="container">
      <div class="blogtime col-md-12">
        <Icon type="pricetag"></Icon>{{BlogDetail.prodtag}}
        <Icon type="android-calendar"></Icon> {{BlogDetail.time}}
      </div>
      <div class="blog_inside col-md-9">
        <div class="mainTitle">{{BlogDetail.title}}</div>
        <div class="quote">
          <Icon type="chatbox-working"></Icon>『{{BlogDetail.quote}}』-d粉{{BlogDetail.name}}</div>
        <div class="content col-md-12" v-html="BlogDetail.content"></div>
        <div class="clearfix"></div>
        <div class="clearfix"></div>
        <div class="needLine">
          <p class="subtitle">看過此文章的人也看過</p>
          <template v-for="(item,i) in guess">
            <div class="col-md-4 col-xs-12">
              <div class="otherlike">
                <router-link :to="{name: 'Blog', params: {BlogID: item.BlogID}}">
                  <!-- :href="'/Blog/'+item.BlogID"> -->
                  <img :src="item.coverPhoto" class="img-responsive">
                  <div class="Blog_name">{{item.title}}</div>
                  <!-- <div class="Blog_description">{{item.quote}}</div> -->
                  <div class="Blog_tag">
                    <Icon type="pricetag"></Icon>{{item.prodtag}}</div>
                </router-link>
                <!-- <a :href="'/Blog/'+item.sid">     
                  <img :src="item.simg" class="img-responsive">
                  <div class="centerword">
                    <div class="Blog_name">{{item.stitle}}</div>
                    <div class="Blogtag">{{item.stag}}</div>  
                  </div>
                </a> -->
              </div>
            </div>
          </template>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="productPart  col-md-3">
        <!-- <Affix :offset-top="60" @on-change="change"> -->
        <p class="subtitle">使用產品</p>
        <div>
          <div class="productIn">
            <router-link to="/product/1#botBuy">
              <div class="col-md-12"><img :src="BlogDetail.productImg1" alt="" class="img-responsive"></div>
              <div class="col-md-12 blogProdName"> {{BlogDetail.productName}}
              </div>
              <div class="col-md-12 col-xs-12 noPadding">
                <button class="btnOrange btn btn-primary  btn-lg btn-block">
                  <h3><i  aria-hidden="true" class="fa fa-shopping-bag"></i>
                  前往購買
                  </h3></button>
              </div>
            </router-link>
          </div>
        </div>
        <!-- </Affix> -->
      </div>
      <div class="clearfix"></div>
    </div>
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
      guess: [],
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
    // 隨機排列
    var random = function(array) {
      return array.sort(function() { return Math.random() - 0.5 })
    }
    let CC = this.Blog.data.find(x => x.BlogID === this.$route.params.BlogID)
    this.BlogDetail = CC
    let guess = random(this.Blog.data.slice().reverse()).slice(0, 3)
    this.guess = guess
    console.log(guess)
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
  },
  computed: {
    refresh() {
      let CC = this.Blog.data.find(x => x.BlogID === this.$route.params.BlogID)
      this.BlogDetail = CC
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
}

.content>>>.col-md-6 {
  padding: 0px;
}

.content>>>.col-md-6 img {
  padding: 15px;
}

.blog_inside {
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  max-width: 800px;
}

.blogtime {
  text-align: right;
  color: #484848;
  margin: 10px 0px;
  font-size: 18px;
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
  width: 100%;
}

.otherlike {
  padding-bottom: 20px;
  border-radius: 3px;
  margin-top: 10px;
}

.otherlike .Blog_name {
  font-size: 15px;
}

.otherlike .Blog_tag {
  text-align: left;
  font-size: 13px;
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
.col-md-4,.col-md-6{
  padding-left: 15px;
  padding-right: 15px;
}
.content >>> img.img-responsive {
  border-radius: 3px;
  margin: 15px 0px;
}

.content {
  line-height: 3rem;
  text-align: left;
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

.btnOrange {
  margin: 20px 0px 0px 0px;
  border-radius: 3px;
  font-weight: bold;
}

.blogProdName {
  font-size: 18px;
  color: #5a210d;
}

@media (max-width:768px) {
  .blog_inside {
    padding: 5px;
  }
  .mainTitle {
    font-size: 28px;
  }
  .blogtime {
    font-size: 15px;
  }
}

</style>
