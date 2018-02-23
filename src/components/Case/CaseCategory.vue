<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="category_title">還等什麼，來實際體驗吧!</div>
      <div class="subtitle">台灣在地好店家，和您分享最真實的感受</div>
    </div>
    <div class="catetitle col-md-12">北部嚴選好鄰居</div>
    <div class="col-md-3 col-xs-12 inCase" v-for="CaseDetail in areaNorth  " :key="CaseDetail.CaseID">
      <router-link :to="{name: 'Case', params: {CaseID: CaseDetail.CaseID}}">
        <img :src="CaseDetail.coverPhoto" class="img-responsive">
        <div class="Case_name">{{CaseDetail.name}}</div>
        <div class="Case_description">{{CaseDetail.quote}}</div>
        
        <div class="Case_tag">
           <span class="green"> <Icon type="ios-location"></Icon> {{CaseDetail.city}}</span> 
          <Icon type="pricetag"></Icon>{{CaseDetail.opentime}}</div>
      </router-link>
    </div>
    <div class="clearfix"></div>
    <div class="catetitle col-md-12" id="south">南部親切好厝邊</div>
    <div class="col-md-3 col-xs-12 inCase" v-for="CaseDetail in areaSouth  " :key="CaseDetail.CaseID">
      <router-link :to="{name: 'Case', params: {CaseID: CaseDetail.CaseID}}">
        <img :src="CaseDetail.coverPhoto" class="img-responsive">
        <div class="Case_name">{{CaseDetail.name}}</div>
        <div class="Case_description">{{CaseDetail.quote}}</div>
        
        <div class="Case_tag">
            <span class="green"> <Icon type="ios-location"></Icon> {{CaseDetail.city}}</span>
          <Icon type="pricetag"></Icon>{{CaseDetail.opentime}}</div>
      </router-link>
    </div>
    
  </div>
</template>
<script>
import Case from '../../../static/file/caseList.json'
export default {
  data() {
    return {
      Case: Case,
      CaseDetail: {},
      areaNorth: []
    }
  },
  created() {
    let CC = this.Case.data
    this.CaseDetail = CC
    // north
    this.areaNorth = this.CaseDetail.filter(
      (x) => {
        return x.area === '北'
      })
    // south
    this.areaSouth = this.CaseDetail.filter(
      (x) => {
        return x.area === '南'
      })
  },
  computed: {
    reverseItems() {
      return this.CaseDetail.slice().reverse()
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
.green{
  color:rgb(113, 192, 77);
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

.inCase {
  margin: 20px 0px;
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
.catetitle {
  margin: 25px 0px;
  word-wrap: break-word;
  font-size: 28px;
  line-height: 24px;
  color: #484848;
  font-weight: 600;
  clear: top;
}
.Case_tag {
  color: #FF9800;
  padding-top: 3px;
  height: 10px;
}

</style>
