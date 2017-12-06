<template>
  <div :class="first">
    <div class="prod_title">
      <!-- {{checkActivity}}
      {{checkPreProd}} -->
      <span>現在開始改造你家!</span>
    </div>
    <div class="row buydiv">
      <div :class="second">
        <template v-for="(prod,i) in item">
          <template v-if="i===isSelectedCarousel">
            <div class="prodImage">
              <img :src="prod.ImgUrl| UrlTransIP" class="img-responsive">
            </div>
          </template>
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

      <div :class="third">
        <!-- <h1>{{$route.params.prodID }}</h1> -->
        <!-- <h1>{{$route.query }}</h1> -->
        <h3 class="titleProd">{{itemShow.InventoryVal <= 0 ?"[預購]":""}}{{itemShow.ProdName+'—'+itemShow.ItemName}}</h3>
        <h3 class="descriptProd">{{itemShow.Description}}</h3>
        <template v-if="checkActivity">
          <div class="activityName">{{itemShow.ActivityName}}</div>
        </template>
        <template v-if="itemShow.StyleNoteForSale !== null">
          <div class="StyleNote">
            {{itemShow.StyleNoteForSale}}
          </div>
        </template>
        <div>
          <label>原價:</label>
          <span class="linethrough">
          <span class="textblack" style="color:black;font-size:2.3rem;">{{itemShow.OrignPrice}} 元
           </span>
          </span>
        </div>
        <template v-if="(checkPreProd && checkActivity) || (!checkPreProd && !checkActivity)">
          <div>
            <label>售價:</label>
            <span :class="{'linethrough':checkPreProd || checkActivity}">
            <span :class="{'textblack':checkPreProd || checkActivity}" style="color:red;font-size:2.3rem;">
              {{itemShow.SalePrice}} 元
           </span>
            </span>
          </div>
        </template>
        <template v-if="checkPreProd && !checkActivity">
          <div>
            <label>預購優惠:</label>
            <span class="activityFont" style="color:red;font-size:2.3rem;">{{itemShow.AddPrice}} 元</span>
          </div>
        </template>
        <template v-if="checkActivity">
          <div>
            <label>活動價:</label>
            <span class="activityFont" style="color:red;font-size:2.3rem;">{{itemShow.ActivityPrice}} 元</span>
          </div>
        </template>
        <!-- <div>
          <label>數量:</label>
          <span>{{itemShow.InventoryVal}} {{itemShow.Unit}}</span>
        </div> -->
        <div>
          <label>規格:</label>
          <span>{{itemShow.ItemSpec}}</span>
        </div>
        <!-- <div>
          <label>單位:</label>
          <span>{{itemShow.Unit}}</span>
        </div> -->
        <div>
          <label>樣式</label>
          {{getItem}}
          <RadioGroup v-model="itemSelect" type="button" size="large">
            <template v-for="(option,i) in item">
              <Radio :label="option.ItemNo">
                <!-- 47折標籤 暫時人工改-->
                <template v-if="optionCheckActivity(option)">
                  <div class="actBtn">49折</div>
                </template>
                <span @click="selectCarousel(i,option.ItemNo)">{{option.InventoryVal <= 0 ?"[預購]":""}}{{option.ItemName}}</span>
              </Radio>
            </template>
          </RadioGroup>
        </div>
        <!-- 量大優惠 -->
        <table class="table table-striped" style="margin-top:10px;">
          <tbody>
            <template v-if="BtnSpecialNumber !==null && BtnSpecialNumber.length > 0">
              <tr>
                <td colspan="2"><b>優惠方案</b></td>
              </tr>
              <template v-for="(itemBtn, i) in BtnSpecialNumber">
                <tr>
                  <td>
                    <label>方案 {{i+1}}.</label>
                  </td>
                  <td style="color: red;">
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
        <div>
          <label>數量</label>
          {{CalLargeQCal}}
          <br>
          <button class="btn btn-primary btnCust" @click="itemSize--">
            <i class="fa fa-minus" aria-hidden="true"></i>
          </button>
          <!-- 輸入數字框 -->
          <input type="text" class="inputsize" :value="itemSize_check" @blur="keyNum">
          <button class="btn btn-primary btnCust" @click="itemSize++">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
          <span style="font-size: 2.3rem;"><b>{{itemShow.Unit}}</b></span>
          <!-- 折扣資訊 -->
          <template v-if="Object.keys(LargeQCal).length > 0">
            <span style="font-size: 2.3rem;"><br>
            <template v-if="LargeQCal.type!==''">
              <Icon type="ios-information" size="35" color="#f60"></Icon>
            </template>
              <template v-if="LargeQCal.type==='1'">
                <span>還差<b class="colorRed">{{LargeQCal.needCount}}</b>{{itemShow.Unit}}，即可現省${{LargeQCal.disAmt}}元起</span>
          </template>
          <template v-if="LargeQCal.type==='2'">
            <span>已享優惠${{LargeQCal.disPrice}}元起<br>                  
                  還差<b class="colorRed">{{LargeQCal.needCount}}</b>{{itemShow.Unit}}，即可現省${{LargeQCal.disAmt}}元起
                </span>
          </template>
          <template v-if="LargeQCal.type==='3'">
            <span>已優惠${{LargeQCal.disPrice}}元起</span>
          </template>
          </span>
