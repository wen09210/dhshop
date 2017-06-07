<template>
  <div class="container">
    <h3>訂單查詢</h3>
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
      <div v-for="item in orderlist">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th></th>
              <th>訂單編號</th>
              <th>訂購日期</th>
              <th>總價</th>
              <th>付款方式</th>
              <th>付款狀態</th>
              <th>配送狀態</th>
              <th>發票</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button type="button" class="btn btn-info" @click="item.OpenCollapse=!item.OpenCollapse">訂單詳細</button>
              </td>
              <td>{{item.OrderView.OrderNum}}</td>
              <td>{{item.OrderView.OrderDate}}</td>
              <td>{{item.OrderView.AllTotalAmt}}</td>
              <td>{{item.OrderView.PayType}}</td>
              <td>{{item.OrderView.PayStatus}}</td>
              <td>{{item.OrderView.DeliveryType}}</td>
              <td>{{item.OrderView.InoviceStatus}}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <!--商品明細-->
        <collapse v-model="item.OpenCollapse">
          <div>
            <table class="table table-striped table-hover">
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
                  <td>{{itemD.DeliveryStatus}}</td>
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

    <pagination v-model="currentPage" :total-page="totalSize" :max-size="maxSize"></pagination>
  </div>
</template>


<script>
  import {
    Collapse,
    Pagination
  } from 'uiv'
  import {
    mapGetters
  } from 'vuex'
  import Datepicker from 'vuejs-datepicker'
  import axios from 'axios'
  export default {
    components: {
      Datepicker,
      Collapse,
      Pagination
    },
    data() {
      return {
        searchData: {
          orderId: '',
          startdate: '',
          enddate: ''
        },
        orderlist: []
      }
    },
    computed: {
      ...mapGetters([
        'GetLoginInfo'
      ])
    },
    methods: {
      search() {
        axios.post(`/api/MemberAccount/SearchOrder`, this.searchData, {
          headers: {
            'Authorization': this.GetLoginInfo.JWTAuthorization
          }
        })
          .then((res) => {
            console.log(res)
            this.orderlist = res.data.data
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }

</script>

<style scoped>
  div .form-control {
    width: 250px;
  }

</style>
