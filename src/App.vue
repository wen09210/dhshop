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
// 2017.12.09 Test GitLab2
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

/* 下而上動畫 */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */
{
  transform: translateY(10px);
  opacity: 0;
}
.btnOrange{
  background: #f57e28;
  border: 0px;
  border-radius: 0px;
  margin-left: 5px;
  padding: 15px 10px;
  color: white;
}
.btnOrange:hover{
  background: #fb9f5d;
  border: 0px;
  border-radius: 0px;
  margin-left: 5px;
  padding: 15px 10px;
  color: white;
}
.btnOrange:active{
  background: #fb9f5d;
  border: 0px;
  border-radius: 0px;
  margin-left: 5px;
  padding: 15px 10px;
  color: white;
}

.btnGreen{
  background: #5cb85c;
  border: 0px;
  border-radius: 0px;
  margin-left: 5px;
  padding: 15px 10px;
  color: white;
}
.btnGreen:hover{
  background: #65bb65;
  border: 0px;
  border-radius: 0px;
  margin-left: 5px;
  padding: 15px 10px;
  color: white;
}
.btnGreen:active{
  background: #65bb65;
  border: 0px;
  border-radius: 0px;
  margin-left: 5px;
  padding: 15px 10px;
  color: white;
}
</style>
