<template>
  <div class ="container">
    <h3>會員註冊</h3>
    <div class="row">
    <div class="col-md-6">
      <form role="form">
        <div class="form-group">
          <img src="../../assets/icon/dhshop_logo.svg" class="img-responsive" alt="Responsive image">
        </div>
        <template v-if="Object.keys(GetLoginInfo).length!==0">
          <h5>您好，已經註冊囉~</h5>
        </template>
        <template v-else>
        <div class="form-group">
          <label for="account">帳號</label>
          <input type="email" class="form-control" v-model="MemberAccount.MemberEmail" placeholder="輸入帳號">
        </div>
        <div class="form-group">
          <label for="pwd">密碼</label>
          <input type="Password" class="form-control" v-model="MemberAccount.MmeberPasswordStr" placeholder="密碼">
        </div>
        <!--<div class="checkbox">
          <label>
             <input type="checkbox"> 保持登入，除非點選登出鍵。
          </label>
        </div>-->
        <div class="form-group">
        <button type="button" class="btn btn-info btn-lg " @click="PostRegister(MemberAccount)">送出</button>
        </div>
        </template>
      </form>
    </div>
    </div>
</div>
</template>



<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    data: function () {
      return {
        MemberAccount: {
          MemberEmail: '',
          MmeberPasswordStr: ''
        }
      }
    },
    computed: {
      ...mapGetters([
        'GetLoginInfo'
      ])
    },
    methods: {
      ...mapActions([
        'PostRegister'
      ])
    }
  }

</script>

<style scoped>
  div .form-control {
    width: 250px;
  }

  div .btn {
    width: 250px;
  }

  .imgOuath {
    width: 250px;
    height: 45px
  }
  .ouathDiv{
    margin-top: 50px;
  }

</style>
