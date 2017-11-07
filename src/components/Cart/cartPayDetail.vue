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
          <RadioGroup v-model="BuyerDetail.PayType" size="large" vertical v-if="PayType.length >0">
            <template v-for="item in PayType">
              <Radio :label="item.No">{{item.PayTypeName}}
                <span v-if="item.No ==='3'" class="amtDetail">
                NT${{Math.floor(GetshowAmtData.totalAmt*1.0025/3)}}元 X3期                
              </span>
                <span v-else-if="item.No ==='4'" class="amtDetail">
                NT${{Math.floor(GetshowAmtData.totalAmt*1.0175/6)}}元 X6期                
              </span>              
                <span v-else class="amtDetail">
                NT${{GetshowAmtData.totalAmt}}元                
              </span>
              </Radio>
            </template>
            <!-- <Radio label="1">ATM付款
              <span class="amtDetail">NT${{GetshowAmtData.totalAmt}}元</span>
            </Radio>
            <Radio label="2">信用卡(一次付清)
              <span class="amtDetail">NT${{GetshowAmtData.totalAmt}}元</span>
            </Radio>
            <Radio label="3">信用卡(分三期付款)
              <span class="amtDetail">NT${{Math.floor(GetshowAmtData.totalAmt*1.0025/3)}}元 X3期</span>
            </Radio>
            <Radio label="4">信用卡(分六期付款)
              <span class="amtDetail">NT${{Math.floor(GetshowAmtData.totalAmt*1.0175/6)}}元 X6期</span>
            </Radio>
            <Radio label="5">貨到付款
              <span class="amtDetail">NT${{GetshowAmtData.totalAmt}}元</span>
            </Radio> -->
          </RadioGroup>
          <span class="col-sm-10 creditNote">(※除不盡餘數於第一期收取)</span>
        </FormItem>
        <template v-if="Object.keys(BuyerDetail).length >0">
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
        </template>
      </Form>
    </div>
    <!-- 付款資訊end -->
    <!-- 上一步回訂購資料 -->
    <div class=" col-xs-5 col-md-5">
      <button type="button" class="btn btn-success btn-lg btn-block" @click="goBuyerDetail">修改訂購資料!</button>
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
import InvoiceCode from '../../../static/file/lovecode.json'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      PayType: [],
      BuyerDetail: {},
      InvoiceCode: InvoiceCode
    }
  },
  created() {
    this.SetLoading(true)
    axios.get(`/api/PayType/GetPayType`)
      .then((res) => {
        if (res.data.statu === 'err') {
          this.$Notice.warning({
            title: 'dHSHOP 提醒',
            desc: res.data.msg
          })
        } else {
          this.PayType = res.data.data
        }
        this.SetLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
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
      'SetCartStepBar',
      'SetLoading'
    ]),
    goBuyerDetail() {
      this.SetCartStepBar(1)
      window.scroll(0, 70)
    }
  }
}

</script>
<style scoped>
.lovecodeSelect {
  width: 80%;
}

.ivu-select-selected-value {
  font-size: 16px !important;
}

.creditNote {
  font-size: 14px;
  margin-top: 10px;
}

.ivu-radio-large .ivu-radio-wrapper,
.ivu-radio-large.ivu-radio-wrapper {
  font-size: 16px;
}

</style>
