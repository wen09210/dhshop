<template>
  <div class="container">
    <h2>金額</h2>
    <hr>
    <div>
      <div class=" tablePay">
        <div class="row tableTitle">
          <div class="col-md-2">圖片</div>
          <div class="col-md-3">名稱</div>
          <div class="col-md-2">樣式</div>
          <div class="col-md-1">單價</div>
          <div class="col-md-1">數量</div>
          <div class="col-md-2">小計</div>
          <div class="col-md-1">功能</div>
        </div>


        <div v-for="item in GetShoppingCartItem" class="row tableTR">
          <div class="col-md-2 col-xs-6"><img src="../../assets/temporyPic\/hot1.jpg" class="payimg"></div>
          <div class="col-md-3 col-xs-6">{{item.name}}</div>
          <div class="col-md-2 col-xs-6">{{item.style}}</div>
          <div class="col-md-1 col-xs-6">{{item.unitPrice}}</div>
          <div class="col-md-1 col-xs-6">{{item.count}}</div>
          <div class="col-md-2 col-xs-6 hideTd">{{item.totalAmt}}</div>
          <div class="col-md-1 col-xs-6 hideTd">
            <a class="btn btn-danger" @click="calAmt(item)">
              <i class="fa fa-trash-o fa-lg"></i>
            </a>
          </div>

          <div class="col-md-2 col-xs-12  tableTd">
            <span class="leftTd">
                    <a class="btn btn-danger" @click="calAmt(item)">
                    <i class="fa fa-trash-o fa-lg">忍痛放棄</i>
                    </a>
                </span>
            <span class="rightTd">
                   小計 : {{item.totalAmt}}
                </span>
          </div>
        </div>

      </div>
      <div class="payTotal">
        <span>原價: {{GetshowAmtData.totalProdAmt}}</span>
        <span>運費: {{GetshowAmtData.totalFee}}</span>
        <span>購物折扣: {{GetshowAmtData.discountProd}}</span>
        <span>運費折扣: {{GetshowAmtData.discountDelivery}}</span>
        <span>-------------------</span>
        <span>總金額: {{GetshowAmtData.totalAmt}}</span>
      </div>
    </div>
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
    created() {
      this.PostGetTotalAmt()
    },
    computed: {
      ...mapGetters([
        'GetShoppingCartItem',
        'GetshowAmtData'
      ])
    },
    methods: {
      ...mapActions([
        'IncreaseProduct',
        'ReduceProduct',
        'PostGetTotalAmt'
      ]),
      calAmt(item) {
        if (item !== undefined) {
          this.ReduceProduct(item)
        }
        this.PostGetTotalAmt()
      }
    }
  }

</script>
<style scoped>
  .payimg {
    width: 160px;
    height: 120px
  }

  .payTotal {
    display: grid;
    font-size: 20px;
    color: red;
    text-align: right;
    border-bottom: 2px solid #dddddd;
  }

  .tablePay {
    font-size: 18px;
  }

  .tableTitle {
    border-bottom: 2px solid #dddddd;
    margin-bottom: 10px;
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
