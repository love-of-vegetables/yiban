<template>
  <view class="contain">
    <view class="article-wrapper">
      <view class="article" v-for="(article, index) in articles" :key="index">
        <view class="head">
          <view>{{article.title}}</view>
          <view>{{getDateFrom(article.publishDate)}}</view>
        </view>
        <view class="body">{{article.content}}</view>
        <view class="footer">
          <text class="text">评论 {{article.comment.length}}</text>
          <text class="text">赞 {{article.like}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {getDate} from '../../../utils/getDate'
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Title',
          publishDate: new Date(),
          content: 'Content',
          comment: ['111', '222'],
          like: 10
        },
        {
          id: 2,
          title: 'Title2',
          publishDate: new Date(),
          content: 'Content2',
          comment: ['111', '222', '333'],
          like: 20
        }
      ]
    }
  },
  methods: {
    editArticle(id) {

    },
    deleteArticle(id) {

    },
    getDateFrom(date) {
      return getDate(date)
    }
  }
}

</script>

<style lang='scss' scoped>
.contain {
  .article-wrapper {
      box-shadow: 0 3rpx 4rpx 6rpx rgba(211, 211, 211, 0.4);
    .article {
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