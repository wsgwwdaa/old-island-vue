<template>
  <div class="container">
    <div class="image-container">
      <img class="img-style" :src="imageSrc" alt>
    </div>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    content: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/classic-share.styl'
.container
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  width 100%
  height 8rem
  .image-container
    position relative
    width 100%
    height 0
    padding-bottom 66.7%
    .img-style
      position absolute
      left 0
      top 0
      width 100%
      height 100%
  p
    display inline-block
    font-size .32rem
</style>
