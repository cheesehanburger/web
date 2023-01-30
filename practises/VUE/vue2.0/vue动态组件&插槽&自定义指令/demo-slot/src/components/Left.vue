<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <!-- 声明一个插槽区域 -->
    <!-- vue官方规定每一个slot插槽都需要有一个名称，默认是default，指定具体name的，叫具名插槽-->
    <!-- 默认情况下，提供的内容都会填充到default插槽中 -->
    <slot name="default">这是插槽的后备内容(默认内容)</slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
