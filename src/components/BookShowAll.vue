<template>
    <div>
        <slot name="title"></slot>
        <div class="book-show-container">
        <book-detail v-for="(item,index) of bookAll" :key="index"  :bookObj="item"/>
        </div>
        <span class="bottom-control"></span>
    </div>
</template>

<script>
import BookDetail from 'components/BookDetail'
export default {
  components: {
    BookDetail
  },
  props: {
    bookAll: [Function, Array]
  },
  data () {
    return {
      test: 10
    }
  },
  mounted () {
    // console.log(this.bookAll)
  }
}
</script>

<style lang="stylus" scoped>
.book-show-container>>>.book-detail-container
  margin .36rem .16rem
.book-show-container
  display flex
  flex-direction row
  justify-content space-around
  flex-wrap wrap
.bottom-control
  display block
  width 100%
  height 1rem
</style>
