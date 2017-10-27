<template>
  <!-- 有加購商品才顯示 -->
  <div class="container" v-show = "Object.keys(addProdList).length > 0">
    <h3>精選加購--走過路過千萬別錯過</h3>
    <div class="row detailBlockADD equal">
      <div class="col-xs-6 col-sm-4 col-md-3 addItem" v-for="item in addItemShow">
        <div style="height:81px;">{{item.ProdName}}</div>
        <div>
          <img :src="item.ImgUrl|UrlTransIP" class="payimg">
        </div>
        <div>加購價: {{item.AddPrice}}元</div>
        <div>
          <select class="selectpicker" @change="changeShow(item)">
            <template v-for="(s,i) in item.DP_ItemName.length">
              <option :value="item.DP_ItemNo[i]">{{item.DP_ItemName[i]}}</option>
            </template>
          </select>
          <!-- 加購數量 -->
          <select v-model="item.quentity">
            <option v-for="option in item.InventoryVal" :value="option">{{option}}{{item.Unit}}</option>
          </select>
          <!-- 加購數量 end-->          
        </div>
        <div>
          <button class="btn btn-info addbtn" @click="IncreaseAndCal(item)">
            <i class="fa fa-plus" aria-hidden="true"></i> 立刻加購
          </button>
        </div>
        <div class="Addnotice">
          <i class="fa fa-exclamation-circle fa-lg" aria-hidden="true"></i> 加購限定:
          <template v-for="data in item.MainProdName.split('|')">
            <div style="width:160px;">{{data}}</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  data: function() {
    return {
      // 所有商品
      addProdList: [],
      // 每種商品，要顯示的第一個商品樣式
      addItemShow: []
    }
  },
  created() {
    console.log(this.GetShoppingCartItem)
    axios.post(`/api/Product/PostToGetAddProduct`, this.GetShoppingCartItem)
      .then((response) => {
        console.log(response)
        this.addProdList = response.data.data
        /** 取第一個商品樣式，顯示 */
        for (var i = 0; i < this.addProdList.length; i++) {
          // 加入要顯示的第一個商品樣式
          let t = this.addProdList[i].AddProdList[0]
          this.addItemShow.push(t)
          // 加入下拉選單
          this.addItemShow[i].DP_ItemName = []
          this.addItemShow[i].DP_ItemNo = []
          for (var s = 0; s < this.addProdList[i].AddProdList.length; s++) {
            this.addItemShow[i].DP_ItemName.push(this.addProdList[i].AddProdList[s].ItemName)
            this.addItemShow[i].DP_ItemNo.push(this.addProdList[i].AddProdList[s].ItemNo)
          }
        }
      })
      .catch(function(error) {
        console.log(error)
      })
    console.log(this.addItemShow)
  },
  mounted() {},
  computed: {
    ...mapGetters([
      'GetShoppingCartItem',
      'GetshowAmtData'
    ])
  },
  methods: {
    ...mapActions([
      'IncreaseAddProduct',
      'IncreaseshowAmt',
      'PostGetTotalAmt'
    ]),
    changeShow(currentItem) {
      let allLens = this.addProdList.length
      for (var i = 0; i < allLens; i++) {
        for (var k = 0; k < this.addProdList[i].AddProdList.length; k++) {
          // 替換顯示所選擇的商品樣式
          if (this.addProdList[i].AddProdList[k].ItemNo === event.target.value) {
            currentItem.ItemNo = this.addProdList[i].AddProdList[k].ItemNo
            currentItem.ItemName = this.addProdList[i].AddProdList[k].ItemName
            currentItem.ItemSpec = this.addProdList[i].AddProdList[k].ItemSpec
            currentItem.OrignPrice = this.addProdList[i].AddProdList[k].OrignPrice
            currentItem.SalePrice = this.addProdList[i].AddProdList[k].SalePrice
            currentItem.AddPrice = this.addProdList[i].AddProdList[k].AddPrice
            currentItem.InventoryVal = this.addProdList[i].AddProdList[k].InventoryVal
            currentItem.ImgUrl = this.addProdList[i].AddProdList[k].ImgUrl
          }
        }
      }
    },
    IncreaseAndCal(item) {
      this.IncreaseAddProduct(item)
      this.PostGetTotalAmt()
    }
  }
}

</script>
<style scoped>
.detailBlockADD {
  font-size: 18px;
  border: 1px solid #77C9FF;
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 2px;
  margin-left: 2px;
  padding: 10px;
}

.payimg {
  width: 100%;
  height: 100%;
  margin: 5px;
}

.selectpicker {
  width: 120px
}

.addbtn {
  width: 100%;
  margin-top: 5px;
}

.Addnotice {
  font-size: 14px;
  color: #d0012b;
  width: 80%;
}

.addItem {
  margin: 5px 0px;
  float: left;
}



/* 
  @media (min-width: 768px) {
    .row.equal {
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
    } 
  }
  .equal {
      display: flex; 
      display: -webkit-flex;
      flex-wrap: wrap;
    } */

</style>
