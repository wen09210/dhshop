<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="Contrast_title">產品實際鋪設照</div>
      <div class="subtitle">還在猶豫家中的佈置嗎?讓我來幫你一把</div>
    </div>
    <div class="col-md-12">
      <tabs value="沉穩深橡">
        <tab-pane icon="stop" value="item.name" :label="item.name" :name="item.name" v-for="(item,i) in ContrastDetail " :key="ContrastDetail.floorID">
          <div class="row">
            <div class="col-md-6">
              <img :src="item.contrastColor" alt="" class="img-responsive">
            </div>
            <div class="col-md-6">
              <div class="Contrast_name">{{item.name}}</div>
              <div class="description" v-html="item.description"></div>
              <div class="clearfix"></div>
              <router-link to="/product/1">
                <button class="btnOrange btn btn-primary btn-lg btn-block">
                  <h3>
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    前往選購
                    </h3>
                </button>
              </router-link>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="lay_name Contrast_name">實鋪參考</div>
          <div class='reference'>
            <div class="col-md-4 col-xs-12" v-for="(item,i) in Contrast[i].case ">
              <div class="sqare_photo">
                <img :src="item.url" alt="" class="img-responsive">
              </div>
            </div>
          </div>
          <!-- <div class="col-md-4" v-for="item in findSomething.case" >
            <img :src="item.url" alt="" class="img-responsive">
          </div> -->
        </tab-pane>
      </tabs>
    </div>
  </div>
</template>
<script>
import Contrast from '../../../static/file/floorcolor.json'
export default {
  data() {
    return {
      Contrast: Contrast,
      ContrastDetail: {},
      reContrast: {}
    }
  },
  created() {
    let CC = this.Contrast
    this.ContrastDetail = CC
  }
  // created() {
  //   console.log(this.ContrastInCatgory.length)
  //   if (this.ContrastInCatgory.length === 0) {
  //     this.ContrastInCatgory = ContrastInCatgory.data.slice().reverse()
  //   }
  // }
}

</script>
<style scoped>
/* 地板icon顏色 */

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(2) i.ivu-icon.ivu-icon-stop {
  color: #655d54;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(3) i.ivu-icon.ivu-icon-stop {
  color: #6e5b41;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(4) i.ivu-icon.ivu-icon-stop {
  color: #663f2d;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(5) i.ivu-icon.ivu-icon-stop {
  color: #9b6445;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(6) i.ivu-icon.ivu-icon-stop {
  color: #c5975a;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(7) i.ivu-icon.ivu-icon-stop {
  color: #daaf6e;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(8) i.ivu-icon.ivu-icon-stop {
  color: #897f66;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(9) i.ivu-icon.ivu-icon-stop {
  color: #c9b8c2;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(10) i.ivu-icon.ivu-icon-stop {
  color: #ceb890;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(11) i.ivu-icon.ivu-icon-stop {
  color: #bbac98;
}

>>>.ivu-tabs-nav .ivu-tabs-tab:nth-child(12) i.ivu-icon.ivu-icon-stop {
  color: #d2c09f;
}


.img-responsive {
  border-radius: 3px;
}

.ivu-tabs-tabpane {
  height: 100%;
}

.col-md-4,
.col-md-6 {
  padding-left: 15px;
  padding-right: 15px;
}

.btnOrange {
  border-radius: 3px;
  font-weight: bold;
  margin-top: 15px;
}

.main_section {
  margin: 20px 0px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 20px;
}

.Contrast_title {
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

.Contrast_name {
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 22px;
  padding-top: 15px;
  padding-bottom: 0;
  color: #484848;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.lay_name {
  margin-left: 15px;
  margin-top: 20px;
}

.reference {
  overflow-y: scroll;
  height: 100vh;
}

.description {
  font-size: 17px;
  line-height: 25px;
  padding-top: 15px;
  padding-bottom: 0;
  color: #484848;
  font-weight: 300;
  min-height: 200px;
}

.Contrast_tag {
  color: #FF9800;
  padding-top: 3px;
}

.sqare_photo {
  margin: 10px 0px;
}

@media (max-width:768px) {
  .description {

    min-height: auto;
  }
}

</style>
