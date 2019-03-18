<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <button-tab></button-tab>
  </div>
</template>

<script>
import ButtonTab from 'components/ButtonTab'
export default {
  components: {
    ButtonTab
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>
