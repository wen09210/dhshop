<template>
  <div>
  <mebLogin></mebLogin>
  <mebSearch></mebSearch>
  <mebEdit></mebEdit>
  </div>
</template>
<script>
  import mebLogin from './mebLogin.vue'
  import mebSearch from './mebSearch.vue'
  import mebEdit from './mebEdit.vue'
  export default {
    components: {
      mebLogin,
      mebSearch,
      mebEdit
    }
  }
</script>
