<template>
  <div class="">
    <div v-html="ContentUp"></div>
    <div v-html="ContentDown"></div>
    
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
        // html 第一部分
        ContentUp: '',
        // html 第二部分
        ContentDown: '',
        // 輪播上
        CarouselUp: [],
        // 輪播下
        CarouselDown: [],
        // 輪播控制
        CtrlPanel: []
      }
    },
    created() {
      axios.get(`/api/Product/GetProductContent?prodID= ${this.$route.params.prodID}`)
        .then((response) => {
          if (response.data.statu === 'err') {
            noty.ShowAlert(response.data.msg)
          } else {
            this.ContentUp = response.data.data[0].DetailContent
            this.ContentUp = response.data.data[0].DetailContentDown
            this.CarouselUp = response.data.data[0].CarouselUp
            this.CarouselDown = response.data.data[0].CarouselDown

            for (var i = 0; i < Object.keys(this.CarouselUp).length; i++) {
              if (i === 0) {
                CtrlPanel.push(true)
              } else {
                CtrlPanel.push(false)
              }
            }
            console.log(this.item)
          }
        })
    }

  }

</script>
<style>
  img {
    width: 100%;
  }

</style>
