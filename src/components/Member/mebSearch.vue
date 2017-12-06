<template>
  <div class="container">
    <h3><i class="fa fa-list-alt" aria-hidden="true"></i>訂單狀態查詢</h3>
    <hr>
    <form class="form-inline" role="form">
      <label>訂單號碼:</label>
      <div class="form-group">
        <input type="text" class="form-control" v-model="searchData.orderId" placeholder="輸入查詢">
      </div>
      <span>或</span>
      <label>日期:</label>
      <div class="form-group">
        <datepicker language="zh" input-class="form-control" format="yyyy-MM-dd" placeholder="起始時間" v-model="searchData.startdate">
        </datepicker>
      </div>
      <label>到</label>
      <div class="form-group">
        <datepicker language="zh" input-class="form-control" format="yyyy-MM-dd" placeholder="結束時間" v-model="searchData.enddate">
        </datepicker>
      </div>
      <div class="form-group">
        <input type="button" class="btn btn-info" id="input" value="查詢" @click="search">
      </div>
    </form>
    <template v-if="orderlist.length>0">
      <div v-for="item in orderlist" class="orderDiv">
        <table class="table table-striped table-hover">
          <thead>
            <tr class="orderMain">
              <th></th>
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
              <td>
                <button type="button" class="btn btn-info" @click="item.OpenCollapse=!item.OpenCollapse">訂單詳細</button>
              </td>
              <td>{{item.OrderView.MerchantTradeNo}}</td>
              <td>{{item.OrderView.OrderDate|datetimeTrans}}</td>
              <td>{{item.OrderView.AllTotalAmt}}</td>
              <td>{{item.OrderView.PayType|payTypeToCH}}</td>
              <td>{{item.OrderView.PayStatus |payStatusToCH}}</td>
              <td>{{item.OrderView.DeliveryType|deliveryTypeToCH}}</td>
              <td>{{item.OrderView.InoviceStatus|inoviceStatusToCH}}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <!--商品明細-->
        <collapse v-model="item.OpenCollapse">
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
                <tr v-for="itemD in item.OrderDetailsView">
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
        </collapse>
      </div>
    </template>
    <pagination :cur="tcur" :all="tall" :callback="search"></pagination>
  </div>
</template>
<script>
import pagination from '../extension/pagination.vue'
import { Collapse } from 'uiv'
import { mapGetters } from 'vuex'
import Datepicker from 'vuejs-datepicker'
import axios from 'axios'

export default {
  components: {
    Datepicker,
    Collapse,
    pagination
  },
  data() {
    return {
      searchData: {
        orderId: '',
        startdate: '',
        enddate: ''
      },
      orderlist: [],
      tcur: 1,
      tall: 0
    }
  },
  created() {
    this.search(1)
  },
  computed: {
    ...mapGetters([
      'GetLoginInfo'
    ])
  },
  methods: {
    search(page) {
      axios.post(`/api/MemberAccount/SearchOrder`, {
        model: this.searchData,
        pageIndex: page
      }, {
        headers: {
          'Authorization': this.GetLoginInfo.JWTAuthorization
        }
      })
        .then((response) => {
          // console.log(response)
          if (response.data.statu === 'err') {
            // this.$noty.ShowAlert(response.data.msg, 'warning')
            this.$Notice.warning({
              title: 'dHSHOP 提醒',
              desc: response.data.msg
            })
          }
          this.orderlist = response.data.data.list
          this.tall = response.data.data.PageCount
          this.tcur = page
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

.orderDiv {
  border: 1px solid #5bc0de;
  margin: 15px 0px;
}

</style>
