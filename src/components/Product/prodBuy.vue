<template>
  <div :class="first">
    <div class="prod_title">
      <span>現在開始改造你家!</span>
    </div>
    <div class="row buydiv">
      <div :class="second">
        <img src="../../assets/temporyPic/prod-d1.jpg" class="img-responsive">
      </div>
      <!-- -->
      <div :class="third">
        <h1>{{ $route.params.prodID }}</h1>
        <h3>{{itemShow.ProdName+'--'+itemShow.ItemName}}</h3>
        <p>{{itemShow.description}}</p>
        <div>
          <label>原價:</label>
          <span>{{itemShow.OrignPrice}}</span>
        </div>
        <div>
          <label>售價:</label>
          <span>{{itemShow.SalePrice}}</span>
        </div>
        <div>
          <label>數量:</label>
          <span>{{itemShow.InventoryVal}}</span>
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
          <select class="selectpicker" v-model="itemSelect" @change="getItem">
                  <option v-for="option in item"  :value="option.ItemNo">{{option.ItemName}}</option>
            </select>
        </div>

        <div style="display:inline-block">
          <label>數量</label>
          <button class="btn btn-info" @click="itemSize++">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          <input type="text" class="inputsize" :value="itemSize_check" @blur="keyNum">
          <button class="btn btn-info" @click="itemSize--">
              <i class="fa fa-minus" aria-hidden="true"></i>
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
  let item = []
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  import axios from 'axios'
  import Lockr from 'lockr'
  import {
    noty
  } from '../../assets/AlertDialog.js'
  export default {
    components: {},
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
    data: function () {
      return {
        item,
        itemShow: {},
        itemSize: 1,
        itemSelect: ''
      }
    },
    created() {
      axios.get('/api/Ecpay/Get')
        .then((res) => {
          console.log(res)
        })
        .catch((res) => {
          console.log(res)
        })
      console.log(this.$route.params.prodID)
      axios.get(`/api/Product/GetProductDetail?prodID= ${this.$route.params.prodID}`)
        .then((response) => {
          this.item = response.data
          this.itemShow = this.item[0]
          this.itemSelect = this.item[0].ItemNo
          console.log(this.item)
        })
        .catch(function (error) {
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
        return this.itemSize
      }
    },
    methods: {
      ...mapActions([
        'IncreaseProduct'
      ]),
      getItem() {
        console.log(this.itemShow.ItemNo)
        this.item.forEach(val => {
          if (val.ItemNo === this.itemSelect) {
            console.log(this.itemShow.ItemNo)
            this.itemShow = val
            return
          }
        })
      },
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
              noty.ShowAlert('系統忙碌中，請稍後操作', 'warning')
              return false
            }
            var itemShow = this.itemShow
            var itemSize = this.itemSize
            var prodType = '1'
            // 數量不足
            if (response.data.data < this.itemSize) {
              console.log(this.itemSize)
              prodType = '3'
              noty.ConfirmDialog('很抱歉，同時間商品已被搶購一空，是否以預購方式購買', () => {
                this.IncreaseProduct({itemShow, itemSize, prodType})
                // 直接購買
                if (direct !== '') {
                  this.$router.push({
                    name: 'cart'
                  })
                }
              })
            } else {
              this.IncreaseProduct({itemShow, itemSize, prodType})
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
      },
      testlockr(data) {
        alert(data)
        Lockr.set('user_id', 12345)
      },
      getlockr() {
        var a = Lockr.get('user_id')
        alert(a)
      }
    }
  }

</script>
<style scoped>
  .buydiv {
    font-size: 17px;
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
