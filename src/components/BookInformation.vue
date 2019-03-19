<template>
  <div class="book-information-container">
    <div class="book-detail-container">
      <img :src="bookData.image">
      <p class="title">{{bookData.title}}</p>
      <p class="author" v-for="(item,index) of bookData.author" :key="index">{{item}}</p>
    </div>
    <div class="silver-line"></div>
    <div class="short-comment">
      <div class="comment-data" v-if="commentData.comments">
        <p>短评</p>
        <div>
          <short-comment
            v-for="(item,index) of commentData.comments"
            :key="index"
            :comment="item.content"
            :nums="item.nums"
          />
        </div>
      </div>
      <p v-else>暂无评论</p>
    </div>
    <div class="silver-line"></div>
    <div class="short-comment">
      <p class="book-data">{{bookData.summary}}</p>
    </div>
    <div class="silver-line"></div>
    <div class="information-container">
      <div class="default-information">
        <p>出版社</p>
        <p>出版年</p>
        <p>页数</p>
        <p>定价</p>
        <p>装帧</p>
      </div>
      <div class="book-information">
        <p>{{bookData.publisher}}</p>
        <p>{{bookData.pubdate}}</p>
        <p>{{bookData.pages}}</p>
        <p>{{bookData.price}}</p>
        <p>{{bookData.binding}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import GetMessage from 'model/getmessage.js'
import ShortComment from 'components/ShortComment'
const messageSource = new GetMessage()
export default {
  components: {
    ShortComment
  },
  data () {
    return {
      bookData: {},
      commentData: {},
      comment: 'aaa'
    }
  },
  activated () {
    console.log(this.$route.params)
    // this.bookData = JSON.parse(localStorage.getItem('book'))
    // this.commentData = JSON.parse(localStorage.getItem('shortComment'))
    // console.log(this.bookData)
    // console.log(this.commentData)
    messageSource.getBookShortComment(this.$route.params.id).then(res => {
      this.commentData = res.data
      console.log(res.data)
      // localStorage.setItem('shortComment', JSON.stringify(this.commentData))
    })
    messageSource.getBookDetail(this.$route.params.id).then(res => {
      this.bookData = res.data
      console.log(this.bookData)
    })
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
.book-information-container
  position absolute
  z-index 100
  background-color white
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
    padding 0.5rem 0
    .title
      font-size 0.4rem
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
    height 0.32rem
    background-color #f5f5f5
  .short-comment>>>.comment-container
    margin-left 0.2rem
  .short-comment>>>.comment-container:nth-child(1)
    background-color #ffd7b3
  .short-comment>>>.comment-container:nth-child(2)
    background-color #c4eaff
  .short-comment
    line-height 0.4rem
    display flex
    padding 0.1rem
    flex-direction row
    flex-wrap wrap
    margin .2rem 0
    p
      font-size .32rem
    .comment-data
      display flex
      flex-direction column
      align-items center
    .book-data
      text-indent 2em
      font-size 0.32rem
  .information-container
    padding .2rem 0
    display flex
    flex-direction row
    p
      font-size .32rem
    .default-information
      margin 0 .2rem
      color #b9b9b9
    .book-information
      color gray
</style>
