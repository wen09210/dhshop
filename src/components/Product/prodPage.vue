<template>
  <div>
    <prodPicture></prodPicture>
    <prodBuy></prodBuy>
  </div>
</template>

<script>
  import prodBuy from './prodBuy'
  import prodPicture from './prodPicture'
  export default {
    components: {
      prodBuy,
      prodPicture
    }
}
</script>
