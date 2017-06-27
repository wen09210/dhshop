<template>
  <div class="container ">
    <h3>精選加購--走過路過千萬別錯過</h3>

    <div class="row detailBlock ">
      <div class="col-md-3" v-for="item in addItemShow">
        <div>{{item.ProdName}}</div>
        <div>
          <img src="../../assets/temporyPic\/hot1.jpg" class="payimg">
        </div>
        <div>加購價: {{item.AddPrice}}元</div>
        <div>
          <select class="selectpicker" @change="changeShow(item)">
              <template v-for="(s,i) in item.DP_ItemName.length">
                  <option :value="item.DP_ItemNo[i]">{{item.DP_ItemName[i]}}</option>                  
              </template>
            </select>
          <select v-model="item.quentity">
            <option v-for="option in 10" :value="option">{{option}}{{item.Unit}}</option>
            </select>
        </div>
        <div>
          <button class="btn btn-info addbtn" @click="IncreaseAndCal(item)">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  import axios from 'axios'

  export default {
    data: function () {
      return {
        addProdList: [],
        addItemShow: []
      }
    },
    created() {
      console.log(this.GetShoppingCartItem)
      axios.post(`/api/Product/PostToGetAddProduct`, this.GetShoppingCartItem)
        .then((response) => {
          console.log(response)
          this.addProdList = response.data
          /** 取第一個樣式顯示 */
          for (var i = 0; i < this.addProdList.length; i++) {
            let t = this.addProdList[i].AddProdList[0]
            this.addItemShow.push(t)
            this.addItemShow[i].DP_ItemName = []
            this.addItemShow[i].DP_ItemNo = []
            for (var s = 0; s < this.addProdList[i].AddProdList.length; s++) {
              this.addItemShow[i].DP_ItemName.push(this.addProdList[i].AddProdList[s].ItemName)
              this.addItemShow[i].DP_ItemNo.push(this.addProdList[i].AddProdList[s].ItemNo)
            }
          }
        })
        .catch(function (error) {
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
            if (this.addProdList[i].AddProdList[k].ItemNo === event.target.value) {
              currentItem.ItemNo = this.addProdList[i].AddProdList[k].ItemNo
              currentItem.ItemName = this.addProdList[i].AddProdList[k].ItemName
              currentItem.ItemSpec = this.addProdList[i].AddProdList[k].ItemSpec
              currentItem.OrignPrice = this.addProdList[i].AddProdList[k].OrignPrice
              currentItem.SalePrice = this.addProdList[i].AddProdList[k].SalePrice
              currentItem.AddPrice = this.addProdList[i].AddProdList[k].AddPrice
              currentItem.InventoryVal = this.addProdList[i].AddProdList[k].InventoryVal
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
  .detailBlock {
    font-size: 18px;
    border: 1px solid #77C9FF;
    border-radius: 10px;
    margin-top: 20px;
    margin-right:2px;
    margin-left:2px; 
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

  .addbtn {
    width: 180px;
    margin-top: 5px;
  }

</style>
