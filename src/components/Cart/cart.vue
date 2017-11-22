<template>
  <div class="container">
    {{caculateAmt}}
    <div class="pageHeader">購物車</div>
    <template v-if="Object.keys(GetShoppingCartItem).length===0">
      <h4>購物車內目前沒有商品，請先選購商品</h4>
    </template>
    <template v-else>
      <div>
        <!-- 購買商品列 -->
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
            <div class="col-md-2 col-xs-6"><img :src="item.ImgUrl |UrlTransIP" class="payimg"></div>
            <div class="col-md-1 col-xs-6 prodType">
              {{item.prodType |prodTypeToCH}}
            </div>
            <div class="col-md-3 col-xs-6">
              <router-link :to="{name: 'product', params: {prodID: item.prodID}}">
                {{item.name}}
                <br> {{item.style}}
              </router-link>
            </div>
            <template v-if="item.IsActivity">
              <div class="col-md-1 col-xs-6">
                <div class="linethrough">
                  <span class="textblack">
                    {{item.SalePrice}}元
                    </span>
                </div>
                <br>優惠{{item.unitPrice}}元</div>
            </template>
            <template v-else-if="item.IsPreProduct && !item.IsActivity">
              <div class="col-md-1 col-xs-6">
                <span class="linethrough">
                  <span class="textblack">{{item.SalePrice}}元
                    </span>
                </span>
                <br>{{item.unitPrice}}元</div>
            </template>
            <template v-else>
              <div class="col-md-1 col-xs-6">{{item.unitPrice}}元</div>
            </template>
            <div class="col-md-2 col-xs-6 btnDiv">
              <!-- 減減減 -->
              <button class="calBtn" @click="minusCartCount(item)">
                <i class="fa fa-minus" aria-hidden="true"></i>
              </button>
              <!-- 輸入數量 -->
              <input type="text" class="inputQuentity" :value="item.count" @change="keyNum(item)">
              <!-- 加加加 -->
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
            <!-- 手機板顯示 -->
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
            <!-- 手機板顯示 end-->
          </div>
        </div>
        <!-- 購買商品列end -->
        <br>
        <!-- 折扣代碼 -->
        <div class="CouponDiv">
          <Row :gutter="16">
            <Col :xs="{ span: 24}" :md="{span: 12,offset:12}">
            <Col :xs="{ span: 6}" :md="{span: 6}">
            <div>
              <label class="coupTitle">折扣代碼:</label>
            </div>
            </Col>
            <Col :xs="{ span: 12}" :md="{ span: 12}">
            <Input v-model="CouponCode" placeholder="優惠(折扣)代碼" style="boreder-color:red;"></Input>
            </Col>
            <Col :xs="{ span: 2}" :md="{ span: 2}">
            <template v-if="valCodeIcon==='1'">
              <Icon type="checkmark-circled" size="22" color="green"></Icon>
            </template>
            <template v-if="valCodeIcon==='2'">
              <Icon type="close-circled" size="22" color="red"></Icon>
            </template>
            </Col>
            <Col :xs="{ span: 4}" :md="{ span: 4}">
            <Button type="primary" size="large" @click="ValidateCoupon">驗證</Button>
            </Col>
            </Col>
          </Row>
        </div>
        <!-- 折扣代碼end -->
        <!-- 付款總計 -->
        <div class="payTotal">
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
              <div class="rightContent">滿額折扣:</div>
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
              <div class="leftContent">{{GetshowAmtData.disQuantiatyName}}</div>
              <div class="rightContent">數量折扣:</div>
              <div class="rightAmt">
                <i class="fa fa-minus" aria-hidden="true" style="color:red"></i> {{GetshowAmtData.discountQuantiaty}}元
              </div>
            </div>
            <div class="lineContent">
              <div class="leftContent">{{GetshowAmtData.disCouponName}}</div>
              <div class="rightContent">優惠碼折扣
              </div>
              <div class="rightAmt">
                <i class="fa fa-minus" aria-hidden="true" style="color:red"></i> {{GetshowAmtData.discountCoupon}}元
              </div>
            </div>
            <div class="lineContent">
              <div class="leftContent"></div>
              <div class="rightContent finalAmt">總金額:</div>
              <div class="rightAmt finalAmt">{{GetshowAmtData.totalAmt}}元</div>
            </div>
          </div>
        </div>
        <!-- 付款總計end -->
        <!-- 下一步  -->
        <div class="btntoDetail col-xs-12  col-md-offset-3 col-md-6">
          <button type="button" @click="goBuyerDetail" class="btn btn-info btn-lg btn-block">下一步 結帳去!</button>
        </div>
        <!-- 下一步end -->
      </div>
    </template>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      valCodeIcon: '0',
      CouponCode: ''
    }
  },
  computed: {
    ...mapGetters([
      'GetShoppingCartItem',
      'GetshowAmtData',
      'GetLoginInfo'
    ]),
    caculateAmt() {
      console.log('caculateAmt')
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
      'SetCouponCode',
      'addCartCount',
      'minusCartCount',
      'keyNumCartCount',
      'SetLoginModal',
      'SetCartStepBar'
    ]),
    test() {
      alert('xxx')
    },
    // 移除商品(需檢查加購商品是否一併移除)
    ReduceProd(item) {
      // 確認加購品是否符合
      // 1.移除該商品
      let cloneCart = this.GetShoppingCartItem.slice()
      for (var s = 0; s < cloneCart.length; s++) {
        if (cloneCart[s].no === item.no) {
          cloneCart.splice(s, 1)
          // console.log('success')
          break
        }
      }
      // console.log('clear')
      // console.log(cloneCart)
      let reduceNo = []
      // 加入要移除的商品
      reduceNo.push(item.no)
      let errAddName = ''
      // 2.檢查加購品是否符合
      for (var i = 0; i < cloneCart.length; i++) {
        // 為加購品時檢查
        if (cloneCart[i].prodType === '2') {
          let MainProdName = cloneCart[i].MainProdName.split('|')
          // console.log(MainProdName)
          let isAdd = false
          // 加購品所屬主商品是否還存在
          for (var w = 0; w < MainProdName.length; w++) {
            let FindMain = cloneCart.find(x => x.name === MainProdName[w] && x.prodType === '1')
            // console.log(FindMain)
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
        // console.log(reduceNo)
        this.$Modal.confirm({
          title: 'dHSHOP 提醒您',
          okText: '確認',
          content: `取消此商品將無法加購<br>${errAddName}<br><br>您確定要取消此商品嗎?`,
          onOk: () => {
            this.ReduceProduct(reduceNo)
          }
        })
        // this.$noty.ConfirmDialog(`取消此商品將無法加購<br>${errAddName}<br><br>您確定要取消此商品嗎?`, () => {
        //   this.ReduceProduct(reduceNo)
        // })
      } else {
        this.$Modal.confirm({
          title: 'dHSHOP 提醒您',
          okText: '確認',
          content: '您確定要取消此商品嗎?',
          onOk: () => {
            this.ReduceProduct(reduceNo)
          }
        })
        // this.$noty.ConfirmDialog('您確定要取消此商品嗎?', () => {
        //   this.ReduceProduct(reduceNo)
        // })
      }
    },
    // 輸入數量
    keyNum(item) {
      var count = event.target.value
      if (count < 1 || count > 999) {
        event.target.value = item.count
      }
      // console.log(count)
      this.keyNumCartCount({
        item,
        count
      })
    },
    // 下一步 填寫資料
    goBuyerDetail() {
      /* global fbq */
      fbq('track', 'Purchase', { 'currency': 'TWD' }, { 'value': this.GetshowAmtData.totalAmt })
      fbq('track', 'InitiateCheckout')
      /* global hj */
      hj('trigger', 'purchase')
      hj('tagRecording', ['purchase'])
      /* global ga */
      ga('send', 'event', '購買')
      // 商品檢核未通過
      // console.log(this.GetshowAmtData.status)
      if (Object.keys(this.GetshowAmtData).length === 0) {
        this.PostGetTotalAmt()
        return false
      }
      if (this.GetshowAmtData.status === 'err') {
        this.$Notice.warning({
          title: 'dHSHOP 提醒',
          desc: this.GetshowAmtData.errMsg + '<br>請先完成更改，再進行結帳'
        })
        return false
      }
      // 未登入
      if (Object.keys(this.GetLoginInfo).length === 0) {
        this.SetLoginModal(true)
        return false
      } else {
        this.SetCouponCode(this.CouponCode)
        if (this.GetshowAmtData.status === 'couponError') {
          this.$Modal.confirm({
            title: 'dHSHOP 提醒您',
            okText: '確認',
            content: `優惠折扣代碼輸入錯誤，是否放棄使用`,
            onOk: () => {
              this.SetCouponCode('')
              this.SetCartStepBar(1)
            }
          })
          return false
        }
        this.SetCartStepBar(1)
      }
    },
    // 驗證優惠代碼
    ValidateCoupon() {
      if (this.CouponCode === '') {
        this.$Notice.warning({
          title: 'dHSHOP 提醒',
          desc: '請先輸入優惠折扣代碼，再進行驗證'
        })
        return false
      }
      this.SetCouponCode(this.CouponCode)
      // console.log('coupon save')
      // this.PostGetTotalAmt()
    }
  }
}

</script>
<style scoped>
span.linethrough {
  color: red;
  text-decoration: line-through;
}

span.textblack {
  color: black;
}

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
  width: 40px;
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

.CouponDiv {
  margin-bottom: 10px;
}


@media (min-width: 992px) {
  .payimg {
    width: 120px;
    height: 120px
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
    font-weight: 700;
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
  .coupTitle {
    font-size: 20px;
  }
}

@media (max-width: 992px) {
  .col-xs-6 {
    padding-bottom: 5px;
  }
  .payimg {
    width: 150px;
    height: 150px;
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
    font-weight: 800;
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
  .coupTitle {
    font-size: 17px;
  }
}

</style>
