<template>
  <div class="container">
    <div class="pageHeader">購物車</div>
    <template v-if="Object.keys(GetShoppingCartItem).length===0">
      <h4>購物車內目前沒有商品，請先選購商品</h4>
    </template>
    <template v-else>
      <div>
        <div class="tablePay">
          <div class="tableTitle row">
            <div class="col-md-2">圖片</div>
            <div class="col-md-1">類型</div>
            <div class="col-md-3">名稱</div>
            <div class="col-md-1">單價</div>
            <div class="col-md-2">數量</div>
            <div class="col-md-2">小計</div>
            <div class="col-md-1">功能</div>
          </div>
          <div v-for="item in GetShoppingCartItem" class=" tableTR row">
            <div class="col-md-2 col-xs-6"><img src="../../assets/temporyPic\/hot1.jpg" class="payimg"></div>
            <div class="col-md-1 col-xs-6 prodType">
              {{item.prodType |prodTypeToCH}}
            </div>
            <div class="col-md-3 col-xs-6">{{item.name}}
              <br> {{item.style}}
            </div>
            <div class="col-md-1 col-xs-6">{{item.unitPrice}}元</div>
            <div class="col-md-2 col-xs-6 btnDiv">
              <button class="calBtn" @click="minusCartCount(item)">
                <i class="fa fa-minus" aria-hidden="true"></i>
              </button>
              <input type="text" class="inputQuentity" :value="item.count" @change="keyNum(item)">
              <button class="calBtn" @click="addCartCount(item)">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button> {{item.unit}}
            </div>
            <div class="col-md-2 col-xs-6 hideTd">{{item.totalAmt}}元</div>
            <div class="col-md-1 col-xs-6 hideTd">
              <a class="btn btn-danger" @click="ReduceProd(item)">
                  <i class="fa fa-trash-o fa-lg"></i>
                </a>
            </div>
            <div class="col-md-2 col-xs-12  tableTd">
              <span class="leftTd">
                    <a class="btn btn-danger" @click="ReduceProd(item)">
                    <i class="fa fa-trash-o fa-lg">忍痛放棄</i>
                    </a>
                </span>
              <span class="rightTd">
                   小計 : {{item.totalAmt}} 元
                </span>
            </div>
          </div>
        </div>
        <div class="form-inline coupon">
          <label class="coupTitle">使用優惠碼</label>
          <div class="form-group">
            <input type="text" value="" class="form-control">
          </div>
          <div class="form-group">
            <input type="button" value="確認" class="btn btn-success">
          </div>
        </div>
        <br>
        <div class="payTotal">
          {{caculateAmt}}
          <div class="tbody">
            <div class="lineContent">
              <div class="leftContent"></div>
              <div class="rightContent">原價:</div>
              <div class="rightAmt">{{GetshowAmtData.totalProdAmt}}元</div>
            </div>
            <div class="lineContent">
              <div class="leftContent"></div>
              <div class="rightContent">運費:</div>
              <div class="rightAmt">
                <i class="fa fa-plus" aria-hidden="true" style="color:green"></i> {{GetshowAmtData.totalFee}}元
              </div>
            </div>
            <div class="lineContent">
              <div class="leftContent">{{GetshowAmtData.disProdName}}</div>
              <div class="rightContent">購物折扣:</div>
              <div class="rightAmt">
                <i class="fa fa-minus" aria-hidden="true" style="color:red"></i> {{GetshowAmtData.discountProd}}元
              </div>
            </div>
            <div class="lineContent">
              <div class="leftContent">{{GetshowAmtData.disDeliveryName}}</div>
              <div class="rightContent">運費折扣:</div>
              <div class="rightAmt">
                <i class="fa fa-minus" aria-hidden="true" style="color:red"></i> {{GetshowAmtData.discountDelivery}}元
              </div>
            </div>
            <div class="lineContent">
              <div class="leftContent"></div>
              <div class="rightContent">
                <hr>
              </div>
              <div class="rightAmt">
                <hr>
              </div>
            </div>
            <div class="lineContent">
              <div class="leftContent"></div>
              <div class="rightContent finalAmt">總金額:</div>
              <div class="rightAmt finalAmt">{{GetshowAmtData.totalAmt}}元</div>
            </div>
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
import {
  noty
} from '../../assets/AlertDialog'

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
    ReduceProd(item) {
      // 確認加購品是否符合
      // 1.移除該商品
      let cloneCart = this.GetShoppingCartItem.slice()
      for (var s = 0; s < cloneCart.length; s++) {
        if (cloneCart[s].no === item.no) {
          cloneCart.splice(s, 1)
          console.log('success')
          break
        }
      }
      console.log('clear')
      console.log(cloneCart)
      let reduceNo = []
      // 加入要移除的商品
      reduceNo.push(item.no)
      let errAddName = ''
      // 2.檢查加購品是否符合
      for (var i = 0; i < cloneCart.length; i++) {
        // 為加購品時檢查
        if (cloneCart[i].prodType === '2') {
          let MainProdName = cloneCart[i].MainProdName.split('|')
          console.log(MainProdName)
          let isAdd = false
          // 加購品所屬主商品是否還存在
          for (var w = 0; w < MainProdName.length; w++) {
            let FindMain = cloneCart.find(x => x.name === MainProdName[w] && x.prodType === '1')
            console.log(FindMain)
            // 主商品還在
            if (typeof FindMain !== 'undefined') {
              isAdd = true
            }
          }
          if (isAdd === false) {
            errAddName += `<li>${cloneCart[i].name}-${cloneCart[i].style}</li> `
            reduceNo.push(cloneCart[i].no)
          }
        }
      }
      // 顯示不能加購提示
      if (errAddName !== '') {
        console.log(reduceNo)
        noty.ConfirmDialog(`取消此商品將無法加購<br>${errAddName}<br><br>您確定要取消此商品嗎?`, () => {
          this.ReduceProduct(reduceNo)
        })
      } else {
        noty.ConfirmDialog('您確定要取消此商品嗎?', () => {
          this.ReduceProduct(reduceNo)
        })
      }
    },
    keyNum(item) {
      var count = event.target.value
      if (count < 1 || count > 999) {
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

.btnDiv {
  display: flex;
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
  text-align: center;
  height: 40px;
  width: 60px;
}

.calBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 1px;
  background: transparent;
  width: 40px;
  height: 40px;
}

.tablePay {
  font-size: 18px;
}

.tableTitle {
  border-bottom: 2px solid #dddddd;
  margin-bottom: 5px;
  background: #ddd;
  height: 50px;
  padding: 15px 0px;
  margin-left: 1px;
  margin-right: 1px;
}



.tbody {
  display: table-row-group;
}

.lineContent {
  display: table-row;
}


.coupTitle {
  margin: 10px;
  font-size: 18px;
}

.coupon {
  float: right !important;
  margin-bottom: 10px;
}


@media (min-width: 992px) {
  .payimg {
    width: 120px;
    height: 90px
  }
  .tableTd {
    display: none;
  }
  .tableTR {
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 5px 1px;
  }
  .prodType {
    color: #6bc5e1;
    text-align: center;
    padding: 0px;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid #6bc5e1;
  }

  .payTotal {
    display: table;
    width: 100%;
    font-size: 20px;
    text-align: right;
    border-bottom: 2px solid #dddddd;
    color: rgba(0, 0, 0, .8);
  }
  .finalAmt {
    font-size: 28px;
    font-weight: bold;
    color: #ff5722;
  }
  .leftContent {
    width: 60%;
    text-align: left;
    display: table-cell;
  }

  .rightContent {
    width: 20%;
    text-align: left;
    display: table-cell;
  }

  .rightAmt {
    width: 20%;
    text-align: right;
    display: table-cell;
  }
}

@media (max-width: 992px) {
  .col-xs-6 {
    padding-bottom: 5px;
  }
  .payimg {
    width: 150px;
    height: 120px
  }
  .tableTitle {
    display: none;
  }
  .tableTR {
    border: 1px solid #999;
    border-radius: 5px;
    padding-top: 10px;
    margin: 5px;
  }
  .hideTd {
    display: none;
  }
  .tableTd {
    background-color: #eee;
    text-align: right;
    margin-top: 5px;
    padding: 10px;
  }
  .rightTd {
    text-align: center;
    width: 100px;
    margin-right: 30px;
    font-weight: bold;
    color: #ff4500;
    font-size: 20px;
  }
  .leftTd {
    float: left;
    text-align: center;
    width: 100px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .prodType {
    width: 30%;
    color: #6bc5e1;
    text-align: center;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid #6bc5e1;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .payTotal {
    display: table;
    width: 100%;
    font-size: 18px;
    text-align: right;
    border-bottom: 2px solid #dddddd;
    color: rgba(0, 0, 0, .8);
  }
  .finalAmt {
    font-size: 24px;
    font-weight: bold;
    color: #ff5722;
  }
  .leftContent {
    width: 45%;
    text-align: left;
    display: table-cell;
    font-size: 16px;
  }

  .rightContent {
    width: 25%;
    text-align: left;
    display: table-cell;
  }

  .rightAmt {
    width: 30%;
    text-align: right;
    display: table-cell;
  }
}

@media (max-width:414px) {
  .coupon {
    float: left !important;
    margin: 5px 0px;
    display: flex;
  }
}

</style>
