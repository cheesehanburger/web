<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>count的值是：{{count}}</p>
    <button @click="count++">count+1</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0,
    }
  } ,
  methods: {
    reset() {
      this.count = 0
    }
  },
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
