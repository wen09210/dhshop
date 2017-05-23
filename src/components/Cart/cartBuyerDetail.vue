<template>
  <div class="container">
    <h2>訂購資料</h2>
    <hr>

    <form class="form-horizontal" role="form">
      <div class="detailBlock">
        <div class="detailTitle">
          <span>STEP1 : 訂購人</span>
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
      </div>

      <div class="detailBlock">
        <div class="detailTitle">
          <span>STEP2 : 收件人</span>
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
              <option>中午前</option>
              <option>12~17點</option>
              <option>17點後</option>
          </select>
          </div>
        </div>
      </div>

      <div class="detailBlock">
        <div class="detailTitle">
          <span>STEP3 : 付款方式</span>
        </div>
        <div class="form-group">
          <label for="PayType" class="col-sm-2 control-label">付款方式:</label>
          <div class="col-sm-10">
            <label class="radio-inline">
            <input type="radio" name="PayType" value="1" v-model="BuyerDetail.PayType">ATM付款
          </label>
            <label class="radio-inline">
             <input type="radio" name="PayType" value="2" v-model="BuyerDetail.PayType">信用卡
          </label>
            <label class="radio-inline">
            <input type="radio" name="PayType" value="3" v-model="BuyerDetail.PayType">貨到付款
          </label>
          </div>
        </div>

        <div class="form-group">
          <label for="InoviceType" class="col-sm-2 control-label">發票:</label>
          <div class="col-sm-10">
            <label class="radio-inline">
          <input type="radio" name="InoviceType" value="1" v-model="BuyerDetail.InoviceType">電子發票
          </label>
            <label class="radio-inline">
          <input type="radio" name="InoviceType" value="2" v-model="BuyerDetail.InoviceType">捐贈發票
          </label>
            <label class="radio-inline">
          <input type="radio" name="InoviceType" value="3" v-model="BuyerDetail.InoviceType">紙本發票
          </label>
          </div>
        </div>
        <div class="form-group">
          <label for="DeliveryType" class="col-sm-2 control-label">運送方式:</label>
          <div class="col-sm-10">
            <label class="radio-inline">
            <input type="radio" name="DeliveryType" value="1" v-model="BuyerDetail.DeliveryType">宅配
            </label>
          </div>
        </div>
      </div>

      <div class=" col-xs-12  col-md-offset-3 col-md-6">
        <button type="button" @click="GetMacValue(BuyerDetail)" class="btn btn-info btn-lg btn-block">老闆~買了!買了!</button>
      </div>

    </form>
  </div>
</template>


<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
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
    'R_Time': '',
    'PayType': '',
    'DeliveryType': '',
    'InoviceType': ''
  }
  export default {
    data: function () {
      return {
        BuyerDetail: BuyerDetail,
        eqPurchaser: false
      }
    },
    computed: {
      ...mapGetters([
        'GetShoppingCartItem',
        'GetBuyerDetail'
      ])
    },
    methods: {
      ...mapActions([
        'GetMacValue'
      ]),
      eqPurchsase() {
        if (this.eqPurchaser === true) {
          this.BuyerDetail.Recipient = this.BuyerDetail.Purchaser
          this.BuyerDetail.R_Phone = this.BuyerDetail.P_Phone
          this.BuyerDetail.R_Address = this.BuyerDetail.P_Address
          this.BuyerDetail.R_Mail = this.BuyerDetail.P_Mail
        }
      }
    }
  }

</script>
<style scoped>
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

  input.largerCheckbox {
    width: 20px;
    height: 20px;
  }

</style>
