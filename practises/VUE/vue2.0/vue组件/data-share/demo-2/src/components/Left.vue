<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>父组件传来的msg:{{ msg }}</p>
    <p>父组件传来的info:{{ info }}</p>
    <hr>
    <p>兄弟组件传来的str:{{msgFromRight}}</p>
  </div>
</template>

<script>
import bus from "@/components/eventBus.js";
export default {
  props: {
    msg: {},
    info: {},
  },
  data() {
    return {
      // 从兄弟组件接收到的数据
      msgFromRight: "",
    };
  },
  created() {
    // 接收方：通过eventBus来接受数据
    // $on注册一个自定义事件
    bus.$on("share", (val) => {
      this.msgFromRight = val
    });
  },
};
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
