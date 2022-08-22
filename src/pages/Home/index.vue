<template>
<view>
  <view>
	<swiper class="cover_swiper" indicator-dots='true' display-multiple-items='1' current='0'  previous-margin='30' next-margin='30' autoplay='true' circular='true' interval='2000'>
  		<block v-for="(item,index) in coverList" :key="index">
    	<swiper-item>		
		<view class='mask' v-if="index != centerItem"></view>
		<image v-bind:src="item.url" />
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
			<navigator url="./articleDetail/index">
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
						url: "../../static/images/1.png"
					},
					{
						url: "../../static/images/1.png"
					},
					{
						url: "../../static/images/1.png"
					}
				],
				article_List:[
					{
						url: "../../static/images/article/article1.png",
						name: "五四青年节",
						description: "xxxxxxxxxxx"
					},
					{	
						url: "../../static/images/article/article2.png",
						name: "床前明月光，疑是地上霜，举头望明月，低头思故乡",
						description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
					}
				],
				bigTypeRow_1:[
					{
						id: 0,
						url: "../../static/images/bigType/学校.png",
						name:"学校",
						nexturl:"./differentKinds/index"
					},
					{
						id: 1,
						url: "../../static/images/bigType/学院.png",
						name:"学院",
						nexturl:"./differentKinds/index"
					},
					{
						id: 2,
						url: "../../static/images/bigType/组织.png",
						name:"组织",
						nexturl:"./differentKinds/index"
					}
				],
        		bigTypeRow_2:[
					{
						id: 0,
						url: "../../static/images/bigType/社团.png",
						name:"社团",
						nexturl:"./differentKinds/index"
					},
					{
						id: 1,
						url: "../../static/images/bigType/综测.png",
						name:"综测",
						nexturl:"./differentKinds/index"
					},
					{
						id: 2,
						url: "../../static/images/bigType/疫情.png",
						name:"疫情",
						nexturl:"./differentKinds/index"
					}
       ],
		}
	}
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
			margin: 0rpx 75rpx;
		    width: 100rpx;
	    }
	  button{
		color:rgb(0, 153, 255);
		font-family: 'Trebuchet MS';
		font-weight: bold;
		border-width: 0rpx 75rpx 10rpx;
		border:none;
	  }
	  }
	}

  .index_recentArticle{
    .Title{
      font-size: $uni-font-size-base;
      font-weight: 600;
      padding: 10rpx;
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
