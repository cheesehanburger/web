<template>
  <div class="app-container">
    <!-- 通过ref属性在Vue自带的$ref中添加dom元素 -->
    <h1 ref="myh1">App 根组件</h1>
    <button @click="changeShow">改变标题的颜色</button>
    <button @click="changeLeft">重置left组件中的count值</button>

    <hr />
    <input type="text" @blur="showButton" v-if="inputVisible" ref="iptRef" />
    <button v-else @click="showInput">展示输入框</button>
    <hr />

    <div class="box">
      <!-- ref属性也可以加给子组件，从而获得子组件的实例 -->
      <Left ref="myLeft"></Left>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
export default {
  data() {
    return {
      //默认值是false，表示默认不展示输入框，展示按钮
      inputVisible: false
    }
  },
  methods: {
    changeShow() {
      console.log(this)
      // 在Vue自带的$ref属性中获取dom元素
      this.$refs.myh1.style.color = 'red'
    },
    changeLeft() {
      // 在Vue自带的$ref属性中获取组件实例
      this.$refs.myLeft.count = 0
    },
    showInput() {
      this.inputVisible = true
      // 注意：当有些步骤需要等到dom重新渲染完毕之后才执行，就使用该方法
      // 他的作用是：会把回调函数推迟到下一个Dom更新之后执行
      this.$nextTick(() => {
        this.$refs.iptRef.focus()
      })
    },
    showButton() {
      this.inputVisible = false
    }
  },
  components: {
    Left
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
