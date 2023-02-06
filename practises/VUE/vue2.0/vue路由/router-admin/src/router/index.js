import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from '@/router/pathArr.js'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Rights from '@/components/menus/MyRights.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/home/users',
      children: [
        { path: 'users', component: Users },
        { path: 'goods', component: Goods },
        { path: 'rights', component: Rights },
        { path: 'orders', component: Orders },
        { path: 'settings', component: Settings },
        // 用户详情页的路由
        { path: 'userinfo/:id', component: UserDetail, props: true }
      ]
    }
  ]
})

// 前置守卫
router.beforeEach(function (to, from, next) {
  if (pathArr.includes(to.path)) {
    if (localStorage.getItem('token') === 'Bearer xxxx') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
