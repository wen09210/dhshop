<template>
  <div class="container ">
    <h3>精選加購--走過路過千萬別錯過</h3>
    
    <div class="row detailBlock ">
      <div class="col-md-3" v-for="a in addItemShow">
                  {{a.ProdName}}
        <!--<span>{{addItemShow[i].ProdName}}</span>-->
        <span>
          <img src="../../assets/temporyPic\/hot1.jpg" class="payimg">
        </span>
        <!--<span>單價: {{addItemShow[i].AddPrice}}元</span>-->
        <div>
            <!--<select class="selectpicker">
              <template v-for="item in addProdList[i].AddProdList">
                  <option :value="item.ItemNo">{{item.ItemName}}</option>                  
              </template>
            </select>-->
        </div>
        <div>
          <select class="selectpicker">
            <option v-for="option in 10" :value="option">{{option}}</option>
          </select>
          <button class="btn btn-info" @click="IncreaseAddProduct()">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
// import axios from 'axios'

export default {
  data: function () {
    return {
      addProdList: [{
        'AddProdList': [{
          'ProdID': 2,
          'Description': '省電新生活，地球感謝您',
          'IntroImg': '2IntroImg',
          'ProdName': '燈絲燈泡',
          'Unit': '組 ',
          'Label': 'LED',
          'ShippingFee': 250,
          'ItemNo': '474233',
          'ItemName': '6W白光 ',
          'ItemSpec': '6W E14/A19白光',
          'OrignPrice': 420,
          'SalePrice': 319,
          'AddPrice': 299,
          'InventoryVal': 200,
          'quentity': 1
        }, {
          'ProdID': 2,
          'Description': '省電新生活，地球感謝您',
          'IntroImg': '2IntroImg',
          'ProdName': '燈絲燈泡',
          'Unit': '組 ',
          'Label': 'LED',
          'ShippingFee': 250,
          'ItemNo': '474073',
          'ItemName': '6W 暖白光 ',
          'ItemSpec': '6W E14/A19暖白光',
          'OrignPrice': 420,
          'SalePrice': 319,
          'AddPrice': 299,
          'InventoryVal': 200,
          'quentity': 1
        }, {
          'ProdID': 2,
          'Description': '省電新生活，地球感謝您',
          'IntroImg': '2IntroImg',
          'ProdName': '燈絲燈泡',
          'Unit': '組 ',
          'Label': 'LED',
          'ShippingFee': 250,
          'ItemNo': '474226',
          'ItemName': '4W白光 ',
          'ItemSpec': '4W E14/A19白光',
          'OrignPrice': 280,
          'SalePrice': 213,
          'AddPrice': 190,
          'InventoryVal': 200,
          'quentity': 1
        }, {
          'ProdID': 2,
          'Description': '省電新生活，地球感謝您',
          'IntroImg': '2IntroImg',
          'ProdName': '燈絲燈泡',
          'Unit': '組 ',
          'Label': 'LED',
          'ShippingFee': 250,
          'ItemNo': '474059',
          'ItemName': '4W暖白光 ',
          'ItemSpec': '4W E14/A19暖白光',
          'OrignPrice': 280,
          'SalePrice': 213,
          'AddPrice': 190,
          'InventoryVal': 200,
          'quentity': 1
        }]
      }],
      addItemShow: []
    }
  },
  created() {
    // console.log(this.$store.state.cartProdID)
    // axios.get(`/api/Product/GetAddProduct?cartProdID=${this.$store.state.cartProdID}`)
    // .then((response) => {
    //   console.log(response)
    //   this.addProdList = response.data
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })

    for (var i = 0; i < this.addProdList.length; i++) {
      let t = this.addProdList[i].AddProdList[0]
      this.addItemShow.push(t)
      t = '888'
      console.log(t)
      for (var s = 0; s < this.addProdList[i].AddProdList.length; s++) {
        // this.addItemShow[i].ItemName.push(this.addProdList[i].AddProdList[s].ItemName)
        console.log(this.addProdList[i].AddProdList[s].ItemName)
      }
    }
  },
  mounted() { },
  computed: {
    ...mapGetters([
      'GetShoppingCartItem'
    ])
  },
  methods: {
    ...mapActions([
      'IncreaseAddProduct'
    ])
  }
}

</script>

<style scoped>
.detailBlock {
  font-size: 18px;
  border: 1px solid #77C9FF;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
}

.payimg {
  width: 160px;
  height: 120px;
  margin: 5px;
}

.selectpicker {
  width: 120px
}
</style>
