<template>
  <div>
    <prodPicture></prodPicture>
    <template>
        {{getProdInfo}} 
        {{showMessageBtn}}
      <div>
        <Affix :offset-bottom="0" @on-change="hideAffix = !hideAffix">
          <Row class="buybtn_fixfoot" v-show="!hideAffix">
            <Col :xs="{ span: 12}" :md="{ span: 18}">
            <Col :xs="{ span: 24}" :sm="{ span:24}" :md="{ span: 12}" class="A_title">{{ProdInfo.ProdName}}
            </Col>
            <Col :xs="{ span: 24}" :sm="{ span: 12}" :md="{ span: 6}" class="A_Price">
            <strike style="color:red;">
                  <span style='color:white'>原價: {{ProdInfo.OrignPrice}}元</span>
            </strike>
            </Col>
            <Col :xs="{ span: 24}" :sm="{ span: 12}" :md="{ span: 6}" class="A_Price">優惠: {{ProdInfo.SalePrice}}元
            </Col>
            </Col>
            <Col :xs="{ span: 12}" :md="{ span: 6 }">
            <Button type="primary" size="large" v-scroll-to="'#botBuy'">立即搶購</Button>
            </Col>
          </Row>
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
  computed: {
    getProdInfo() {
      this.$on('passProdInf', (data) => {
        console.log(data)
        this.ProdInfo = data
      })
    },
    // 控制全局右邊按鈕隱藏
    showMessageBtn() {
      console.log(this.hideAffix)
      if (document.getElementById('wh-widget-send-button') !== null) {
        console.log(document.getElementById('wh-widget-send-button'))
        if (this.hideAffix) {
          document.getElementById('wh-widget-send-button').style.visibility = 'visible'
        } else {
          document.getElementById('wh-widget-send-button').style.visibility = 'hidden'
        }
      }
    }
  },
  data: function() {
    return {
      hideAffix: true,
      ProdInfo: {}
    }
  }
}

</script>
<style scoped>
@media (max-width:1024px) {
  .buybtn_fixfoot {
    background-color: rgba(0, 0, 0, .6);
    /* height: 90px; */
  }

  .A_title {
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-left: 10px;
  }

  .A_Price {
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-left: 20px;
  }

}

@media (min-width:1024px) {
  .buybtn_fixfoot {
    background-color: rgba(0, 0, 0, .6);
    /* height: 90px; */
  }
  .A_title {
    font-size: 28px;
    font-weight: bold;
    color: white;
    margin-left: 20px;
    padding-top: 20px;
  }

  .A_Price {
    font-size: 24px;
    font-weight: bold;
    color: white;
  }

}

.ivu-btn-primary {
  color: #fff;
  background-color: #ff662b;
  border-color: #ff662b;
  margin: 10px 0px;
  /* float: right; */
  width: 90%;
  height: 60%;
  font-size: 26px !important;
}

</style>
