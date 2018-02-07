<template>
  <div class="container">
    <div class="pageHeader">付款方式</div>
    <!-- 付款資訊 -->
    <div class="detailBlock">
      <div class="detailTitle">
        <span>付款方式</span>        
      </div>
      {{AlertAtmOver}}
      <Modal v-model="openAtmAlert" title="dHSHOP 提醒" ok-text="了解" cancel-text="">
        <p slot="header" style="color:#f60;text-align:center;font-size:20px;">
            <Icon type="information-circled"></Icon>
            <span>dHSHOP 提醒</span>
        </p>
        <h4>ATM付款超過3萬元，記得選擇<b style="color:red">「繳費」</b>才能順利完成付款喔</h4>
        <br>
        <img src="../../assets/temporyPic/atmAlert.jpg" class="img-responsive">
      </Modal>
      <!-- 分期銀行 -->
      <Modal v-model="openCreditAlert" title="dHSHOP 提醒" ok-text="了解" cancel-text="">
        <p slot="header" style="color:#f60;text-align:center;font-size:20px;">
            <Icon type="information-circled"></Icon>
            <span>dHSHOP 提醒</span>
        </p>
        <img src="../../assets/temporyPic/creditenote.png" class="img-responsive">
      </Modal>
      <a style="position: absolute;margin-top: 5px;margin-left: 80px;" @click="openCART">(購物車商品)</a>
      <Form label-position="top">
        <FormItem label="付款方式:">
          <RadioGroup v-model="BuyerDetail.PayType" size="large" vertical v-if="PayType.length >0">
            <template v-for="item in PayType">
              <template v-if="item.No ==='5' && (BuyerDetail.R_City==='澎湖縣' ||BuyerDetail.R_City==='金門縣'||BuyerDetail.R_City==='連江縣')">
                <Radio :label="item.No" class="RadioBtn" disabled>
                  {{item.PayTypeName}}
                  <span class="amtDetail noteMobile">
                  NT${{GetshowAmtData.totalAmt}}元
                  <br>
                <span class="col-sm-12 creditNote">(※離島地區因貨運限制，無法<br>選擇貨到付款)</span><br>
                  </span>
                  <br>
                </Radio>
              </template>
              <!-- 非離島 -->
              <template v-else>
                <Radio :label="item.No" class="RadioBtn">
                  <span>{{item.PayTypeName}}</span>
                  <span v-if="item.No ==='1'" class="amtDetail noteMobile">
                <span>NT${{Math.ceil(GetshowAmtData.totalAmt*(1+item.CreditRate/1000))}}元</span>
                  <span v-if="parseInt(item.CreditRate)<0">
                  (現省{{-Math.ceil(GetshowAmtData.totalAmt*(item.CreditRate/1000))}}元)
                  </span>
                  </span>
                  <span v-else-if="item.No ==='3'" class="amtDetail noteMobile">
                NT${{Math.ceil(GetshowAmtData.totalAmt*(1+item.CreditRate/1000)/3)}}元 X3期 
                <a  @click="openCreditAlert = !openCreditAlert">(分期銀行)</a>          
              </span>
                  <span v-else-if="item.No ==='4'" class="amtDetail noteMobile">
                NT${{Math.ceil(GetshowAmtData.totalAmt*(1+item.CreditRate/1000)/6)}}元 X6期 
                 <a  @click="openCreditAlert = !openCreditAlert">(分期銀行)</a>                      
              </span>
                  <span v-else-if="item.No ==='5'" class="amtDetail noteMobile">
                NT${{GetshowAmtData.totalAmt}}元
                <br>
                <span class="col-sm-12 creditNote">(※預購商品尚不能選擇貨到付款)</span>
                  </span>
                  <span v-else class="amtDetail noteMobile">
                NT${{GetshowAmtData.totalAmt}}元
              </span>
                </Radio>
              </template>
            </template>
          </RadioGroup>
          <!-- <span class="col-sm-10 creditNote">(※除不盡餘數於第一期收取)</span> -->
        </FormItem>
        <br>
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
      <button type="button" class="btn btnGreen btn-lg btn-block" @click="goBuyerDetail">修改資料</button>
    </div>
    <!-- 上一步回購物車end -->
    <!-- 結帳 -->
    <div class=" col-xs-7 col-md-7">
      <button type="button" @click="StartPay" class="btn btnOrange btn-lg btn-block"><b>確認購買!</b></button>
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
      InvoiceCode: InvoiceCode,
      openAtmAlert: true,
      openCreditAlert: false
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
    ]),
    AlertAtmOver() {
      if (this.BuyerDetail.PayType === '1' && parseInt(this.GetshowAmtData.totalAmt) > 30000) {
        this.openAtmAlert = true
      } else {
        this.openAtmAlert = false
      }
    }
  },
  methods: {
    ...mapActions([
      // 送出訂單(綠界OR貨到付款)
      'GetMacValue',
      'SetCartStepBar',
      'SetLoading',
      'openCART'
    ]),
    goBuyerDetail() {
      this.SetCartStepBar(1)
      window.scroll(0, 70)
    },
    StartPay() {
      this.GetMacValue({
        $Spin: this.$Spin,
        BuyerDetail: this.BuyerDetail
      })
    }
  }
}

</script>
<style scoped>
.lovecodeSelect {
  width: 80%;
  font-size: 16px !important;
}

.ivu-select-selected-value {
  font-size: 16px !important;
}

.ivu-radio-large .ivu-radio-wrapper,
.ivu-radio-large.ivu-radio-wrapper {
  font-size: 16px;
}

.amtDetail {
  color: #c90026;
  font-weight: bold;
  /* margin-left: 15px; */
  line-height: 16px;
}

@media (max-width:768px) {
  .noteMobile {
    display: block;
    padding-left: 20px;
    padding-bottom: 3px;
    box-shadow: 0 4px 6px -6px #222;
  }
  .RadioBtn {
    margin-top: 20px;
  }
}
.col-xs-7 {
    padding-right: 5px;
    padding-left: 5px;
}
.creditNote{
  padding: 0px;
}
</style>
