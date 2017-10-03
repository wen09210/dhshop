<template>
  <div class="container">
    <div class="pageHeader">付款方式</div>
    <!-- 付款資訊 -->
    <div class="detailBlock">
      <div class="detailTitle">
        <span>付款方式</span>
      </div>
      <Form label-position="top">
        <FormItem label="付款方式:">
          <RadioGroup v-model="BuyerDetail.PayType" size="large" vertical>
            <Radio label="1">ATM付款
              <span class="amtDetail">NT ${{GetshowAmtData.totalAmt}}元</span>
            </Radio>
            <Radio label="2">信用卡(一次付清)
              <span class="amtDetail">NT ${{GetshowAmtData.totalAmt}}元</span>
            </Radio>
            <Radio label="3">信用卡(分三期付款)
              <span class="amtDetail">NT ${{Math.floor(GetshowAmtData.totalAmt*1.0025/3)}}元 X 3期</span>
            </Radio>
            <Radio label="4">信用卡(分六期付款)
              <span class="amtDetail">NT ${{Math.floor(GetshowAmtData.totalAmt*1.0175/6)}}元 X 6期</span>
            </Radio>
            <Radio label="5">貨到付款
              <span class="amtDetail">NT ${{GetshowAmtData.totalAmt}}元</span>
            </Radio>
          </RadioGroup>
          <span class="col-sm-10 creditNote">(※除不盡餘數於第一期收取)</span>
        </FormItem>
        <FormItem label="發票:">
          <RadioGroup v-model="BuyerDetail.InoviceType" size="large">
            <Radio label="1">電子發票</Radio>
            <Radio label="2">捐贈發票</Radio>
            <Radio label="3">紙本發票</Radio>
            <Radio label="4">公司三聯發票</Radio>
          </RadioGroup>
        </FormItem>
        <!-- 捐贈發票資訊 -->
        <template v-if="BuyerDetail.InoviceType==='2'">
          <FormItem label="捐贈單位:">
            <Select class="lovecodeSelect" v-model="BuyerDetail.InoviceLoveCode">
              <Option v-for="item in InvoiceCode" :value="item.lovecode" :key="item.lovecode">{{item.name}}</Option>
            </Select>
          </FormItem>
        </template>
        <!-- 捐贈發票資訊end -->
        <!-- 公司發票資訊 -->
        <template v-if="BuyerDetail.InoviceType==='4'">
          <FormItem label="訂購人姓名:">
            <Input v-model="BuyerDetail.Corporation" placeholder="公司抬頭:"></Input>
            <Input v-model="BuyerDetail.taxIDNum" placeholder="統一編號:"></Input>
          </FormItem>
        </template>
        <!-- 公司發票資訊end -->
        <FormItem label="運送方式:">
          <RadioGroup v-model="BuyerDetail.DeliveryType" size="large">
            <Radio label="1">宅配</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
    </div>
    <!-- 付款資訊end -->
    <!-- 上一步回購物車 -->
    <div class=" col-xs-5 col-md-5">
      <button type="button" class="btn btn-success btn-lg btn-block" @click="SetCartStepBar(1)">回購物車!</button>
    </div>
    <!-- 上一步回購物車end -->
    <!-- 結帳 -->
    <div class=" col-xs-7 col-md-7">
      <button type="button" @click="GetMacValue({$Spin,BuyerDetail})" class="btn btn-info btn-lg btn-block">老闆~買了!買了!</button>
    </div>
    <!-- 結帳end -->
  </div>
</template>
<script>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      BuyerDetail: this.GetBuyerDetail,
      InvoiceCode: InvoiceCode
    }
  },
  mounted() {
    this.BuyerDetail = this.GetBuyerDetail
  },
  computed: {
    ...mapGetters([
      'GetshowAmtData',
      'GetBuyerDetail'
    ])
  },
  methods: {
    ...mapActions([
      // 送出訂單(綠界OR貨到付款)
      'GetMacValue',
      'SetCartStepBar'
    ])
  }
}

</script>
<style>
.creditNote {
  font-size: 14px;
  margin-top: 10px;
}

</style>
