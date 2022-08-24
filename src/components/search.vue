<template>
 <view>
  <view class="searchbar">
   <uni-search-bar placeholder="请输入关键词搜索" 
                  @input="input"
                  clearButton="auto" 
                  cancelButton="always" cancelText="取消" @cancel="cancel"  
                  @confirm="search"
                  v-model="keyword" 
                  radius="50" 
                  bgColor="rgb(246,246,246)">
   </uni-search-bar>
  </view>

  <view class="historyBox">
    <view class="historyTitle">
      <text>搜索历史</text>
      <uni-icons type="trash" size="17" @click="historyClean"></uni-icons>
    </view>
    <view class="historyList">
      <uni-tag circle="true" inverted="true" :text="item" v-for="(item,index) in historyList" :key="index" ></uni-tag>
    </view>
  </view>
 </view>
</template>
 
<script>
 import { uniTag } from '@dcloudio/uni-ui'
 export default {
    components: {
    uniTag
  },
  data() {
   return {
    keyword:'',
    historyList:['xxxxx','abcde','123456']
   }
  },
  methods: {
   input(res) {
    console.log('----input:', res)
   },
    search(res){
      uni.showToast({
        title:'搜索'+res.value
      })
      //此处向后端发送res.value并重新请求historyList
    },
   cancel(res){
    onclick="window.history.go(1)"
    uni.showToast({
     title: '返回上层界面',
    })
   },
    historyClean(){
        //此处向后端发送清空需求并重新请求historyList
   }/** ,
   reload(){
    //此处重新请求hotsearchList
   }*/
  }
 }
</script>

<style lang="scss">
.searchbar{
    padding: 6rpx 0;
    background-color: #fff;
}
.historyBox{
  padding: 0 10rpx;
  .historyTitle{
    display: flex;
    justify-content: space-between;
    height: 40rpx;
    align-items: center;
    font-size: $uni-font-size-sm;
    border-bottom: 1px soild #efefef;
  }
  .historyList{
    display: flex;
    flex-wrap: wrap;
  }
  uni-tag{
    margin: 10rpx;
  }
}
</style>