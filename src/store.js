import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageNow: 1,
    pagePlayMusic: Number
  },
  mutations: {
    changePage (state, pageIndex) {
      state.pageNow = pageIndex
    },
    pagePlay (state, pageIndex) {
      state.pagePlayMusic = pageIndex
    },
    pageStopPlay (state) {
      state.pagePlayMusic = null
    }
  },
  actions: {
  }
})
