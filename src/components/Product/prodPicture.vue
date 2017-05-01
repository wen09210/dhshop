<template>
  <div class="container">
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <div v-for="item in imgList">
      <div class="container">
        <img src="../../assets/temporyPic/prod1.jpg" class="img-responsive">        
        </div>
    </div>
  </div>

</template>

<script>

 const imgList = [
   '../../assets/temporyPic/prod0.gif',
   '../../assets/temporyPic/prod1.jpg',
   '../../assets/temporyPic/prod2.gif',
   '../../assets/temporyPic/prod3.gif',
   '../../assets/temporyPic/prod4.jpg'
 ]
 const title = '歐巴地板'
 const description = '歐巴地板00000000'

 export default {
   data: function () {
     return {
       title,
       description,
       imgList
     }
   }

 }

</script>
