<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="头条新闻" fixed />
    <!-- 导入注册并且使用Article组件 -->
    <!-- cmtCount建议写成 cmt-count-->
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      :disabled="finished"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleInfo
          v-for="item in articleList"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :date="item.pubdate"
          :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入组件
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
// 按需导入api接口
import { getArticleListAPI } from '@/api/articleAPI.js'

export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示的条数
      limit: 10,
      // 文章数组
      articleList: [],
      // 是否正在上拉加载下一页数据，如果为ture则不会触发load，所以每次加载完毕之后一定要设为false
      loading: true,
      // 所有数据是否加载完毕
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      if (isRefresh === 'down') {
        // 下拉刷新，新数据在后
        this.articleList.push(...res)
        this.loading = false
      } else {
        // 上拉刷新，新数据在前
        this.articleList.unshift(...res)
        this.isLoading = false
      }
      // 一旦接受不到数据了说明页面已经刷新完毕
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 上拉刷新
    onLoad() {
      console.log('触发了')
      // 1.让页码值+1
      this.page++
      // 2.继续请求新的数据
      this.initArticleList('down')
      // 3.将loading设置为false
    },
    // 下拉刷新
    onRefresh() {
      console.log('下拉刷新')
      // 1.让页码值+1
      this.page++
      // 2.继续请求新的数据
      this.initArticleList('up')
      // 3.将loading设置为false
    }
  },
  components: {
    ArticleInfo
  },
  created() {
    this.initArticleList('down')
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
}
</style>
