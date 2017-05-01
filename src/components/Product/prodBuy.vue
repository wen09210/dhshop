<template>
  <div class="container">
    <div class="prod_title">
      <span>現在開始改造你家!</span>
    </div>
    <div class="row">
      <div class="col-md-4">
        <img src="../../assets/temporyPic/prod-d1.jpg" class="img-responsive">
      </div>
      <div class="col-md-8">
        <h3>{{item.name}}</h3>
        <p>{{item.description}}</p>
        <div>
          <label>原價:</label>
          <span>{{item.orign}}</span>
        </div>
        <div>
          <label>售價:</label>
          <span>{{item.unitPrice}}</span>
        </div>
        <div>
          <label>數量:</label>
          <span>{{item.quantity}}</span>
        </div>
        <div>
          <label>規格:</label>
          <span>{{item.spec}}</span>
        </div>

        <div>
          <label>樣式</label>
          <select class="selectpicker">
              <option>胡桃木色木紋</option>
              <option>柚木色木紋</option>
              <option>古橡木紋</option>
          </select>
        </div>

        <div style="display:inline-block">
          <label>數量</label>
          <button class="btn btn-info" @click="itemSize++">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          <input type="text" class="inputsize" :value="itemSize" @keyup="keyNum">
          <button class="btn btn-info" @click="itemSize--">
              <i class="fa fa-minus" aria-hidden="true"></i>
            </button>
        </div>

        <div class="buybtn">
          <router-link to="/cart">
            <button class="btn btn-info btn-lg" @click="IncreaseProduct({item,itemSize})">直接購買</button>
          </router-link>
          <button class="btn btn-danger btn-lg a" @click="addCart(item, itemSize)">加入購物車</button>
          <div class="alertshow">
            <transition name="animated" enter-active-class="animated fadeInRight">
              <alert type="info" :closable="true" v-if="showAlert" @close="showAlert=false" :duration="2500">
                <strong>恭喜你!</strong>
                <span>商品已成功加入購物車囉.</span>
              </alert>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const item = {
  'name': '歐巴地板',
  'description': `強韌耐磨，防滑性佳！韓國超仿真防滑耐磨地板，安裝方便，即鋪即用！
                                紋理多樣化，美觀又實用！不怕水，不會蟲蛀，零
                                甲醛更環保！清潔方便，衛生又乾淨！不管是臥室、客廳或辦公室等環境
                                都適用！現在有5款式可以選擇喔~`,
  'orign': '4190元',
  'unitPrice': 2090,
  'quantity': '200箱',
  'spec': '約153x1222x4.5mm /片  (包裝內含數量:1盒10片)',
  'count': '0'
}

import { Alert } from 'uiv'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Alert
  },
  data: function () {
    return {
      item,
      itemSize: 1,
      showAlert: false
    }
  },
  computed: {
    ...mapGetters([
      'GetShoppingCartItem'
    ])
  },
  methods: {
    ...mapActions([
      'IncreaseProduct'
    ]),
    addCart(item, itemSize) {
      this.IncreaseProduct({item, itemSize})
      this.showAlert = true
    },
    keyNum() {
      this.itemSize = event.target.value
    }
  }
}

</script>
<style>

.prod_title{
    text-align: center;
    padding: 15px 0px 10px 0px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 35px;
    border-bottom: 1px solid #222222;
}
  .selectpicker{
    width: 220px;
    margin: 10px;
    background: 0 0;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    height: 34px;
    border-radius: 5px;
  }
  .inputsize{
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .buybtn{
    margin-top: 10px;
  }
.alertshow{
    position: fixed;
    top: 60px;
    right: 0px;
    width:350px;
    z-index: 1050;
    font-size:20px;
}
</style>
