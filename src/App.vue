<script>
export default {
  onLaunch: function () {
    wx.cloud.init({
      env: 'yiban-7g3hzh571676f13d',
      traceUser: true
    })
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
page {
  background-color: rgb(246, 250, 252);
}
</style>
