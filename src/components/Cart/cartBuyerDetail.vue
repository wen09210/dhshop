<template>
  <div class="container">
    <template>
      <div class="detailBlock">
        {{matchLoginInfo}}
        <div class="detailTitle">
          <span>訂購人</span>
        </div>
        <Form :model="BuyerDetail" label-position="left" :label-width="80">
          <FormItem label="訂購人姓名:">
            <Input v-model="BuyerDetail.Purchaser" placeholder="姓名..."></Input>
          </FormItem>
          <FormItem label="訂購人地址:">
            <Input v-model="BuyerDetail.P_Address" placeholder="地址..."></Input>
          </FormItem>
          <FormItem label="訂購人手機:">
            <Input v-model="BuyerDetail.P_Phone" placeholder="手機..."></Input>
          </FormItem>
          <FormItem label="E-MAIL:">
            <Input v-model="BuyerDetail.P_Mail" placeholder="E-MAIL..."></Input>
          </FormItem>
          <FormItem label="備註:">
            <Input v-model="BuyerDetail.P_Note" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="備註..."></Input>
          </FormItem>
          <FormItem label="訂購人手機">
            <Input v-model="BuyerDetail.P_Phone" placeholder="訂購人手機"></Input>
          </FormItem>
          <FormItem label="訂購人手機">
            <Input v-model="BuyerDetail.P_Phone" placeholder="訂購人手機"></Input>
          </FormItem>
        </Form>
        <Form :model="0" inline=true  label-position="left" :label-width="80">
          <FormItem label="使用優惠碼">
            <Input v-model="BuyerDetail.CouponCode" placeholder="優惠(折扣)代碼"></Input>
            <Button type="primary" @click="handleSubmit('formValidate')">驗證</Button>
          </FormItem>
        </Form>
      </div>
    </template>
    <h2>訂購資料</h2>
    <hr>
    <form class="form-horizontal" role="form">
      <!--訂購人資訊  -->
      <div class="detailBlock">
        {{matchLoginInfo}}
        <div class="detailTitle">
          <span>訂購人</span>
        </div>
        <div class="form-group">
          <label for="Purchaser" class="col-sm-2 control-label">訂購人姓名:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyerDetail.Purchaser" placeholder="訂購人姓名:">
          </div>
        </div>
        <div class="form-group">
          <label for="P_Address" class="col-sm-2 control-label">訂購人地址:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyerDetail.P_Address" placeholder="訂購人地址:">
          </div>
        </div>
        <div class="form-group">
          <label for="P_Phone" class="col-sm-2 control-label">訂購人手機:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyerDetail.P_Phone" placeholder="訂購人手機">
          </div>
        </div>
        <div class="form-group">
          <label for="P_Mail" class="col-sm-2 control-label">E-MAIL：</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" v-model="BuyerDetail.P_Mail" placeholder="E-MAIL：">
          </div>
        </div>
        <div class="form-group">
          <label for="P_Note" class="col-sm-2 control-label">備註:</label>
          <div class="col-sm-10">
            <textarea class="form-control" v-model="BuyerDetail.P_Note" rows="3"></textarea>
          </div>
        </div>
        <!-- 使用優惠碼 -->
        <div class="form-inline coupon">
          <label class="coupTitle">使用優惠碼</label>
          <div class="form-group">
            <input type="text" class="form-control" v-model="BuyerDetail.CouponCode">
          </div>
          <div class="form-group">
            <input type="button" value="確認" placeholder="請輸入優惠代碼" class="btn btn-success" @clicl="ValidateCoupon">
          </div>
        </div>
        <!-- 使用優惠碼end -->
      </div>
      <!-- 訂購人資訊end  -->
      <!--收件人資訊  -->
      <div class="detailBlock">
        <div class="detailTitle">
          <span>收件人</span>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <input type="checkbox" v-model="eqPurchaser" @click="eqPurchsase()" class="largerCheckbox">
            <label for="eqPurchaser">
              與訂購人相同請打勾
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="Recipient" class="col-sm-2 control-label">收件人姓名:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyerDetail.Recipient" placeholder="收件人姓名:">
          </div>
        </div>
        <div class="form-group">
          <label for="R_Address" class="col-sm-2 control-label">收件人地址:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyerDetail.R_Address" placeholder="收件人地址:">
          </div>
        </div>
        <div class="form-group">
          <label for="R_Phone" class="col-sm-2 control-label">收件人手機:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyerDetail.R_Phone" placeholder="收件人手機">
          </div>
        </div>
        <div class="form-group">
          <label for="R_Mail" class="col-sm-2 control-label">E-MAIL：</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" v-model="BuyerDetail.R_Mail" placeholder="E-MAIL：">
          </div>
        </div>
        <div class="form-group">
          <label for="R_Time" class="col-sm-2 control-label">收件時段:</label>
          <div class="col-sm-10">
            <select class="form-control" v-model="BuyerDetail.R_Time">
              <option>12點前</option>
              <option>12~17點</option>
              <option>17點後</option>
            </select>
          </div>
        </div>
      </div>
      <!--收件人資訊end  -->
      <!-- 上一步回購物車 -->
      <div class=" col-xs-3 col-md-5">
        <button type="button" class="btn btn-success btn-lg btn-block" @click="backCart">回購物車!</button>
      </div>
      <!-- 上一步回購物車end -->
      <!-- 下一步付款資訊 -->
      <div class=" col-xs-9 col-md-7">
        <button type="button" class="btn btn-info btn-lg btn-block" @click="goPayDetail">下一步 !</button>
      </div>
      <!-- 下一步付款資訊end -->
      <div class=" col-xs-9 col-md-7">
        <button type="button" @click="GetMacValue(BuyerDetail)" class="btn btn-info btn-lg btn-block">老闆~買了!買了!</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import { noty } from '../../assets/AlertDialog'
