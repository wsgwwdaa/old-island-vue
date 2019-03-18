<template>
    <div>
        <span @click='clickLike'
        :class="['iconfont','icon-like',likeOrNot?'liked':'']"
        >&#xe613;</span>
    </div>
</template>

<script>
export default {
  props: {
    like: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      likeOrNot: false
    }
  },
  mounted () {
  },
  methods: {
    clickLike () {
      this.likeOrNot = !this.likeOrNot
      this.$emit('choseLike', this.likeOrNot)
    }
  }

}
</script>

<style lang="stylus" scoped>
    .icon-like
      color gray
      font-size .72rem
      margin 0 .24rem .24rem 0
    .liked
      color red
</style>
