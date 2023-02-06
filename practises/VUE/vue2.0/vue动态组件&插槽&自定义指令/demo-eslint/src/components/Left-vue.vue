<template>
  <div class="Left-container">
    <h3>Left 子组件</h3>
    <button @click="getInfo">发起get请求</button>
    <button @click="getBooks">获取图书的列表</button>
  </div>
</template>

<script>
export default {
  methods: {
    async getInfo() {
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    },
    async getBooks() {
      const { data: res } = await this.$http.get('/api/getbooks')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.Left-container {
  flex: 1;
  background-color: orange;
  min-height: 200px;
}
</style>
