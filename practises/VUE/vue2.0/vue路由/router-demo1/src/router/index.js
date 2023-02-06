// 这里就是当前的路由模块

// 1.导入 Vue 和 vueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'

import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

// 2.调用Vue.use()函数，把Vuerouter安装为vue插件
Vue.use(VueRouter)

// 3.创建路由实例对象
const router = new VueRouter({
  // routes是一个数组，作用：定义hash地址与组件之间的对应关系
  routes: [
    // 路由规则
    { path: '/', redirect: '/home' }, //通过redirect设置路由重定向
    { path: '/home', component: Home },
    // 设置动态路由：需求，在movie组件中，根据id的值，展示对应的电影详细信息
    // 可以为路由规则开启props传参数，从而方便拿到动态参数值
    { path: '/movie/:id', component: Movie, props: true },
    {
      path: '/about',
      component: About,
      redirect: '/about/tab1',
      // 通过children属性，嵌套声明子级路由规则
      children: [
        // {path:'', component: Tab1}    //也可以使用默认子路由
        { path: 'tab1', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    },
    { path: '/login', component: Login },
    { path: '/main', component: Main }
  ]
})

// 导航守卫
// 只要有路由的跳转，必然会触发 breforeEach 指定的 function 回调函数
router.beforeEach(function (to, from, next) {
  // to是将要访问的路由的信息对象
  // from是将要离开的路由的信息对象
  // next()表示放行的意思
  if (to.path === '/main') {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

// 4.向外共享路由的实例对象
export default router
