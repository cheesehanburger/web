<template>
  <div class="left-container">
    <h3>Left 组件 ---- {{count}}</h3>
    <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  // 可以使用name属性指定组件名称，
  // 对比： ‘注册名称’主要的应用场景是，以标签的形式，把注册好的组件，渲染和使用到页面结构之中
  // 组件声明时候的‘name名称’主要的应用场景是，结合<keep-alive>标签实现组件缓存功能，以及在调试工具中看到组件的name名称
  name:'myLeft',
  data() {
    return {
      count: 1
    }
  },
  created() {
    console.log('create')
  },
  destroyed() {
    console.log('destoryed')
  },
  // keep-alive对应的生命周期
  // 组件被创建的时候会执行created生命周期，也会执行activeted生命周期
  // 但是组件被激活的时候只会执行activeted
  activated() {
    console.log('left组件被激活')
  },
  deactivated() {
    console.log('left组件被缓存')
  }
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
