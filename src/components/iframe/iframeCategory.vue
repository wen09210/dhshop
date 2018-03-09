<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="fb-video" data-href="1627499783967677 " data-allowfullscreen="true"></div>
      <div class="category_title">更多創意小技巧</div>
      <div class="fb-video" data-href="1627499783967677 " data-allowfullscreen="true"></div>
      <div class="subtitle">跟著影片一起做，親手打造就是這麼簡單!</div>
    </div>
    <div class="catetitle col-md-12"> 完美居家打造建議 </div>
    <template v-for="item in lay" v-cloak>
      <div @click="instance(item.iframeID)" class="col-md-3 col-xs-6 inFBiframe" :key="item.iframeID">
        <img :src="item.coverPhoto" class="img-responsive fbiframephoto">
        <div class="FBiframe_description">{{item.title}}</div>
      </div>
    </template>
    <div class="clearfix"></div>
    
    <div class="catetitle col-md-12"> 邊邊角角怎麼辦? </div>
    <template v-for="item in classroom" v-cloak>
      <div @click="instance(item.iframeID)" class="col-md-3 col-xs-6 inFBiframe" :key="item.iframeID">
        <img :src="item.coverPhoto" class="img-responsive fbiframephoto">
        <div class="FBiframe_description">{{item.title}}</div>
      </div>
    </template>
    <div class="clearfix"></div>
    <div class="catetitle col-md-12">有任何問題，我們會隨時協助 </div>
    <template v-for="item in clear" v-cloak>
      <div @click="instance(item.iframeID)" class="col-md-3 col-xs-6 inFBiframe" :key="item.iframeID">
        <img :src="item.coverPhoto" class="img-responsive fbiframephoto">
        <div class="FBiframe_description">{{item.title}}</div>
      </div>
    </template>
    
    <div class="clearfix"></div>
    <div class="catetitle col-md-12"> 走進，夢想的空間 </div>
    <template v-for="item in oba" v-cloak>
      <div @click="instance(item.iframeID)" class="col-md-3 col-xs-6 inFBiframe" :key="item.iframeID">
        <img :src="item.coverPhoto" class="img-responsive fbiframephoto">
        <div class="FBiframe_description">{{item.title}}</div>
      </div>
    </template>
  </div>
</template>
<script>
import FBiframeincatgory from '../../../static/file/FBiframe.json'
export default {
  data() {
    return {
      FBiframeincatgory: FBiframeincatgory,
      modal1: false,
      classroom: [],
      lay: [],
      oba: [],
      clear: []
    }
  },
  created() {
    // var sortArray = function(array) {
    //   return array.sort(function(a, b) {
    //     if (a.iframeID > b.iframeID) {
    //       return a - b
    //     }
    //   })
    // }
    // dh小教室
    this.classroom = this.FBiframeincatgory.filter(
      (x) => {
        return x.Label === 'dH小教室'
      })
    // 拼法舖設教學
    this.lay = this.FBiframeincatgory.filter(
      (x) => {
        return x.Label === '舖設拼法'
      })
    // dH小百科
    this.clear = this.FBiframeincatgory.filter(
      (x) => {
        return x.Label === 'dH小百科'
      })
    // 歐巴到你家
    this.oba = this.FBiframeincatgory.filter(
      (x) => {
        return x.Label === '歐巴到你家'
      })
  },
  methods: {
    instance(n) {
      n = this.FBiframeincatgory[n - 1]
      this.$Modal.info({
        title: n.title,
        content: "<div class='embed-responsive embed-responsive-16by9 '><iframe src='" + n.iframeUrl + "'width='560' height='315' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true' allowFullScreen='true'></iframe></div>",
        width: 768,
        okText: '關閉'
      })
    }
  },
  computed: {
    // refresh() {
    //   this.FBiframeincatgory = FBiframeincatgory.sort(function(a, b) { if (a.iframeID > b.iframeID) { return a.iframeID - b.iframeID } })
    // }
  }
}

</script>
<style>
.ivu-modal-confirm-body .ivu-modal-confirm-body-icon.ivu-modal-confirm-body-icon-info {
  display: none;
}

.ivu-modal-confirm-body {
  padding-left: 0px;
}

</style>
<style scoped>
.img-responsive {
  border-radius: 3px;
  cursor: pointer;
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

.FBiframe_description {
  font-size: 17px;
  line-height: 22px;
  padding-top: 15px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.subtitle {
  margin: 0px;
  word-wrap: break-word;
  font-size: 19px;
  line-height: 24px;
  padding-top: 5px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;
}

.inFBiframe {
  margin: 20px 0px;
}


.FBiframe_description {
  font-size: 17px;
  line-height: 22px;
  padding-top: 15px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 35px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.FBiframe_tag {
  color: #FF9800;
  padding-top: 3px;
}

.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vertical-center-modal .ivu-modal {
  top: 0;
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

</style>
