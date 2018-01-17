<template>
<div class="container">
  <div class="main_section col-md-12">
    <div class="category_title">實體展示空間</div>
    <div class="subtitle">台灣在地好店家，讓您實際接觸最棒的產品</div>
  </div>  
  <div class="col-md-3 col-xs-6 inCase"  v-for="CaseDetail in reverseItems  " :key="CaseDetail.CaseID">
      <router-link :to="{name: 'Case', params: {CaseID: CaseDetail.CaseID}}">
        <img :src="CaseDetail.coverPhoto" class="img-responsive">
        <div class="Case_name" >{{CaseDetail.name}}</div>
        <div class="Case_description">{{CaseDetail.quote}}</div>
        <div class="Case_tag">
          <Icon type="pricetag"></Icon>{{CaseDetail.opentime}}</div>
      </router-link>
  </div>
</div>
  
 
</template>
<script>
import Case from '../../../static/file/Case.json'
export default {
  data() {
    return {
      Case: Case,
      CaseDetail: {}
    }
  },
  created() {
    let CC = this.Case.data
    this.CaseDetail = CC
  },
  computed: {
    reverseItems() {
      return this.CaseDetail.slice().reverse()
    }
  }
}

</script>
<style >
.img-responsive {
  border-radius: 3px;
}
.main_section{
  margin:20px 0px;
  border-bottom:1px solid #dbdbdb;
  padding-bottom:20px;

}
.category_title{
font-weight: 700 ;
margin-bottom: 0px ;
font-size: 28px ;
line-height: 32px ;
letter-spacing: -0.6px ;
padding-top: 2px ;
padding-bottom: 2px ;
color: #484848 ;
}
.subtitle{
margin: 0px ;
word-wrap: break-word ;
font-size: 19px ;
line-height: 24px ;
padding-top: 10px ;
padding-bottom: 0px ;
color: #484848 ;
font-weight: 300 ;
}
.inCase{
  margin:20px 0px;
}
.Case_name {
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  padding-top: 8px;
  padding-bottom: 0px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Case_description {
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

.Case_tag {
  color: #FF9800;
  padding-top:3px;
}
</style>
