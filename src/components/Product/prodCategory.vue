<template>
  <div class="container ">
    <div class="col-md-12">
    <div class="main_section col-md-12">
      <div class="category_title">dH.CHOICE</div>
      <div class="subtitle">美好生活從家開始</div>
    </div>
    <div class="catetitle col-md-12">空間改造</div>
    <div class="col-md-3 col-xs-6 inallProd" v-for="items in space ">
      <router-link :to="{name: 'product', params: {prodID: items.prodID}}">
        <img :src="items.coverPhoto" class="img-responsive">
        <div class="tagname">{{items.ProdName }}</div>
        <div class="allProd_description">{{items.Description}}</div>
      </router-link>
    </div>
    <div class="clearfix"></div>
    <div class="catetitle col-md-12">氛圍營造</div>
    <div class="col-md-3 col-xs-6 inallProd" v-for="items in atomsphere ">
      <router-link :to="{name: 'product', params: {prodID: items.prodID}}">
        <img :src="items.coverPhoto" class="img-responsive">
        <div class="tagname">{{items.ProdName}}</div>
        <div class="allProd_description">{{items.Description}}</div>
      </router-link>
    </div>
    <div class="clearfix"></div>
    <div class="catetitle col-md-12">清潔保養</div>
    <div class="col-md-3 col-xs-6 inallProd" v-for="items in clearmaintain ">
      <router-link :to="{name: 'product', params: {prodID: items.prodID}}">
        <img :src="items.coverPhoto" class="img-responsive">
        <div class="tagname">{{items.ProdName }}</div>
        <div class="allProd_description">{{items.Description}}</div>
      </router-link>
    </div>
    <div class="clearfix"></div>
    <div class="catetitle col-md-12">居家好物</div>
    <div class="col-md-3 col-xs-6 inallProd" v-for="items in homegood ">
      <router-link :to="{name: 'product', params: {prodID: items.prodID}}">
        <img :src="items.coverPhoto" class="img-responsive">
        <div class="tagname">{{items.ProdName }}</div>
        <div class="allProd_description">{{items.Description}}</div>
      </router-link>
    </div>  
  </div>
  <div class="clearfix"></div>
  </div>
  
</template>
<script>
import allProd from '../../../static/file/allProduct.json'
export default {
  data() {
    return {
      allProd: allProd,
      allProdDetail: {}
    }
  },
  created() {
    let CC = this.allProd
    this.allProdDetail = CC
    let space = this.allProd.filter(x => x.Label === '空間改造')
    this.space = space
    let atomsphere = this.allProd.filter(x => x.Label === '氛圍營造')
    this.atomsphere = atomsphere
    let clearmaintain = this.allProd.filter(x => x.Label === '清潔保養')
    this.clearmaintain = clearmaintain
    let homegood = this.allProd.filter(x => x.Label === '居家好物')
    this.homegood = homegood
  },
  computed: {
    reverseItems() {
      return this.allProdDetail.slice().reverse()
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
.inallProd{
  margin-top: 5px;
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
.tagname{
  margin:5px 0px;
  font-size:16px;
}
.catetitle{
  margin:25px 0px;
  word-wrap: break-word;
  font-size: 28px;
  line-height: 24px;
  color: #484848;
  font-weight: 600;
  clear:top;
}
.allProd_description {
  font-size: 17px;
  line-height: 22px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 400;
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
