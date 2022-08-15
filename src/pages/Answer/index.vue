<template>
<!-- 顶部搜索框实现 -->
<view id="searchOuterView">
   <!-- <view id="searchInnerView">
    <image src="../../static/搜索.png"></image>
    <text> 搜索</text>
  </view> -->
</view>
</template>

<script>
	
	export default{
		data(){
			return{

		}
	}
}
</script>

<style>
/* 顶部搜索框样式 */
#searchOuterView{
  padding: 15rpx;
}
 
#searchInnerView{
  text-align: center;
  width: 720rpx;
  height: 58rpx;
  background: #f5f5f5;
  border:2rpx solid #ECECEE;
  border-radius: 8rpx;
  line-height: 52rpx;
  box-sizing: border-box;
}
 
#searchInnerView > image{
  width: 32rpx;
  height: 32rpx;
  vertical-align: middle;
}
#searchInnerView > text{
  font-size:24rpx ;
  color: #B2B2B2;
}
</style>
