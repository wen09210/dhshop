<template>
  <div>
      <myheader> </myheader>
      <mysidebar></mysidebar>
      <router-view></router-view>
      <myfooter></myfooter>
      <Loading></Loading>
  </div>
</template>
<script>
import myheader from './components/Global/myheader'
import mysidebar from './components/Global/mysidebar'
import myfooter from './components/Global/myfooter'
import Loading from './components/Global/Loading'
export default {
  name: 'app',
  components: {
    myheader,
    mysidebar,
    myfooter,
    Loading
  }
}

</script>
<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../static/css/noty.css';
@import '../node_modules/swiper/dist/css/swiper.css';
@import '../node_modules/iview/dist/styles/iview.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
