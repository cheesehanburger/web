import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 导入并且安装vant组件库
import Vant from 'vant'
// 注意：为了能够覆盖默认的less变量，这里一定要把后缀名改为 .less
import 'vant/lib/index.less'

Vue.config.productionTip = false

Vue.use(Vant)

Vue.prototype.$http = axios

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
