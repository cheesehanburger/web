<template>
  <div
    class="number-container d-flex justify-content-center align-items-center"
  >
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="reCount">
      -
    </button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ goodsCount }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="addCount">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    goodsCount: {
      type: Number,
      default: 1
    },
    goodsId: {
      type: Number,
      default: 1
    }
  },

  methods: {
    addCount() {
      this.$emit('changeCount', this.goodsCount + 1)
    },
    reCount() {
      if (this.goodsCount <= 1) return
      this.$emit('changeCount', this.goodsCount - 1)
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
