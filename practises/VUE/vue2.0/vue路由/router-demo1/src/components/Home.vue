<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <hr />
    <button @click="gotoST1">播放三体(push)</button>
    <button @click="gotoST2">播放三体(replace)</button>

    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    gotoST1() {
      // 通过编程式导航跳转到对应的位置
      //push():跳转到指定 hash 地址，并增加一条历史记录
      this.$router.push('/movie/1')
    },
    gotoST2() {
      //replace():跳转到指定的 hash 地址，并替换掉当前的历史记录
      this.$router.replace('/movie/1')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
