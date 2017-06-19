<template>
  <div class="container">
    <h2>訂購資料</h2>
    <hr>

    <form class="form-horizontal" role="form">
      <div class="detailBlock">
        {{matchLoginInfo}}
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
            <label class="radio-inline">
              <input type="radio" name="InoviceType" value="4" v-model="BuyerDetail.InoviceType">公司三聯發票
          </label>
          </div>
        </div>
        <div class="form-group" v-if="BuyerDetail.InoviceType==='2'">
         <label for="Corporation" class="col-sm-2 control-label">捐贈單位:</label>
          <div class="col-sm-10">
          <select class="form-control lovecodeSelect" v-model="BuyerDetail.InoviceLoveCode">
              <option v-for="item in InvoiceCode" :value="item.lovecode">{{item.name}}</option>
          </select>
          </div>
        </div>
        <div class="form-group" v-if="BuyerDetail.InoviceType==='4'">
          <label for="Corporation" class="col-sm-2 control-label">公司抬頭:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyerDetail.Corporation" placeholder="公司抬頭:">
          </div>
           <label for="taxIDNum" class="col-sm-2 control-label">統一編號:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyerDetail.taxIDNum" placeholder="統一編號:">
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
  let InvoiceCode = [
    {
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
    }
  ]
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
    'InoviceType': '',
    'InoviceLoveCode': '',
    'Corporation': '',
    'taxIDNum': ''
  }
  export default {
    data: function () {
      return {
        BuyerDetail: BuyerDetail,
        eqPurchaser: false,
        InvoiceCode: InvoiceCode
      }
    },
    computed: {
      ...mapGetters([
        'GetShoppingCartItem',
        'GetLoginInfo'
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
        'GetMacValue'
      ]),
      eqPurchsase() {
        if (this.eqPurchaser === true) {
          console.log('tt3')
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

  .lovecodeSelect {
    width: 350px;
  }
  input.largerCheckbox {
    width: 20px;
    height: 20px;
  }

</style>
