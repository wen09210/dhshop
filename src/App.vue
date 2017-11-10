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
import { mapActions } from 'vuex'
export default {
  name: 'app',
  created() {
    // Alert全局設定
    this.$Notice.config({
      top: 100,
      duration: 4
    })
    this.PassNoticeFc(this.$Notice)
  },
  components: {
    myheader,
    mysidebar,
    myfooter,
    Loading
  },
  methods: {
    ...mapActions([
      'PassNoticeFc'
    ])
  }
}

</script>
<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../static/css/noty.css';
@import '../node_modules/swiper/dist/css/swiper.css';
@import '../node_modules/iview/dist/styles/iview.css';
@import '../static/css/ivewPersonal.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
