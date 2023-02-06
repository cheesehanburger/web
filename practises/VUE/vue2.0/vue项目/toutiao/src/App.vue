<template>
  <div class="app-container">
    <router-view></router-view>
    <!-- tabbar区域 -->
    <van-tabbar route>
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>

<style></style>
