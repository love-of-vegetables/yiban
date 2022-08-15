<template>
  <view class="search">
    <!-- <input type="text" value="{{inputValue}}" placeholder="请输入关键词" bindinput="handleInput">
    <button hidden="{{isFocus}}">取消</button> -->
  </view>
</template>

<script>
	export default{
		data(){
			return{
        inputValue:"",
        isFocus:false
		}
	},
    handleInput(e){
      const {value} = e.detail;
      console.log(value);
      if(!value.trim()){
        this.setData(
          {
            isFocus:false
          }
        )
        return;
      }
      this.setData({
        isFocus:true
      })
    }
}
</script>

<style>
  .search{
    height: 60rpx;
    display: flex;
  }
  input{
    background-color: #fff;
    flex:1;
    height: 100%;
    padding-left: 30rpx;
  }
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110rpx !important;
    font-size: 26rpx;
    padding: 0;
    margin: 0 10rpx;
    height: 100%;
  }
</style>
