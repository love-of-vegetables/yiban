<template>
  <view class="container">
    <view class="userInfo">
      <view class="username item">
        <text class="key">用户名</text>
        <text class="value">{{userInfo.username}}</text>
      </view>
      <view class="grade item">
        <text class="key">年级</text>
        <text class="value">{{userInfo.grade}}</text>
      </view>
      <view class="major item">
        <text class="key">专业</text>
        <text class="value">{{userInfo.major}}</text>
      </view>
    </view>
    <navigator class="btn" url="/pages/PersonalCenter/Profile/editInfo/index">
      <button>修改信息</button>
    </navigator>
  </view>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        username: 'Qcsa',
        grade: '大三',
        major: '计算机科学与技术'
      }
    }
  },
  methods: {
  }
}

</script>

<style lang='scss' scoped>
@import '@/static/style/common.scss';
.container {
  .userInfo {
    width: 90%;
    margin-left: 5%;
    margin-top: 20rpx;
    background-color: #fff;
    border-radius: 10rpx;
    box-shadow: $uni-shadow-base;
    .item {
      height: $userItemHeight;
      line-height: $userItemHeight;
      font-size: 30rpx;
      display: flex;
      justify-content: space-between;
      padding: 0 28rpx;
    }
  }
  .btn {
    button {
      width: 40%;
      color: #fff;
      background-color: rgb(18, 174, 250);
      font-size: 32rpx;
      margin-top: 32rpx;
    }
  }
}
</style>