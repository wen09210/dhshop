<template>
  <!-- <div class="col-xs-12 col-md-12" style="padding-top:20px;">
  <iframe src='https://www.juicer.io/api/feeds/dhshop_tw/iframe' frameborder='0' width='100%' height='1000' style='display:block;margin:0 auto;'></iframe>
</div> -->
  <div class="container">
    <div class="col-xs-12 col-md-12" style="padding:20px 0px 0px;">
      <!-- <div class="style_intro">你就是故事的主角</div> -->
      <div class="style_intro">與我們分享你的故事</div>
      <div class="style_sub_intro">
        拍照上傳IG >><span style='color:#ff9900'>#歐巴地板</span>>>你就能在這分享美美的照片!! </div>
      <link href="//assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
      <ul class="juicer-feed" data-feed-id="dhshop_tw"></ul>
    </div>
  </div>
</template>

<script>
export default {}

</script>
<style scroped>
li.feed-item.juicer.image-post {
  display: none;
}

ul.juicer-feed.j-initialized.j-modern.j-desktop.polaroid.loaded>h1.referral {
  display: none;
}

.col-xs-12 .juicer-feed.polaroid li.feed-item {
  padding: 10px;
  text-align: center;
  border: 1px solid #dedede;
  border-radius: 5px;
}
.referral{
  display:none;
}
.juicer-feed h1.referral a {
    color: #f05a4b;
    display: inline-block;
    display: none !important;
}
.j-post-overlay.juicer-feed ul.j-share{
  display: none;
}
@media (max-width: 1190px){
  .j-post-overlay.juicer-feed ul.j-share {
   display: none !important;
}
}
@media (max-width: 800px){
  .j-post-overlay.juicer-feed ul.j-share {
   display: none !important;
}
}

/* li.feed-item.juicer.image-post,ul.juicer-feed.j-initialized.j-modern.polaroid.loaded>h1.referral {
   display: none;
}
ul.juicer-feed.j-initialized.j-modern.j-mobile.polaroid.loaded>h1 {
    display: none;
}
li.feed-item.juicer.image-post, ul.juicer-feed.j-initialized.j-modern.j-desktop.polaroid.loaded>h1.referral {
    display: none;
} */
</style>
