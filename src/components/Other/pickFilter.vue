<template>
  <div class="container">
    <div class="main_section col-md-12">
      
        <div class="pickFilter_title">空間、光源、色調</div>
      <!-- <swiper :options="swiperOption">
          <swiper-slide>
              <img src="../../assets/temporyPic/Index/light_banner.jpg" alt="" class="img-responsive">
          </swiper-slide>
          <swiper-slide>
              <img src="../../assets/temporyPic/Index/space_banner.jpg" alt="" class="img-responsive">
             
          </swiper-slide>
          <swiper-slide>
              <img src="../../assets/temporyPic/Index/color_banner.jpg" alt="" class="img-responsive">
          </swiper-slide>
          
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper> -->

        <div class="subtitle">三大重點改變居家，還在猶豫家中佈置嗎?來讓精選粉絲案例幫你一把</div>
    </div>
    <div class="col-md-2 hidden-xs hidden-sm">
      <div class="leftselect">
        <div class="picksub_title">空間</div>
        <div>不同空間，適合不同氛圍</div>
        <RadioGroup v-model="pickspace" vertical class="radio">
          <Radio label="全部">
            <span>全部</span>
          </Radio>
          <Radio label="客廳">
            <span>客廳</span>
          </Radio>
          <Radio label="工作室">
            <span>工作室</span>
          </Radio>
          <Radio label="臥室">
            <span>臥室</span>
          </Radio>
          <Radio label="走廊">
            <span>走廊</span>
          </Radio>
          <Radio label="遊戲間">
            <span>遊戲間</span>
          </Radio>
        </RadioGroup>
      </div>
      <div class="leftselect">
        <div class="picksub_title">光源</div>
        <div>光源傳遞空間最直接的感受</div>
        <RadioGroup v-model="picklight" vertical class="radio">
          <Radio label="全部">
            <span>全部</span>
          </Radio>
          <Radio label="白光">
            <span>白光</span>
          </Radio>
          <Radio label="黃光">
            <span>黃光</span>
          </Radio>
        </RadioGroup>
      </div>
      <div class="leftselect">
        <div class="picksub_title">色調</div>
        <div> 利用色彩搭配形塑出各式理想居家</div>
        <RadioGroup v-model="pickproduct" vertical class="radio">
          <Radio label="全部">
            <span>全部</span>
          </Radio>
          <Radio label="沉穩深橡">
            <span>沉穩深橡</span>
          </Radio>
          <Radio label="雅緻白橡">
            <span>雅緻白橡</span>
          </Radio>
        </RadioGroup>
      </div>
    </div>
    <div class="col-md-2 hidden-lg hidden-md ">
      <div class="m_select">
        <div class="picksub_title">空間</div>
        <Select v-model="pickspace">
          <Option value="全部" label="全部">
            <span>全部</span>
          </Option>
          <Option value="客廳" label="客廳">
            <span>客廳</span>
          </Option>
          <Option value="工作室" label="工作室">
            <span>工作室</span>
          </Option>
          <Option value="臥室" label="臥室">
            <span>臥室</span>
          </Option>
          <Option value="走廊" label="走廊">
            <span>走廊</span>
          </Option>
          <Option value="遊戲間" label="遊戲間">
            <span>遊戲間</span>
          </Option>
        </Select>
      </div>
      <div class="m_select">
        <div class="picksub_title">光源</div>
        <Select v-model="picklight" vertical>
          <Option value="全部" label="全部">
            <span>全部</span>
          </Option>
          <Option value="白光" label="白光">
            <span>白光</span>
          </Option>
          <Option value="黃光" label="黃光">
            <span>黃光</span>
          </Option>
        </Select>
      </div>
      <div class="m_select">
        <div class="picksub_title">顏色</div>
        <Select v-model="pickproduct" vertical>
          <Option value="全部" label="全部">
            <span>全部</span>
          </Option>
          <Option value="沉穩深橡" label="沉穩深橡">
            <span>沉穩深橡</span>
          </Option>
          <Option value="雅緻白橡" label="雅緻白橡">
            <span>雅緻白橡</span>
          </Option>
        </Select>
      </div>
    </div>
    {{pickThis}}
    <div class="col-md-10 col-xs-12">
      <!-- {{picklight}}{{pickspace}}{{pickproduct}} -->
      
      <div class="picksub"> 共{{storage.length}}組參考案例</div>
      <template v-if="storage.length === 0">
        <div class="searchResult">我們沒有找到符合您的結果，您可以再試試其他搜尋條件</div>
        <div class="searchResultIn">或者聯繫我們的<a href="https://m.me/684624661588532" target="_blank">客服</a>，將會提供您更好的建議</div>
      </template>
      <div v-for="(item,i) in storage " :key="storage.imgID">
        <div class="col-md-4 col-xs-6">
          <div class=""> <img :src="item.img" alt="" class="img-responsive sqare_photo"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pickFilter from '../../../static/file/pickFilter.json'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      pickFilter: pickFilter,
      storage: [],
      picklight: '全部',
      pickspace: '全部',
      pickproduct: '全部',
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
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  },
  created() {},
  computed: {
    pickThis() {
      // 全全全
      if (this.picklight === '全部' && this.pickspace === '全部' && this.pickproduct === '全部') {
        this.storage = this.pickFilter
      } else if (this.picklight === '全部') {
        // 全全非
        if (this.pickspace === '全部') {
          this.storage = this.pickFilter.filter(
            (x) => {
              return x.product === this.pickproduct
            })
          // 全非全
        } else if (this.pickproduct === '全部') {
          this.storage = this.pickFilter.filter(
            (x) => {
              return x.space === this.pickspace
            })
        } else { // 全非非
          this.storage = this.pickFilter.filter(
            (x) => {
              return x.space === this.pickspace && x.product === this.pickproduct
            })
        }
      } else if (this.pickspace === '全部') {
        // 非全全
        if (this.pickproduct === '全部') {
          this.storage = this.pickFilter.filter(
            (x) => {
              return x.light === this.picklight
            })
        } else { // 非全非
          this.storage = this.pickFilter.filter(
            (x) => {
              return x.light === this.picklight && x.product === this.pickproduct
            })
        }
      } else if (this.pickproduct === '全部') {
        // 非非全
        this.storage = this.pickFilter.filter(
          (x) => {
            return x.light === this.picklight && x.space === this.pickspace
          })
      } else {
        // 非非非
        this.storage = this.pickFilter.filter(
          (x) => {
            return x.light === this.picklight && x.space === this.pickspace && x.product === this.pickproduct
          })
      }
    }
  }
}

