<template>
  <div class="container">
    <!-- 成功 -->
    <template v-if="payInfo.status ==='ok' ">
      <div class="Row">
        <!-- 步驟條 -->
        <!-- <template>
          <div class="">
            <div class="col-md-12 col-xs-12 stepbar">
              <Steps :current="CartStepBar">
                <Step title="購  物  車" icon="ios-cart"></Step>
                <Step title="訂購資料" icon="compose"></Step>
                <Step title="付款方式" icon="card"></Step>
                <Step title="恭喜完成" icon="checkmark-circled"></Step>
              </Steps>
            </div>
          </div>
        </template> -->
        <!-- 步驟條end -->
        <!-- 內容 -->
        <div class="col-md-12 col-xs-12">
          <div class="thank">感謝您的購買，還差一步!!</div>
          <div class="note col-sm-offset-3 col-xs-offset-1 ">
            <p>訂購明細已寄至所填信箱，我們會盡快處理您的訂單，</p>
            <p>出貨前會以電話聯繫您，請再留意手機來電。</p>
          </div>
          <template v-if="payInfo.type === 'ATM'">
            <div class="col-md-12 col-xs-12">
              <p class="t_w1">匯款帳號</p>
              <table class="table account">
                <tr>
                  <td>銀行代碼
                    <td>{{payInfo.BankCode}}</td>
                </tr>
                <tr>
                  <td>帳號</td>
                  <td>{{payInfo.vAccount}}</td>
                </tr>
                <tr>
                  <td>期限</td>
                  <td>{{payInfo.ExpireDate}}</td>
                </tr>
              </table>
            </div>
          </template>
          <div class="hidden-xs LineDiv">
            <a href="https://line.me/R/ti/p/%40eat5207g"><img src="../../assets//icon/lineat.jpg" alt="" class="lineImg" style="width:200px;wheight:200px;"></a>
          </div>
          <div class="visible-xs LineDiv">
            <a href="https://line.me/R/ti/p/%40eat5207g"><img height="142" border="0" alt="加入好友" src="../../assets/icon/dhshoplinebtn.png" class="lineImg img-responsive"></a>
          </div>
          <div class="t_w1">「加入LINE@隨時追蹤您的訂單」
            <br><span style="font-size: .8em;">(手機可直接點擊加入喔)</span></div>
        </div>
        <div class="col-md-12 col-xs-12 thank_word">
          <img src="../../assets/temporyPic/antifraud.gif" alt="" style="width: 100%;max-width: 891px;">
        </div>
      </div>
    </template>
    <template v-else>
      <div class="container">
        <div class="thank">很抱歉，您的訂單成立失敗。</div>
        <template v-if="payInfo.type === 'Credit'">
          <div class="row">
            <div class="col-sm-offset-2 col-sm-10 creditQuestion">
              <span style="font-size:20px;"><b>可能的原因有：</b></span></br>
              </br>
              <p>1. 信用卡第一次使用尚未開卡。</p>
              <p>2. 信用卡卡號或到期日輸入錯誤。</p>
              <p>3. 信用卡已超過到期日使用期限。</p>
              <p>4. 超出信用卡使用額度或餘額不足。</p>
              <p>5. 信用卡發卡銀行內部系統問題…等。</p>
              <p>6. 此筆卡號同時有人刷卡授權中，因此視窗會跳出。</p>
              <p>7. 信用卡授權時，網路斷線。</p>
              </br>
              <li>若您的信用卡並未超出使用額度，請回到商店重新購買。</li>
              <li style="color:red">提醒您！請留意輸入的信用卡卡號、姓名、到期日以及卡片背後末3碼是否正確。
                <br>如果依然收到授權失敗的通知，可能原因為發卡銀行內部系統作業問題，請與您的信用卡發卡銀行聯絡。</li>
            </div>
          </div>
        </template>
        <div class="note row">
          <div class=" col-xs-offset-3 col-sm-offset-3 col-sm-4">
            <p>如有疑問，歡迎請與客服聯繫</p>
            <p>客服電話:0966-140567</p>
            <p>客服信箱:cs.dhshop@gmail.com</p>
            <p>line@帳號:@eat5207g</p>
          </div>
          <div class="col-sm-3">
            <div class="hidden-xs LineDiv">
              <a href="https://line.me/R/ti/p/%40eat5207g"><img src="../../assets/icon/lineat.jpg" alt="" class="lineImg" style="width:200px;wheight:200px;"></a>
            </div>
            <div class="visible-xs LineDiv">
              <a href="https://line.me/R/ti/p/%40eat5207g"><img height="142" border="0" alt="加入好友" src="../../assets/icon/lineat.jpg" class="lineImg img-responsive"></a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div style="display:inline;">
      <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1021000868/?value=2000.00&currency_code=TWD&label=E7ROCLWmw3QQpPns5gM&guid=ON&script=0" />
    </div>
  </div>
