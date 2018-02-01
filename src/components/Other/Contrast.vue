<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="Contrast_title">地板比對照</div>
      <div class="subtitle">精選產品比對照，各色案例隨你挑</div>
    </div>
    <div class="col-md-12">
      <tabs value="沉穩深橡">
        <tab-pane value="item.name" :label="item.name" :name="item.name" v-for="(item,i) in ContrastDetail" :key="ContrastDetail.floorID">
          <div class="row">
            <div class="col-md-6">
              <img :src="item.contrastColor" alt="" class="img-responsive">
            </div>
            <div class="col-md-6">
              <div class="Contrast_name">{{item.name}}</div>
              <div class="description" v-html="item.description"></div>
             <div class="clearfix"></div>
                <button class="btnOrange btn btn-primary btn-lg btn-block" >
                  <h3>
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    前往選購
                    </h3>
                </button>
              
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="lay_name Contrast_name">實鋪參考</div>
          <div class="col-md-4 col-xs-6" v-for="(item,i) in ContrastDetail[i].case">
            <div class="sqare_photo">
              <img :src="item.url" alt="" class="img-responsive">
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
      ContrastDetail: {}
    }
  },
  created() {
    let CC = this.Contrast
    this.ContrastDetail = CC
  }
  // methods: {
  //   getIndex () {
  //     if (!this.index) {
  //       this.index = 1
  //     } else {
  //       this.index++
  //     }
  //     return this.index
  //   }
  // }
  // created() {
  //   console.log(this.ContrastInCatgory.length)
  //   if (this.ContrastInCatgory.length === 0) {
  //     this.ContrastInCatgory = ContrastInCatgory.data.slice().reverse()
  //   }
  // }
}

</script>
<style scoped>
.img-responsive {
  border-radius: 3px;
}

/* 
.col-md-4 {
  padding-left: 0px;
} */

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
