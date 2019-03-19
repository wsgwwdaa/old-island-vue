<template>
    <div class="comment-container">
        <p class="comment">{{comment}}</p>
        <p class="nums">+{{nums}}</p>
    </div>
</template>

<script>
export default {
  props: {
    comment: String,
    nums: Number
  }
}
</script>

<style lang="stylus" scoped>
.comment-container
  padding 0 .1rem
  display inline-flex
  flex-direction row
  align-items center
  background-color #e6e6e6
  .comment
    font-size .3rem
  .nums
    margin-left .1rem
    font-size .2rem
</style>
