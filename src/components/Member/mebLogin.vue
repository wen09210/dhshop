<template>
  <modal v-model="GetLoginModal" title="登入" size="sm" :footer="false">
    <div>
      <img src="../../assets/icon/dhshop_logo.svg" class="img-responsive modalImg" alt="Responsive image">
    </div>
    <!-- <div class="col-md-6 col-xs-12">

      <form role="form">
        <div class="form-group">
          <img src="../../assets/icon/dhshop_logo.svg" class="img-responsive" alt="Responsive image">
        </div>
        <div class="form-group">
          <label for="account">帳號</label>
          <input type="email" class="form-control" v-model="MemberAccount.MemberEmail" placeholder="輸入帳號(E-mail)">
        </div>
        <div class="form-group">
          <label for="pwd">密碼</label>
          <input type="Password" class="form-control" v-model="MemberAccount.MmeberPasswordStr" placeholder="密碼">
        </div>
        <div class="checkbox">
          <label>
             <input type="checkbox"> 保持登入，除非點選登出鍵。
          </label>
        </div>
        <div class="form-group">
        <button type="button" class="btn btn-info btn-lg " @click="PostLogin(MemberAccount)">送出</button>
        </div>
      </form>
    <p class="help-block">忘記密碼 | 註冊會員。</p> 
    </div>-->

    <div>
      <!-- <label>其他登入</label> -->
      <!-- <div class="form-group">
        <img src="../../assets/icon/login_google.png" class="imgOuath" alt="Responsive image" @click="goOuath('Google')">-->

      <div class="btnCenter">
        <button type="button" class="btn btn-success btn-lg" @click="goanoyLogin">
            無痕登入
          </button>
      </div>
      <div class="btnCenter">
        <img src="../../assets/icon/login_fb.png" class="imgOuath" alt="Responsive image" @click="goOuath('Facebook')">
      </div>
    </div>

    <hr>
    <div>
      <div class="btnCenter">
        <button type="button" class="btn btn-warning btn-lg" @click="SetLoginModal(false)">取消</button>
      </div>
    </div>

  </modal>
</template>



<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  import {
    Modal
  } from 'uiv'
  export default {
    data: function () {
      return {
        MemberAccount: {
          MemberEmail: '',
          MmeberPasswordStr: ''
        }
      }
    },
    components: {
      Modal
    },
    computed: {
      ...mapGetters([
        'GetLoginModal'
      ])
    },
    methods: {
      ...mapActions([
        // 'PostLogin',
        'SetLoginModal',
        'PostAnoyLogin'
      ]),
      goOuath(loginType) {
        // window.location.href = `http://localhost:53912/api/MemberAccount/GetExLogin?loginType=${loginType}`
        window.location.href = `http://223.27.48.157/api/MemberAccount/GetExLogin?loginType=${loginType}`
      },
      goanoyLogin() {
        this.PostAnoyLogin()
        this.SetLoginModal(false)
      }
    }
  }

</script>

<style scoped>
  div .form-control {
    width: 200px;
  }

  div .btn {
    width: 200px;
  }

  .modalImg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .btnCenter {
    text-align: center;
    margin: 5px;
  }

  .imgOuath {
    width: 200px;
    height: 46px
  }

</style>
