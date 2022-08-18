<template>
  <view class="container">
    <view class="head">
      <image class="image"
             src="../../static/images/textImages/avatar.png" />
      <view class="login">
        <text v-if="!isLogin" class="loginBtn" @click="toLogin">点击登录
        </text>
        <text v-if="isLogin"  @click="toLogin">{{ userInfo.username }}</text>
      </view>
      <navigator class="userInfo"
                 v-if="isLogin"
                 url="/pages/PersonalCenter/Profile/index">
        个人资料
      </navigator>
      <text class="t-icon t-icon-yousanjiaoxing icon" v-if="isLogin"></text>
    </view>
    <view class="function">
      <navigator class="func-item"
                 url="/pages/PersonalCenter/Article/index">
        <uni-icons custom-prefix="t-icon"
                   type="t-icon-tiezi"
                   size="16"
                   class="blue-icon"></uni-icons>
        <text>我的帖子</text>
        <uni-icons type="right"
                   size="16"
                   color="lightgray"></uni-icons>
      </navigator>
      <navigator class="func-item"
                 url="/pages/PersonalCenter/History/index">
        <uni-icons custom-prefix="t-icon"
                   type="t-icon-liulan"
                   size="16"
                   class="blue-icon"></uni-icons>
        <text>历史记录</text>
        <uni-icons type="right"
                   size="16"
                   color="lightgray"></uni-icons>
      </navigator>
      <navigator class="func-item"
                 url="/pages/PersonalCenter/MyLike/index">
        <uni-icons custom-prefix="t-icon"
                   type="t-icon-shoucangjia"
                   size="16"
                   class="blue-icon"></uni-icons>
        <text>我的收藏</text>
        <uni-icons type="right"
                   size="16"
                   color="lightgray"></uni-icons>
      </navigator>
    </view>
  </view>
</template>

<script>
import { uniIcons } from '@dcloudio/uni-ui'
export default {
  data () {
    return {
      isLogin: false,
      userInfo: {
        username: 'qcsa'
      }
    }
  },
  components: {
    uniIcons
  },
  methods: {
    toLogin() {
      this.isLogin = !this.isLogin
    }
  }
}
</script>

<style lang="scss">
@import "@/iconfont/iconfont-weapp-icon.css";
@import "@/static/style/common.scss";
.container {
  position: relative;
  .head {
    padding: 30rpx 50rpx 90rpx;
    display: flex;
    background-color: rgb(18, 174, 250);
    border-radius: 0 0 30% 30%;
    .image {
      width: $avatarSize;
      height: $avatarSize;
      border-radius: 10rpx;
    }
    .login {
      height: $avatarSize;
      line-height: $avatarSize;
      margin-left: 50rpx;
      color: #fff;
      .loginBtn {
        font-size: 32rpx;
      }
    }
    .userInfo {
      height: $avatarSize;
      line-height: $avatarSize;
      font-size: 32rpx;
      color: #fff;
      margin-left: auto;
    }
    .icon {
      margin-top: 24px;
      margin-left: 6rpx;
    }
  }
  .function {
    position: absolute;
    top: 130rpx;
    left: 5%;
    width: 90%;
    background-color: #fff;
    margin: 80rpx auto;
    border-radius: 30rpx;
    box-shadow: 0 2rpx 2rpx 8rpx rgba(211, 211, 211, 0.05);
    .func-item {
      height: $userItemHeight;
      line-height: $userItemHeight;
      display: flex;
      padding: 0 20rpx;
      font-size: 30rpx;
      font-weight: normal;
      border-bottom: 1px solid rgba(211, 211, 211, 0.2);
      text {
        margin-right: auto;
        margin-left: 15rpx;
      }
      .blue-icon {
        margin-top: 11rpx;
      }
    }
  }
}
</style>
