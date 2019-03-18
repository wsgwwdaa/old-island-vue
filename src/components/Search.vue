<template>
    <div class="input-container">
        <input v-model="searchValue" type="text" placeholder="搜索" class="input-style">
    </div>
</template>

<script>
export default {
  data () {
    return {
      searchValue: null
    }
  }
}
</script>

<style lang="stylus" scoped>
  .input-container
    height 1rem
    width 100%
    position relative
    .input-style
      position absolute
      text-align center
      left 10%
      bottom .25rem
      height .5rem
      width 80%
      font-size .32rem
      background #f5f5f5
      border-radius 5px
</style>
