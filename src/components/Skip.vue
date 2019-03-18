<template>
  <div class="icon-container">
    <span :class="['iconfont','fontsize',last?'have':'none']" @click="clickEvent('last')" >&#xe8f3;</span>
    <p>{{title}}</p>
    <span :class="['iconfont','fontsize',next?'have':'none']" @click="clickEvent('next')">&#xe8f1;</span>
  </div>
</template>

<script>
export default {
  props: {
    last: {
      type: Boolean,
      default: true
    },
    next: {
      type: Boolean,
      default: false
    },
    title: String
  },
  data () {
    return {
    }
  },
  methods: {
    clickEvent (page) {
      if ((!this.last && page === 'last') || (!this.next && page === 'next')) {
        return
      }
      this.$emit('changePage', page)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/common.styl'
.icon-container
  width 80%
  height .6rem
  line-height .6rem
  background $silver
  display flex
  flex-direction row
  justify-content space-between
  .fontsize
    font-size 0.6rem
  .none
    color grey
  .have
    color black
  p
    font-size .32rem
</style>
