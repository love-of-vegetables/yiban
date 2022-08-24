<template>
<<<<<<< HEAD
<view class="Forum">
	<searchbar></searchbar>
	
	<uni-section title="我关注的">
		<uni-group v-for="(item,index) in Post_List" :key="index" mode="card">
			<navigator url="./ForumDetail/index">
				<image mode="widthFix" :src="item.avatar"></image>
				<view class="name">{{item.name}}</view>
				<view class="numberOfattention">关注：{{item.numberOfattention}}</view>
				<view class="TotalPosts">贴子：{{item.TotalPosts}}</view>  
			</navigator>
		</uni-group>
	</uni-section>

	<uni-section title="近期浏览">
		<uni-group v-for="(item,index) in Post_List_recent" :key="index" mode="card">
			<navigator url="./ForumDetail/index">
				<image mode="widthFix" :src="item.avatar"></image>
				<view class="name">{{item.name}}</view>
				<view class="numberOfattention">关注：{{item.numberOfattention}}</view>
				<view class="TotalPosts">贴子：{{item.TotalPosts}}</view>  
			</navigator>
		</uni-group>
	</uni-section>

		<uni-section title="热门精选" >
			<uni-group v-for="(item,index) in HotPosts" :key="index">
				<navigator url="/components/Post/index">
					<view class="header">
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
=======
<view>
	<search></search>
>>>>>>> 94abdc9708553814549901685c4f1b5befbfab10
</view>
</template>

<script>
<<<<<<< HEAD
import searchbar from '../../components/searchbar.vue'
import { getDate } from '@/utils/getDate'
export default{
  components: { searchbar }, 
    data(){
        return{
			Post_List:[
					{
						avatar: "../../static/images/bigType/shetuan.png",
						name:"二刺螈",
						numberOfattention:900,
						TotalPosts:1000
					},
					{
						avatar: "../../static/images/bigType/xuexiao.png",
						name:"泰山",
						numberOfattention:400,
						TotalPosts:400
					}
				],
			Post_List_recent:[
					{
						avatar: "../../static/images/bigType/zuzhi.png",
						name:"信杰神得永生",
						numberOfattention:10000000,
						TotalPosts:1
					}
				],
			HotPosts:[
					{
						avatar:"../../static/images/textImages/avatar.png",
						username: 'Qcsa',
						title: '11',
						publishDate: new Date(),
						share: 10,
						comment: 20,
						like: 30
					}
				]
      		}		
    },
	methods:{
		gotoSearch(){
			uni.navigateTo({
				url:"./Search/index.vue",
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
.Forum{
	uni-section{
		uni-group{
			navigator{
				font-size:24rpx;
				align-items: center;
				.header {
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
				image{
					width: 50rpx;
				}
				}
				.name{
					margin-left: 20rpx;
				}
				.numberOfattention{
					margin-left: 20rpx;
				}
				.TotalPosts{
					margin-left: 20rpx;
				}
			}
		}
	}
</style>
=======
 import Search from '../../components/Search.vue'
	export default{
		data(){
			return{

		}
	},
	components:{
		search:Search
	}
}
<script>

<style>

</style>
>>>>>>> 94abdc9708553814549901685c4f1b5befbfab10
