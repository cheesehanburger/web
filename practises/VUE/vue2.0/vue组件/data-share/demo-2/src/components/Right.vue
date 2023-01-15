<template>
  <div class="right-container">
    <h3>Right 组件 ---{{count}}</h3>
    <button @click="add">count增加传送到父组件</button>
    <button @click="sendMsg">向兄弟组件发送数据</button>
  </div>
</template>

<script>
import bus from "@/components/eventBus.js";
export default {
  data(){
    return{
      // 子组件的数据，想要传给父组件
      count:0,
      // 想要传送给兄弟组件
      str:"天苍苍，野茫茫，风吹草低见牛羊",
    }
  },
  methods:{
    add(){
      this.count++
      // 子向父传值：修改数据时，通过$emit()触发自定义事件
      this.$emit('numchange',this.count)
    },
    sendMsg(){
      // 兄弟间传值：发送方-通过eventBus来向兄弟组件发送数据
      // $emit触发自定义事件
      bus.$emit('share',this.str)
    }
  }
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
