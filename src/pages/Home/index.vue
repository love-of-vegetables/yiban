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
			<navigator  v-for="(item,index) in bigTypeRow_1" :key="index">
			<image mode="widthFix" v-bind:src="item.url" />
      </navigator>
		</view>
    <view class="bigTypeRow">
			<navigator  v-for="(item,index) in bigTypeRow_2" :key="index">
			<image mode="widthFix" v-bind:src="item.url" />
      </navigator>
		</view>
	</view>

  <view class="index_recentArticle">
    <view class="Title">近期文章</view>
    <view class="articleList">
      <view class="articleContent">
        <navigator v-for="(item,index) in article_List" :key="index">
          <image mode="widthFix" v-bind:src="item.url"></image>
          <view class="articleName">{{item.name}}</view>
          <view class="articleDescription">{{item.description}}</view>
        </navigator>
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
					},
					{
						id: 1,
						url: "../../static/images/bigType/学院.png"
					},
					{
						id: 2,
						url: "../../static/images/bigType/组织.png"
					}
				],
        bigTypeRow_2:[
					{
						id: 0,
						url: "../../static/images/bigType/社团.png"
					},
					{
						id: 1,
						url: "../../static/images/bigType/综测.png"
					},
					{
						id: 2,
						url: "../../static/images/bigType/疫情.png"
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
    .bigTypeRow{
		  display: flex;
      navigator{
    	  flex: 1;
      }
      image{
        margin: 20rpx 90rpx;
		    width: 70rpx;
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
        navigator{
          image{
            width: 100%;
          }
          .articleName{
            color:$uni-color-title;
            font-size: $uni-font-size-title;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
          }
          .articleDescription{
            $uni-color-subtitle: #555555;
            $uni-font-size-subtitle:36rpx;
            text-align: left;
          }
        }
      }
    }
  }
</style>
