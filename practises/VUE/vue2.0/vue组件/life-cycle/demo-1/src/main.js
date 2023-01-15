import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// **注册全局组件**
// 1.导入组件
import Count from '@/components/Count.vue'
// 2.在Vue.component中注册全局组件
Vue.component('MyCount',Count)
new Vue({
  render: h => h(App),
}).$mount('#app')
