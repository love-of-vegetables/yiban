<template>
 <view>
  <view class="searchbar">
	<uni-search-bar placeholder="请输入关键词搜索" 
					clearButton="none" 
					cancelButton="none"
					@focus="focus"
					radius="50" 
					bgColor="rgb(246,246,246)">
	</uni-search-bar>
  </view>

 </view>
</template>
 
<script>
export default{
	methods:{
		focus(){
			console.log("1"),
			uni.navigateTo({
				url:"/pages/Forum/Search/index",
				animationType: 'pop-in',
        		animationDuration: 200
			})
		}
	}
}
</script>

<style lang="scss">
.searchbar{
    padding: 6rpx 0;
    background-color: #fff;
}

</style>