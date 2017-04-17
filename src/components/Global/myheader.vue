<template>
<div> header
	<!-- header -->
	<nav class="navbar navbar-fixed-top " role="navigation">
	  	<div class="container">
	    	<div class="navbar-header">
	    		<a href="http://www.dhshop.tw/mall.html"><img src="../../assets/icon/dhshop_logo.svg"></a>
				
          <div class="header_user navbar-right">
          <span><a href="http://www.dhshop.tw/salepage/usercenter.html"><i class="fa fa-question-circle"></i>
          <span  class="hidden-xs">客服中心</span></a> </span>
          <span style="cursor:pointer ; margin:left:20px" onclick="openNav()"><i class="fa fa-bars " aria-hidden="true"></i>
          <span class="hidden-xs">好品分類</span></span>
					<router-link to="/login">login</router-link>
					<router-link to ="/cart">購物車</router-link>         
					</div>        

	      	</div>
	    </div>
	</nav>
 </div>  
</template>
<script>
  export default {}
</script>
