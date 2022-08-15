<template>

  <div>
    <!-- <swiper class="cover_swiper"
            indicator-dots='true'
            display-multiple-items='1'
            current='{{ centerItem }}'
            bindchange='handleSwiperChange'
            previous-margin='30'
            next-margin='30'
            autoplay='true'
            circular='true'
            interval='2000'>
      <block wx:for="{{coverList}}"
             wx:key="id">
        <swiper-item>
          <view class='imageBox'
                style='text-align:center'>
            <view class='mask'
                  wx:if='{{ index != centerItem }}'></view>
            <image src="{{item.url}}" />
          </view>
        </swiper-item>
      </block>
    </swiper>

    <view class="index_bigType">
      <view class="bigTypeRow">
        <image src="../../static/文章.png"></image>
      </view>
    </view> -->
  </div>

</template>

<script>
export default {
  data () {
    return {
      centerItem: 0,
      coverList: [
        {
          id: 0,
          url: "../../static/1.png"
        },
        {
          id: 1,
          url: "../../static/1.png"
        },
        {
          id: 2,
          url: "../../static/1.png"
        },
        {
          id: 3,
          url: "../../static/1.png"
        },
        {
          id: 4,
          url: "../../static/1.png"
        }
      ]
    }
  }
}
</script>

<style>
.cover_swiper {
  height: 100px;
}
.cover_swiper .mask {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
}
</style>
