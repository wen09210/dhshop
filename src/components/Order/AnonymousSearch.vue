<template>
  <div class="container">
    <div class="pageHeader">訂單快速查詢</div>
    <form class="form-inline" role="form">
      <div class="form-group">
        <label class="">訂單號碼:</label>
        <input type="text" class="form-control" v-model="searchData.MerchantTradeNo" placeholder="輸入訂單號碼">
      </div>
      <span>及</span>
      <div class="form-group">
        <label class="">購買人電話號碼:</label>
        <input type="text" class="form-control" v-model="searchData.P_Phone" placeholder="輸入電話號碼">
      </div>
      <div class="form-group">
        <input type="button" class="btn btn-primary" id="input" value="查詢" @click="search">
      </div>
    </form>
    <!-- 訂單資料 -->
    <template v-if="Object.keys(orderData).length>0">
      <label>訂單明細</label>      
      <table class="table-rwd table table-striped table-hover">
        <thead>
          <tr class="orderMain tr-only-hide">
            <th>訂單編號</th>
            <th>訂購日期</th>
            <th>總價</th>
            <th>付款方式</th>
            <th>付款狀態</th>
            <th>ATM銀行代號</th>
            <th>ATM帳號</th>
            <th>ATM付款期限</th>            
            <th>配送方式</th>
            <th>發票</th>
            <!-- <th></th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-th="訂單編號">{{orderData.OrderView.MerchantTradeNo}}</td>
            <td data-th="訂購日期">{{orderData.OrderView.OrderDate|datetimeTrans}}</td>
            <td data-th="總價">{{orderData.OrderView.AllTotalAmt}}元</td>
            <td data-th="付款方式">{{orderData.OrderView.PayType|payTypeToCH}}</td>
            <td data-th="付款狀態">{{orderData.OrderView.PayStatus |payStatusToCH}}</td>
            <td data-th="ATM銀行代號">{{orderData.OrderView.V_BankCode}}</td>
            <td data-th="ATM帳號">{{orderData.OrderView.V_Account}}</td>
            <td data-th="ATM付款期限">{{orderData.OrderView.V_ExpireDate}}</td>
            
            <td data-th="配送方式">{{orderData.OrderView.DeliveryType|deliveryTypeToCH}}</td>
            <td data-th="發票">{{orderData.OrderView.InoviceStatus|inoviceStatusToCH}}</td>
            <!-- <td data-th=""></td> -->
          </tr>
        </tbody>
      </table>
      <!--商品明細-->
      <div>
        <label>訂單商品明細</label>
        <table class="table-rwd table  table-striped table-hover">
          <thead>
            <tr class="orderMain tr-only-hide">
              <th style="width: 150px;">產品名稱</th>
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
              <td data-th="產品名稱">{{itemD.ProdName}}</td>
              <td data-th="產品樣式">{{itemD.ProdStyle}}</td>
              <td data-th="數量">{{itemD.Quantity}}</td>
              <td data-th="出貨日期">{{itemD.DeliveryDate}}</td>
              <td data-th="運送狀態">{{itemD.DeliveryStatus|deliveryStatusToCH}}</td>
              <td data-th="貨運公司">{{itemD.DeliveryCompany}}</td>
              <td data-th="貨運編號">{{itemD.DeliveryNumber}}</td>
              <!-- <td data-th="訂單編號"></td> -->
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
          // console.log(response)
          if (response.data.statu === 'err') {
            // this.$noty.ShowAlert(response.data.msg, 'warning')
            this.$Notice.warning({
              title: 'dHSHOP 提醒',
              desc: response.data.msg
            })
          }
          // console.log(response.data.data.orderData)
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

label,span {
  font-size: 16px;
}

.table {
  font-size: 16px;
}

@media (max-width: 736px) {
  .table-rwd {
    min-width: 100%;
  }
  /*針對tr去做隱藏*/
  tr.tr-only-hide {
    display: none !important;
  }
  /*讓tr變成區塊主要讓他有個區塊*/
  .table-rwd tr {
    display: block;
    border: 1px solid #ddd;
    margin-top: 5px;
  }
  .table-rwd td {
    text-align: left;
    font-size: 15px;
    overflow: hidden;
    width: 100%;
    display: block;
  }
  .table-rwd td:before {
    /*最重要的就是這串*/
    content: attr(data-th) " : ";
    /*最重要的就是這串*/
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 10px;
    color: #D20B2A;
  }
  /*當RWD縮小的時候.table-bordered 會有兩條線，所以針對.table-bordered去做修正*/
  .table-rwd.table-bordered td,
  .table-rwd.table-bordered th,
  .table-rwd.table-bordered {
    border: 0;
  }
}

</style>
