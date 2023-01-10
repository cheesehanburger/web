// 导入vue这个包,得到Vue构造函数
import Vue from 'vue'
// 导入App.vue根组件,将来要把App.js中的模版结构,渲染到HTML页面中
// import App from './App.vue'
import Test from './Test.vue'

Vue.config.productionTip = false

// 创建Vue的实例对象
new Vue({
  //render函数的作用就是,把指定组件渲染到HTML页面中，其中Test就是指定的组件,（**该组件叫做根组件**）
  render: h => h(Test),
  //$mount函数的作用就和el属性的作用一样，#app就是指定的页面
}).$mount('#app') //#app就是指定的页面
