<template>
    <div>
        <search/>
        <book-show-all :bookAll=bookHot>
          <div slot="title" class="title">精选</div>
        </book-show-all>
        <!-- <book-detail :bookObj="bookHot[0]"/> -->
    </div>
</template>

<script>
import GetMessage from 'model/getmessage.js'
import Search from 'components/Search'
import BookShowAll from 'components/BookShowAll'
const messageSource = new GetMessage()

export default {
  components: {
    Search,
    BookShowAll
  },
  data () {
    return {
      bookHot: Array
    }
  },
  mounted () {
    this.getBookHot()
  },
  methods: {
    getBookHot () {
      if (!localStorage.getItem('bookHot')) {
        messageSource.getBookHot().then(res => {
          localStorage.setItem('bookHot', JSON.stringify(res.data))
        })
      }
      this.bookHot = JSON.parse(localStorage.getItem('bookHot'))
      // console.log(this.bookHot)
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  width 100%
  text-align center
  font-size .32rem
</style>
