<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <p v-color="'red'">hello</p>
    <button @click="color = 'green'">改变color</button>
    <hr />
    <Article>
      <template #title>
        <p>一首诗</p>
      </template>
      <!-- 通过=接受插槽中自定义的props -->
      <template #content="{ msg, user }">
        <p>敕勒川，阴山下，天似穹庐，笼盖四野</p>
        <p>{{ msg }}</p>
        <p>{{ user.name }}</p>
      </template>

      <template #footer>
        <p>民歌</p>
      </template>
    </Article>
    <hr />
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Article from '@/components/Article.vue'
export default {
  data() {
    return {
      color: 'blue'
    }
  },
  components: {
    Left,
    Article
  },

  // 定义私有自定义节点
  directives: {
    // 定义名为color的指令，指向一个配置对象
    // color: {
    //   // 当指令第一次被绑定到元素上的时候，会立即触发bind函数
    //   // 注意：当 DOM 更新时 bind 函数不会被触发
    //   bind(el,binding) {
    //     // el是绑定该指令的DOM对象
    //     console.log('触发bind')
    //     el.style.color = binding.value
    //   },
    //   // update 函数会在每次 DOM 更新时被调用
    //   update(el,binding) {
    //     console.log('触发undate')
    //     el.style.color = binding.value
    //   }
    // }

    // 如果 insert 和update 函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式
    // 简写方式-bind和update都会触发
    color(el, binding) {
      console.log('111')
      el.style.color = binding.value
    }
  },
  methods: {}
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
