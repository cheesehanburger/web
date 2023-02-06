<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img
            :src="cover.images[0]"
            alt=""
            class="thumb"
            v-if="cover.type === 1"
          />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img
            v-for="(item, index) in cover.images"
            :key="index"
            :src="item"
            alt=""
            class="thumb"
          />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span
            >作者 {{ author }} &nbsp;&nbsp; {{ cmtCount }}评论 &nbsp;&nbsp;
            发布日期 {{ date }}</span
          >
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  name: 'ArcticleInfo',
  // 自定义属性
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    cmtCount: {
      type: [String, Number],
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    cover: {
      type: Object,
      default: function () {
        // 这个return就是对象的默认值
        return {
          type: 0,
          images: []
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
