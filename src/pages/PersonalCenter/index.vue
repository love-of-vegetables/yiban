<template>
  <view class="container">
    <view class="head">
      <image class="image"
             :src="userInfo.avatarUrl"
             v-show="isLogin" />
      <view class="login">
        <text v-if="!isLogin"
              class="loginBtn"
              @click="toLogin">点击登录
        </text>
        <text v-if="isLogin">{{ userInfo.nickName }}</text>
      </view>
      <view class="head-right"
            v-if="isLogin">
        <navigator class="userInfo"
                   url="/page_personalCenter/Profile/index">
          个人资料
        </navigator>
      </view>
    </view>
    <view class="function">
      <navigator class="func-item"
                 url="/page_personalCenter/Article/index">
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
                 url="/page_personalCenter/History/index">
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
                 url="/page_personalCenter/MyLike/index">
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
      userInfo: null
    }
  },
  components: {
    uniIcons
  },
  methods: {
    toLogin () {
      // 获取code 小程序专有，用户登录凭证。
      uni.getUserProfile({
        desc: "获取用户基本资料",
        success: (res) => {
          // console.log(res);
          this.userInfo = res.userInfo;
          this.isLogin = true
        },
        // 用户取消登录后的提示
        fail: (res) => {
          uni.showModal({
            title: "授权用户信息失败！",
            // 是否显示取消按钮，默认为 true
            showCancel: false
          })
        }
      })
      //获取成功基本资料后开启登录，基本资料首先要授权
      uni.login({
        provider: 'weixin',
        success: (res) => {
          // console.log(res);
          if (res.errMsg == "login:ok") {
            let code = res.code;
          }
        }
      })
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
      border-radius: 50%;
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
    .head-right {
      margin-left: auto;
      .userInfo {
        height: $avatarSize;
        line-height: $avatarSize;
        font-size: 32rpx;
        color: #fff;
        margin-left: auto;
      }
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
