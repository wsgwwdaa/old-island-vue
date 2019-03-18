<template>
  <div>
    <div class="get-back iconfont">&#xe8ef;</div>
    <div class="book-detail-container">
      <img :src="bookData.image">
      <p class="title">{{bookData.title}}</p>
      <p class="author" v-for="(item,index) of bookData.author" :key="index">{{item}}</p>
    </div>
    <div class="silver-line"></div>
    <div class="short-comment"></div>
  </div>
</template>

<script>
// import GetMessage from 'model/getmessage.js'
// const messageSource = new GetMessage()
export default {
  data () {
    return {
      bookData: {},
      commentData: {}
    }
  },
  activated () {
    this.bookData = JSON.parse(localStorage.getItem('book'))
    this.commentData = JSON.parse(localStorage.getItem('shortComment'))
    console.log(this.commentData)
    // console.log(this.commentData)
    // messageSource.getBookShortComment(this.$route.params.id).then(res => {
    //   this.commentData = res.data
    //   console.log(res.data)
    //   localStorage.setItem('shortComment', JSON.stringify(this.commentData))
    // })
    // console.log(this.bookData)
    // console.log(this.$refs)
    // messageSource.getBookDetail(this.$route.params.id).then(res => {
    //   console.log(res.data)
    //   localStorage.setItem('book', JSON.stringify(res.data))
    // })
  }
}
</script>

<style lang="stylus" scoped>
.get-back
  width 100%
  height 1rem
  background-color skyblue
  line-height 1rem
  font-size 0.64rem
.book-detail-container
  display flex
  flex-direction column
  justify-content space-around
  paddin-top 1rem
  align-items center
  width 100%
  height 5rem
  padding .5rem 0
  .title
      font-size 0.40rem
      font-family Microsoft YaHei
  .author
      font-size 0.32rem
      color #c9c9c9
      white-space nowrap
  img
    width 2.5rem
    height 3.75rem
.silver-line
  width 100%
  height .32rem
  background-color #e3e3e3
</style>
