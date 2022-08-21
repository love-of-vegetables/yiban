<template>
  <view class="contain">
    <view class="header">
      <image class="avatar"
             src="../../static/images/textImages/avatar.png"></image>
      <view class="info">
        <view>{{article.username}}</view>
        <view>{{getDateFrom(article.publishDate)}}</view>
      </view>
      <uni-fav :checked="isLike"
               class="favBtn"
               :circle="true"
               bg-color="#dd524d"
               bg-color-checked="#007aff"
               fg-color="#ffffff"
               fg-color-checked="#ffffff"
               @click="favClick" />
    </view>
    <view class="body">
      <view class="title">{{article.title}}</view>
      <view class="content">{{article.content}}</view>
    </view>
    <view class="func-btn">
      <view class="func-item"><text class="t-icon t-icon-fenxiang1 icon"></text><text class="text">{{article.share}}</text></view>
      <view class="func-item"><text class="t-icon t-icon-pinglun icon"></text><text class="text">{{article.comment}}</text></view>
      <view class="func-item"><text class="t-icon t-icon-zan icon"></text><text class="text">{{article.like}}</text></view>
    </view>
    <view class="comments-container">
      <view class="tip">评论</view>
      <view class="comments" v-for="(item, index) in article.comments" :key="index">
        <view class="header">
          <image class="avatar"
                 src="../../static/images/textImages/avatar.png"></image>
          <view class="info">
            <view>{{item.username}}</view>
            <view>{{getDateFrom(item.date)}}</view>
          </view>
          <view class="func-item"><text class="t-icon t-icon-zan icon"></text><text class="text">{{item.like}}</text></view>
        </view>
        <view class="content">{{item.content}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { getDate } from '@/utils/getDate'
export default {
  data () {
    return {
      isLike: false,
      article: {
        username: 'Qcsa',
        title: '11',
        publishDate: new Date(),
        content: '2222222222222222222222222222222222',
        share: 10,
        comment: 20,
        like: 30,
        comments: [
          {
            username: 'qcsa',
            avatar: '',
            date: new Date(),
            like: 99,
            content: 'content'
          }
        ]
      }
    }
  },
  methods: {
    favClick () {
      this.isLike = !this.isLike
      console.log(this.$forceUpdate);
      this.$forceUpdate()
    },
    getDateFrom (date) {
      return getDate(date)
    }
  }
}

</script>

<style lang='scss' scoped>
@import "@/iconfont/iconfont-weapp-icon.css";
@import "@/static/style/common.scss";
.contain {
  padding: 30rpx;
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
  .body {
    .title {
      text-align: center;
      font-weight: 700;
      margin: 70rpx 0 60rpx;
    }
    .content {
      margin-bottom: 70rpx;
      // 文字换行
      word-break: break-all;
      word-wrap: break-word;
    }
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
  .comments-container {
    margin-top: 30rpx;
    .tip {
      font-size: 35rpx;
      color: rgba($color: rgb(177, 177, 177), $alpha: 1);
    }
    .comments {
      margin-top: 50rpx;
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
        .func-item {
          margin-left: auto;
          align-self: center;
          .text {
            margin-left: 12rpx;
            font-size: 34rpx;
            color: lightslategray;
          }
        }
      }
      .content {
        margin-top: 30rpx;
        padding-left: 124rpx;
      }
    }
  }
}
</style>