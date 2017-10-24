<template>
  <div>
    <prodPicture></prodPicture>
    <template>
      <div>
        <Affix :offset-bottom="0" @on-change="hideAffix = !hideAffix">
          <div class="buybtn_fixfoot">
            <Button type="primary" size="large" v-scroll-to="'#botBuy'">我要選樣式</Button>
          </div>
        </Affix>
      </div>
    </template>
    <div id="botBuy">
      <prodBuy></prodBuy>
    </div>
  </div>
</template>
<script>
import prodBuy from './prodBuy'
import prodPicture from './prodPicture'
export default {
  components: {
    prodBuy,
    prodPicture
  },
  data: function() {
    return {
      hideAffix: true
    }
  }
}

</script>
<style scoped>
.buybtn_fixfoot {
  background-color: rgba(0, 0, 0, .6);
  height: 80px;
  font-size: 24px;
}

.ivu-btn-primary {
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  margin: 10px 20px;
  float: right;
  width: 40%;
  height: 60%;
}

</style>
