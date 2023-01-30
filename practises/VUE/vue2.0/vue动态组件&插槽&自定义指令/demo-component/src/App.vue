<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />

    <button @click="comName = 'Left'">点击切换为Left</button>
    <button @click="comName = 'Right'">点击切换为Right</button>
    <div class="box">
      <!-- 动态绑定组件 -->
      <!-- keep-alive会保持动态组件的状态，进行缓存，而不是销毁 -->
      <!-- 默认是对包裹的所有组件进行缓存，也可以通过inclue进行指定缓存的组件，值是组件的名称 -->
      <!-- 同样有exclude属性，进行设置排除缓存，二者只能用一个 -->
      <keep-alive include="myLeft">
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
  components: {
    // 如果在声明组件的时候，没有为组件指定name名称，则组件默认为注册名称
    Left,
    Right
  },
  data() {
    return {
      // comName表示要展现的组件名字
      comName: 'Left'
    }
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
