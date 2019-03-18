<template>
    <div>
        <book-detail :bookObj="bookHot[0]"/>
    </div>
</template>

<script>
import GetMessage from 'model/getmessage.js'
import BookDetail from 'components/BookDetail'
const messageSource = new GetMessage()

export default {
  components: {
    BookDetail
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
      console.log(this.bookHot[0])
    //   console.log(this.bookHot)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
