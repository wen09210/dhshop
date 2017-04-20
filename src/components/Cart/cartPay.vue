<template>
  <div>
    <div class="container">
      <table class="table table-border">
        <thead>
          <tr>
            <th>商品名稱</th>
            <th>商品單價</th>
            <th>商品數量</th>
            <th>商品總金額</th>
            <th></th>
          </tr>
        </thead>
        <tr v-for="item in GetShoppingCartItem">
          <td>{{item.name}}</td>
          <td>{{item.unitPrice}}</td>
          <td>{{item.count}}</td>
          <td>{{item.totalAmt}}</td>
          <td>
            <a class="btn btn-danger" @click="calAmt(item)">
              <i class="fa fa-trash-o fa-lg"></i></a>
          </td>
        </tr>
      </table>
      <h1>總金額: {{totalPern}}</h1>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        totalPern: 0
      }
    },
    created() {
      this.calAmt()
    },
    computed: {
      ...mapGetters([
        'GetShoppingCartItem'
      ])
    },
    methods: {
      ...mapActions([
        'IncreaseProduct',
        'ReduceProduct'
      ]),
      calAmt(item) {
        if (item !== undefined) {
          this.ReduceProduct(item)
        }
        console.log(this.GetShoppingCartItem)
        this.totalPern = 0
        this.GetShoppingCartItem.map(v => {
          this.totalPern += parseInt(v.totalAmt)
        })
      }
    }
  }
</script>
