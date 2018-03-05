<template>
  <div>
    <!-- header -->
    <nav class="navbar navbar-default  navbar-fixed-top">
      <div class="container-fluid">
        <!-- 購物車 -->
        <div class="indexCart">
          <a class="headerIcon">
            <popover title="購物車商品" :trigger="hover" placement="bottom" auto-placement :enable="false">
              <router-link to="/cart">
                <template v-if="cartCount!== 0">
                  <div class="cartCount">{{cartCount}}</div>
                </template>
                <button type="button" class="btn BtnToA headerIcon" data-role="trigger" @click="showNavbar=!showNavbar">
                  <Icon type="bag iconcolor"></Icon> <span class="hidden-xs">購物車</span>
                </button>
              </router-link>
              <div slot="popover" class="popoverCart">
                <template v-if="cartCount!== 0">
                  <table class="table table-border poptable">
                    <thead>
                      <tr>
                        <th>商品名稱</th>
                        <!-- <th>單價</th> -->
                        <th>數量</th>
                        <th>小計</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tr v-for="(item,index) in GetShoppingCartItem" :key="index">
                      <td>{{item.name + item.style}}</td>
                      <!-- <td>{{item.unitPrice}}</td> -->
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
        </div>
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
            <!-- <li class="headerIcon">
              <a class="headerIcon">
                <router-link to="/AnonymousSearch">
                  <button type="button" class="btn  BtnToA headerIcon" @click="showNavbar=!showNavbar">
                    <i class="fa fa-search" aria-hidden="true"></i> 訂單查詢
                  </button>
                </router-link>
              </a>
            </li> -->
            <li class="headerIcon">
                <a class="headerIcon">
                  <router-link to="/CaseCategory">
                    <button type="button" class="btn  BtnToA headerIcon" @click="showNavbar=!showNavbar">
                        <Icon type="ios-location-outline iconcolor"></Icon>  實體店
                    </button>
                  </router-link>
                </a>
              </li>
            <li class="headerIcon">
              <a class="headerIcon">
                <router-link to="/BlogCategory">
                  <button type="button" class="btn  BtnToA headerIcon" @click="showNavbar=!showNavbar">
                    <Icon type="ios-home-outline iconcolor"></Icon> 改造精選
                  </button>
                </router-link>
              </a>
            </li>
            <li class="headerIcon">
              <a class="headerIcon">
                <router-link to="/iframeCategory">
                  <button type="button" class="btn  BtnToA headerIcon" @click="showNavbar=!showNavbar">
                    <Icon type="social-youtube-outline iconcolor"></Icon> 主題教學
                  </button>
                </router-link>
              </a>
            </li>
            <li class="headerIcon">
              <a class="headerIcon">
                <router-link to="/prodCategory">
                  <button type="button" class="btn  BtnToA headerIcon " @click="showNavbar=!showNavbar">
                    <Icon type="ios-list-outline iconcolor"></Icon> 產品列表
                  </button>
                </router-link>
              </a>
            </li>
            <!-- <li class="headerIcon">
              <a class="headerIcon">
                <router-link to="/QandA">
                  <button type="button" class="btn  BtnToA headerIcon" @click="showNavbar=!showNavbar">
                    <Icon type="ios-help-outline iconcolor"></Icon> 客服中心
                  </button>
                </router-link>
              </a>
            </li> -->
            <!-- 未登入 -->
            <template v-if="Object.keys(GetLoginInfo).length === 0">
              <li class="headerIcon">
                <a class="headerIcon">
                  <button type="button" class="btn BtnToA headerIcon" @click="SetLoginModal(true)">
                    <i class="fa fa-sign-in iconcolor" aria-hidden="true"></i> 登入
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
                    <!-- <template v-if="GetLoginInfo.MemberJoinType !== '4'">
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
                    </template> -->
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
import { Popover, Collapse, Dropdown } from 'uiv'
import { mapGetters, mapActions } from 'vuex'
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

.navbar-default .navbar-toggle {
  border-color: #90949c;
  float: left;
  margin-left: 15px;
  margin-right: 0px;
  margin-top: 15px;
}

.navbar-brand {
  padding-top: 5px;
  /* max-width: 140px; */
}
.nav>li>a{
  padding:15px 7px;
}
.navbar-default {
  background: rgba(255, 255, 255, 1.0) !important;
}

.navbar-static-top,
.navbar-fixed-top,
.navbar-fixed-bottom {
  background-color: #bdbaba
}

.indexCart {
  float: right;
  padding: 15px 0px;
}

.iconcolor {
  color: #ff9900;
  font-size: 25px;
  font-weight: 500;
  vertical-align: text-bottom;
}

.BtnToA {
  background: rgba(255, 255, 255, 0);
  padding:3px;
}

.headerIcon {
  font-size: 18px;
  color: #6a7172;
  font-weight: 600;
  vertical-align: baseline;
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
  width: 300px;

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
  border-radius: 50%;
}

@media(max-width:768px) {
  .popover {
    display: none;
  }
  .navbar-brand {
    padding: 5px 0px 0px 15px;

  }
  .indexCart {
    padding: 10px 0px;
  }
}

</style>
