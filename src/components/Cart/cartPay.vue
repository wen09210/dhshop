<template>
  <div>
    <div class="container">
      <table class="table table-border">
        <thead>
          <tr>
            <th>商品名稱</th>
            <th>商品金額</th>
          </tr>
        </thead>
        <tr v-for="item in GetShoppingCartItem">
          <td>{{item.name}}</td>
          <td>{{item.count}}</td>
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
  data () {
    return {
      totalPern: 0
    }
  },
  created () {
    this.GetShoppingCartItem.map(v => {
      this.totalPern += parseInt(v.count)
    })
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
    ])
  }
}
</script>
