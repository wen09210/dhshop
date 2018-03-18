<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="category_title">每個空間都有專屬故事</div>
      <div class="subtitle">快來擁有你獨一無二的空間</div>
    </div>
    <ul>
      <!-- <div class="outtab">
        <span @click="all" class="spacetab" :class="[isActive ? activeClass : '']">所有空間</span>
        <span @click="livingRoom" class="spacetab" :class="[isActive ? activeClass : '']">客廳</span>
        <span @click="balcony" class="spacetab" :class="[isActive ? activeClass : '']">陽台</span>
        <span @click="bedRoom" class="spacetab" :class="[isActive ? activeClass : '']">臥室</span>
      </div> -->
      <div class="col-md-12">
        <div class="subtitle2">你想從哪開始呢?</div>
        <template>
          <Select v-model="modelSpace" class="modelSpace" placeholder="你想改變哪裡">
            <Option value="所有空間" label="所有空間">
              <span>所有空間</span>
            </Option>
            <Option value="客廳" label="客廳">
              <span>客廳</span>
            </Option>
            <Option value="臥室" label="臥室">
              <span>臥室</span>
            </Option>
            <Option value="陽台" label="陽台">
              <span>陽台</span>
            </Option>
            <Option value="辦公室" label="辦公室">
              <span>辦公室</span>
            </Option>
          </Select>
        </template>
      </div>
      {{chosen}}
      <div class='masonry'>
        <div class="masonry-item" v-for="(item,index) in changeSpace " :key="index">
          <li class="inproposal">
            <!-- {{item.postID}} -->
            <img :src="item.photo" class="img-responsive">
            <div class="proposal_title">{{item.mainTitle}}</div>
            <div class="proposal_description">{{item.content}}</div>
            <div class="Blog_tag">
              <Icon type="ios-location" color="#ccc"></Icon> {{item.area}}
              <Icon type="leaf" color="#ccc"></Icon>{{item.style}}</div>
            <div class="proposal_date">{{item.date}}</div>
            <!-- 使用產品 -->
            <div class="use_tag">
              <Icon type="pricetag"></Icon>使用的產品
            </div>
            <router-link :to="item.prodlink">
              <div v-for="(item,i) in changeSpace[index].useProd" class="productIn">
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
import proposal from '../../../static/file/proposal.json'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      changeSpace: [],
      modelSpace: '',
      proposal: proposal,
      swiperOption: {
        slidesPerView: 2,
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
    this.changeSpace = proposal.slice()
  },
  computed: {
    chosen() {
      if (this.modelSpace === '' || this.modelSpace === '所有空間') {
        this.changeSpace = this.proposal
      } else {
        this.changeSpace = this.proposal.filter(
          (x) => {
            return x.area === this.modelSpace
          })
      }
    }
  }
}

</script>
<style>
.modelSpace {
  width: 200px;
}

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

.subtitle,
.subtitle2 {
  margin: 0px;
  word-wrap: break-word;
  font-size: 19px;
  line-height: 24px;
  padding-top: 10px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;
}

.subtitle2 {
  margin-top: -15px;
  margin-bottom: 10px;
}

.inproposal {
  margin: 5px 0px;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  padding: 10px;

}

.proposal_date {
  text-align: right;
  color: #575454
}

.proposal_title {
  font-size: 17px;
  line-height: 25px;
  letter-spacing: 0.4px;
  padding-top: 12px;
  padding-bottom: 8px;
  font-weight: 400;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  color: #484848;
  font-weight: 700;
}

.proposal_description {
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

.proposal_tag {
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

.use_tag {
  color: #ff9800;
}
.Blog_tag {
  color: #484848;
  font-size:14px;
  font-weight: 600;
}
@media (max-width:768px) {
  .masonry {
    column-count: 1;
    column-gap: 0;
    display: inline-block;
  }

}

</style>