</script>
<style scoped>
.radio {
  margin-left: 5px;

}

.searchResultIn {
  font-size: 16px;
}

.searchResult {
  margin-top: 30px;
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.6px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #484848;
}

.leftselect {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

.main_section {
  margin: 20px 0px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 20px;
}

.pickFilter_title {
  font-weight: 700;
  margin-bottom: 0px;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.6px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #484848;
}

.picksub_title {
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.6px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #484848;
}

.picksub {
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 25px;
  margin-left: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #484848;
}

.subtitle {
  margin: 0px;
  word-wrap: break-word;
  font-size: 19px;
  line-height: 24px;
  padding-top: 10px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;
}

.pickFilter_name {
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 22px;
  padding-top: 15px;
  padding-bottom: 0;
  color: #484848;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}



.description {
  font-size: 17px;
  line-height: 25px;
  padding-top: 15px;
  padding-bottom: 0;
  color: #484848;
  font-weight: 300;
  min-height: 200px;
}

.sqare_photo {
  margin: 10px 0px;
  border-radius: 3px;
}

@media (max-width:768px) {
  .description {

    min-height: auto;
  }

  .m_select {
    float: left;
    width: 30%;
    padding: 1%;
  }
  .col-md-10.col-xs-12 {
    padding: 0px;
  }
  .searchResult {
    padding: 15px;
    margin-top: 0px;
    font-size: 20px;
    font-weight: 400;
  }
  .searchResultIn {
    padding-left: 15px;
  }
}

</style>
