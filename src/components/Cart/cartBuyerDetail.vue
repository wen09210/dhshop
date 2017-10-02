<template>
  <div class="container">
    <template>
      <!--訂購人資訊  -->
      <div class="detailBlock">
        {{matchLoginInfo}}
        <div class="detailTitle">
          <span>訂購人</span>
        </div>
        <Form label-position="left" :label-width="80">
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
            <Input v-model="BuyerDetail.P_Note" type="textarea" :autosize="{minRows: 2,maxRows: 10}" placeholder="備註..."></Input>
          </FormItem>
        </Form>
        <Form label-position="top" :label-width="80">
          <FormItem label="使用優惠碼">
            <Row :gutter="16">
              <Col span="14">
              <Input v-model="BuyerDetail.CouponCode" placeholder="優惠(折扣)代碼"></Input>
              </Col>
              <Col span="8">
              <Button type="primary" @click="handleSubmit('formValidate')">驗證</Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
      <!-- 訂購人資訊end  -->
      <!--收件人資訊  -->
      <h2>訂購資料</h2>
      <div class="detailBlock">
        {{matchLoginInfo}}
        <div class="detailTitle">
          <span>收件人</span>
        </div>
        <Form label-position="left" :label-width="80">
          <FormItem>
            <Checkbox v-model="eqPurchaser" @on-change="eqPurchsase" size="large">與訂購人相同請打勾</Checkbox>
          </FormItem>
          <FormItem label="收件人姓名:">
            <Input v-model="BuyerDetail.Recipient" placeholder="收件人姓名"></Input>
          </FormItem>
          <FormItem label="收件人地址:">
            <Input v-model="BuyerDetail.R_Address" placeholder="收件人地址"></Input>
          </FormItem>
          <FormItem label="收件人手機:">
            <Input v-model="BuyerDetail.R_Phone" placeholder="收件人手機"></Input>
          </FormItem>
          <FormItem label="E-MAIL:">
            <Input v-model="BuyerDetail.R_Mail" placeholder="E-MAIL"></Input>
          </FormItem>
          <FormItem label="收件時段:">
            <Select v-model="BuyerDetail.R_Time" size="large" style="width:100px">
              <Option value="12點前">12點前</option>
              <Option value="12~17點">12~17點</option>
              <Option value="17點後">17點後</option>
            </Select>
          </FormItem>
        </Form>
      </div>
      <!--收件人資訊end  -->
    </template>
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

  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import { noty } from '../../assets/AlertDialog'

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
  data() {
    return {
      BuyerDetail: BuyerDetail,
      eqPurchaser: false
    }
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
        this.BuyerDetail.Recipient = this.BuyerDetail.Purchaser
        this.BuyerDetail.R_Phone = this.BuyerDetail.P_Phone
        this.BuyerDetail.R_Address = this.BuyerDetail.P_Address
        this.BuyerDetail.R_Mail = this.BuyerDetail.P_Mail
      } else {
        this.BuyerDetail.Recipient = ''
        this.BuyerDetail.R_Phone = ''
        this.BuyerDetail.R_Address = ''
        this.BuyerDetail.R_Mail = ''
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
