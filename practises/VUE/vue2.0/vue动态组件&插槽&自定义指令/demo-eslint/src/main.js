import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// 在挂载axios之前，可以先进行全局配置请求根路径，方便后续维护
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'

// 通常在vue中使用axios都会挂载Vue.prototype在供全局使用，并且属性名为$http
// 但是有一个缺点：不利于API接口的复用
Vue.prototype.$http = axios
// 今后，每个.vue组件中要发起请求，直接调用this.$http
new Vue({
  render: (h) => h(App)
}).$mount('#app')
