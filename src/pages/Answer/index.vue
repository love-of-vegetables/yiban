<template>
  <view class="container">
    <view class="search-bar-wrapper" @click="goSearch">
      <uni-search-bar
        cancelButton="none"
        clearButton="none"
        v-model="keyword"
        radius="50"
        placeholder="输入关键词搜索"
        bgColor="rgb(246,246,246)"
        class="search-bar"
      >
      </uni-search-bar>
    </view>
    <view
      class="articles"
      v-for="(item, index) in articles"
      :key="index"
      @click="goInto(item.id)"
    >
      <view class="header">
        <image
          class="avatar"
          src="~@/static/images/textImages/avatar.png"
        ></image>
        <view class="header-right">
          <view class="author">{{ item.postbarid ? item.postbarid : item.postbar }}</view>
          <view class="publishDate">{{getDateFrom(item.updatetime)}}</view>
        </view>
      </view>
      <view class="content">{{ item.summary }}</view>
      <view class="footer">
        <view class="footer-item"
          ><text class="t-icon t-icon-fenxiang1 icon"></text
          ><text>{{ item.transmitcounts }}</text></view
        >
        <view class="footer-item"
          ><text class="t-icon t-icon-pinglun icon"></text
          ><text>{{ item.commentcounts }}</text></view
        >
        <view class="footer-item"
          ><text class="t-icon t-icon-zan icon"></text
          ><text>{{ item.likecounts }}</text></view
        >
      </view>
    </view>
    <view class="edit">
      <uni-icons
        type="plusempty"
        size="40"
        class="editIcon"
        @click="gotoEdit"
      ></uni-icons>
    </view>
  </view>
</template>

<script>
import { getDate } from '@/utils/getDate.js'
export default {
  data() {
    return {
      keyword: '',
      articles: []
    }
  },
  mounted() {
    const db = wx.cloud.database()
    const post = db.collection('post')
    post.get().then(res => {
      this.articles = res.data.map(item => {
        return {
          ...item.postdata,
          ...item.post,
          updatetime: item.updatetime
        }
      })
      console.log(this.articles)
    })
  },
  methods: {
    input(res) {
      console.log('----input:', res)
    },
    getDateFrom(date) {
      return getDate(date)
    },
    gotoEdit() {
      uni.navigateTo({
        url: '/page_answer/edit/index',
        animationType: 'pop-in',
        animationDuration: 200,
      })
    },
    goInto(id) {
      uni.navigateTo({
        url: '/components/Post/index',
        animationType: 'pop-in',
        animationDuration: 200,
      })
    },
    goSearch() {
      uni.navigateTo({
        // url:"./Search/index.vue",
        url: '/components/search',

        animationType: 'pop-in',
        animationDuration: 200,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/iconfont/iconfont-weapp-icon.css';
@import '@/static/style/common.scss';
.container {
  position: relative;
  .search-bar-wrapper {
    padding: 12rpx 0;
    background-color: #fff;
  }
  .articles {
    width: 90%;
    margin: 20rpx auto 0;
    padding: 20rpx 20rpx 30rpx;
    box-shadow: 0 10rpx 4rpx 10rpx rgba(211, 211, 211, 0.1);
    background-color: #fff;
    .header {
      display: flex;
      .avatar {
        width: $avatarSize;
        height: $avatarSize;
        border-radius: 50%;
      }
      .header-right {
        margin-left: 24rpx;
        font-size: 36rpx;
        align-self: center;
      }
    }
    .content {
      min-height: 80rpx;
      margin: 20rpx 0;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      font-size: 34rpx;
      color: lightslategray;
      .footer-item {
        height: 50rpx;
        line-height: 50rpx;
        .icon {
          transform: translate(-6rpx, 6rpx);
        }
      }
    }
  }
  .edit {
    position: fixed;
    bottom: 160rpx;
    right: 24rpx;
    border-radius: 50%;
    border: 6rpx solid rgba(63, 62, 62, 0.9);
    background: burlywood;
  }
}
</style>
