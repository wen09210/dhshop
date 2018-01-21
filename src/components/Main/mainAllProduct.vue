<template>
  <div class="container">
    <div class="style_intro">你想如何改善居家?<span class="seemore"><router-link to="/prodCategory">所有商品>></router-link></span></div>
    <router-link to="/prodCategory">
        <img src="../../assets/temporyPic/index/productbanner.jpg" alt="" class="img-responsive">
    </router-link>
    
  </div>
</template>
<script>
export default {
}

</script>
<style scoped>
.seemore{
  float:right;
  font-size: 15px;
  padding-top: 15px;
  color: #484848;
  font-weight: 300;
}
.nav.nav-yellow>li {
  width: 150px;
  margin: 10px 3px;
  padding: 25px 20px;
  background-color: #eee;
  font-size: 18px;
}

.nav.nav-yellow>li>img {
  width: 30px;
  height: 30px;
}
.topdownMargin10 {
  padding:0px;
  padding-right: 5px;
  
}
.nav.nav-yellow>.col-xs-3{
  margin-left: 0px;
}
.col-md-6{
  padding:0px;
}
.tabHover {
  color: #2e2e2e;
  background-color: #ffde97 !important;
  font-weight: 600;
}

.item_category {
  width: 100%;
  height: auto;
}

.noPadding {
  padding: 0px;
}

.padding5 {
  padding: 5px;
}


.col-md-12>.col-md-6 {
  padding: 5px 5px;
  padding: 5px 5px;
}


.topPadding {
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left:0px;
}
@media (max-width:768px) {
  .nav.nav-yellow>li{
    width: 70px;
    margin: 10px 3px;
    padding: 10px 3px;
    background-color: #eee;
    font-size: 15px;
    text-align: center;
    padding: 0px;
    margin: 1px;
    border-radius:2px solid #000;
  }
  .nav.nav-yellow>li>img {
    margin: 0px 15px;
    width: 45px;
    height: 45px;
  }
  .topdownMargin10 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
