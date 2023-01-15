<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr />
    <!-- 全局组件不需要导入，直接使用 -->
    <!-- 在自定义属性前加：的目的是，通过v-bind使得属性的值变为js，从而将数值型字符串变为数字 -->
    <MyCount :init="9"></MyCount>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 只要给当前的style节点的设置一个scoped，就可以保证当前的css只对当前的组件起作用，防止样式冲突
// 本质上就是给当前的组件中每一个标签设置一个自定义属性“data-v-”属性，然后通过属性选择器来控制样式的作用域
// 缺点：当前组件的样式对其子组件是不生效的
// 解决方式：使用 /deep/ 深度选择器, h5[data-v-] => [data-v-] h5
// 使用场景：如果使用第三方组件库的时候，需要修改组件的默认样式，则需要用到/deep/
/deep/ h5 {
  color: pink;
}
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
h3 {
  color: red;
}
</style>
