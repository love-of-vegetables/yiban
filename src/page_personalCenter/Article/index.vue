<template>
  <view class="contain">
    <view class="article-wrapper">
      <view class="article" v-for="(article, index) in articles" :key="index">
        <view class="head">
          <view>{{ article.title }}</view>
          <view>{{ getDateFrom(article.publishDate) }}</view>
        </view>
        <view class="body">{{ article.content }}</view>
        <view class="footer">
          <text class="text">评论 {{ article.comment.length }}</text>
          <text class="text">赞 {{ article.like }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getDate } from '@/utils/getDate'
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: '测试',
          publishDate: new Date(),
          content: '这是个用来测试的帖子',
          comment: ['11', '22'],
          like: 10,
        },
      ],
    }
  },
  methods: {
    getDateFrom(date) {
      return getDate(date)
    },
    gotoDetail() {
      uni.navigateTo({
        url: 'components/Post/index',
        animationType: 'pop-in',
        animationDuration: 200,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.contain {
  // width: 100%;
  .article-wrapper {
    // width: 100%;
    box-shadow: 0 3rpx 4rpx 6rpx rgba(211, 211, 211, 0.4);
    .article {
      // width: 100%;
      padding: 20rpx 20rpx 30rpx;
      border-bottom: 1px solid rgba(211, 211, 211, 0.3);
      .head {
        display: flex;
        justify-content: space-between;
      }
      .body {
        width: 50%;
        overflow: hidden;
        word-break: break-all; 
        text-overflow: ellipsis; 
        display: -webkit-box; 
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
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
