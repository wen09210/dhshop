<template>
  <div class="container">
    <div class="pageHeader">訂單快速查詢</div>
    <form class="form-inline" role="form">
      <label>訂單號碼:</label>
      <div class="form-group">
        <input type="text" class="form-control" v-model="searchData.MerchantTradeNo" placeholder="輸入訂單號碼">
      </div>
      <span>及</span>
      <label>購買人電話號碼:</label>
      <div class="form-group">
        <input type="text" class="form-control" v-model="searchData.P_Phone" placeholder="輸入電話號碼">
      </div>
      <div class="form-group">
        <input type="button" class="btn btn-info" id="input" value="查詢" @click="search">
      </div>
    </form>
    <!-- 訂單資料 -->
    <template v-if="Object.keys(orderData).length>0">
      <table class="table table-striped table-hover">
        <thead>
          <tr class="orderMain">
            <th>訂單編號</th>
            <th>訂購日期</th>
            <th>總價</th>
            <th>付款方式</th>
            <th>付款狀態</th>
            <th>配送方式</th>
            <th>發票</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{orderData.OrderView.MerchantTradeNo}}</td>
            <td>{{orderData.OrderView.OrderDate|datetimeTrans}}</td>
            <td>{{orderData.OrderView.AllTotalAmt}}</td>
            <td>{{orderData.OrderView.PayType|payTypeToCH}}</td>
            <td>{{orderData.OrderView.PayStatus |payStatusToCH}}</td>
            <td>{{orderData.OrderView.DeliveryType|deliveryTypeToCH}}</td>
            <td>{{orderData.OrderView.InoviceStatus|inoviceStatusToCH}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <!--商品明細-->
      <div>
        <table class="table  table-striped table-hover">
          <thead>
            <tr>
              <th>產品名稱</th>
              <th>產品樣式</th>
              <th>數量</th>
              <th>出貨日期</th>
              <th>運送狀態</th>
              <th>貨運公司</th>
              <th>貨運編號</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="itemD in orderData.OrderDetailsView">
              <td>{{itemD.ProdName}}</td>
              <td>{{itemD.ProdStyle}}</td>
              <td>{{itemD.Quantity}}</td>
              <td>{{itemD.DeliveryDate}}</td>
              <td>{{itemD.DeliveryStatus|deliveryStatusToCH}}</td>
              <td>{{itemD.DeliveryCompany}}</td>
              <td>{{itemD.DeliveryNumber}}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <!-- 訂單資料end -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      searchData: {
        MerchantTradeNo: '',
        P_Phone: ''
      },
      orderData: {}
    }
  },
  methods: {
    search(page) {
      axios.post(`/api/MemberAccount/AnonymousSearchOrder`,
          this.searchData
        )
        .then((response) => {
          console.log(response)
          if (response.data.statu === 'err') {
            // this.$noty.ShowAlert(response.data.msg, 'warning')
            this.$Notice.warning({
              title: 'dHSHOP 提醒',
              desc: response.data.msg
            })

          }
          console.log(response.data.data.orderData)
          this.orderData = response.data.data
        })
        .catch((err) => console.log(err))
    }
  }
}

</script>
<style scoped>
div .form-control {
  width: 250px;
}

.orderMain {
  background: #4689c2;
  color: #fff;
}

</style>
