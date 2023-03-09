<template>
  <div class="test-container">
    <h3 id="myh3">Test.vue组件,用来测试生命周期</h3>
    <p>{{ books.length }}本图书</p>
    <p id="myp">message的值是：{{ message }}</p>
    <button @click="message += '~'">修改message的值</button>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data() {
    return {
      message: 'hello vue.js',
      //  存储的是所有图书的列表数据
      books: []
    }
  },
  methods: {
    show() {
      console.log('调用了Test组件的show方法')
    },
    // 使用ajax请求图书列表的数据
    initBookList() {
      const xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {
        const result = JSON.parse(xhr.responseText)
        this.books = result.data
        console.log(result)
      })
      xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
      xhr.send()
    }
  }
  // beforeCreate:组件的data，props，methods还是不可用的
  // beforeCreate() {
  //     console.log(this.message,this.info)
  //     this.show()
  // },
  // (常用)create：data，props，methods已经是可用的了
  // 常在该方法中发送ajax请求，并且把请求到的数据转存到data中，供template使用
  // created() {
  //     this.initBookList()
  // },
  // beforeMount:还不能操作Dom元素
  //   beforeMount() {
  //     const dom = document.querySelector('#myh3')
  //     console.log('beforeMount')
  //     console.log(dom)
  //   }
  // （常用）mounted:可以操作Dom元素
  //   mounted() {
  //       const dom = document.querySelector('#myh3')
  //       console.log('mounted')
  //       console.log(dom)
  //   },
  // beforeUpdate: data更改会触发，data中的数据是最新的，但是还未将新的数据渲染到模版结构中
  //   beforeUpdate() {
  //       console.log('beforeUpdate')
  //       console.log(this.message)
  //       const dom = document.querySelector('#myp')
  //       console.log(dom.innerHTML)
  //   },
  // updated:这个阶段，date和模版结构中的数据都已经更新到最新
  // 经常在这个阶段操作最新的dom
  // updated() {
  //     console.log('updated')
  //     console.log(this.message)
  //     const dom = document.querySelector('#myp')
  //     console.log(dom.innerHTML)
  // },
  // beforeDestroy:当组件将要销毁的时候会调用该方法，但是还未销毁
  // beforeDestroy(){
  //     console.log('beforeDestroy')
  //     console.log(this.message)
  // },
  // destroyed:该方法执行，说明组件已经完全销毁
  // destroyed() {

  // },
}
</script>

<style lang="less" scoped>
.test-container {
  background-color: pink;
  height: 200px;
}
</style>
