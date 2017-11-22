<template>
  <modal v-model="GetLoginModal" title="登入" size="sm" :footer="false" class="logintitle">
    <div class="row">
      <div class="col-xs-12">
        <img src="../../assets/icon/new_dhshop_logo.svg" class="img-responsive modalImg" alt="Responsive image">
      </div>
      <!-- <div class="col-md-6 col-xs-12">

      <form role="form">
        <div class="form-group">
          <img src="../../assets/icon/new_dhshop_logo.svg" class="img-responsive" alt="Responsive image">
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
          <button type="button" class="btn  btn-lg imgOuath" @click="goOuath('Facebook')">
            <p>Facebook登入</p>
          </button>
        </div>
      </div>
      <hr>
      <div>
        <div class="btnCenter">
          <button type="button" class="btn btn-warning btn-lg" @click="SetLoginModal(false)">取消</button>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { Modal } from 'uiv'
export default {
  data: function() {
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
      window.location.href = `https://www.dhshop.tw/api/MemberAccount/GetExLogin?loginType=${loginType}`
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
  max-width: 200px;
}

.btnCenter {
  text-align: center;
  margin: 10px;
}

.imgOuath {
  width: 200px;
  height: 46px
}

.imgOuath:before {

  content: "\F082";
  display: inline-block;
  height: 26px;
  font-size: 22px;
  margin-right: .2em;
  font-family: FontAwesome;
}

.logintitle {
  text-align: center;
}

.imgOuath {
  width: 200px;
  color: #fff;
  background-color: #3f6ac5;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  letter-spacing: .05em;
  vertical-align: top;
}


- .imgOuath:hover {
  background-color: #344e86;
}

</style>
