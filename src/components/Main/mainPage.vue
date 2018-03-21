<template>
  <div id="mainpage">
    <mainTop></mainTop>
    <!-- <mainIntro></mainIntro> -->
    <mainChangeSpace></mainChangeSpace>
    <mainVideos></mainVideos>
    <mainBlogger></mainBlogger>
    <mainIgFrame></mainIgFrame>
    <!-- <mainMap></mainMap> -->
    <!-- <mainArtical></mainArtical> -->
    <!-- <mainAllProduct></mainAllProduct> -->
  </div>
</template>
<script>
import mainTop from './mainTop'
import mainIntro from './mainIntro'
import mainVideos from './mainVideos'
// import mainArtical from './mainAtrical.vue'
import mainAllProduct from './mainAllProduct'
import mainIgFrame from './mainIgFrame.vue'
import mainMap from './mainMap'
import mainBlogger from './mainBlogger'
import mainChangeSpace from './mainChangeSpace'
import Lockr from 'lockr'
export default {
  created() {
    Lockr.set('utmTrack', JSON.stringify(this.$route.query))
  },
  components: {
    mainTop,
    mainIntro,
    mainBlogger,
    mainVideos,
    // mainArtical,
    mainAllProduct,
    mainIgFrame,
    mainMap,
    mainChangeSpace
  }
}

</script>
<style>
.navbar-fixed-bottom, .navbar-fixed-top{
z-index:999;
}
.seemore {
  display: block;
  clear: both;
  font-size: 17px;
  margin-top: 10px;
  color: rgb(166, 29, 85);
  font-weight: 400;
  float:right;
  border:1px solid rgb(166, 29, 85);
  border-radius:3px;
  padding:0px 15px;
}

.seemore a {
  color: rgb(166, 29, 85);
}

.imgHover:hover {
  background-color: #FFC442;
  padding: 5px;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
}

.style_intro {
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
  margin-top: 35px;
}

.style_sub_intro {
  margin: -15px 0px 10px 0px;
  font-size: 18px;
}

@media (max-width:480px) {
  .seemore {
    margin: 15px 0px;
    background: transparent;
    border: 1px solid rgb(166, 29, 85);
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    width: 100%;
  }
  .style_intro {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 25px;
  }
}

</style>
