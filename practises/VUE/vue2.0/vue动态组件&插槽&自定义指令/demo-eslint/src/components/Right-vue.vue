<template>
  <div class="Right-container">
    <h3>Right 子组件</h3>
    <button @click="postInfo">发起post请求</button>
    <button @click="getBooks">获取图书的列表</button>
  </div>
</template>

<script>
export default {
  methods: {
    async postInfo() {
      const { data: res } = await this.$http.post('/api/post', {
        name: 'zs',
        age: 20
      })
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
.Right-container {
  flex: 1;
  background-color: skyblue;
  min-height: 200px;
}
</style>
