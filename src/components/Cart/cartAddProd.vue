<template>
  <div>
    <h4>購物車</h4>
    <ul class="col-xs-4">
      <li v-for="item in GetProductList">
        <div>{{item.name}}</div>
        <div>{{item.unitPrice | test}}</div>
        <img :src="item.src" style="width:200px;height:100px;">
        <div style="display:inline-block">
          <button class="btn btn-danger" @click="itemSize++">+</button>
          <input type="text" style="width:50px" :value="itemSize" @keyup="keyNum">
          <button class="btn btn-danger" @click="itemSize--">-</button>
          <button class="btn btn-info" @click="IncreaseProduct({item,itemSize})">加入購物車</button>
        </div>
      </li>
    </ul>
    <ul class="col-xs-4">
      <li v-for="item in GetShoppingCartItem">
        <span>{{item.name}}</span>
        <span>{{item.unitPrice}}</span>
        <span>{{item.count}}</span>
        <span>{{item.totalAmt}}</span>
      </li>
    </ul>
    <router-link class="btn btn-default btn-lg" to='/cartPay'>結賬</router-link>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  class ProductItem {
    constructor(name, unitPrice, count, totalAmt, src) {
      this.name = name
      this.unitPrice = unitPrice
      this.count = count
      this.totalAmt = totalAmt
      this.src = src
    }
    getRandomInt(min, max) {
      let nmin = Math.ceil(min)
      let nmax = Math.floor(max)
      return Math.floor(Math.random() * (nmax - nmin)) + nmin
    }
  }

  const imgList = ['http://www.dhshop.tw/img/product/mask.jpg', 'http://dhshop.tw/img/product/bottle.jpg',
    'http://yesim.tw/img/product/gluedots.jpg', 'http://yesim.tw/img/product/pokemon_ball.png'
  ]
  export default {
    data: function () {
      return {
        itemSize: 1,
        totalAmt: 0
      }
    },
    created() {
      this.ClearProductList()
      for (var i = 0; i <= 0; i++) {
        var pro = new ProductItem()
        pro.name = `Item${i}`
        pro.unitPrice = `${pro.getRandomInt(100, 10000).toString()}`
        pro.count = 1
        pro.totalAmt = pro.unitPrice * pro.count
        pro.src = imgList[i]
        this.GetProductList.push(pro)
      }
    },
    mounted() {},
    computed: {
      ...mapGetters([
        'GetProductList',
        'GetShoppingCartItem'
      ]),
      CalAmt: () => {
        return 1
      }
    },
    methods: {
      ...mapActions([
        'IncreaseProduct',
        'ReduceProduct',
        'ClearShoppingCartItem',
        'ClearProductList'
      ]),
      keyNum() {
        this.itemSize = event.target.value
      }
    }
  }

</script>

<style>
  div .form-control {
    width: 50px;
  }
</style>
