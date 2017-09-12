<template>
  <div class="myfooter">
        <template>
      <Affix :offset-bottom="80">
        <span class="demo-affix">固定在距离底部 80px 的位置</span>
      </Affix>
    </template>
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
        <div class="fb-page" data-href="https://www.facebook.com/dhshoptw/" data-tabs="timeline" data-height="70" data-small-header="false"
          data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
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
  import Affix from 'iview/src/components/Affix'
  export default {
    components: {
      Affix
    }
  }

</script>
<style>
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

</style>
