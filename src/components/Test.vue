<template>
    <div @click="clickTest">
        Test
    </div>
</template>

<script>
export default {
  data () {
    return {
      a: 100
    }
  },
  methods: {
    clickTest () {
      console.log(this.$router)
    }
  }
}
</script>
