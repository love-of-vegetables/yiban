 <template>   
 <view class="articleDetail">
    <view class="title">{{articleDetail.title}}</view>

    <view class="author">
        <image mode="widthFix" :src="articleDetail.avatar"></image>
        <view class="name">{{articleDetail.name}}</view>
        <view class="releaseTime">{{articleDetail.releaseTime}}</view>
    </view>

    <view class="content">
        <text>{{articleDetail.content}}</text>
        <image src="../../static/images/article/articleDetail.jpg" mode="widthFix"></image>
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
            title:"【刚刚】广州新增7+2，具体情况如下！多区最新通告！这些区域恢复线下教学",
            avatar:"../../static/images/textImages/avatar.png",
            name:"王俊杰",
            releaseTime:"2022-8-22",
            numberOfview: 222,
            share: 10,
            comment: 112,
            like: 98,
            content:"9月3日0-24时，全省新增本土确诊病例79例（广州4例，深圳69例，江门6例）；新增本土无症状感染者24例（深圳20例，东莞1例，江门2例，揭阳1例）。全省新增境外输入确诊病例17例（广州5例，深圳8例，珠海2例，佛山2例）；新增境外输入无症状感染者14例（广州1例，深圳4例，珠海2例，佛山3例，惠州1例，东莞2例，中山1例）；另有1例境外输入无症状感染者转确诊病例（广州1例）。"
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
        image{
            width:600rpx;
            margin:10rpx 75rpx;
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