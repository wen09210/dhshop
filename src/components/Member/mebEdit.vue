<template>
  <div class="container">
    <h3>會員資料修改</h3>
    <template v-if="Object.keys(GetLoginInfo).length===0">
      <h5>您好，此功能為會員所有，請先登入</h5>
    </template>
    <template v-else>
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">姓名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="mebInfo.mebName" placeholder="姓名">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">電話</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="mebInfo.mebPhone" placeholder="電話">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">地址</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="mebInfo.mebAddress" placeholder="地址">
        </div>
      </div>
      <template v-if="GetLoginInfo.MemberJoinType=='1'">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">電子郵件</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="mebInfo.mebEmail" placeholder="輸入電子郵件">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">新密碼</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" v-model="mebInfo.mebPwd" placeholder="新密碼">
          </div>
        </div>

        <hr>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">舊密碼</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" v-model="mebInfo.mebPwdOrgin" placeholder="舊密碼">
          </div>
          <span class="col-sm-offset-2 alertInfo">
          <label>(輸入舊密碼以確認身分)</label>
        </span>
        </div>
      </template>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-info" @click="PostEdit">送出修改</button>
        </div>
      </div>
    </form>
    </template>
  </div>
</template>



<script>
  import axios from 'axios'
  import {
    mapGetters
  } from 'vuex'
  export default {
    data: function () {
      return {
        mebInfo: {
          mebEmail: '',
          mebPwdOrgin: '',
          mebPwd: '',
          mebName: '',
          mebPhone: '',
          mebAddress: ''
        }
      }
    },
    created() {
      this.mebInfo.mebName = this.GetLoginInfo.MemberName
      this.mebInfo.mebEmail = this.GetLoginInfo.MemberEmail
      this.mebInfo.mebPhone = this.GetLoginInfo.MemberPhone
      this.mebInfo.mebAddress = this.GetLoginInfo.MemberAddress
    },
    computed: {
      ...mapGetters([
        'GetLoginInfo'
      ])
    },
    methods: {
      PostEdit() {
        axios.post(`/api/MemberAccount/EditMember`, this.mebInfo, {
          headers: {
            'Authorization': this.GetLoginInfo.JWTAuthorization
          }
        })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
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

  .alertInfo {
    color: red;
  }

</style>