import Form from 'iview/src/components/form/form'
import FormItem from 'iview/src/components/form/form-item'
import Input from 'iview/src/components/input'
import Button from 'iview/src/components/button'

let InvoiceCode = [{
  'lovecode': '1980198',
  'name': '財團法人張老師基金會'
}, {
  'lovecode': '919',
  'name': '財團法人創世社會福利基金會'
}, {
  'lovecode': '599',
  'name': '台灣動物不再流浪協會'
}, {
  'lovecode': '8957282',
  'name': '財團法人流浪動物之家基金會'
}, {
  'lovecode': '13579',
  'name': '財團法人陽光社會福利基金會'
}, {
  'lovecode': '88432',
  'name': '財團法人喜憨兒社會福利基金會'
}, {
  'lovecode': '876',
  'name': '財團法人心路社會福利基金會'
}, {
  'lovecode': '9999',
  'name': '社團法人新北市盲人福利協進會'
}, {
  'lovecode': '9118595',
  'name': '財團法人勵馨社會福利事業基金會'
}, {
  'lovecode': '461234',
  'name': '財團法人台灣兒童暨家庭扶助基金會'
}, {
  'lovecode': '860713',
  'name': '保護動物協會'
}]
let BuyerDetail = {
  'Purchaser': '',
  'P_Phone': '',
  'P_Address': '',
  'P_Mail': '',
  'P_Note': '',
  'Recipient': '',
  'R_Phone': '',
  'R_Address': '',
  'R_Mail': '',
  'R_Time': '12點前',
  'PayType': '1',
  'DeliveryType': '1',
  'InoviceType': '1',
  'InoviceLoveCode': '1980198',
  'Corporation': '',
  'taxIDNum': '',
  'CouponCode': ''
}
export default {
  data: function() {
    return {
      BuyerDetail: BuyerDetail,
      eqPurchaser: false,
      InvoiceCode: InvoiceCode
    }
  },
  components: {
    Form,
    FormItem,
    Input,
    Button
  },
  computed: {
    ...mapGetters([
      'GetShoppingCartItem',
      'GetLoginInfo',
      'GetshowAmtData'
    ]),
    matchLoginInfo() {
      this.BuyerDetail.Purchaser = this.GetLoginInfo.MemberName
      this.BuyerDetail.P_Phone = this.GetLoginInfo.MemberMobile
      this.BuyerDetail.P_Address = this.GetLoginInfo.MemberAddress
      this.BuyerDetail.P_Mail = this.GetLoginInfo.MemberEmail
    }
  },
  methods: {
    ...mapActions([
      // 送出訂單(綠界OR貨到付款)
      'GetMacValue',
      'SetCartStepBar',
      'SetBuyerDetail'
    ]),
    // 回購物車
    backCart() {
      this.SetCartStepBar(0)
    },
    // 進入付款資訊
    goPayDetail() {
      // 存訂購人資料
      this.SetBuyerDetail(this.BuyerDetail)
      // 步驟條
      this.SetCartStepBar(2)
    },
    // 同訂購人勾選
    eqPurchsase() {
      if (this.eqPurchaser === true) {
        console.log('tt3')
        this.BuyerDetail.Recipient = this.BuyerDetail.Purchaser
        this.BuyerDetail.R_Phone = this.BuyerDetail.P_Phone
        this.BuyerDetail.R_Address = this.BuyerDetail.P_Address
        this.BuyerDetail.R_Mail = this.BuyerDetail.P_Mail
      }
    },
    // 驗證優惠代碼
    ValidateCoupon() {
      axios.post(`/api/Ecpay/PostValidDiscountCode`, this.GetShoppingCartItem)
        .then((response) => {
          console.log(response)
          if (response.data.statu === 'ok') {
            noty.ShowAlert(response.data.msg, 'success')
          } else {
            noty.ShowAlert(response.data.msg, 'warning')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

</script>
<style>
.detailBlock {
  font-size: 18px;
  border: 1px solid #77C9FF;
  border-radius: 10px;
  padding: 30px;
  margin: 20px;
}

.detailTitle {
  font-size: 25px;
  color: #777;
  font-weight: bold;
  background: #f8cc2b;
  margin-bottom: 10px;
  padding: 5px;
}

.lovecodeSelect {
  width: 350px;
}

input.largerCheckbox {
  width: 20px;
  height: 20px;
}

.textbar {
  font-size: 22px;
  text-align: center;
}


.amtDetail {
  color: #c90026;
  font-weight: bold;
  margin-left: 15PX;
}

.creditNote {
  font-size: 14px;
  margin-top: 10px;
}

.coupTitle {
  margin: 10px;
  font-size: 18px;
}

.coupon {
  float: right !important;
  margin-bottom: 10px;
}

@media (max-width:414px) {
  .coupon {
    float: left !important;
    margin: 5px 0px;
    display: flex;
  }
}

</style>
