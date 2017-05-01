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
            <input type="text" class="form-control"  v-model="BuyDetail.Purchaser"  placeholder="訂購人姓名:">          
          </div>
        </div>
        <div class="form-group">
          <label for="P_Address" class="col-sm-2 control-label">訂購人地址:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyDetail.P_Address"  placeholder="訂購人地址:">
          </div>
        </div>
        <div class="form-group">
          <label for="P_Phone" class="col-sm-2 control-label">訂購人手機:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="BuyDetail.P_Phone"   placeholder="訂購人手機">
          </div>
        </div>
        <div class="form-group">
          <label for="P_Mail" class="col-sm-2 control-label">E-MAIL：</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" v-model="BuyDetail.P_Mail"    placeholder="E-MAIL：">
          </div>
        </div>
        <div class="form-group">
          <label for="P_Note" class="col-sm-2 control-label">備註:</label>
          <div class="col-sm-10">
            <textarea class="form-control"  v-model="BuyDetail.P_Note"   rows="3"></textarea>
          </div>
        </div>
      </div>

      <div class="detailBlock">
        <div class="detailTitle">
          <span>STEP2 : 收件人</span>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">          
            <input type="checkbox"   v-model="eqPurchaser" @click="eqPurchsase()" class="largerCheckbox">
            <label for="eqPurchaser">
                 與訂購人相同請打勾
            </label>            
          </div>
        </div>
        <div class="form-group">
          <label for="Recipient" class="col-sm-2 control-label">收件人姓名:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  v-model="BuyDetail.Recipient"     placeholder="收件人姓名:">
          </div>
        </div>
        <div class="form-group">
          <label for="R_Address" class="col-sm-2 control-label">收件人地址:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  v-model="BuyDetail.R_Address"     placeholder="收件人地址:">
          </div>
        </div>
        <div class="form-group">
          <label for="R_Phone" class="col-sm-2 control-label">收件人手機:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  v-model="BuyDetail.R_Phone"     placeholder="收件人手機">
          </div>
        </div>
        <div class="form-group">
          <label for="R_Mail" class="col-sm-2 control-label">E-MAIL：</label>
          <div class="col-sm-10">
            <input type="email" class="form-control"  v-model="BuyDetail.R_Mail"     placeholder="E-MAIL：">
          </div>
        </div>
        <div class="form-group">
          <label for="R_Time" class="col-sm-2 control-label">收件時段:</label>
          <div class="col-sm-10">
            <select class="form-control"   v-model="BuyDetail.R_Time"      >
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
          <label for="PayType" class="col-sm-2 control-label">方式:</label>
          <div class="col-sm-10">
            <label class="radio-inline">
            <input type="radio" name="PayType" value="1" v-model="BuyDetail.PayType">ATM付款
          </label>
            <label class="radio-inline">
             <input type="radio" name="PayType" value="2" v-model="BuyDetail.PayType">信用卡
          </label>
            <label class="radio-inline">
            <input type="radio" name="PayType" value="3" v-model="BuyDetail.PayType">貨到付款
          </label>
          </div>
        </div>

        <div class="form-group">
          <label for="InoviceType" class="col-sm-2 control-label">發票:</label>
          <div class="col-sm-10">
            <label class="radio-inline">
          <input type="radio" name="InoviceType" value="1" v-model="BuyDetail.InoviceType">電子發票
          </label>
            <label class="radio-inline">
          <input type="radio" name="InoviceType" value="2" v-model="BuyDetail.InoviceType">捐贈發票
          </label>
            <label class="radio-inline">
          <input type="radio" name="InoviceType" value="3" v-model="BuyDetail.InoviceType">紙本發票
          </label>
          </div>
        </div>
      </div>

      <div class=" col-xs-12  col-md-offset-3 col-md-6">
        <button type="button" class="btn btn-info btn-lg btn-block">老闆~買了!買了!</button>
      </div>

    </form> 
  </div>
</template>



<script>
const BuyDetail = {
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
  'InoviceType': ''
}
export default {
  data: function() {
    return{
      BuyDetail,
      eqPurchaser: false
    }
  },
  methods: {
    eqPurchsase() {
      if(this.eqPurchaser === true) {
        this.BuyDetail.Recipient = this.BuyDetail.Purchaser
        this.BuyDetail.R_Phone = this.BuyDetail.P_Phone
        this.BuyDetail.R_Address = this.BuyDetail.P_Address
        this.BuyDetail.R_Mail = this.BuyDetail.P_Mail
      }
    }
  }
}

</script>
<style  scoped>
  .detailBlock{
    font-size:18px;
    border: 1px solid #77C9FF;
    border-radius: 10px;
    padding:30px;
    margin:20px;
  }
.detailTitle{
  font-size:25px;
  color:#777;
  font-weight:bold;
  background: #f8cc2b;
  margin-bottom:10px;
  padding:5px;  
}
input.largerCheckbox{
width: 20px;
height: 20px;
}
</style>
