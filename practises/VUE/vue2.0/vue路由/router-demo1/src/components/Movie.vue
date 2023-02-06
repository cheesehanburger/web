<template>
  <div class="movie-container">
    <!-- 可以通过$route.params.xx 获得动态参数值(不推荐)，或者通过props获取)-->
    <h3>Movie 组件 ---{{ $route.params.id }}----- {{ id }}</h3>
    <button @click="showThis">打印this</button>
    <button @click="goBack">返回</button>

    <!-- 注意：在行内使用编程式导航跳转的时候，this必须要省略，否则报错 -->
    <!--如果只需要一层的跳转，vue-router提供了两个便捷方法：back()和forward() -->
    <button @click="$router.back()">back 后退</button>
    <button @click="$router.forward()">forward 前进</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['id'],
  methods: {
    showThis() {
      console.log(this)
    },
    goBack() {
      // -1表示后退一层
      // 如果后退层数超过上限，则原地不动
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
