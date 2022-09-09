import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
App.mpType = 'app'

import API from './api/request'
Vue.prototype.$api = API

const app = new Vue({
  ...App
})
app.$mount()
