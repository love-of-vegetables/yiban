 <template>   
 <view class="articleDetail">
    <view class="title">别让等待成为遗憾</view>

    <view class="author">
        <image mode="widthFix" :src="articleDetail.avatar"></image>
        <view class="name">{{articleDetail.name}}</view>
        <view class="releaseTime">{{articleDetail.releaseTime}}</view>
    </view>

    <view class="content">
        <text>{{articleDetail.content}}</text>
        <view class="numberOfview">已浏览{{articleDetail.numberOfview}}次</view>
    </view>

    <view class="bottomList">
        <uni-icons size="30px" type="hand-up" v-show="showup1" @click="changeIcons('showup1')"></uni-icons>
        <uni-icons size="30px" type="hand-up-filled" v-show="!showup1" @click="changeIcons('showup1')"></uni-icons>
        <uni-icons size="30px" type="heart" v-show="showup2" @click="changeIcons('showup2')"></uni-icons>
        <uni-icons size="30px" type="heart-filled" v-show="!showup2" @click="changeIcons('showup2')"></uni-icons>
        <uni-icons size="30px" type="redo" v-show="showup3" @click="changeIcons('showup3')"></uni-icons>
        <uni-icons size="30px" type="redo-filled" v-show="!showup3" @click="changeIcons('showup3')"></uni-icons>
    </view>

</view>
</template>

<script>
export default {
  data () {
    return {
        showup1:true,
        showup2:true,
        showup3:true,
      articleDetail: {
            avatar:"../../static/images/textImages/avatar.png",
            name:"王俊杰",
            releaseTime:"2022-8-22",
            numberOfview: 222,
            share: 10,
            comment: 112,
            like: 98,
            content:"测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
        }
    }
  },
  methods:{
    changeIcons(showup){
        showup = !showup
    }
  }
}
</script>

<style lang="scss">
.articleDetail{
    background-color: #fff;
    .title{
        color:$uni-color-title;
        font-size:40rpx;
        text-align: center;
        padding: 10px 0;
    }
    .author{
        font-size:24rpx;
        padding: 10rpx 0;
        display: flex;
        image{
            width: 50rpx;
        }
        .name{
            margin-left: 20rpx;
        }
        .releaseTime{
            margin-left: 20rpx;
        }
    }
    .content{
        text{
            font-size:$uni-font-size-base;
        }
        .numberOfview{
            font-size:$uni-font-size-sm;
            opacity: 0.3;
        }
    }
    .bottomList{
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        border: 1px solid;
        float:right;
        uni-icons{
            margin: 0 90rpx;
        }
    }
}
</style>