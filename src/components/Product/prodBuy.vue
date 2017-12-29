<template>
  <div :class="first" v-show="this.item.length>0">
    <div class="prod_title" >
      <!-- {{checkActivity}}
      {{checkPreProd}} -->
      <span>現在開始改造你家!</span>
    </div>
    <div class="row buydiv">
      <div :class="[second,'productCarsoul']">
        <template v-for="(prod,i) in item">
            <div v-show="i===isSelectedCarousel" class="prodImage">
              <img :src="prod.ImgUrl| UrlTransIP" class="img-responsive">
            </div>
        </template>
        <!-- 輪播圖 -->
        <swiper :options="swiperOptionThumbs" ref="swiperThumbs">
          <template v-for="(prod,i) in item">
            <swiper-slide :class="{'selectedCarousel':i===isSelectedCarousel}">
              <img :src="prod.ImgUrl| UrlTransIP" class="img-responsive" @click="selectCarousel(i,prod.ItemNo)">
            </swiper-slide>
          </template>
          <div class="swiper-button-prev swiper-button-white" style="left:1px" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" style="right:1px" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 輪播圖  end-->
      <!-- 商品選擇 -->
      <!-- <button class="btn btn-info" @click = "mobileBuy = !mobileBuy">顯示</button> -->
      <transition name="slide-fade">
      <!-- <div :class="[third,{'isMobileBuy':mobileBuy}]" v-if="mobileBuy"> -->
      <div :class="third" >        
        <!-- <h1>{{$route.params.prodID }}</h1> -->
        <!-- <h1>{{$route.query }}</h1> -->
        <h3 class="titleProd">{{itemShow.InventoryVal <= 0 ?"[預購]":""}}{{itemShow.ProdName+'-'+itemShow.ItemName}}</h3>
        <h3 class="descriptProd">{{itemShow.Description}}</h3>
        <div style="display:inline">
          <!-- 活動標題 -->
        <template v-if="checkActivity">
          <div class="activityNameNew">
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            {{itemShow.ActivityName}}
            </div>
        </template>
          <!-- 活動標題 end-->
        
        <!-- 樣式註記 -->
        <template v-if="itemShow.StyleNoteForSale !== null">
          <div class="StyleNote">
            <i class="fa fa-truck" aria-hidden="true"></i>
            {{itemShow.StyleNoteForSale}}
          </div>
        </template>
        <!-- 樣式註記 end -->
        
        </div>
        <!-- 小版商品圖 -->
        <div class="col-xs-6 mobilePic">
          <template v-for="(prod,i) in item">
          <template >
            <div v-show="i===isSelectedCarousel" class="prodImage">
              <img :src="prod.ImgUrl| UrlTransIP" class="img-responsive">
            </div>
          </template>
        </template>
        </div>
        <!-- 小版商品圖end -->        
        <!-- 小版售價靠右 --> 
        <div>       
        <div class="mobileSale">
        <div >
          <span class="textblack">原價:</span>
          <span class="linethrough">
          <span class="">&nbsp{{itemShow.OrignPrice}} 元
           </span>
          </span>
        </div>
        <template v-if="(checkPreProd && checkActivity) || (!checkPreProd && !checkActivity)">
          <div>
            <span :class="['activityLabel',{'textblack':checkPreProd || checkActivity}]">售價:</span>
            <span :class="{'linethrough':checkPreProd || checkActivity}">
            <span :class="['activityFont',{'textblack':checkPreProd || checkActivity}]">
              &nbsp{{itemShow.SalePrice}} 元
           </span>
            </span>
          </div>
        </template>
        <template v-if="checkPreProd && !checkActivity">
          <div class="">
            <span class="activityLabel">預購價:</span>
            <span class="activityFont">&nbsp{{itemShow.AddPrice}} 元</span>
          </div>
        </template>
        <template v-if="checkActivity">
          <div class="">
            <span class="activityLabel">活動價:</span>
            <span class="activityFont">&nbsp{{itemShow.ActivityPrice}} 元</span>
          </div>
        </template>
        </div>
        </div>
        <!-- 小版靠右 end -->
        
        <!-- <div>
          <label>數量:</label>
          <span>{{itemShow.InventoryVal}} {{itemShow.Unit}}</span>
        </div> -->
        
        <!-- <div>
          <label>單位:</label>
          <span>{{itemShow.Unit}}</span>
        </div> -->
          <div class="col-xs-12 noPadding margin5px">
          <!-- <span>樣式</span> -->
          {{getItem}}
          <RadioGroup v-model="itemSelect" type="button" size="large" class="margin5px">
            <template v-for="(option,i) in item">
              <Radio :label="option.ItemNo">
                <!-- 47折標籤 暫時人工改-->
                <template v-if="optionCheckActivity(option)">
                  <div class="activityBtn">47折</div>
                </template>
                <span  style="font-weight:500;" @click="selectCarousel(i,option.ItemNo)">{{option.InventoryVal <= 0 ?"[預購]":""}}{{option.ItemName}}</span>
              </Radio>
            </template>
          </RadioGroup>
          </div>
          <div class="col-xs-12 noPadding">
            <span>規格:</span>
            <span style="font-weight:300;">&nbsp{{itemShow.ItemSpec}}</span>
          </div>
        <!-- 量大優惠 -->
        <table class="table" style="margin-bottom: 10px;">
          <tbody>
            <template v-if="BtnSpecialNumber !==null && BtnSpecialNumber.length > 0">
              <tr>
                <td colspan="2">
                  <i class="fa fa-tags" aria-hidden="true"></i>
                  <b>優惠方案</b>
                  </td>
              </tr>
              <template v-for="(itemBtn, i) in BtnSpecialNumber">
                <tr >
                  <td>
                    <span>方案 {{i+1}}.</span>
                  </td>
                  <td class="">
                    <div v-html="itemBtn.title"></div>
                    <!-- <input type="radio" name="spec" @click="spcBtn(itemBtn.number)"> {{itemBtn.title}}
                      </input> -->
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
        <!-- 量大優惠 end-->
        <!-- 折扣資訊-->
          {{CalLargeQCal}}
        
          <template v-if="Object.keys(LargeQCal).length > 0">
            <span style="font-size: 2.1rem;">
            <template v-if="LargeQCal.type!==''">
              <i class="fa fa-cart-plus" aria-hidden="true" style="color:#f57e28;font-size: 28px;"></i>
              <!-- <Icon type="ios-information" size="35" color="#f57e28"></Icon> -->
            </template>
              <template v-if="LargeQCal.type==='1'">
                <span>還差
                  <b class="colorOrange">{{LargeQCal.needCount}}</b>
                {{itemShow.Unit}}，即可現省<b class="colorOrange">${{LargeQCal.disAmt}}元</b>起
                </span>
              </template>
              <template v-if="LargeQCal.type==='2'">
                <span>已享優惠${{LargeQCal.disPrice}}元起
                  <br>                  
                      還差
                      <b class="colorOrange">{{LargeQCal.needCount}}</b>
                      {{itemShow.Unit}}，即可現省<b class="colorOrange">${{LargeQCal.disAmt}}元</b>起
                    </span>
              </template>
              <template v-if="LargeQCal.type==='3'">
                <span>已優惠${{LargeQCal.disPrice}}元起</span>
              </template>
            </span>
          </template>
          <!-- 折扣資訊 end-->
        <!-- 數量差xxx個 -->
        <div style="margin-top: 5px">
          <span>數量</span>
          <button class="btn btn-primary btnCust" @click="itemSize--">
            <i class="fa fa-minus" aria-hidden="true"></i>
          </button>
          <!-- 輸入數字框 -->
          <input type="text" class="inputsize" :value="itemSize_check" @blur="keyNum">
          <button class="btn btn-primary btnCust" @click="itemSize++">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
          <span style="font-size: 2.1rem;">{{itemShow.Unit}}</span>

          
        </div>
        <!-- 數量差xxx個 end -->
        <div class="buybtn row">        
        <!-- <div class="col-md-5 col-xs-5 noPadding">
          <button class="btnBlue btn btn-danger btn-lg btn-block" @click="addCart('')">加入購物車</button>
        </div>
        <div class="col-md-7 col-xs-7 noPadding">
          <button class="btnOrange btn btn-primary  btn-lg btn-block" @click="addCart('direct')">直接購買</button>
        </div> -->
        <div class="col-md-12 col-xs-12 noPadding">
          <button class="btnOrange btn btn-primary  btn-lg btn-block" @click="addCart('direct')">
            <h3>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              直接購買
              </h3>
            </button>
        </div>
        </div>
      </div>
      </transition>
    <!-- 商品選擇 end -->
  </div>
