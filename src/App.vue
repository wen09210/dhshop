<template>
  <div>
    <myheader> </myheader>
    <mysidebar></mysidebar> 
    <router-view></router-view>   
    <myfooter></myfooter>    
  </div>
</template>

<script>
  import myheader from './components/Global/myheader'
  import mysidebar from './components/Global/mysidebar'
  import myfooter from './components/Global/myfooter'
  
  export default {
    name: 'app',
    components: {
      myheader,
      mysidebar,
      myfooter
    }
  }

</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

  #app {
    font-family: '微軟正黑體';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
