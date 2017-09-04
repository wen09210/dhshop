<template>
  <div class="">
    <div v-html="content"></div>
  </div>

</template>

<script>
  //  const imgList = [
  //    '../../assets/temporyPic/prod0.gif',
  //    '../../assets/temporyPic/prod1.jpg',
  //    '../../assets/temporyPic/prod2.gif',
  //    '../../assets/temporyPic/prod3.gif',
  //    '../../assets/temporyPic/prod4.jpg'
  //  ]
  //  const title = '歐巴地板'
  //  const description = '歐巴地板00000000'
  import axios from 'axios'
  import {
    noty
  } from '../../assets/AlertDialog.js'
  export default {
    data: function () {
      return {
        content: ''
      }
    },
    created() {
      axios.get(`/api/Product/GetProductContent?prodID= ${this.$route.params.prodID}`)
        .then((response) => {
          if (response.data.statu === 'err') {
            noty.ShowAlert(response.data.msg)
          } else {
            this.content = response.data.data
            console.log(this.item)
          }
        })
    }

  }

</script>
<style>
img{
  width:100%;
}
</style>
