<template>
  <div class="myfooter">
    <div class="fixRightHistory">
      <Tooltip placement="left">
        <div class="circleHis" @click="openHis = !openHis">
          <Icon type="bookmark" size=40></Icon>
        </div>
        <div slot="content">
          <p>瀏覽紀錄</p>
        </div>
      </Tooltip>
    </div>
    <!-- 歷史紀錄 -->
    <transition name="slide-fade">
      <div v-if="openHis" class="HistorrBox">
        <div class="HisX" @click="openHis = !openHis">
          <Icon type="close-circled" color="white" size=40></Icon>
        </div>
        <div class="HisImgContent">
          <div class="col-md-3">
            <img src='../../assets/temporyPic/bulb.jpg' class="HistoryImg">
          </div>
        </div>
      </div>
    </transition>
    <div class="myrow">
      <div class="col-md-3">
        <div class="footer_title">客服中心</div>
        <hr class="style3">
        <div class="col-md-12 col-xs-4  ">
          <p><a href="http://www.dhshop.tw/salepage/usercenter.html">常見問題</a></p>
        </div>
        <div class="col-md-12 col-xs-4">
          <p><a href="http://www.dhshop.tw/salepage/aboutus.html">關於我們</a></p>
        </div>
        <div class="col-md-12 col-xs-4">
          <p><a href="http://www.dhshop.tw/salepage/corporation.html">廠商合作專區</a></p>
        </div>
      </div>
      <div class="col-md-5">
        <div class="footer_title">聯絡我們</div>
        <hr class="style3">
        <div class="col-md-7  col-xs-7">
          <p>客服電話:<span>0966-140567</span></p>
          <p>客服信箱:<a href="mailto:cs.dhshop@gmail.com">cs.dhshop@gmail.com</a></p>
          <p>服務時間:周一至周五 am 9:00 - pm 21:00</p>
          <p>line@帳號:<a href="https://line.me/R/ti/p/%40eat5207g">@eat5207g</a></p>
        </div>
        <div class="col-md-5 col-xs-5 ">
          <a href="https://line.me/R/ti/p/%40eat5207g"><img src="http://www.dhshop.tw/salepage/img/shared/lineat.jpg" alt="" style="width:150px"></a>
        </div>
      </div>
      <div class="col-md-4 ">
        <div class="footer_title">Facebook</div>
        <hr class="style3">
        <div class="fb-page" data-href="https://www.facebook.com/dhshoptw/" data-tabs="timeline" data-height="70" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/dhshoptw/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/dhshoptw/">dHshop</a></blockquote>
        </div>
      </div>
    </div>
    <div class="copyright col-md-12  col-xs-12">
      <p>Copyright © 2016 dPlus Co. Ltd.
        <span>Powered by <a href="http://www.dhshop.tw/" title="" target="_blank"> dHSHOP </a></span>
        <span>All Rights Reserved.</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      openHis: false
    }
  }
}

</script>
<style>
.ivu-affix {
  bottom: 100px;
  right: 30px !important;
}

.myfooter {
  z-index: 9999999;
  margin-top: 100px;
}

div .myrow {
  float: none;
  background: #f7f7f7;
  width: 100%;
  text-align: center;
  padding-top: 0px;
  margin: 0 auto;
}

.footer_title {
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
}

hr.style3 {
  border-top: 1px dashed #8c8b8b;
  margin-top: 5px;
  margin-bottom: 20px;
}

div .copyright {
  margin-top: 10px;
  text-align: center;
}

.fixRightHistory {
  z-index: 2;
  position: fixed;
  bottom: 90px;
  right: 0;
  cursor: pointer;
}

.circleHis {
  padding-top: 5px !important;
  text-align: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  margin-right: 20px;
  padding-top: 1px;
  background: #f57e28;
  width: 50px;
  height: 50px;
  font-size: 15px;
  color: #FFFFFF;
  border-radius: 50%;
}

.HistorrBox {
  background: rgba(0, 0, 0, 0.6);
  z-index: 20000000;
  position: fixed;

  bottom: 0;
  width: 100%;
}

.HisImgContent {
  padding: 10px;
}

.HistoryImg {
  max-height: 150px;
}

.HisX {
  right: 0;
  margin-right: 10px;
  position: fixed;
  z-index: 20000000;
  cursor: pointer;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

{
  transform: translateY(10px);
  opacity: 0;
}

</style>
