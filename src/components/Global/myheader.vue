<template>
  <div>
    <!-- header -->
    <nav class="navbar navbar-deafult navbar-fixed-top  " role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a href="http://www.dhshop.tw/mall.html"><img src="../../assets/icon/dhshop_logo.svg"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 0.834783px;">
          <div class="nav navbar-nav navbar-right">
            <li>
              <a>
                <i class="fa fa-bars " aria-hidden="true"></i>
                <span>好品分類</span>
              </a>
            </li>
            <li>
              <a href="http://www.dhshop.tw/salepage/usercenter.html">
                <i class="fa fa-question-circle"></i>
                <span>客服中心</span>
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <router-link to="/cart">購物車</router-link>
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-sign-in" aria-hidden="true"></i>
                <router-link to="/login">登入</router-link>
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {}

</script>
<style scoped>
  html .navbar-static-top, .navbar-fixed-top, .navbar-fixed-bottom {
     background-color:
  }

</style>
