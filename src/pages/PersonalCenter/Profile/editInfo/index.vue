<template>
  <view class="container">
    <uni-section title="修改信息"
                 type="line">
      <view class="example">
        <uni-forms ref="valiForm"
                   :rules="rules"
                   :modelValue="userInfo">
          <uni-forms-item label="用户名"
                          name="name">
            <uni-easyinput v-model="userInfo.name"
                           placeholder="请输入用户名" />
          </uni-forms-item>
          <uni-forms-item label="年级"
                          name="grade">
            <uni-easyinput v-model="userInfo.grade"
                           placeholder="请输入年级" />
          </uni-forms-item>
          <uni-forms-item label="专业"
                          name="major">
            <uni-easyinput v-model="userInfo.major"
                           placeholder="请输入专业" />
          </uni-forms-item>
        </uni-forms>
        <button @click="submit('valiForm')">提交</button>
      </view>
    </uni-section>
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
      },
      rules: {
        // name: {
        //   rules: [{
        //     required: true,
        //     errorMessage: '用户名不能为空'
        //   }]
        // },
        grade: {
          // rules: [
          //   {
          //   required: true,
          //   errorMessage: '年级不能为空'
          // }, 
          // {
          //   format: 'number',
          //   errorMessage: '年级只能输入数字'
          // }]
        },
        // major: {
        //   rules: [{
        //     required: true,
        //     errorMessage: '专业不能为空'
        //   }]
        // }
      },
    }
  },
  methods: {
    submit (ref) {
      this.$refs[ref].validate().then(res => {
        // console.log('success', res);
        uni.showToast({
        	title: `校验通过`
        })

        // 发请求
      }).catch(err => {
        console.log('err', err);
      })
    },
  }
}

</script>

<style lang='scss' scoped>
@import "@/static/style/common.scss";
.container {
  width: 95%;
  margin: 30rpx auto 0;
  box-shadow: $uni-shadow-base;
  .example {
    padding: 15px;
    background-color: #fff;
  }
  button {
    width: 40%;
    color: #fff;
    background-color: rgb(18, 174, 250);
    font-size: 32rpx;
    margin-top: 32rpx;
  }
}
</style>