</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Lockr from 'lockr'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
export default {
  components: { swiper, swiperSlide },
  // 大小版css控制
  props: {
    first: {
      type: [String],
      required: false,
      'default': 'container'
    },
    second: {
      type: [String],
      required: false,
      'default': 'col-md-5'
    },
    third: {
      type: [String],
      required: false,
      'default': 'col-md-7'
    }
  },
  data: function() {
    return {
      // 所有資料
      item: [],
      // 樣式資料
      itemShow: {},
      itemSize: 1,
      // 選擇的樣式id
      itemSelect: '',
      // 動態算大數量優惠差距
      LargeQCal: {
        type: '', // 1.未滿 2.區間 3.最後區間
        disPrice: 0, // 已優惠金額
        needCount: 0, // 尚差 x 數量
        disAmt: 0 // 達數量，現省xxx元
      },
      // 檢查是否檔期優惠
      IsActivity: false,
      // 檢查是否預購優惠
      IsPreProduct: false,
      BtnSpecialNumber: [],
      // // 輪播參數
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 5
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 5
          }
        }
        // slidesOffsetBefore: 10
      },
      // 已選擇的輪播圖
      isSelectedCarousel: 0,
      mobileBuy: false
    }
  },
  created() {
    Lockr.set('utmTrack', JSON.stringify(this.$route.query))
    // console.log(this.$route.params.prodID)
    // 取回商品資料
    axios.get(`/api/Product/GetProductDetail?prodID= ${this.$route.params.prodID}`)
      .then((response) => {
        if (response.data.statu === 'err') {
          // this.$noty.ShowAlert(response.data.msg, 'warning')
          this.$Notice.warning({
            title: 'dHSHOP 提醒',
            desc: response.data.msg
          })
        } else {
          this.item = response.data.data
          this.itemShow = this.item[0]
          this.itemSelect = this.item[0].ItemNo
          // 大坪數按鈕
          this.BtnSpecialNumber = JSON.parse(this.item[0].BtnSpecialNumber)
          // this.BtnSpecialNumber = JSON.parse('')
          // console.log(this.BtnSpecialNumber)
          this.$parent.$emit('passProdInf', this.itemShow)
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  computed: {
    ...mapGetters([
      'GetShoppingCartItem'
    ]),
    checkActivity() {
      // 檢查是否在活動區間
      if (this.itemShow.ActivityStart <= new Date().getTime() / 1000 &&
        this.itemShow.ActivityEnd >= new Date().getTime() / 1000) {
        this.IsActivity = true
        return true
      } else {
        this.IsActivity = false
        return false
      }
    },
    checkPreProd() {
      // 檢查是否是預購商品
      if (this.itemShow.InventoryVal <= 0) {
        this.IsPreProduct = true
        return true
      } else {
        this.IsPreProduct = false
        return false
      }
    },
    itemSize_check() {
      if (this.itemSize <= 0) {
        this.itemSize = 1
      }
      if (this.itemSize >= 500) {
        this.itemSize = 500
      }
      return this.itemSize
    },
    // 樣式選擇改變，切換呈現
    getItem() {
      // console.log(this.itemShow.ItemNo)
      this.item.forEach(val => {
        if (val.ItemNo === this.itemSelect) {
          // console.log(this.itemShow.ItemNo)
          this.itemShow = val
          return
        }
      })
    },
    CalLargeQCal() {
      if (this.BtnSpecialNumber !== null && this.BtnSpecialNumber.length > 0) {
        // 計算每一區間
        for (var i = 0; i < this.BtnSpecialNumber.length; i++) {
          // console.log(i)
          // console.log(parseInt(this.BtnSpecialNumber[i].number))
          // console.log(parseInt(this.BtnSpecialNumber[i].eachdiscount))
          var minus = parseInt(this.itemSize) - parseInt(this.BtnSpecialNumber[i].number)
          // 第一區間(未滿)
          if (minus < 0 && i === 0) {
            this.LargeQCal.type = '1'
            this.LargeQCal.needCount = -minus
            this.LargeQCal.disAmt = parseInt(this.BtnSpecialNumber[i].number) * parseInt(this.BtnSpecialNumber[i].eachdiscount)
            break
          } else if (minus >= 0 && i === this.BtnSpecialNumber.length - 1) {
            // 最後區間
            this.LargeQCal.type = '3'
            this.LargeQCal.disPrice = parseInt(this.itemSize) * parseInt(this.BtnSpecialNumber[i].eachdiscount)
          } else if (minus < 0 && i !== 0) {
            // 其他中間區間
            this.LargeQCal.type = '2'
            this.LargeQCal.needCount = -minus
            this.LargeQCal.disPrice = parseInt(this.itemSize) * parseInt(this.BtnSpecialNumber[i - 1].eachdiscount)
            this.LargeQCal.disAmt = parseInt(this.BtnSpecialNumber[i].number) * parseInt(this.BtnSpecialNumber[i].eachdiscount)
            break
          }
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'IncreaseProduct'
    ]),
    optionCheckActivity(option) {
      if (option.ActivityStart <= new Date().getTime() / 1000 &&
        option.ActivityEnd >= new Date().getTime() / 1000) {
        return true
      } else {
        return false
      }
    },
    // 檢查數量是否足夠
    addCart(direct) {
      // #region
      /* global fbq */
      fbq('track', 'AddToCart', { content_ids: [this.itemShow.ItemNo], content_type: this.itemShow.ProdID, value: this.itemShow.SalePrice, currency: 'TWD' })
      /* global ga */
      ga('send', 'event', this.itemShow.ItemName, '加到購物車', this.itemShow.ItemName)
      /* global hj */
      hj('trigger', 'addtocart_mainproduct')
      hj('tagRecording', ['addtocart_mainproduct'])
      // #endregion
      axios.get(`/api/Product/GetProductQuentity?`, {
        params: {
          ProdID: this.itemShow.ProdID,
          ItemNo: this.itemShow.ItemNo
        }
      })
        .then((response) => {
          // console.log(response)
          if (response.data.statu === 'err') {
            // this.$noty.ShowAlert('系統忙碌中，請稍待片刻後重新操作<br>或直接聯繫客服人員為您處理', 'warning')
            this.$Notice.warning({
              title: 'dHSHOP 提醒',
              desc: '系統忙碌中，請稍待片刻後重新操作<br>或直接聯繫客服人員為您處理'
            })
            return false
          }
          var prodType = '1' // (現貨)
          // 數量不足(預購)
          if (response.data.data.InventoryVal < this.itemSize) {
            //  檢查是否完售
            let PreVal = response.data.data.F_PreVal + response.data.data.S_PreVal
            if (PreVal < this.itemSize) {
              this.$Notice.warning({
                title: 'dHSHOP 提醒',
                desc: '很抱歉，同時間商品已被搶購一空，請選擇其他商品購買'
              })
              return false
            }
            // 檢查購物車內是否有現貨
            if (!this.checkProdType('1')) {
              return false
            }
            // console.log(this.itemSize)
            prodType = '3' // (預購)
            // #region檢查檔期預購或一般預購
            // 非檔期時預購
            if (response.data.data.InventoryVal !== 0) {
              this.$Modal.confirm({
                title: 'dHSHOP 提醒',
                okText: '確定',
                content: `目前現貨數量為 ${response.data.data.InventoryVal}${this.itemShow.Unit}，是否以預購方式購買，同時享有優惠。`,
                onOk: () => {
                  // 加入購物車
                  this.IncreasePrd(prodType, direct)
                }
              })
            } else {
              // 檔期時預購不問直接加
              // 加入購物車
              this.IncreasePrd(prodType, direct)
            }
            // #endregion
          } else {
            // 檢查購物車內是否有現貨
            if (!this.checkProdType('3')) {
              return false
            }
            // 加入購物車
            this.IncreasePrd(prodType, direct)
          }
        })
        .catch((response) => {
          console.log(response)
        })
      // this.IncreaseProduct({itemShow, itemSize})
    },
    keyNum() {
      this.itemSize = event.target.value
    },
    spcBtn(number) {
      if (number !== '') {
        this.itemSize = number
      }
    },
    // 檢查是否現貨、預購同時
    checkProdType(type) {
      let resType = this.GetShoppingCartItem.find(x => x.prodType === type)
      if (!resType) {
        // console.log(true)
        return true
      } else {
        this.$Modal.confirm({
          title: 'dHSHOP 提醒',
          okText: '立即結帳',
          content: `因出貨時間不同，為了讓您能快速收到商品，「現貨商品」與「預購商品」需分開結帳。`,
          onOk: () => {
            this.$router.push({
              name: 'cart'
            })
          }
        })
        return false
      }
    },
    // 加入購物車動作
    IncreasePrd(prodType, direct) {
      var itemShow = this.itemShow
      var itemSize = this.itemSize
      var IsPreProduct = this.IsPreProduct
      var IsActivity = this.IsActivity
      // 加入購物車
      this.IncreaseProduct({
        IsPreProduct,
        IsActivity,
        itemShow,
        itemSize,
        prodType
      })
      // 直接購買則導到購物車
      if (direct !== '') {
        this.$router.push({
          name: 'cart'
        })
      }
    },
    // 選擇輪播圖
    selectCarousel(index, itemNo) {
      this.itemSelect = itemNo
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
.table>tbody>tr>td,
.table>tbody>tr>th,
.table>tfoot>tr>td,
.table>tfoot>tr>th,
.table>thead>tr>td,
.table>thead>tr>th {
  border-bottom: 1px solid #ccc;
  border-top: 0px;
}
.margin5px{
  margin: 5px 0px;
}
.linethrough {
  color: rgba(0, 0, 0, 0.3686274509803922);
  text-decoration: line-through;
}

.textblack {
  font-size: 1.8rem !important;
  color: rgba(0, 0, 0, 0.3686274509803922) !important;
  font-weight: normal !important;
}
.activityLabel{
  font-size: 1.8rem;
  /* font-weight: bold; */
}
.activityFont {
  font-size: 2.3rem;
  color: #f57e28;
  font-weight: bold;
}

.label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}

.buydiv {
  font-size: 18px !important;
}

.titleProd {
  padding: 0px 0px 10px 0px;
  /* background: #dddee1; */
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  border-bottom: 2px dashed #dddee1
}

.descriptProd {
  margin-bottom: 10px;
}

.prod_title {
  text-align: center;
  padding: 15px 0px 10px 0px;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 30px;
  border-bottom: 1px solid #222222;
}

.inputsize {
  max-width: 100px;
  padding: 3px 10px 10px 20px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 2px solid #ccc;
  margin: 0px -4px !important;
}

.btnCust {
  border-radius: 0px;
  background: #fff;
  border: 2px solid #ccc;
  color: #ccc;
  font-size: 20px
}

.buybtn {
  margin-top: 10px;
  margin-left: 1px;
  margin-right: 1px;
}
.btnOrange{
  background: #f57e28;
  border: 0px;
  border-radius: 0px;
  margin-left: 5px;
  padding: 15px 10px;
}
.btnBlue{
  background: rgba(87, 163, 243, 0.8313725490196079);
  border: 0px;  
  border-radius: 0px;
  margin-right: 5px;
  padding: 15px 10px;
}
.colorOrange {
  color: #f57e28;
}

.mobileSale{
  margin: 10px 0px 0px 0px;
}
.mobilePic{
   display: none;
   max-width: 150px;
 }

.activityNameNew{
  display: inline;
  font-weight: bold;
  margin: 5px 0px;
  /* background-color: #ffaacc33; */
  width: 50%;
  color: #f57e28;
  padding: 3px;
  padding-left: 10px;
  border-radius: 2px;
  /* border: 1px solid #fac; */
	/* -webkit-animation: backgroundflash linear 3s infinite; */
	/* animation: backgroundflash linear 3s infinite; */
}


@keyframes backgroundflash {
	0% { color: #f57e28; } 
  50% {color: #f57e2878;}
	100% { color: #f57e28; }
}
.StyleNote {
  display: inline;  
  margin: 5px 0px;
  background: white;
  width: 50%;
  color: #57a3f3;
  padding: 3px;
  padding-left: 10px;
  border-radius: 2px;
}

/* 小版 */
@media (max-width:767px) {
  .titleProd{
    margin-top: 20px;
  }
  .btn-direct {
    width: 100%;
    margin: 10px 0px;
  }
  .activityNameNew{
    width: 100%;
    display: block;
    padding: 0px;
    margin: 0px;
  }
  .StyleNote {
    width: 80%;
    display: block;
    padding: 0px;
    margin: 0px;
  }
  .buybtn {
  margin-top: 5px;
  margin-left: 1px;
  margin-right: 1px;
 }
 /* 小版商品資訊 */
 .mobilePic{
   display: inherit;
   padding: 0px;
 }
 .mobileSale{
    margin: 0px;
    position: relative;
    min-height: 1px;
    padding-right: 5px;
    padding-left: 5px;
    float: left;
    width: 50%
 }
 .productCarsoul{
   display: none;
 }
}

.activityBtn {
  background: rgba(87, 163, 243, 0.8313725490196079);
  width: 35px;
  height: 30px;
  position: absolute;
  z-index: 99;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
  left: -15px;
  top: -13px;
  border-radius: 80%;
  transform: rotate(-20deg);
}

.selectedCarousel {
  border: 3px solid #2d8cf0;
  cursor: pointer;
}

.prodImage {
  margin-bottom: 5px;
}
.isMobileBuy{
  background: rgba(0, 0, 0, 0.6);
  z-index: 20000000;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.noPadding{
  padding: 0px;
}
.btn-primary.active.focus, .btn-primary.active:focus, .btn-primary.active:hover, .btn-primary:active.focus, .btn-primary:active:focus, .btn-primary:active:hover, .open>.dropdown-toggle.btn-primary.focus, .open>.dropdown-toggle.btn-primary:focus, .open>.dropdown-toggle.btn-primary:hover {
    color: #555;
    background-color: rgba(255,255,255,.15);
    border: 1px solid #ccc;
}
.table {
    margin-bottom: 10px 0px;
    border: 2px dashed lightgray;
}
</style>
