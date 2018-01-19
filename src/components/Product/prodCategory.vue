<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="category_title">dH.CHOICE</div>
      <div class="subtitle">美好生活從家開始</div>
    </div>
    <div class="col-md-3 col-xs-6 inallProd" v-for="items in allProd">
      <router-link :to="{name: 'allProd', params: {allProdID: allProdDetail.allProdID}}">
        <img :src="items.coverPhoto" class="img-responsive">
        <div>{{items.ProdName}}</div>
        <div class="allProd_description">{{items.Description}}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
import allProd from '../../../static/file/allProduct.json'
=======
import Case from '../../../static/file/caseList.json'
>>>>>>> 717d0c3b5c9466e5ed3480fd487590a2dea65ecc
export default {
  data() {
    return {
      allProd: allProd
    }
  },
  created() {
    let CC = this.allProd
    this.allProdDetail = CC
  },
  computed: {
    reverseItems() {
      return this.allProdDetail.slice().reverse()
    },
    filteredUsers: function () {
      var self = this
      return self.items.filter(function (item) {
        return item.prodname.indexOf(self.searchQuery) !== -1
      })
    }
  }
}

</script>
<style>
.img-responsive {
  border-radius: 3px;
}

.main_section {
  margin: 20px 0px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 20px;
}

.category_title {
  font-weight: 700;
  margin-bottom: 0px;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.6px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #484848;
}

.subtitle {
  margin: 0px;
  word-wrap: break-word;
  font-size: 19px;
  line-height: 24px;
  padding-top: 10px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;
}

.inallProd {
  margin: 20px 0px;
}

.allProd_description {
  font-size: 17px;
  line-height: 22px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 40px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.allProd_tag {
  color: #FF9800;
  padding-top: 3px;
}

</style>
