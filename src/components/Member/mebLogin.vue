<template>
  <div class="container">
    <h3>會員登入</h3>
    <div class="col-md-4">
      <form role="form">
        <div class="form-group">
          <img src="../../assets/icon/dhshop_logo.svg" class="img-responsive" alt="Responsive image">
        </div>
        <div class="form-group">
          <label for="account">帳號</label>
          <input type="email" class="form-control" id="account" placeholder="輸入帳號">
        </div>
        <div class="form-group">
          <label for="pwd">密碼</label>
          <input type="Password" class="form-control" id="pwd" placeholder="密碼">
        </div>
        <div class="checkbox">
          <label>
             <input type="checkbox"> 保持登入，除非點選登出鍵。
          </label>
        </div>
        <button type="button" class="btn btn-info ">送出</button>
      </form>
      <p class="help-block">忘記密碼 | 註冊會員。</p>
    </div>

    <div id="ouath" class="col-md-4 ">

      <div class="form-group">
        <img src="../../assets/icon/login_google.png" class="img-responsive" alt="Responsive image">
      </div>
      <div class="form-group">
        <img src="../../assets/icon/login_fb.png" class="img-responsive" alt="Responsive image">
      </div>
      <div class="form-group">
<!--<img src="../../assets/icon/login_yahoo.png" class="img-responsive" alt="Responsive image">-->
      </div>
    </div>
  </div>
</template>



<script>
  export default {}
  
</script>

<style scoped>
  div .form-control {
    width: 250px;
  }
  div .btn {
    width: 250px;
  }
  #ouath{
    padding-top:80px;
  }
</style>

