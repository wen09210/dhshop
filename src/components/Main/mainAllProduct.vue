<template>
  <div class="container">
    <div class="style_intro">你想如何改善居家?</div>
    <div class="row" style="padding-left:10px">
      <ul class="nav nav-pills nav-yellow">
        <li class="col-xs-3" :class="{tabHover: tavControl.house }" @click="changeTab('house')">
          <img src="../../assets/temporyPic/Index/01_house.png"> 空間改造
        </li>
        <li class="col-xs-3" :class="{tabHover: tavControl.clean }" @click="changeTab('clean')">
          <img src="../../assets/temporyPic/Index/03_dentist-mask.png">清潔保養
        </li>
        <li class="col-xs-3" :class="{tabHover:tavControl.hstyle}" @click="changeTab('hstyle')">
          <img src="../../assets/temporyPic/Index/04_lamp.png">氛圍營造
        </li>
        <li class="col-xs-3" :class="{tabHover:tavControl.good}" @click="changeTab('good')">
          <img src="../../assets/temporyPic/Index/05_tea.png">居家好物
        </li>
      </ul>
    </div>
    <!--  -->
    <div class="row">
      <!-- 空間改造 -->
      <div v-show="tavControl.house">
        <!-- 左大圖 -->
        <router-link to="/Product/1">
          <div class="col-md-6 topPadding ">
            <img src="../../assets/temporyPic/Index/floor.jpg" class="item_category firstPIC imgHover">
          </div>
        </router-link>
        <div class="col-md-6">
          <!-- 右上圖 -->
          <div class="Row">
            <div class="col-md-12 noPadding">
              <router-link to="/Product/24">
                <div class="col-md-6 col-xs-6 padding5">
                  <img src="../../assets/temporyPic/Index/cancerPic.jpg" class="item_category imgHover">
                </div>
              </router-link>
              <router-link to="/Product/21">
                <div class="col-md-6 col-xs-6 padding5">
                  <img src="../../assets/temporyPic/Index/paint.jpg" class="item_category imgHover">
                </div>
              </router-link>
            </div>
            <!-- 右下圖 -->
            <div class="col-md-12 noPadding">
              <router-link to="/Product/3">
                <div class="col-md-6 col-xs-6 padding5">
                  <img src="../../assets/temporyPic/Index/NEWsamll7.1b5bff1.jpg" class="item_category firstPIC imgHover">
                </div>
              </router-link>
              <router-link to="/Product/22">
                <div class="col-md-6 col-xs-6 padding5">
                  <img src="../../assets/temporyPic/Index/F&W_combine sale.jpg" class="item_category imgHover">
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 下圖 -->
        <div class="col-md-12 topPadding noPadding " style="float:left">
          <!-- Carousel -->
          <div class="Row">
            <router-link to="/Product/4">
              <div class="col-md-4 topdownMargin10">
                <img src="../../assets/temporyPic/Index/floortrima.jpg" class="item_category imgHover">
              </div>
            </router-link>
            <!-- <swiper :options="swiperOption">
              <swiper-slide>
                <router-link to="/Product/4">
                  <img src="../../assets/temporyPic/Index/floortrima.jpg" class="item_category imgHover">
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <img src="../../assets/temporyPic/Index/indexroller.jpg" class="item_category imgHover">
              </swiper-slide>
              <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
            </swiper> -->
            <!-- <router-link to="/Product/21">
              <div class="col-md-4 topdownMargin10">
                <img src="../../assets/temporyPic/Index/paint.jpg" class="item_category imgHover">
              </div>
            </router-link> -->
            <router-link to="/Product/2">
              <div class="col-md-4  topdownMargin10">
                <img src="../../assets/temporyPic/Index/led_lighting.jpg" class="item_category imgHover">
              </div>
            </router-link>
            <router-link to="/Product/8">
              <div class="col-md-4 topdownMargin10">
                <img src="../../assets/temporyPic/Index/wallpaper2.jpg" class="item_category imgHover">
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 清潔保養 -->
      <div v-show="tavControl.clean">
        <!-- 左大圖 -->
        <router-link to="/Product/10">
          <div class="col-md-6 topPadding ">
            <img src="../../assets/temporyPic/Index/ichimodajin.jpg" class="item_category firstPIC imgHover">
          </div>
        </router-link>
        <div class="col-md-6">
          <!-- 右上圖 -->
          <div class="col-md-12 noPadding">
            <router-link to="/Product/11">
              <div class="col-md-6 col-xs-6 padding5">
                <img src="../../assets/temporyPic/Index/mask1.jpg" class="item_category imgHover">
              </div>
            </router-link>
            <router-link to="/Product/13">
              <div class="col-md-6 col-xs-6 padding5">
                <img src="../../assets/temporyPic/Index/toothbrush.jpg" class="item_category imgHover">
              </div>
            </router-link>
          </div>
          <!-- 右下圖 -->
          <router-link to="/Product/14">
            <div class="col-md-12 col-xs-12 padding5">
              <img src="../../assets/temporyPic/Index/mite.jpg" class="item_category firstPIC imgHover">
            </div>
          </router-link>
        </div>
      </div>
      <!-- 氛圍營造 -->
      <div v-show="tavControl.hstyle">
        <!-- 左大圖 -->
        <router-link to="/Product/9">
          <div class="col-md-6 topPadding ">
            <img src="../../assets/temporyPic/Index/diffuser.jpg" class="item_category firstPIC imgHover">
          </div>
        </router-link>
        <div class="col-md-6">
          <!-- 右上圖 -->
          <div class="col-md-12 noPadding">
            <router-link to="/Product/2">
              <div class="col-md-6 col-xs-6 padding5">
                <img src="../../assets/temporyPic/Index/led_lighting.jpg" class="item_category imgHover">
              </div>
            </router-link>
            <router-link to="/Product/9">
              <div class="col-md-6 col-xs-6 padding5">
                <img src="../../assets/temporyPic/Index/diffuser2.jpg" class="item_category imgHover">
              </div>
            </router-link>
          </div>
          <!-- 右下圖 -->
          <router-link to="/Product/2">
            <div class="col-md-12 col-xs-12 padding5" style="float:left">
              <img src="../../assets/temporyPic/Index/ledbanner.jpg" class="item_category firstPIC imgHover">
            </div>
          </router-link>
        </div>
      </div>
      <!-- 居家好物 -->
      <div v-show="tavControl.good">
        <!-- 左大圖 -->
        <router-link to="/Product/15">
          <div class="col-md-6 topPadding ">
            <img src="../../assets/temporyPic/Index/tea.jpg" class="item_category firstPIC imgHover">
          </div>
        </router-link>
        <div class="col-md-6">
          <!-- 右上圖 -->
          <div class="col-md-12 noPadding">
            <router-link to="/Product/16">
              <div class="col-md-6 col-xs-6 padding5">
                <img src="../../assets/temporyPic/Index/cup.jpg" class="item_category imgHover">
              </div>
            </router-link>
            <router-link to="/Product/17">
              <div class="col-md-6 col-xs-6 padding5">
                <img src="../../assets/temporyPic/Index/gluedot.jpg" class="item_category imgHover">
              </div>
            </router-link>
          </div>
          <!-- 右下圖 -->
          <div class="col-md-12 noPadding" style="float:left">
            <router-link to="/Product/19">
              <div class="col-md-6 col-xs-6 padding5">
                <img src="../../assets/temporyPic/Index/disneybottle.jpg" class="item_category imgHover">
              </div>
            </router-link>
            <router-link to="/Product/18">
              <div class="col-md-6 col-xs-6 padding5">
                <img src="../../assets/temporyPic/Index/keyholder.jpg" class="item_category imgHover">
              </div>
            </router-link>
          </div>
          <!-- <router-link to="/Product/19">
            <div class="col-md-12 col-xs-12 padding5">
              <img src="../../assets/temporyPic/Index/bottle.jpg" class="item_category firstPIC imgHover">
            </div>
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
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
      tavControl: {
        house: true,
        clean: false,
        hstyle: false,
        good: false
      },
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      }
    }
  },
  methods: {
    changeTab(id) {
      for (var item in this.tavControl) {
        this.tavControl[item] = false
      }
      this.tavControl[id] = true
      console.log(this.tavControl)
    }
  }
}

</script>
<style scoped>
@media (max-width:768px) {
  .nav.nav-yellow>li {
    width: 80px;
    margin: 10px 3px;
    padding: 10px 3px;
    background-color: #eee;
    font-size: 18px;
  }
  .nav.nav-yellow>li>img {
    margin: 0px 15px;
    width: 45px;
    height: 45px;
  }
  .topdownMargin10 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}


@media (min-width: 768px) {
  .nav.nav-yellow>li {
    width: 150px;
    margin: 10px 3px;
    padding: 25px 20px;
    background-color: #eee;
    font-size: 18px;
  }

  .nav.nav-yellow>li>img {
    width: 30px;
    height: 30px;
  }
  .topdownMargin10 {
    padding: 5px;
  }
}


.tabHover {
  color: #2e2e2e;
  background-color: #ffde97 !important;
  font-weight: 600;
}


.item_category {
  width: 100%;
  height: auto;
}


.noPadding {
  padding: 0px;
}

.padding5 {
  padding: 5px 5px;
}


.col-md-12>.col-md-6 {
  padding: 5px 5px;
  padding: 5px 5px;
}


.topPadding {
  padding-bottom: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-top: 5px;
}

</style>
