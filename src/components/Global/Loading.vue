<template>
<div>
<template  v-if="openLoading">
  <div class="ivu-spin-fullscreen ivu-spin-fullscreen-wrapper">
    <Spin fix>
      <Icon type="load-c" size=50 class="demo-spin-icon-load"></Icon>
      <div class="LoadingFont">
        <img src="../../assets/icon/dhshop_logo.svg">
        <!-- <span>處理中...</span> -->
      </div>
    </Spin>
  </div>
  </template>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['openLoading'])
  }
}
</script>
<style>
.LoadingFont {
  font-size: 22px !important;
}

.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
