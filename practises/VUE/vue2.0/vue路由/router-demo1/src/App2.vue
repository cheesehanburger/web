<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    <!-- 使用router-link代替a链接 -->
    <router-link to="/home">首页</router-link>
    <!-- 注意1:在hash地址中，/后面的参数叫“路径参数” -->
    <!-- 在路由参数对象中，需要this.$route.params来访问路径参数 -->
    <!-- 注意2: 在hash地址中，?后面的参数项，叫做“查询参数” -->
    <!-- 在路由参数对象中，需要this.$route.query来访问路径参数 -->
    <!-- 注意3:在this.$route中，path只是路径部分，fullpath 是完整的地址 -->
    <!-- 例如： -->
    <!-- /movie/2?name='zs' age=20是fullpath的值 -->
    <!-- /movie/2是path的值 -->
    <router-link to="/movie/1">三体</router-link>
    <router-link to="/movie/2?name='zs' age=20">流浪地球</router-link>
    <router-link to="/movie/3">满江红</router-link>
    <router-link to="/about">关于</router-link>
    <hr />
    
    <!-- 只要在项目中安装和配置了vue-router，就可以使用router-view,他的作用就是占位 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
