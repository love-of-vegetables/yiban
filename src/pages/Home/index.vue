<template>
<view>
  <view>
	<swiper class="cover_swiper" indicator-dots='true' display-multiple-items='1' current='0'  previous-margin='30' next-margin='30' autoplay='true' circular='true' interval='2000'>
  		<block v-for="(item,index) in coverList" :key="index">
    	<swiper-item>		
		<view class='mask' v-if="index != centerItem"></view>
		<image mode="widthFix" v-bind:src="item.src" />
		</swiper-item>
		</block>
	</swiper>
  </view>

	<view class="index_bigType">
		<view class="bigTypeRow">
			<view  v-for="(item,index) in bigTypeRow_1" :key="index">
				<navigator v-bind:url="item.nexturl">
				<image mode="widthFix" v-bind:src="item.url" ></image>
				<button size="mini" plain="true">{{item.name}}</button>
				</navigator>
			</view>
		</view>
    	<view class="bigTypeRow">
			<view  v-for="(item,index) in bigTypeRow_2" :key="index">
				<navigator v-bind:url="item.nexturl">
				<image mode="widthFix" v-bind:src="item.url" ></image>
				<button size="mini" plain="true">{{item.name}}</button>
				</navigator>
			</view>
		</view>
	</view>

  <view class="index_recentArticle">
    <view class="Title">近期文章</view>
    <view class="articleList">
      <view class="articleContent">
			<view v-for="(item,index) in article_List" :key="index">
			<navigator url="../../page_home/articleDetail/index">
			<image mode="widthFix" v-bind:src="item.url"></image>
			<view class="articleName">{{item.name}}</view>
			<view class="articleDescription">{{item.description}}</view>
			</navigator>
			</view>
      </view>
    </view>
  </view>
</view>
</template>

<script>
	export default{
		data(){
			return{
        coverList:[
					{
						src: "../../static/images/swiper/1.jpg"
					},
					{
						src: "../../static/images/swiper/2.jpg"
					},
					{
						src: "../../static/images/swiper/3.jpg"
					}
				],
		article_List:[
					{
						url: "../../static/images/article/article1.png",
						name: "口协招新",
						description: "华山运动场8号摊位晚上19:00"
					},
					{	
						url: "../../static/images/article/article2.png",
						name: "成绩录入最后一天",
						description: "根据教务处通知，7月17号（今天）就是教师录入成绩的截止时间了"
					}
				],
		bigTypeRow_1:[
					{
						id: 0,
						url: "../../static/images/bigType/xuexiao.png",
						name:"学校",
						nexturl:"../../page_home/differentKinds/index"
					},
					{
						id: 1,
						url: "../../static/images/bigType/xueyuan.png",
						name:"学院",
						nexturl:"../../page_home/differentKinds/index"
					},
					{
						id: 2,
						url: "../../static/images/bigType/zuzhi.png",
						name:"组织",
						nexturl:"../../page_home/differentKinds/index"
					}
				],
		bigTypeRow_2:[
					{
						id: 0,
						url: "../../static/images/bigType/shetuan.png",
						name:"社团",
						nexturl:"../../page_home/differentKinds/index"
					},
					{
						id: 1,
						url: "../../static/images/bigType/zongce.png",
						name:"综测",
						nexturl:"../../page_home/differentKinds/index"
					},
					{
						id: 2,
						url: "../../static/images/bigType/yiqing.png",
						name:"疫情",
						nexturl:"../../page_home/differentKinds/index"
					}
       ],
		}
	}
	/*mounted(){
		uni.request({
			url: "http://43.143.33.55:443/articles/hot",
		}).then(result =>{
			console.log(result);
		})
	}*/
}
</script>

<style lang="scss">
.cover_swiper {
  width:750rpx;
	height:300rpx;
  .mask {
	width: 100%;
	}

}

.index_bigType{
		padding-top: 20rpx;
		text-align: center;
    .bigTypeRow{
		  display: flex;
      navigator{
    	  flex: 1;
      }
      image{
			margin: 0rpx 90rpx;
		    width: 70rpx;
	    }
	  button{
		color:rgb(0, 153, 255);
		// font-family: 'Trebuchet MS';
		font-weight: bold;
		border-width: 0rpx 75rpx 10rpx;
		border:none;
	  }
	  }
	}

  .index_recentArticle{
    .Title{
      font-size: $uni-font-size-sm;
      font-weight: 600;
      padding: 5rpx;
      background-color:#E0E0E0;
    }
    .articleList{
      display: flex;
      flex-wrap: wrap;
      .articleContent{
        width: 100%;
        margin: 10 10rpx;
          image{
            width: 100%;
          }
          .articleName{
			text-align:center;
            color:$uni-color-title;
            font-size: $uni-font-size-title;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .articleDescription{
            $uni-color-subtitle: #555555;
            $uni-font-size-subtitle:36rpx;
            text-align: left;
          }
      }
    }
  }
</style>
