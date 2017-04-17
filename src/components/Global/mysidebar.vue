<template>
<div> sidebar

  <div id="mySidenav" class="sidenav">
    <div class="closebtn" onclick="closeNav()">&times;</div>
    <a href="http://www.dhshop.tw/">首頁</a>
    <!-- <a href="http://www.dhshop.tw/salepage/wine/sale.html">名酒詢價</a> -->
    <a href="http://www.dhshop.tw/salepage/usercenter.html">客服中心</a>
    <a href="http://www.dhshop.tw/salepage/aboutus.html">關於我們</a>
    <a href="http://www.dhshop.tw/salepage/corporation.html">廠商合作專區</a>
    <router-link to="/member">會員專區</router-link>  
  </div>
</div>

</template>
<script>
  export default {}
</script>