</template>
</div>
<div class="buybtn">
  <div class="col-md-5 col-xs-12">
    <button class="btn-direct btn btn-primary btn-lg" @click="addCart('direct')">直接購買</button>
  </div>
  <div class="col-md-5 col-xs-12">
    <button class="btn-buy btn btn-danger btn-lg" @click="addCart('')">加入購物車</button>
  </div>
</div>
</div>
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
        prevButton: '.swiper-button-prev'
        // slidesOffsetBefore: 10
      },
      // 已選擇的輪播圖
      isSelectedCarousel: 0
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
/*購買按鍵*/

.btn-buy {
  width: 100%;
  margin: 2px;
}

.btn-direct {
  width: 100%;
  margin: 2px;
}

.table>tbody>tr>td,
.table>tbody>tr>th,
.table>tfoot>tr>td,
.table>tfoot>tr>th,
.table>thead>tr>td,
.table>thead>tr>th {
  border-bottom: 1px solid #ccc;
  border-top: 0px;
}

.linethrough {
  color: red;
  text-decoration: line-through;
}

.textblack {
  color: black;
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
  padding: 10px;
  background: #dddee1;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
  font-weight: bold;
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

.selectpicker {
  width: 220px;
  margin: 10px;
  background: 0 0;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  border-radius: 5px;
}

.inputsize {
  max-width: 100px;
  padding: 2px 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  margin: 0px -5px !important;
  height: 40px;
}

.btnCust {
  border-radius: 0px;
  font-size: 19px;
  background: #2d8cf0;
  border: 1px solid #2d8cf0;
  color: #fff;
}

.buybtn {
  margin-top: 20px;
}

.colorRed {
  color: red;
}

.activityFont {
  color: #E55C6B;
  font-size: bold;
}

.activityName {
  margin: 5px 0px;
  background-color: #f57e28;
  width: 50%;
  color: white;
  padding: 3px;
  padding-left: 10px;
  border-radius: 2px;
}

.StyleNote {
  margin: 5px 0px;
  background: #57a3f3;
  width: 50%;
  color: white;
  padding: 3px;
  padding-left: 10px;
  border-radius: 2px;
}

.btn {
  margin: 5px 0px;
}

.margintop5 {
  margin-top: 5px;
}

@media (max-width:768px) {
  .btn-direct {
    width: 100%;
    margin: 10px 0px;
  }
  .activityName {
    width: 80%;
  }
  .StyleNote {
    width: 80%;
  }
}

.actBtn {
  background: #fac;
  width: 50px;
  height: 30px;
  position: absolute;
  z-index: 99;
  font-size: 15px;
  color: #FFFFFF;
  text-align: center;
  left: -20px;
  top: -13px;
  border-radius: 80%;
  transform: rotate(-20deg);
}
.selectedCarousel {
  border: 4px solid #2d8cf0;
  cursor: pointer; 
}
.prodImage{
  margin-bottom: 5px;
}
</style>
