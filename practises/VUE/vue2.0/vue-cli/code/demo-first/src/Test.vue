<template>
  <!-- 组成1:template -->
  <!-- 注意:template中只能有一个根节点 -->
  <div class="test-box">
    <h3>这是用户自定义的Test.vue --我的名字是:{{ username }}</h3>
    <button @click="changeName">点击换名</button>
  </div>
</template>

<script>
// 组成3:script
// 固定写法:默认导出
export default {
  // data数据源
  // 注意:.vue组件中的 data不能像之前一样指向对象
  // 组件中的date必须是一个函数
  data() {
    // 这个return对象中,可以定义数据
    return {
      username: "han",
    };
  },
  methods: {
    changeName() {
      this.username = "liu";
      // vue组件里的this是组件的实例对象
      console.log(this);
    },
  },
  // 当前组件中的侦听器
  watch: {},
  // 当前组件中的计算属性
  computed: {},
};
</script>

<style lang='less'>
/* 组成2:style */
/* 注意:可以通过lang指定预处理器 */
.test-box {
  background-color: pink;
  h3 {
    color: red;
  }
}
</style>