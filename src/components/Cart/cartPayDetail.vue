<template>
 <!-- 付款資訊 -->
          <div class="detailBlock">
          <div class="detailTitle">
            <span>付款方式</span>
          </div>
          <div class="form-group">
            <div class="col-xs-3  col-sm-2">
              <label for="PayType" class="control-label">付款方式:</label>
            </div>
            <div class="col-xs-9  col-sm-10">
              <label class="radio-inline">
                <input type="radio" name="PayType" value="1" v-model="BuyerDetail.PayType"> ATM付款
                <span class="amtDetail">NT ${{GetshowAmtData.totalAmt}}元</span>
              </label>
            </div>
            <div class="col-xs-offset-3 col-xs-9  col-sm-offset-2 col-sm-10">
              <label class="radio-inline">
                <input type="radio" name="PayType" value="2" v-model="BuyerDetail.PayType"> 信用卡(一次付清)
                <span class="amtDetail">NT ${{GetshowAmtData.totalAmt}}元</span>
              </label>
            </div>
            <div class="col-xs-offset-3 col-xs-9 col-sm-offset-2 col-sm-10 creditNote">(※除不盡餘數於第一期收取)</div>
            <div class="col-xs-offset-3 col-xs-9 col-sm-offset-2 col-sm-10">
              <label class="radio-inline">
                <input type="radio" name="PayType" value="3" v-model="BuyerDetail.PayType"> 信用卡(分三期付款)
                <span class="amtDetail">NT ${{Math.floor(GetshowAmtData.totalAmt*1.0025/3)}}元 X 3期</span>
              </label>
            </div>
            <div class="col-xs-offset-3 col-xs-9 col-sm-offset-2 col-sm-10">
              <label class="radio-inline">
                <input type="radio" name="PayType" value="4" v-model="BuyerDetail.PayType"> 信用卡(分六期付款)
                <span class="amtDetail">NT ${{Math.floor(GetshowAmtData.totalAmt*1.0175/6)}}元 X 6期</span>
              </label>
            </div>
            <div class="col-xs-offset-3 col-xs-9 col-sm-offset-2 col-sm-10">
              <label class="radio-inline">
                <input type="radio" name="PayType" value="5" v-model="BuyerDetail.PayType"> 貨到付款
                <span class="amtDetail">NT ${{GetshowAmtData.totalAmt}}元</span></span>
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
              <!-- 付款資訊end -->
</template>
