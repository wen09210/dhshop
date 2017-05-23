<template>
  <div class="container ">
    <h3>精選加購--走過路過千萬別錯過</h3>
    <div class="row detailBlock ">
      <div class="col-md-3">
        <span>0000</span>
        <img src="../../assets/temporyPic\/hot1.jpg" class="payimg">
        <span>$1000元</span>
        <div>
            <select class="selectpicker">
                  <option v-for="option in 10"  :value="option">{{option}}</option>
            </select>
         <button class="btn btn-info"  @click="addProd">
              <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
          </div>
      </div>
      <div class="col-md-3">
        <span>0000</span>
         <button class="btn btn-info" >
              <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
      </div>
    </div>
  </div>
</template>


<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    data: function () {
      return {
        itemSize: 1,
        totalAmt: 0
      }
    },
    created() {
    },
    mounted() {},
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
      addProd() {
        this.itemSize = event.target.value
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
