<template>
<div>
  <h4>購物車</h4>
  <ul class="col-xs-4">
    <li v-for="item in GetProductList">
      <div>{{item.name}}</div>
      <div>{{item.count | test}}</div>
      <img :src="item.src" style="width:200px;height:100px;">      
      <button class="btn btn-danger" @click="plus">+</button>
      <input type="text" class="form-control" v-model="itemSize">
      <button class="btn btn-danger" @click="minus">-</button>
      <button class="btn btn-danger" @click="ReduceProduct(item)">-</button>
      <button class="btn btn-info" @click="IncreaseProduct(item)">加入購物車</button>
    </li>
  </ul>
  <ul class="col-xs-4">
    <li v-for="item in GetShoppingCartItem">
      <span>{{item.name}}</span>
      <span>{{item.count}}</span>
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
  constructor (name, count, itemsize, totalPern, src) {
    this.name = name
    this.count = count
    this.itemsize = itemsize
    this.totalPern = totalPern
    this.src = src
  }
  getRandomInt (min, max) {
    let nmin = Math.ceil(min)
    let nmax = Math.floor(max)
    return Math.floor(Math.random() * (nmax - nmin)) + nmin
  }
}

const imgList = ['http://www.dhshop.tw/img/product/mask.jpg', 'http://dhshop.tw/img/product/bottle.jpg', 'http://yesim.tw/img/product/gluedots.jpg', 'http://yesim.tw/img/product/pokemon_ball.png']

export default {
  data: function () {
    return { itemSize: 1, totalAmt: 0 }
  },
  created () {
    this.ClearProductList()
    for (var i = 0; i <= 3; i++) {
      var pro = new ProductItem()
      pro.name = `Item${i}`
      pro.count = `${pro.getRandomInt(100, 10000).toString()}`
      pro.src = imgList[i]
      this.GetProductList.push(pro)
    }
  },
  mounted () {},
  computed: {
    ...mapGetters([
      'GetProductList',
      'GetShoppingCartItem'
    ])
  },
  methods: {
    ...mapActions([
      'IncreaseProduct',
      'ReduceProduct',
      'ClearShoppingCartItem',
      'ClearProductList'
    ]),
    plus: function () {
      this.itemSize++
      this.itemsize = this.itemSize
    },
    minus: function () {
      this.itemSize--
      if (this.itemSize === 0) {
        alert('0')
      }
    }
  }
}
</script>

<style>
 div .form-control {
    width: 50px;
  } 
</style>

