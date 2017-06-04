<template>
  <div class="container">
    <h3>訂單查詢</h3>
    <form class="form-inline" role="form">
      <label>訂單號碼:</label>
      <div class="form-group">
        <input type="text" class="form-control" id="input" placeholder="輸入查詢">
      </div>
      <label>日期:</label>
      <div class="form-group">
        <datepicker value="Date" language="zh" input-class="form-control"  calendar-button-icon="fa fa-calendar fa-2x" format="yyyy-MM-dd" v-model="state.startdate">
        </datepicker>
      </div>
      <label>到</label>
      <div class="form-group">
        <datepicker language="zh" input-class="form-control" calendar-button-icon="fa fa-calendar fa-2x" format="yyyy-MM-dd" v-model="state.enddate">
        </datepicker>
      </div>
      <input type="button" class="btn btn-info" id="input" value="查詢" @click="search">
    </form>

  </div>
</template>


<script>
  import Datepicker from 'vuejs-datepicker'
  import axios from 'axios'
  export default {
    components: {
      Datepicker
    },
    data() {
      return {
        state: {
          startdate: '',
          enddate: new Date(2015, 8, 1)
        }
      }
    },
    methods: {
      search() {
        axios.post(`/api/MemberAccount/SearchOrder`, this.state.enddate)
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

</style>
