<template>
  <div>
    <div class="container">
      <div class="style_intro">全台服務據點</div>
      <div class="style_sub_intro">有任何商品問題，我們會提供可靠建議</div>
      <div class="col-md-6">
        <router-link to="/CaseCategory">
          <img src="../../assets/temporyPic/index/MAP.png" alt="" class="img-responsive">
        </router-link>
      </div>
      <div class="col-md-6 hidden-xs mapright">
        <!-- <router-link to="CaseCategory">
          <img src="../../assets/temporyPic/index/map_north.png" alt="" class="img-responsive imgHover s_line">
        </router-link>
        <router-link to="CaseCategory#south">
          <img src="../../assets/temporyPic/index/map_south.png" alt="" class="img-responsive imgHover s_line">
        </router-link> -->
        <div v-for="(item,index) in map" class="s_line">
          <router-link :to="{name: 'Case', params: {CaseID: item.CaseID}}">
            <div class="col-md-4 map_img"><img :src="item.coverPhoto" alt="" class="img-responsive "></div>
            <div class="col-md-8">
              <div class="map_name ">{{item.name}}</div>
              <div class="map_city">
                <Icon type="ios-location"></Icon>{{item.city}} </div>
              <div class="map_time">
                <Icon type="clock"></Icon>{{item.opentime}}</div>
            </div>
            <div class="clearfix"></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import map from '../../../static/file/caseList.json'
export default {
  data() {
    return {
      map: map.data
    }
  }
}

</script>
<style scoped>
.img-responsive {
  border-radius: 3px;
}

.mapright {
  overflow-y: scroll;
  height: 670px;
}

.col-md-6 {
  padding-left: 0px;
}

.s_line {
  border: 1px dashed #ccc;
  padding: 2px;
  margin: 3px 0px;
}

.map_img {
  padding-left: 0px;
}

.map_name {
  font-size: 19px;
  line-height: 22px;
  padding-top: 5px;
  margin-top: 10px;
  - padding-bottom: 0px;
  color: #484848;
  font-weight: 700;
}

.map_city {
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  padding-top: 8px;
  padding-bottom: 0px;
  color: rgb(113, 192, 77);
  font-weight: 700;
}

.map_time {
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.4px;
  padding-top: 8px;
  padding-bottom: 0px;
  color: #FFc442;
  font-weight: 700;
}

/* *scroll bar */

::-webkit-scrollbar {
  width: 10px;
}

/* Track */

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */

::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 5px;
}

/* Handle on hover */

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
