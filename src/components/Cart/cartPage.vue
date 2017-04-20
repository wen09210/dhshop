<template>
  <div>>
    <cartProd></cartProd>
    <cartAddProd></cartAddProd>
  </div>
</template>

<script>
  import cartProd from './cartProd'
  import cartAddProd from './cartAddProd'
  export default {
    components: {
      cartProd,
      cartAddProd
    },
    data() {
      return {
        test: 1
      }
    }
  }
</script>
