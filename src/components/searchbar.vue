<template>
 <view>
  <view class="searchbar">
	<uni-search-bar  ref="bar" placeholder="请输入关键词搜索" 
					clearButton="none" 
					cancelButton="none"
					:focus="isFocus"
					radius="50" 
					bgColor="rgb(246,246,246)">
	</uni-search-bar>
  </view>

 </view>
</template>
 
<script>

export default{
	data() {
		return {
			isFocus: false
		}
	},
	methods:{
		focus(e){
			console.log(this.$refs.bar)
			uni.navigateTo({
				url:"./search",
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