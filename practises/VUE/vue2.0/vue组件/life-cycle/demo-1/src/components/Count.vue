<template>
  <div class="count-countainer">
    <h5>Count 组件</h5>
    <!-- 使用props属性 -->
    <p>count的值是:{{ count }}</p>
    <!-- 事件的简写方式：如果事件函数只有一行代码，则可以直接写在行内 -->
    <button @click="count++">点击+1</button>
  </div>
</template>

<script>
export default {
  // props是自定义属性，允许使用者通过自定义属性，为当前组件指定初试值，由封装者定义
  // props中的数据可以在模板结构中直接被使用
  // 注意的是，props中的数据是“只读”的，不能修改，否则终端会报错

  // 方法一：数组形式的props不能指定默认值
  // props:['init'],

  // 方法二：对象形式的props可以进行灵活的配置
  props: {
    // 自定义属性A:{/* 配置选项 */}
    init: {
      // 如果外界使用该组件的时候，没有传递init属性的时候，则默认值生效，否则被覆盖
      default: 6,
      // 指定属性的类型值，规定传过来的值必须是该类型，否则终端报错
      type: Number,
      //必填项校验，指定属性是必填项
      required: true,
    },
  },
  data: function () {
    return {
      count: this.init, //把init转存到data，这样就可以修改了
    };
  },
};
</script>

<style lang="less">
</style>