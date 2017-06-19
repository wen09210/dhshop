<template>
<div class="container"> 
<!--<div class="title_name"><img src="../../assets/temporyPic/clock.png" ><label class="titleLabel">熱銷商品</label></div>
  <router-link to="/prodPromte/1/1">/Prod</router-link>
  <router-link to="/Product/1">/Product/prodID(1)</router-link>
  <router-link to="/Product/2">/Product/prodID(2)</router-link>
<div class="col-md-3 col-xs-6">
  <img src="../../assets/temporyPic/hot1.jpg" class="img-responsive">
</div>
<div class="col-md-3 col-xs-6">
  <img src="../../assets/temporyPic/hot2.jpg" class="img-responsive">
</div>
<div class="col-md-3 col-xs-6">
  <img src="../../assets/temporyPic/hot3.jpg" class="img-responsive">
</div>
<div class="col-md-3 col-xs-6">
  <img src="../../assets/temporyPic/hot4.gif" class="img-responsive">
</div>-->

<div class="hotTitle">暢銷好品點一下</div>
<router-link to="/Product/1">
<div class="col-md-6">
<img src="../../assets/temporyPic/hot1.jpg" class="img-responsive ">
</div>
</router-link>
<div class="col-md-6">
  <img src="../../assets/temporyPic/hotPainter.gif" class="img-responsive displayTwo">
  <img src="../../assets/temporyPic/hotLaser.gif" class="img-responsive displayTwo">
  <router-link to="/Product/2">
  <img src="../../assets/temporyPic/banner3.jpg" class="img-responsive displayOne">
  </router-link>
</div>
</div>

</template>
<script>
  export default {}
</script>
<style>
.displayTwo {
    width: 48%;
    float: left;
    margin: 1%;
}
.displayOne{
    width: 98%;
    float: left;
    margin: 1%;
    height: 260px;
}
.hotTitle{
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
}
</style>
