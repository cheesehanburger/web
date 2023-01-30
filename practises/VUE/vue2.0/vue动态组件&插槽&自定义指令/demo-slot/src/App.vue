<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <hr />
    <Article>
      <template #title>
        <p>一首诗</p>
      </template>
      <!-- 通过=接受插槽中自定义的props -->
      <template #content="{msg,user}">
        <p>敕勒川，阴山下，天似穹庐，笼盖四野</p>
        <p>{{msg}}</p>
        <p>{{user.name}}</p>
      </template>

      <template #footer>
        <p>民歌</p>
      </template>
    </Article>
    <hr />

    <div class="box" style="display: none">
      <Left>
        <!-- 默认情况下，提供的内容都会填充到default插槽中 -->
        <!-- 使用v-slot(简写为#)指令将内容填充到指定名称的插槽中，但该指令值只能用在组件和template上 -->
        <template #default>
          <p>这是一个插槽区域</p>
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Article from '@/components/Article.vue'
export default {
  components: {
    Left,
    Article
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
