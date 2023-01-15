<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <p>从子组件获得的count值:{{countFromSon}}</p>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 父向子传值，利用的是props自定义属性 -->
      <Left :msg="message" :info="userinfo"></Left>
      <!-- 子向父传值，numchange是子组件中的自定义事件，而getNewCount是父组件中的处理函数 -->
      <Right @numchange="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
  data() {
    return{
      message:'hello',
      userinfo:{name:'han',age:18},
      // 用来接受子组件传递过来的值
      countFromSon:0,
    }
  },
  components:{
    Left,
    Right,
  },
  methods:{
    // 获取子组件传递过来的数据
    getNewCount(val) {
      this.countFromSon = val
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