</template>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>
<script>
import Lockr from 'lockr'
import { mapGetters } from 'vuex'
export default {
  created() {
    if(Object.keys(this.GetshowAmtData).length > 0) {
      this.gaValue = this.GetshowAmtData.totalAmt
      // alert(this.gaValue)
    }
    /* eslint-disable */
    var google_conversion_id = 1021000868
    var google_conversion_label = 'E7ROCLWmw3QQpPns5gM'
    var google_conversion_value = this.gaValue
    var google_conversion_currency = 'TWD'
    var google_remarketing_only = false
    /* eslint-enable */
    if (this.$decodeCookies.getJSON('PayOk') !== undefined) {
      this.payInfo = this.$decodeCookies.getJSON('PayOk')
      if (this.payInfo.status === 'ok') {
        // debugger
        // 當前購物車
        let cartItem = Lockr.get('shoppingCartItem')
        let insertItem
        if (cartItem) {
          insertItem = cartItem.map((el) => {
            return { 'prodID': el.prodID, 'name': el.name, 'ImgUrl': el.ImgUrl }
          })
        }
        // 歷史記錄
        let oldHistory = Lockr.get('oldCartItem')
        // 查無直接塞入
        if (oldHistory === undefined) {
          Lockr.set('oldCartItem', insertItem)
        } else {
          // 塞入無重複的
          insertItem.forEach((item) => {
            if (oldHistory.find(x => x.prodID === item.prodID) === undefined) {
              oldHistory.push(item)
            }
          }, this)
        }
        //  清空購物車
        Lockr.rm('shoppingCartItem')
      }
    }
  },
  computed: {
    ...mapGetters([
      'GetshowAmtData'
    ])
  },
  data() {
    return {
      payInfo: {},
      CartStepBar: 3,
      gaValue: 0
    }
  }
}

</script>
<style scoped>
.LineDiv {
  vertical-align: middle;
}

.lineImg {
  display: block;
  margin: 0 auto;
}

.note {

  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
}

.creditQuestion {
  font-size: 16px;
  background: #eee;
  padding: 5px 10px;
}

.atmNote {
  margin-top: 1em;
  padding-top: 1em;
}

.thank {
  padding: 1% 0%;
  width: 100%;
  font-size: 2.5em;
  text-align: center;
  font-family: "微軟正黑體";
  font-weight: bolder;
  text-shadow: 4px 4px 4px #c5bfbf;
}

.thank_word {
  margin-bottom: 20px;
  text-align: center;
  font-size: 1em;
}

.t_w1 {
  font-size: 1.5em;
  color: #676767;
  text-align: center;
}

.account {
  background: #eee;
  margin: 20px auto;
  padding: 30px;
  text-align: center;
  font-size: 20px;
}

.account td {
  height: 30px;
  padding: 0px 10px;
}

.account tr td:nth-child(odd) {
  background: #fff3d7;
}

</style>
