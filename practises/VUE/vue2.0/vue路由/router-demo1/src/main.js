import Vue from 'vue'
import App from './App2.vue'
// 导入路由模块，拿到路由实例
// 在模块导入的时候，如果给定的是文件夹，则默认导入这个文件夹下的index.js文件
import router from '@/router'

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 想要使用路由，必须把路由的实例
  router: router
}).$mount('#app')
