<template>
  <div>
    <div id="fb-root"></div>
    <img src="../../assets/temporyPic/Index/banner0803.jpg" class="img-responsive">
    <div class="fb-video" data-href="https://www.facebook.com/dhshoptw/videos/1627499783967677/" data-width="500" data-show-text="false"></div>
    <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/1595018953882427/ " data-allowfullscreen="true"></div>
  </div>
</template>
<script>
import '../extension/FBSDK'
export default {
  mounted() {
    // alert(process.env.testVar)
    window.fbAsyncInit = function() {
      /* global FB */
      FB.init({
        appId: '{1238259759578123}',
        xfbml: true,
        version: 'v2.5'
      })
      // Get Embedded Video Player API Instance
      var myvideoplayer
      FB.Event.subscribe('xfbml.ready', function(msg) {
        if (msg.type === 'video') {
          myvideoplayer = msg.instance
          myvideoplayer.unmute()
        }
      })
    }
  }
}

</script>
<style>


</style>
