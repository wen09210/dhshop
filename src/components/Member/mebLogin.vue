<template>
<div class="container">
  <form role="form">
    <div class="form-group">
      <label for="account">帳號</label>
      <input type="email" class="form-control" id="account" placeholder="輸入帳號">
    </div>
    <div class="form-group">
      <label for="pwd">密碼</label>
      <input type="Password" class="form-control" id="pwd" placeholder="密碼">
    </div>
    <button type="button" class="btn btn-default">送出</button>
  </form>
</div>
</template>
<script>
  export default {}
</script>
<style scoped>
  div .form-control {
    width: 450px;
  }
</style>

