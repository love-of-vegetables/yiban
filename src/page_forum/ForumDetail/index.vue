<template>
<view class="ForumDetail">
	<searchbar></searchbar>
	<view class="header">
		<image src="../../static/images/textImages/avatar.png"></image>
		<view class="name">xxx吧</view>
	</view>
	<view class="rule" >
		<view class="smalltitle">吧规</view>
		<view class="content">xxxx</view> 
	</view>
	
	<uni-section>
		<uni-group v-for="(item,index) in HotPosts" :key="index">
			<navigator url="/components/Post/index">
				<view class="tieba">
					<image class="avatar" :src="item.avatar"></image>
					<view class="info">
						<view>{{item.username}}</view>
						<view>{{getDateFrom(item.publishDate)}}</view>
					</view>
				</view>
				<view class="title">{{item.title}}</view>
				<view class="func-btn">
					<view class="func-item"><text class="t-icon t-icon-fenxiang1 icon"></text><text class="text">{{item.share}}</text></view>
					<view class="func-item"><text class="t-icon t-icon-pinglun icon"></text><text class="text">{{item.comment}}</text></view>
					<view class="func-item"><text class="t-icon t-icon-zan icon"></text><text class="text">{{item.like}}</text></view>
				</view>
			</navigator>
		</uni-group>
	</uni-section>
</view>
</template>

<script>
import { getDate } from '@/utils/getDate'
import Searchbar from '@/components/searchbar.vue'
export default{
  components: { Searchbar }, 
    data(){
        return{
			HotPosts:[
					{
						avatar:"../../static/images/textImages/avatar.png",
						username: 'Qcsa',
						title: '11',
						publishDate: new Date(),
						share: 10,
						comment: 20,
						like: 30
					},
					{
						avatar:"../../static/images/textImages/avatar.png",
						username: 'xlssss',
						title: 'ceashi',
						publishDate: new Date(),
						share: 100,
						comment: 210,
						like: 330
					},					
				]
      		}		
    },
	methods:{
		gotoSearch(){
			uni.navigateTo({
				url:"../Search/index.vue",
				animationType: 'pop-in',
        		animationDuration: 200
			})
		},
		getDateFrom (date) {
      		return getDate(date)
    	}
	}
}
</script>

<style lang="scss" scoped>
@import "@/iconfont/iconfont-weapp-icon.css";
@import "@/static/style/common.scss";
.ForumDetail{
	.header{
		background-color: greenyellow;
		border-radius: 5%;
		height: 250rpx;
		display:flex;
		justify-content: left;
		align-items: center;
		image{
			height: 100rpx;
			width: 100rpx;
			margin-left: 24rpx;
			border-radius: 20%;
		}
		.name{
			margin-left: 20rpx;
		}
	}
	.rule{
		border-radius: 20% 20% 0 0;
		display: flex;
		.smalltitle{
			background-color: greenyellow;
			font-size: small;
			margin: 5rpx 20rpx 5rpx;
		}
		.content{
			font-size: medium;
		}
	}
	uni-section{
		uni-group{
			navigator{
				font-size:24rpx;
				align-items: center;
				.tieba {
					display: flex;
					.avatar {
					width: $avatarSize-small;
      				height: $avatarSize-small;
					border-radius: 50%;
					}
					.info {
					margin-left: 24rpx;
					font-size: 36rpx;
					align-self: center;
					}
					.favBtn {
					margin-left: auto;
					align-self: center;
					}
				}
				.title {
				text-align: left;
				font-weight: 700;
				margin: 70rpx 0 60rpx;
				}
				.func-btn {
					display: flex;
					justify-content: space-between;
					font-size: 34rpx;
					color: lightslategray;
					.func-item {
					height: 50rpx;
					line-height: 50rpx;
					.icon {
						transform: translate(-6rpx, 6rpx);
					}
					.text {
						margin-left: 12rpx;
					}
					}
  				}
			}
		}
	}
}
</style>