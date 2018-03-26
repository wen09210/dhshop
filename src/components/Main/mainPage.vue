<template>
  <div id="mainpage">
    <mainTop></mainTop>
    <mainFiveCustomer></mainFiveCustomer>
    <mainIntro></mainIntro>
    <!-- <mainChangeSpace></mainChangeSpace> -->
    <!-- <mainBlogger></mainBlogger> -->
    <mainIgFrame></mainIgFrame>
    <!-- <mainMap></mainMap> -->
    <!-- <mainAllProduct></mainAllProduct> -->
  </div>
</template>
<script>
import mainTop from './mainTop'
import mainIntro from './mainIntro'
import mainFiveCustomer from './mainFiveCustomer'
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
    mainFiveCustomer,
    // mainArtical,
    mainAllProduct,
    mainIgFrame,
    mainMap,
    mainChangeSpace
  }
}

</script>
<style>
.navbar-fixed-bottom,
.navbar-fixed-top {
  z-index: 999;
}

.seemore {
    margin: 15px 0px;
    background: transparent;
    border: 1px solid rgb(154, 154, 154);
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    font-size: 18px;
    width: 300px;
    text-align: center;
  }
.seemore a {
  color:  rgb(154, 154, 154);
}
  .seemore:hover{
    border: 1px solid rgb(255, 153, 0);
  }
  .seemore:hover a{
  color:rgb(255, 153, 0);
  }

.style_intro {
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
  margin-top: 35px;
  text-align: center;
}

.style_sub_intro {
  margin: -15px 0px 10px 0px;
  font-size: 18px;
  text-align: center;
}

@media (max-width:480px) {

  .style_intro {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 25px;
  }
}

</style>
