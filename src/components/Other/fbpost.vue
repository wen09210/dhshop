<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="category_title">小編編精選</div>
      <div class="subtitle">錯過了哪些精采訊息，別怕，都在這裡!</div>
    </div>
    <ul>
      <div class='masonry'>
        <div class="masonry-item" v-for="(item,index) in  fbpost" :key="index">
          <li class="infbpost">
            <!-- {{item.postID}} -->
            <img :src="item.photo" class="img-responsive">
            <div class="fbpost_title">{{item.mainTitle}}</div>
            <div class="fbpost_description">{{item.content}}</div>
            <div class="fbpost_date">{{item.date}}</div>
            <!-- 使用產品 -->
            <div class="use_tag">
              <Icon type="pricetag"></Icon>使用的產品
            </div>
            <router-link :to="item.prodlink">
              <div v-for="(item,i) in fbpost[index].useProd" class="productIn">
              <div class="prodBtn">
                
                  <div class="outbox">
                    <div class="prod_simg">
                      <img :src="item.simg" alt="" class="img-responsive">
                    </div>
                    <span>{{item.stitle}}</span>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>
<script>
import fbpost from '../../../static/file/fbpost.json'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      fbpost: fbpost,
      fbpostIn: {},
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
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
    // let dec = this.fbpost.find(x => x.postID === this.fbpost.index)
    // this.fbpostIn = dec
    // console.log(this.fbpostIn)
  }
}

</script>
<style>
.masonry {
  column-count: 3;
  column-gap: 0;
  display: inline-block;
}

.masonry-item {
  break-inside: avoid;
  box-sizing: border-box;
  padding: 10px;
}

.main_section {
  margin: 20px 0px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 20px;
}

.category_title {
  font-weight: 700;
  margin-bottom: 0px;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.6px;
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

.infbpost {
  margin: 5px 0px;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  padding: 10px;

}

.fbpost_date {
  text-align: right;
  color: #575454
}

.fbpost_title {
  font-size: 17px;
  line-height: 25px;
  letter-spacing: 0.4px;
  padding-top: 12px;
  text-align: center;
  padding-bottom: 8px;
  font-weight: 400;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  color: #484848;
  font-weight: 700;
}

.fbpost_description {
  font-size: 16px;
  line-height: 25px;
  padding-top: 0px;
  padding-bottom: 10px;
  color: #484848;

  /* display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
}

.fbpost_tag {
  color: #FF9800;
  padding-top: 3px;
}

/* 產品*/

.productIn {
  display: table;
  position: relative;
  margin: 10px 10px 0px 0px;
}

 .prodBtn {
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

.outbox {
  display: flex;
  align-items: center;
}

.prod_simg {
  max-width: 60px;
}

.productIn span {
  color: #484848;
  padding: 10px;
  font-size: 15px;
}
.use_tag{
  color:#ff9800;
}
@media (max-width:768px) {
  .masonry {
    column-count: 1;
    column-gap: 0;
    display: inline-block;
  }

}

</style>
