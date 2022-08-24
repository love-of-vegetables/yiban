<template>
<view>
    <view class="search-bar-wrapper">
      <uni-search-bar cancelButton="none"
                      clearButton="none"
                      radius="50"
                      placeholder="请输入关键词搜索"
                      bgColor="rgb(246,246,246)"
                      class="search-bar">
      </uni-search-bar>
    </view>   
    <view class="index_recentArticle">
        <view class="articleList">
            <view class="articleContent">
<<<<<<< HEAD
                <navigator v-for="(item,index) in article_List" :key="index" url="../articleDetail/index">
=======
                <navigator v-for="(item,index) in article_List" :key="index">
>>>>>>> 94abdc9708553814549901685c4f1b5befbfab10
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
            article_List:[
                {
                    url: "../../../static/images/article/article1.png",
                    name: "五四青年节",
                    description: "xxxxxxxxxxx"
                },
                {	
                    url: "../../../static/images/article/article2.png",
                    name: "床前明月光，疑是地上霜，举头望明月，低头思故乡",
                    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                }
            ],
        }
    }
}
</script>

<style lang="scss">
<<<<<<< HEAD
.index_recentArticle{
=======
  .index_recentArticle{
>>>>>>> 94abdc9708553814549901685c4f1b5befbfab10
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
    .search-bar-wrapper {
    padding-bottom: 6rpx;
    background-color: #fff;
<<<<<<< HEAD
}
=======
  }
>>>>>>> 94abdc9708553814549901685c4f1b5befbfab10
</style>