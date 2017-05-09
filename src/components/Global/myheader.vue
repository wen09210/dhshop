<template>
  <div>
    <!-- header -->

    <nav class="navbar navbar-default  navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
             </button>
          <a class="" href="http://www.dhshop.tw/mall.html" role="button">
            <img src="../../assets/icon/dhshop_logo.svg">
          </a>
        </div>

        <collapse class="navbar-collapse" v-model="showNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li class="headerIcon">
              <a href="http://www.dhshop.tw/salepage/usercenter.html">
                <button type="button" class="btn  BtnToA headerIcon">
                      <i class="fa fa-question-circle"></i>
                       客服中心
                  </button>
              </a>
            </li>

            <li>
              <a>
                <popover title="購物商品" trigger="hover" placement="bottom">
                  <router-link to="/cart">
                    <button type="button" class="btn  BtnToA headerIcon" data-role="trigger">
                       <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      購物車
                    </button>
                  </router-link>
                  <div slot="popover"  class="popoverCart">
                    <table class="table table-border">
                      <thead>
                        <tr>
                          <th>商品名稱</th>
                          <th>商品單價</th>
                          <th>商品數量</th>
                          <th>商品總金額</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tr v-for="item in GetShoppingCartItem">
                        <td>{{item.name}}</td>
                        <td>{{item.unitPrice}}</td>
                        <td>{{item.count}}</td>
                        <td>{{item.totalAmt}}</td>
                      </tr>
                      <router-link class="btn btn-default btn-info" to='/cartPay'>結賬</router-link>
                    </table>
                  </div>
                </popover>
              </a>
            </li>

            <li class="headerIcon">
              <a>
                <router-link to="/member">
                  <button type="button" class="btn  BtnToA headerIcon">
                       <i class="fa fa-users" aria-hidden="true"></i>
                      會員專區
                    </button>
                </router-link>
              </a>
            </li>

            <li class="headerIcon">
              <a>                
                <router-link to="/login">
                  <button type="button" class="btn  BtnToA headerIcon">
                      <i class="fa fa-sign-in" aria-hidden="true"></i>
                       登入
                  </button>
                </router-link>
              </a>
            </li>

          </ul>
        </collapse>
      </div>
    </nav>
  </div>
</template>




<script>
import { Popover, Collapse } from 'uiv'
import {
    mapGetters
  } from 'vuex'
export default {
  data() {
    return {
      showNavbar: false
    }
  },
  components: {
    Popover,
    Collapse
  },
  computed: {
    ...mapGetters([
      'GetShoppingCartItem'
    ])
  }
}

</script>



<style scoped>

html .navbar-static-top,
.navbar-fixed-top,
.navbar-fixed-bottom {
  background-color: #f7f7f7
}

html .navbar-header {
  margin-top: 5px
}
.BtnToA{
      background: #f8f8f8;
}
.headerIcon{
  font-size:20px;
}
.popoverCart{
  width:500px;
}
</style>
