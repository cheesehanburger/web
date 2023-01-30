import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 定义全局自定义属性
// 第一个参数是字符串，表示全局自定义指令的名字
// 第二个参数是对象，用来接收指令的参数值
// Vue.directive('color', {
//   bind(el, binding) {
//     console.log('触发bind')
//     el.style.color = binding.value
//   },
//   update(el, binding) {
//     console.log('触发undate')
//     el.style.color = binding.value
//   }
// })

Vue.directive('color', function (el, binding) {
  console.log('111')
  el.style.color = binding.value
})

new Vue({
  render: h => h(App),
}).$mount('#app')
