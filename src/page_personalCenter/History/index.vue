<template>
  <view class="contain">
    <view class="history-wrapper">
      <view class="history" v-for="(history, index) in historys" :key="index">
        <view class="head">
          <view>{{history.title}}</view>
          <view><text class="date">{{getDateFrom(history.publishDate)}}</text><text>浏览</text></view>
        </view>
        <view class="body">{{history.content}}</view>
        <!-- <view class="footer">
          <text class="text">评论 {{history.comment.length}}</text>
          <text class="text">赞 {{history.like}}</text>
        </view> -->
      </view>
    </view>
  </view>
</template>

<script>
import {getDate} from '@/utils/getDate'
export default {
  data() {
    return {
      historys: [
        {
          id: 1,
          title: '测试',
          publishDate: new Date(),
          content: '这是个用来测试的帖子',
          comment: ['11', '22'],
          like: 10,
          type: '1'
        }
      ]
    }
  },
  methods: {
    edithistory(id) {

    },
    deletehistory(id) {

    },
    getDateFrom(date) {
      return getDate(date)
    }
  }
}

</script>

<style lang='scss' scoped>
.contain {
  .history-wrapper {
      box-shadow: 0 3rpx 4rpx 6rpx rgba(211, 211, 211, 0.4);
    .history {
      padding: 20rpx 20rpx 30rpx;
      border-bottom: 1px solid rgba(211, 211, 211, 0.3);
      .head {
        display: flex;
        justify-content: space-between;
        text {
          font-size: 30rpx;
          vertical-align: bottom;
          color: rgba(211, 211, 211, 1);
        }
        .date {
          font-size: 25rpx;
          margin-right: 10rpx;
          color: rgba(211, 211, 211, .9);
        }
      }
      .body {
        min-height: 80rpx;
      }
      .footer {
        display: flex;
        justify-content: flex-end;
        font-size: 30rpx;
        color: lightgray;
        .text:first-of-type {
          margin-left: auto;
          margin-right: 20rpx;
        }
      }
    }
  }
}
</style>