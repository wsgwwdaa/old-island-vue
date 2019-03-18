<template>
  <div class="container">
    <div class="image-container">
      <img :class="['music-img',pagePlay?'rotation':'']" :src="imageSrc">
      <img
        @click="playMusic"
        class="playing-paused"
        v-if="pagePlay"
        :src="playingSrc"
      >
      <img @click="playMusic" class="playing-paused" v-else :src="pausedSrc">
    </div>
    <p>{{content}}</p>
    <audio ref="audio"></audio>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    musicSrc: String,
    content: String
  },
  data () {
    return {
      playingSrc: require('../../public/music-image/palying.png'),
      pausedSrc: require('../../public/music-image/paused.png'),
      musicObj: Object,
      pageNow: Number
    }
  },
  computed: {
    pagePlay () {
      return (this.$store.state.pageNow === this.$store.state.pagePlayMusic)
    }
  },
  mounted () {
    this.musicObj = this.$refs.audio
    // console.log(1111)
    // console.log(this.musicSrc)
  },
  methods: {
    // store 里pageNow为当前页面 pagePlayMusic为播放音乐页面，两者相等显示播放
    playMusic () {
      console.log(this.$store.state.pageNow, this.$store.state.pagePlayMusic)
      this.pageNow = this.$store.state.pageNow
      console.log(this.musicObj)
      if (this.musicObj.src !== this.musicSrc) {
        this.musicObj.src = this.musicSrc
      }
      if (this.musicObj.paused) {
        this.$store.commit('pagePlay', this.pageNow)
        this.musicObj.play()
      } else {
        this.$store.commit('pageStopPlay')
        this.musicObj.pause()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  width 100%
  height 8rem
  overflow hidden
  .image-container
    position relative
    .music-img
      width 3.75rem
      height 3.75rem
      border-radius 50%
    .playing-paused
      position absolute
      width 1.5rem
      height 1.5rem
      left 1.125rem
      top 1.125rem
      opacity 0.5
  p
    display inline-block
    font-size 0.32rem

.rotation {
  // -webkit-transform: rotate(360deg);
  animation: rotation 12s linear infinite;
  -moz-animation: rotation 12s linear infinite;
  -webkit-animation: rotation 12s linear infinite;
  -o-animation: rotation 12s linear infinite;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
