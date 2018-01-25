<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="category_title">消費者使用實例</div>
      <div class="subtitle">d粉們精心鋪設的空間，讓您輕鬆探索美好居家</div>
    </div>
    <div class="col-md-3 col-xs-6 inblog" v-for="item in  BlogInCatgory">
      <router-link :to="{name: 'Blog', params: {BlogID: item.BlogID}}">
        <img :src="item.coverPhoto" class="img-responsive">
        <div class="Blog_name">{{item.title}}</div>
        <div class="Blog_description">{{item.quote}}</div>
        <div class="Blog_tag">
          <Icon type="pricetag"></Icon>{{item.prodtag}}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import blogInCatgory from '../../../static/file/Blog.json'
export default {
  data() {
    return {
      BlogInCatgory: []
    }
  },
  created() {
    console.log(this.BlogInCatgory.length)
    if (this.BlogInCatgory.length === 0) {
      this.BlogInCatgory = blogInCatgory.data.slice().reverse()
    }
  }
}

</script>
<style>
.img-responsive {
  border-radius: 3px;
}

.main_section {
  margin: 20px 0px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 20px;
}

.category_title {
  font-weight: 700;
  margin-bottom: 0px;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.6px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #484848;
}

.subtitle {
  margin: 0px;
  word-wrap: break-word;
  font-size: 19px;
  line-height: 24px;
  padding-top: 10px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;
}

.inblog {
  margin: 20px 0px;
}

.Blog_name {
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  padding-top: 8px;
  padding-bottom: 0px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Blog_description {
  font-size: 17px;
  line-height: 22px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.Blog_tag {
  color: #FF9800;
  padding-top: 3px;
}

</style>
