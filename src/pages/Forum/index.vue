<template>
<view class="Forum">
	 <searchbar @click="focus"></searchbar>
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

</view>
</template>

<script>
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
		focus(){
			console.log("2"),
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
				display: flex;
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

