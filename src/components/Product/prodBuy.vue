<template>
  <div :class="first">
    <div class="prod_title">
      <span>現在開始改造你家!</span>
    </div>
    <div class="row buydiv">
      <div :class="second">
        <img :src="itemShow.ImgUrl| UrlTransIP" class="img-responsive">
      </div>
      <!-- -->
      <div :class="third">
        <!-- <h1>{{$route.params.prodID }}</h1> -->
        <h3>{{itemShow.ProdName+'—'+itemShow.ItemName}}</h3>
        <br>
        <p>{{itemShow.Description}}</p>
        <br>
        <div>
          <label>原價:</label>
          <span>{{itemShow.OrignPrice}} 元</span>
        </div>
        <div>
          <label>售價:</label>
          <span>{{itemShow.SalePrice}} 元</span>
        </div>
        <div>
          <label>剩餘數量:</label>
          <span>{{itemShow.InventoryVal}} {{itemShow.Unit}}</span>
        </div>
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
          <button class="btn btn-info" @click="itemSize--">
            <i class="fa fa-minus" aria-hidden="true"></i>
          </button>
          <input type="text" class="inputsize" :value="itemSize_check" @blur="keyNum">
          <button class="btn btn-info" @click="itemSize++">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
        <div class="buybtn">
          <button class="btn btn-info btn-lg" @click="addCart('direct')">直接購買</button>
          <button class="btn btn-danger btn-lg a" @click="addCart('')">加入購物車</button>
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
      itemSelect: ''
    }
  },
  created() {
    console.log(this.$route.params.prodID)
    // 取回商品資料
    axios.get(`/api/Product/GetProductDetail?prodID= ${this.$route.params.prodID}`)
      .then((response) => {
        if (response.data.statu === 'err') {
          this.$noty.ShowAlert(response.data.msg, 'warning')
        } else {
          this.item = response.data.data
          this.itemShow = this.item[0]
          this.itemSelect = this.item[0].ItemNo
          console.log(this.item)
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
      console.log(this.itemShow.ItemNo)
      this.item.forEach(val => {
        if (val.ItemNo === this.itemSelect) {
          console.log(this.itemShow.ItemNo)
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
      axios.get(`/api/Product/GetProductQuentity?`, {
        params: {
          ProdID: this.itemShow.ProdID,
          ItemNo: this.itemShow.ItemNo
        }
      })
      .then((response) => {
        console.log(response)
        if (response.data.statu === 'err') {
          this.$noty.ShowAlert('系統忙碌中，請稍待片刻後重新操作<br>或直接聯繫客服人員為您處理', 'warning')
          return false
        }
        var itemShow = this.itemShow
        var itemSize = this.itemSize
        var prodType = '1'
        // 數量不足
        if (response.data.data < this.itemSize) {
          console.log(this.itemSize)
          prodType = '3'
          this.$noty.ConfirmDialog('很抱歉，同時間商品已被搶購一空，<br>是否以預購方式購買，同時享受優惠', () => {
            this.IncreaseProduct({
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
          })
        } else {
          this.IncreaseProduct({
            itemShow,
            itemSize,
            prodType
          })
          if (direct !== '') {
            this.$router.push({
              name: 'cart'
            })
          }
        }
      })
      .catch((response) => {
        console.log(response)
      })
      // this.IncreaseProduct({itemShow, itemSize})
    },
    keyNum() {
      this.itemSize = event.target.value
    }
  }
}

</script>
<style scoped>
.buydiv {
  font-size: 18px !important;
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
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buybtn {
  margin-top: 10px;
}

</style>
