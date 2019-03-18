<template>
  <div class="header-container">
    <div class="left-container">
      <p class="number">NO.</p>
      <p class="id-number">{{this.$store.state.pageNow}}</p>
      <p class="line"></p>
      <div class="date-container">
        <p class="month">{{year}}</p>
        <p class="year">{{month}}</p>
      </div>
    </div>
    <div class="right-container">
        <like @choseLike='clickLike'></like>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Like from 'components/Like'
export default {
  components: {
    Like
  },
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      monthArr: ['一月', '二月', '三月', '四月', '五月',
        '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      year: moment().format('YYYY')
    }
  },
  computed: {
    month: function () {
      return this.monthArr[parseInt(moment().format('MM')) - 1]
    //   return this.monthArr[parseInt(moment().format('MM')) - 1]
    //   return 1
    }
  },
  methods: {
    clickLike (like) {
      console.log(like)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .header-container
      margin-top .2rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .left-container
        display flex
        flex-direction row
        align-items baseline
        .number
          margin-left .24rem
          font-size .48rem
        .id-number
          font-size .72rem
          vertical-align baseline
        .line
          height .48rem;
          margin 0 .07rem;
          border-left 1px solid black
        .date-container
          display flex
          flex-direction column-reverse
          color #2c2c2c
          .month
            font-size .28rem
          .year
            font-size .28rem
</style>
