<template>
  <div class="App-container">
    <h1>App 根组件</h1>
    <hr />
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left-vue.vue'
import Right from '@/components/Right-vue.vue'
export default {
  components: {
    Left,
    Right
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
}
</style>
