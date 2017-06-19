<template>
  <div>
    <!-- header -->

    <nav class="navbar navbar-default  navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar" @blur="showNavbar=!showNavbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
             </button>

        <router-link to="/">
        <div class="LOGO">
          <a  href="" role="button">
            <img src="../../assets/icon/dhshop_logo.svg">
          </a>
          </div>
        </router-link>
        </div>

        <collapse class="navbar-collapse" v-model="showNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li class="headerIcon">
              <a class="headerIcon" href="http://www.dhshop.tw/salepage/usercenter.html">
                <button type="button" class="btn  BtnToA headerIcon">
                      <i class="fa fa-question-circle"></i>
                       客服中心
                  </button>
              </a>
            </li>

            <li class="headerIcon">
              <a class="headerIcon">
                <popover title="購物車商品" trigger="hover" placement="bottom" auto-placement >
                  <router-link to="/cart">
                    <button type="button" class="btn BtnToA headerIcon" data-role="trigger">
                       <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      購物車
                    </button>
                  </router-link>
                  <div slot="popover" class="popoverCart">
                    <template v-if="Object.keys(GetShoppingCartItem).length!== 0">
                    <table class="table table-border">
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
                      <router-link class="btn btn-info btnInPop" to='/cart'>結賬</router-link>
                    </table>
                    </template>
                    <template v-else>
                      <label>尚未加入商品至購物車</label>
                    </template>

                  </div>
                </popover>
              </a>
            </li>

            <li class="headerIcon">
              <a class="headerIcon">
                <router-link to="/member">
                  <button type="button" class="btn  BtnToA headerIcon">
                       <i class="fa fa-users" aria-hidden="true"></i>
                      會員專區
                    </button>
                </router-link>
              </a>
            </li>

            <template v-if="Object.keys(GetLoginInfo).length === 0">
            <li  class="headerIcon">
              <a class="headerIcon">
                  <button type="button" class="btn  BtnToA headerIcon" @click="SetLoginModal(true)">
                      <i class="fa fa-sign-in" aria-hidden="true"></i>
                       登入
                  </button>
              </a>
            </li>
            </template>
            <template v-else>

            <li  class="headerIcon">
              <li>
                <a class="headerIcon">                
                  <button type="button" class="btn  BtnToA headerIcon" @click="LoginOut">
                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                       登出
                  </button>
                </a>
              </li>
              <li>
                <a>                
                  <button type="button" class="btn  BtnToA headerIcon loginName">
                      <i class="fa fa-user-circle" aria-hidden="true"></i>
                       您好  {{GetLoginInfo.MemberName}}
                  </button>
                </a>
              </li>
            </li>
            </template>
          </ul>
        </collapse>
      </div>
    </nav>
    <mebLogin></mebLogin>
  </div>
</template>





<script>
  import {Popover, Collapse} from 'uiv'
  import {mapGetters, mapActions} from 'vuex'
  import mebLogin from '../Member/mebLogin.vue'

  export default {
    data() {
      return {
        showNavbar: false
      }
    },
    components: {
      Popover,
      Collapse,
      mebLogin
    },
    computed: {
      ...mapGetters([
        'GetShoppingCartItem',
        'GetLoginInfo',
        'GetLoginModal'
      ])
    },
    methods: {
      ...mapActions([
        'LoginOut',
        'SetLoginModal'
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

  .LOGO {
    margin-top:10px; 
  }

  .BtnToA {
    background: #f8f8f8;
  }

  .headerIcon {
    font-size: 18px;
    padding-left:5px;
    padding-right: 5px; 
  }
  .loginName{
    color: darkorange
  }
  .popover{
    max-width: 100% !important;
  }
  .popoverCart {
    width: 500px;
  }
  .btnInPop{
    margin-top:5px;
    width: 200px;
  }


</style>
