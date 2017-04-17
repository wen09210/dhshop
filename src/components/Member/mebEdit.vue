<template>
<div>
  <h4>會員資料修改</h4>
  <form class="form-horizontal" role="form">
    <div class="form-group">
      <label for="inputEmail3" class="col-sm-2 control-label">電子郵件</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" placeholder="輸入電子郵件">
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">密碼</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3" placeholder="密碼">
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">姓名</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3" placeholder="姓名">
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">電話</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3" placeholder="電話">
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">地址</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3" placeholder="地址">
      </div>
    </div>


    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-info">送出修改</button>
      </div>
    </div>
  </form>
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

</style>
