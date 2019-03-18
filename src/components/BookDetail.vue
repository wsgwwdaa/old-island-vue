<template>
    <div class="container">
        <img :src="bookObj.image" alt="">
        <div class="text-container">
            <p class="title">{{bookObj.title}}</p>
            <p class="author">{{bookObj.author}}</p>
            <p class="like">{{bookObj.fav_nums}}喜欢</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    bookObj: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {

    }
  },
  computed: {
  },
  mounted () {
    console.log(this.bookObj)
  },
  methods: {
    clicked () {
      console.log(this.bookDetail)
    }
  }

}
</script>

<style lang="stylus" scoped>
.container
  position relative
  height 3.6rem
  width 2.4rem
  box-shadow 2px 2px 3px #e3e3e3;
  img
    height 100%
    width 100%
  .text-container
    padding .1rem
    position absolute
    bottom 0
    display flex
    flex-direction column
    width 100%
    background-color white
    p
      font-size .26rem
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    .title
      margin-top .1rem
    .author
      color #999999
    .like
      align-self flex-end
      color grey
</style>
