<template>
  <div class="container ">
    <h3>精選加購--走過路過千萬別錯過</h3>
    <div class="row detailBlock ">
      <div class="col-md-3" v-for="item in addProdList">
        <span>{{item.ProdName}}</span>
        <span><img src="../../assets/temporyPic\/hot1.jpg" class="payimg"></span>
        <span>單價: {{item.AddPrice}}元</span>
        <div>
            <select class="selectpicker" v-model="item.quentity">
                  <option v-for="option in 10"  :value="option">{{option}}</option>
            </select>
         <button class="btn btn-info"  @click="IncreaseAddProduct(item)">
              <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {mapGetters, mapActions} from 'vuex'
  import axios from 'axios'

  export default {
    data: function () {
      return {
        addProdList: []
      }
    },
    created() {
      console.log(this.$store.state.cartProdID)
      axios.get(`/api/Product/GetAddProduct?cartProdID=${this.$store.state.cartProdID}`)
      .then((response) => {
        console.log(response)
        this.addProdList = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    mounted() {},
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
    .payimg{
    width:160px; 
    height:120px;
    margin:5px;
  }
  .selectpicker{
    width:120px
  }
</style>
