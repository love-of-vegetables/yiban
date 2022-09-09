<template>
  <view class="contain">
    <view class="myLike-wrapper">
      <view class="myLike" v-for="(myLike, index) in myLikes" :key="index">
        <view class="head">
          <view>{{ myLike.title }}</view>
          <view><text class="t-icon t-icon-shanchu"></text></view>
        </view>
        <view class="body">{{ myLike.content }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { uniIcons } from '@dcloudio/uni-ui'
export default {
  data() {
    return {
      myLikes: [
        {
          id: 1,
          title: '测试',
          publishDate: new Date(),
          content: '这是个用来测试的帖子',
          comment: ['11', '22'],
          like: 10,
          type: '1',
        },
      ],
    }
  },
  components: {
    uniIcons,
  },
  methods: {
    editmyLike(id) {},
    deletemyLike(id) {},
    getDateFrom(date) {
      return getDate(date)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/iconfont/iconfont-weapp-icon.css';
.contain {
  .myLike-wrapper {
    box-shadow: 0 3rpx 4rpx 6rpx rgba(211, 211, 211, 0.4);
    .myLike {
      padding: 20rpx 20rpx 30rpx;
      border-bottom: 1px solid rgba(211, 211, 211, 0.3);
      .head {
        display: flex;
        justify-content: space-between;
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
