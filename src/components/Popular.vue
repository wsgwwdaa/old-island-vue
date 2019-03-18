<template>
  <div>
    <header-bar/>
  <div class="container">
    <music v-show="pageData.type===200" :content="pageData.content" :imageSrc="pageData.image" :musicSrc="pageData.url"/>
    <moive v-show="pageData.type!==200" :content="pageData.content" :imageSrc="pageData.image"></moive>
    <skip class="skip" @changePage="clickSkip" :last="last" :next="next" :title="pageData.title"></skip>
  </div>
  </div>
</template>

<script>
import Moive from 'components/Moive'
import GetMessage from 'model/getmessage.js'
import Skip from 'components/Skip'
import Music from 'components/Music'
import HeaderBar from 'components/HeaderBar'
const messageSource = new GetMessage()
export default {
  components: {
    Moive,
    Skip,
    Music,
    HeaderBar
  },
  data () {
    return {
      pageMax: null,
      pageData: {},
      last: false,
      next: true,
      pageIndex: 0
    }
  },
  methods: {
    clickSkip (page) {
      if (page === 'next') {
        this.cacheDataNext(this.pageIndex)
      } else {
        this.cacheDataLast(this.pageIndex)
      }
    },
    // 判断能否跳转上一页或下一页
    skipWhere (index) {
      if (index === 1) {
        this.next = false
      } else {
        this.next = true
      }
      if (index === this.pageMax) {
        this.last = false
      } else {
        this.last = true
      }
    },
    // 取下一页，缓存
    cacheDataNext (pageIndex) {
      // console.log(pageIndex)
      if (!localStorage.hasOwnProperty(`id${pageIndex - 1}`)) {
        messageSource.getNext(pageIndex).then((res) => {
          this.pageData = res.data
          localStorage.setItem(`id${pageIndex - 1}`, JSON.stringify(this.pageData))
          this.skipWhere(this.pageData.index)
        })
      } else {
        this.pageData = JSON.parse(localStorage.getItem(`id${pageIndex - 1}`))
        this.skipWhere(this.pageData.index)
      }
      this.pageIndex--
      this.$store.commit('changePage', this.pageIndex)
    },

    // 取上一页，缓存
    cacheDataLast (pageIndex) {
      if (!localStorage.hasOwnProperty(`id${pageIndex + 1}`)) {
        messageSource.getLast(pageIndex).then((res) => {
          this.pageData = res.data
          localStorage.setItem(`id${pageIndex + 1}`, JSON.stringify(this.pageData))
          this.skipWhere(this.pageData.index)
        })
      } else {
        this.pageData = JSON.parse(localStorage.getItem(`id${pageIndex + 1}`))
        this.skipWhere(this.pageData.index)
      }
      this.pageIndex++
      this.$store.commit('changePage', this.pageIndex)
    }
  },

  // 请求回数据再缓存，真他妈是个大煞笔
  //     let myMessage = messageSource.getLatest().then((res) => {
  //       return new Promise((resolve) => {
  //         if (!localStorage.hasOwnProperty(`id${res.data.id}`)) {
  //           localStorage.setItem(`id${res.data.id}`, JSON.stringify(res.data))
  //         }
  //         let strData = localStorage.getItem(`id${res.data.id}`)
  //         //   this.pageData = JSON.parse(strData)
  //         resolve(JSON.parse(strData))
  //       })
  //     })
  //     myMessage.then((res) => {
  //       this.data = res
  //       console.log(this.data)
  //     })
  //   }
  mounted () {
    messageSource.getLatest().then(res => {
      this.pageData = res.data
      this.pageIndex = this.pageMax = res.data.index
      this.$store.commit('changePage', this.pageIndex)
      if (!localStorage.hasOwnProperty(`id${res.data.index}`)) {
        localStorage.setItem(`id${res.data.index}`, JSON.stringify(res.data))
      }
      // console.log(this.pageData)
      // console.log(res.data)
    })
    // this.pageData = JSON.parse(localStorage.getItem('id7'))
    // console.log(this.pageData)
  },
  activated () {
    console.log('activated')
  }
}
</script>

      // if (!localStorage.hasOwnProperty(`id${res.data.id}`)) {
      //   localStorage.setItem(`id${res.data.id}`, JSON.stringify(res.data))
      // }
      // let strData = localStorage.getItem(`id${res.data.id}`)
      // //   this.pageData = JSON.parse(strData)
      // let mydata = JSON.parse(strData)
      // //   this.pageData = mydata
      // console.log(this.pageData)
      // console.log(mydata)

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  align-items center
  .skip
    margin-top 1.4rem
</style>
