<template>
  <div>
    <!-- header -->
    <nav class="navbar navbar-default  navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/">
            <div class="navbar-brand">
              <a href="" role="button">
              <img src="../../assets/icon/new_dhshop_logo.svg" class="img-responsivie">
           </a>
            </div>
          </router-link>
        </div>
        <collapse class="navbar-collapse navbar-right" v-model="showNavbar">
          <ul class="nav navbar-nav">
            <li class="headerIcon">
              <a class="headerIcon">
                <router-link to="/AnonymousSearch">
                  <button type="button" class="btn  BtnToA headerIcon" @click="showNavbar=!showNavbar">
                    <i class="fa fa-search" aria-hidden="true"></i> 訂單查詢
                  </button>
                </router-link>
              </a>
            </li>
            <li class="headerIcon">
              <a class="headerIcon">
                <router-link to="/QandA">
                  <button type="button" class="btn  BtnToA headerIcon" @click="showNavbar=!showNavbar">
                    <i class="fa fa-question-circle"></i> 客服中心
                  </button>
                </router-link>
              </a>
            </li>
            <!-- 購物車 -->
            <li class="headerIcon">
              <a class="headerIcon">
                <popover title="購物車商品" :trigger="hover" placement="bottom" auto-placement>
                  <router-link to="/cart">
                    <template v-if="cartCount!== 0">
                      <div class="cartCount">{{cartCount}}</div>
                    </template>
                    <button type="button" class="btn BtnToA headerIcon" data-role="trigger" @click="showNavbar=!showNavbar">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i> 購物車
                    </button>
                  </router-link>
                  <div slot="popover" class="popoverCart">
                    <template v-if="cartCount!== 0">
                      <table class="table table-border poptable">
                        <thead>
                          <tr>
                            <th>商品名稱</th>
                            <th>樣式</th>
                            <th>單價</th>
                            <th>數量</th>
                            <th>小計</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tr v-for="item in GetShoppingCartItem">
                          <td>{{item.name}}</td>
                          <td>{{item.style}}</td>
                          <td>{{item.unitPrice}}</td>
                          <td>{{item.count}}</td>
                          <td>{{item.totalAmt}}</td>
                        </tr>
                      </table>
                      <div class="col-sm-offset-4">
                        <button class="btn btn-info btnInPop" @click="go">結賬</button>
                      </div>
                    </template>
                    <template v-else>
                      <label>尚未加入商品至購物車</label>
                    </template>
                  </div>
                </popover>
              </a>
            </li>
            <!-- 未登入 -->
            <template v-if="Object.keys(GetLoginInfo).length === 0">
              <li class="headerIcon">
                <a class="headerIcon">
                  <button type="button" class="btn BtnToA headerIcon" @click="SetLoginModal(true)">
                    <i class="fa fa-sign-in" aria-hidden="true"></i> 登入
                  </button>
                </a>
              </li>
            </template>
            <!-- 登入後 -->
            <template v-if="Object.keys(GetLoginInfo).length > 0">
              <!--FB登入-->
              <template>
                <dropdown tag="li">
                  <a class="headerIcon" role="button" data-role="trigger">
                    <button type="button" class="btn  BtnToA headerIcon loginName">
                      <i class="fa fa-user-circle" aria-hidden="true"></i> 您好 {{GetLoginInfo.MemberName}}
                      <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                  </a>
                  <template slot="dropdown">
                    <!--非匿名登入-->
                    <template v-if="GetLoginInfo.MemberJoinType !== '4'">
                      <li>
                        <a class="headerIcon">
                          <router-link to="/member">
                            <button type="button" class="btn BtnToA headerIcon" @click="showNavbar=!showNavbar">
                              <i class="fa fa-users" aria-hidden="true"></i> 會員專區
                            </button>
                          </router-link>
                        </a>
                      </li>
                      <li role="separator" class="divider">
                      </li>
                    </template>
                    <li>
                      <a class="headerIcon">
                        <button type="button" class="btn  BtnToA headerIcon" @click="LoginOut">
                          <i class="fa fa-sign-out" aria-hidden="true"></i> 登出
                        </button>
                      </a>
                    </li>
                  </template>
                </dropdown>
              </template>
            </template>
          </ul>
        </collapse>
      </div>
    </nav>
    <!-- mebLogin 彈跳視窗 -->
    <mebLogin></mebLogin>
  </div>
</template>
<script>
import {
  Popover,
  Collapse,
  Dropdown
} from 'uiv'
import {
  mapGetters,
  mapActions
} from 'vuex'
import mebLogin from '../Member/mebLogin.vue'

export default {
  data() {
    return {
      showNavbar: false,
      hover: 'hover'
    }
  },
  components: {
    Popover,
    Collapse,
    Dropdown,
    mebLogin
  },
  computed: {
    ...mapGetters([
      'GetShoppingCartItem',
      'GetLoginInfo',
      'GetLoginModal'
    ]),
    Hover() {
      if (this.showNavbar === true) {
        this.hover = ''
      } else {
        this.hover = 'hover'
      }
      return this.hover
    },
    cartCount() {
      return Object.keys(this.GetShoppingCartItem).length
    }
  },
  methods: {
    ...mapActions([
      'LoginOut',
      'SetLoginModal'
    ]),
    go() {
      this.$router.push({
        name: 'cart'
      })
    }
  }
}

</script>
<style>
.container-fluid {
  max-width: 1200px;
}

.navbar-brand {
  padding-top: 10px;
  margin-top: 5px;
}

.navbar-default {
  background: rgba(255, 255, 255, 0.81) !important;
}

.navbar-static-top,
.navbar-fixed-top,
.navbar-fixed-bottom {
  background-color: #f7f7f7
}



.BtnToA {
  background: rgba(255, 255, 255, 0);
}

.headerIcon {
  font-size: 18px;
  padding-left: 5px !important;
  padding-right: 5px !important;
}

.loginName {
  color: darkorange
}

.popover-title {
  font-size: 18px;
  font-weight: bold;
}

.poptable {
  font-size: 16px;
}

.popover {
  max-width: 100% !important;
}

.popoverCart {
  width: 500px;
}

.btnInPop {
  margin-top: 5px;
  width: 200px;
}

.close {
  display: none
}

.cartCount {
  padding-top: 1px;
  background: #f57e28;
  width: 25px;
  height: 24px;
  position: absolute;
  z-index: 99;
  font-size: 15px;
  color: #FFFFFF;
  text-align: center;
  left: 85px;
  border-radius: 50%;
}

</style>
