<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="category_title">為您精心挑選的居家故事</div>
      <div class="subtitle">在開創自己故事前，先欣賞大家都怎麼做吧</div>
    </div>
    <div class="col-md-4 col-xs-6 inblog" v-for="(item,index) in  BlogInCatgory" :key="index">
      <router-link :to="{name: 'Blog', params: {BlogID: item.BlogID}}">
        <img :src="item.coverPhoto" class="img-responsive">
        <div class="Blog_name">【{{item.title}}】</div>
        <div class="Blog_description ">{{item.quote}}</div>
        <!-- <div class="blog_space">空間:{{item.spacetag}} -->
        <!--<span class="blog_space2">坪數:{{item.squarFt}}坪</span></div>-->
        <div class="Blog_tag">
          <Icon type="ios-location" color="#ccc"></Icon> {{item.spacetag}}
          <Icon type="crop" color="#ccc"></Icon>{{item.squarFt}}坪
          <Icon type="person" color="#ccc"></Icon>{{item.name}}
        </div>
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
  color: #4CAF50;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.4px;
  padding-top: 12px;
  padding-bottom: 6px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Blog_description {
  font-size: 16px;
  color: #484848;
  font-weight: 600;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.blog_space {
  font-size: 14px;
  color: #484848;
  font-weight: 400;
  padding-top: 0px;
  line-height: 20px;
}

.Blog_tag {
  color: #484848;
}


.seemoreindeep a {
  color: rgb(166, 29, 85);
}

.seemoreindeep {
  clear: both;
  font-size: 17px;
  padding-top: 10px;
  color: rgb(166, 29, 85);
  font-weight: 400;
  margin: 15px 0px;
  background: transparent;
  border: 1px solid rgb(166, 29, 85);
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  width: 100%;
}

</style>
