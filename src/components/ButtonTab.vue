<template>
  <div class="template-container">
    <div class="silver-line"></div>
    <div class="img-contaienr">
      <router-link
        :class="['img-item',active[0]?'img-chosen':'']"
        to="/"
        tag="div"
        @click.native="choseRouter(1)"
      >
        <img :src="classic" alt>
        <span>流行</span>
      </router-link>
      <router-link
        :class="['img-item',active[1]?'img-chosen':'']"
        to="/book"
        tag="div"
        @click.native="choseRouter(2)"
      >
        <img :src="book" alt>
        <span>书籍</span>
      </router-link>
      <router-link
        :class="['img-item',active[2]?'img-chosen':'']"
        to="/like"
        tag="div"
        @click.native="choseRouter(3)"
      >
        <img :src="my" alt>
        <span>喜欢</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: [1, 0, 0],
      classic: require('../../public/com-image/classic@highlight.png'),
      book: require('../../public/com-image/book.png'),
      my: require('../../public/com-image/my.png')
    }
  },
  methods: {
    choseRouter (num) {
      switch (num) {
        case 1:
          this.resetIcon()
          this.classic = require('../../public/com-image/classic@highlight.png')
          this.active = [1, 0, 0]
          break
        case 2:
          this.resetIcon()
          this.book = require('../../public/com-image/book@highlight.png')
          this.active = [0, 1, 0]
          break
        case 3:
          this.resetIcon()
          this.my = require('../../public/com-image/my@highlight.png')
          this.active = [0, 0, 1]
      }
    },
    resetIcon () {
      this.book = require('../../public/com-image/book.png')
      this.classic = require('../../public/com-image/classic.png')
      this.my = require('../../public/com-image/my.png')
    }
  },
  computed: {}
}
</script>

<style lang="stylus" scoped>
@import '$~common/stylus/common.styl'
.template-container
  width 100%
  position fixed
  bottom 0
  .silver-line
    display block
    width 100%
    height 2px
    background-color $silver
  .img-contaienr
    display flex
    flex-direction row
    justify-content space-around
    .img-chosen
      color red
    .img-item
      display flex
      flex-direction column
      padding-bottom 0.2rem
      img
        height 0.6rem
        width 0.6rem
      span
        font-size 0.32rem
</style>
