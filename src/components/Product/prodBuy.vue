<template>
  <div :class="first">
    <div class="prod_title">
      <!-- {{checkActivity}}
      {{checkPreProd}} -->
      <span>現在開始改造你家!</span>
    </div>
    <div class="row buydiv">
      <div :class="second">
        <img :src="itemShow.ImgUrl| UrlTransIP" class="img-responsive">
      </div>
      <!-- -->
      <div :class="third">
        <!-- <h1>{{$route.params.prodID }}</h1> -->
        <h3 class="titleProd">{{itemShow.ProdName+'—'+itemShow.ItemName}}</h3>
        <h3 class="descriptProd">{{itemShow.Description}}</h3>
        <template v-if="checkActivity">
          <h4 class="activityFont">{{itemShow.ActivityName}}</h4>
        </template>
        <template v-if="itemShow.StyleNoteForSale !== null">
          <div class="StyleNote">
            {{itemShow.StyleNoteForSale}}
          </div>
        </template>
        <div>
          <label>原價:</label>
          <span class="linethrough">
          <span class="textblack">{{itemShow.OrignPrice}} 元
           </span>
          </span>
        </div>
        <template v-if="!checkPreProd">
          <div>
            <label>售價:</label>
            <span :class="{'linethrough':checkPreProd || checkActivity}">
          <span :class="{'textblack':checkPreProd || checkActivity}">{{itemShow.SalePrice}} 元
           </span>
            </span>
          </div>
        </template>
        <template v-if="checkPreProd && !checkActivity">
          <div>
            <label>預購優惠:</label>
            <span class="activityFont">{{itemShow.AddPrice}} 元</span>
          </div>
        </template>
        <template v-if="checkActivity">
          <div>
            <label>活動價:</label>
            <span class="activityFont">{{itemShow.ActivityPrice}} 元</span>
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
        <div>
          <label>單位:</label>
          <span>{{itemShow.Unit}}</span>
        </div>
        <div>
          <label>樣式</label>
          {{getItem}}
          <RadioGroup v-model="itemSelect" type="button" size="large">
            <template v-for="option in item">
              <Radio :label="option.ItemNo">
                <span>{{option.ItemName}}</span>
              </Radio>
            </template>
          </RadioGroup>
          <!-- <select class="selectpicker" v-model="itemSelect" @change="getItem">
            <option v-for="option in item" :value="option.ItemNo">
              {{option.ItemName}}
            </option>
          </select> -->
        </div>
        <div style="display:inline-block">
          <label>數量</label>
          <br>
          <button class="btn btn-primary btnCust" @click="itemSize--">
            <i class="fa fa-minus" aria-hidden="true"></i>
          </button>
          <input type="text" class="inputsize" :value="itemSize_check" @blur="keyNum">
          <button class="btn btn-primary btnCust" @click="itemSize++">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        
        <template v-if="BtnSpecialNumber.length > 0">
            <template v-for="itemBtn in BtnSpecialNumber">
              <button class="btn btn-success btn-lg" @click="spcBtn(itemBtn.number)">
                <Icon type="ios-pricetags"></Icon> {{itemBtn.title}}
              </button>
            </template>
        </template>
        </div>
        <div class="buybtn">
          <button class="btn btn-primary btn-lg" @click="addCart('direct')">直接購買</button>
          <button class="btn btn-danger btn-lg" @click="addCart('')">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
export default {
  components: {},
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
      'default': 'col-md-4'
    },
    third: {
      type: [String],
      required: false,
      'default': 'col-md-8'
    }
  },
  data: function() {
    return {
      // 所有資料
      item: [],
      // 樣式資料
      itemShow: {},
      itemSize: 1,
      itemSelect: '',
      // 檢查是否檔期優惠
      IsActivity: false,
      // 檢查是否預購優惠
      IsPreProduct: false,
      BtnSpecialNumber: []
    }
  },
  created() {
    // console.log(this.$route.params.prodID)
    // 取回商品資料
    // axios.get(`/api/Product/GetProductDetail?prodID= ${this.$route.params.prodID}`)
    //   .then((response) => {
    //     if (response.data.statu === 'err') {
    //       // this.$noty.ShowAlert(response.data.msg, 'warning')
    //       this.$Notice.warning({
    //         title: 'dHSHOP 提醒',
    //         desc: response.data.msg
    //       })
    //     } else {
    //       this.item = response.data.data
    //       this.itemShow = this.item[0]
    //       this.itemSelect = this.item[0].ItemNo
    //       // 大坪數按鈕
    //       // this.BtnSpecialNumber =JSON.parse(this.item[0].BtnSpecialNumber)
    //       this.BtnSpecialNumber = JSON.parse('[{"title":"6坪專案","number":"12"},{"title":"15坪專案","number":"30"}]')
    //       // console.log(this.item)
    //       this.$parent.$emit('passProdInf', this.itemShow)
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
    this.BtnSpecialNumber = JSON.parse('[{"title":"6坪專案","number":"12"},{"title":"15坪專案","number":"30"}]')
    console.log(this.BtnSpecialNumber)
  },
  computed: {
    ...mapGetters([
      'GetShoppingCartItem'
    ]),
    checkActivity() {
      // 檢查是否在活動區間
      if (this.itemShow.ActivityStart >= new Date() && this.itemShow.ActivityStart <= new Date()) {
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
    getItem() {
      // console.log(this.itemShow.ItemNo)
      this.item.forEach(val => {
        if (val.ItemNo === this.itemSelect) {
          // console.log(this.itemShow.ItemNo)
          this.itemShow = val
          return
        }
      })
    }
  },
  methods: {
    ...mapActions([
      'IncreaseProduct'
    ]),
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
        console.log(true)
        return true
      } else {
        this.$Modal.confirm({
          title: 'dHSHOP 提醒',
          okText: '立即結帳',
          content: `因出貨時間不同，為了讓您能快速收到商品，現貨商品與預購商品需分開結帳。`,
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
    }
  }
}

</script>
<style scoped>
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
  width: 90%;
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
  padding: 6px 12px;
  font-size: 14px;
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
  font-size: 18px;
  background: #2d8cf0;
  border: 1px solid #2d8cf0;
}

.buybtn {
  margin-top: 20px;
}

.activityFont {
  color: #E55C6B;
  font-size: bold;
}

.StyleNote {
  background: #E55C6B;
  width: 50%;
  color: white;
  padding: 3px;
  padding-left: 10px;
  border-radius: 2px;
}
.btn {
  margin: 0px 5px;
}
</style>
