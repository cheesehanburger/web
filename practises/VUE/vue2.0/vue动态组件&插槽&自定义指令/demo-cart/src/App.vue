<template>
  <div class="app-container">
    <!-- 头部区域 -->
    <Header title="购物车"></Header>
    <!-- 商品区域 -->
    <!-- 循环渲染每一个商品的信息 -->
    <Goods
      v-for="item in goodsList"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :price="item.goods_price"
      :imgSrc="item.goods_img"
      :count="item.goods_count"
      :checked="item.goods_state"
      @changed="setNewVal"
    >
      <Counter :goodsCount="item.goods_count" @changeCount="getNewCount(item,$event)"></Counter>
    </Goods>

    <!-- 结算栏 -->
    <Footer
      :fullState="fullState"
      :totalPrice="fullPrice"
      :totalCount="fullCount"
      @allChecked="setChecked"
    ></Footer>
  </div>
</template>

<script>
import axios from 'axios'
// 导入组件
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'
import Counter from '@/components/Counter/Counter.vue'

export default {
  data() {
    return {
      //存储购物品的列表
      goodsList: []
    }
  },
  computed: {
    // 计算全选状态
    fullState() {
      const result = this.goodsList.every((item) => item.goods_state === true)
      return result
    },
    // 计算总价
    fullPrice() {
      const newArr = this.goodsList.filter((item) => item.goods_state === true)
      const total = newArr.reduce((sum, item) => {
        return (sum += item.goods_price * item.goods_count)
      }, 0)
      return total
    },
    // 计算总数
    fullCount() {
      const newArr = this.goodsList.filter((item) => item.goods_state === true)
      const total = newArr.reduce((sum, item) => {
        return (sum += item.goods_count)
      }, 0)
      return total
    }
  },
  components: {
    Header,
    Goods,
    Footer,
    Counter
  },
  methods: {
    // 封装请求数据的方法
    async initCartList() {
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到data中
      if (res.status === 200) {
        this.goodsList = res.list
      }
    },
    //根据子组件的传值更改父组件中数据的状态
    // 其中，id和status是子组件中传递来的数据
    setNewVal(newData) {
      this.goodsList.some((item) => {
        if (item.id === newData.id) {
          item.goods_state = newData.status
          return true
        }
      })
    },

    // 全选状态
    setChecked(checked) {
      this.goodsList.forEach((item) => {
        item.goods_state = checked
      })
    },

    // 获取counter组件发过来的最新的数量值
    getNewCount(item,e) {
      item.goods_count = e
    }
  },

  created() {
    this.initCartList()
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
