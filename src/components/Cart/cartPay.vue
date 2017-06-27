<template>
  <div class="Cartcontainer">
    <h2>金額</h2>
    <hr>
    <template v-if="Object.keys(GetShoppingCartItem).length===0">
      <h4>購物車內目前沒有商品，請先選購商品</h4>
    </template>

    <template v-else>
      <div>
        <div class=" tablePay">
          <div class="row tableTitle">
            <div class="col-md-2">圖片</div>
            <div class="col-md-1">類型</div>
            <div class="col-md-2">名稱</div>
            <div class="col-md-2">樣式</div>
            <div class="col-md-1">單價</div>
            <div class="col-md-2">數量</div>
            <div class="col-md-1">小計</div>
            <div class="col-md-1">功能</div>
          </div>

          <div v-for="item in GetShoppingCartItem" class="row tableTR">
            <div class="col-md-2 col-xs-6"><img src="../../assets/temporyPic\/hot1.jpg" class="payimg"></div>
            <div class="col-md-1 col-xs-6 ">
              <span class="prodType">{{item.prodType |prodTypeToCH}}</span>
            </div>
            <div class="col-md-2 col-xs-6">{{item.name}}</div>
            <div class="col-md-2 col-xs-6">{{item.style}}</div>
            <div class="col-md-1 col-xs-6">{{item.unitPrice}}</div>
            <div class="col-md-2 col-xs-6">
              <button class="btn btn-info" @click="minusCartCount(item)">
                <i class="fa fa-minus" aria-hidden="true"></i>
              </button>
              <input type="text" class="inputQuentity" :value="item.count" @change="keyNum(item)">
              <button class="btn btn-info" @click="addCartCount(item)">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button> {{item.unit}}
            </div>
            <div class="col-md-1 col-xs-6 hideTd">{{item.totalAmt}}</div>
            <div class="col-md-1 col-xs-6 hideTd">
              <a class="btn btn-danger" @click="ReduceProduct(item)">
              <i class="fa fa-trash-o fa-lg"></i>
            </a>
            </div>

            <div class="col-md-2 col-xs-12  tableTd">
              <span class="leftTd">
                    <a class="btn btn-danger" @click="ReduceProduct(item)">
                    <i class="fa fa-trash-o fa-lg">忍痛放棄</i>
                    </a>
                </span>
              <span class="rightTd">
                   小計 : {{item.totalAmt}}
                </span>
            </div>
          </div>

        </div>
        <div class="payTotal row">
          {{caculateAmt}}
          <div class="lineContent">
            <div class="rightContent">原價:</div>
            <div class="rightAmt">{{GetshowAmtData.totalProdAmt}}</div>
          </div>
          <div class="lineContent">
            <div class="rightContent">運費:</div>
            <div class="rightAmt">{{GetshowAmtData.totalFee}}</div>
          </div>
          <div class="lineContent">
            <div class="leftContent">{{GetshowAmtData.disProdName}}</div>
            <div class="rightContent">購物折扣:</div>
            <div class="rightAmt">{{GetshowAmtData.discountProd}}</div>
          </div>
          <div class="lineContent">
            <div class="leftContent">{{GetshowAmtData.disDeliveryName}}</div>
            <div class="rightContent">運費折扣:</div>
            <div class="rightAmt">{{GetshowAmtData.discountDelivery}}</div>
          </div>
          <div>--------------------------------</div>
          <div class="lineContent">
            <div class="rightContent">總金額:</div>
            <div class="rightAmt">{{GetshowAmtData.totalAmt}}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>



<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'GetShoppingCartItem',
        'GetshowAmtData'
      ]),
      caculateAmt() {
        // 數量改變回後端檢核價錢
        var a = []
        this.GetShoppingCartItem.forEach((item) => {
          a.push(item.count)
        })
        this.PostGetTotalAmt()
      }
    },
    methods: {
      ...mapActions([
        'IncreaseProduct',
        'ReduceProduct',
        'PostGetTotalAmt',
        'addCartCount',
        'minusCartCount',
        'keyNumCartCount'
      ]),
      keyNum(item) {
        var count = event.target.value
        if(count < 1 || count > 999) {
          event.target.value = item.count
        }
        console.log(count)
        this.keyNumCartCount({
          item,
          count
        })
      }
    }
  }

</script>
<style scoped>
  .Cartcontainer {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 95%
  }

  .payimg {
    width: 160px;
    height: 120px
  }

  .inputQuentity {
    width: 4rem;
    height: 34px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .payTotal {
    display: grid;
    font-size: 20px;
    color: red;
    text-align: right;
    border-bottom: 2px solid #dddddd;
  }

  .prodType {
    background-color: #ff5722;
    color: #fff;
  }

  .tablePay {
    font-size: 18px;
  }

  .tableTitle {
    border-bottom: 2px solid #dddddd;
    margin-bottom: 10px;
  }

  .lineContent {
    padding: 0px 15px;
  }

  .leftContent {
    display: inline;
    float: left;
    width: 50%;
    text-align: left;
  }

  .rightContent {
    display: inline;
    float: center;
    width: 20%;
  }

  .rightAmt {
    display: inline;
    float: right;
    width: 30%;
  }

  @media (min-width: 992px) {
    .tableTd {
      display: none;
    }
    .tableTR {
      border: 1px solid #77C9FF;
      border-radius: 5px;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 992px) {
    .tableTitle {
      display: none;
    }
    .tableTR {
      border: 1px solid #77C9FF;
      border-radius: 5px;
      padding-top: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: 1px;
      margin-right: 1px;
    }
    .hideTd {
      display: none;
    }
    .tableTd {
      background-color: #f7f8ff;
      text-align: right;
      margin-top: 5px;
      padding: 10px;
    }
    .rightTd {
      text-align: center;
      width: 100px;
      margin-left: 30px;
      margin-right: 30px;
    }
    .leftTd {
      float: left;
      text-align: center;
      width: 100px;
      margin-left: 30px;
      margin-right: 30px;
    }
  }

</style>
