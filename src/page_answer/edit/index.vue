<template>
  <view class="container">
    <view class="title">
      <uni-easyinput v-model="editArticle.title" placeholder="请输入标题~" :clearable="false"
      :inputBorder="false" :trim='true'></uni-easyinput>
    </view>
    <view class="content">
      <uni-easyinput type="textarea" autoHeight v-model="editArticle.content" placeholder="请输入内容..."
      :inputBorder="false" :trim='true'></uni-easyinput>
    </view>
    <view class="example-body">
			<uni-file-picker limit="6" :image-styles='imageStyles'></uni-file-picker>
		</view>
    <view class="publish">
      <text class="btn" :class="isActivity ? 'btn-activity' : 'btn-inactivity'">发布</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      editArticle: {
        title: '',
        content: '',
      },
      fileLists: [],
      imageStyles: {
        height: 90,
        width: 90
      },
    }
  },
  methods: {

  },
  computed: {
    isActivity() {
      if (this.editArticle.title !== '' || this.editArticle.content !== '' || this.fileLists.length > 0) {
        return true
      } else {
        return false
      }
    }
  }
}

</script>

<style lang='scss'>
@import "@/iconfont/iconfont-weapp-icon.css";
page {
  background-color: #fff;
}
.container {
  .title {
    margin-bottom: 30rpx;
    font-size:36rpx;
    font-weight: 550;
    color: #000;
  }
  .content {
    font-size:32rpx;
    color: #000;
    padding-left: 24rpx
  }
  .example-body {
    margin-left: 24rpx;
  }
  .publish {
    margin-top: 36rpx;
    border: 1rpx solid rgb(241, 241, 241);
    border-left: none;
    border-right: none;
    padding: 18rpx 30rpx;
    display: flex;
    .btn {
      margin-left: auto;
      padding: 10rpx 26rpx;
      font-size: 30rpx;
      color: #fff;
      border-radius: 30rpx;
    }
    .btn-activity {
      background-color: rgba($color: rgb(216, 39, 216), $alpha: 1);
    }
    .btn-inactivity {
      background-color: rgba($color: rgb(216, 39, 216), $alpha: .4);
    }
  }
}
</style>