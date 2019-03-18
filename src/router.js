import Vue from 'vue'
import Router from 'vue-router'
import Popular from 'components/Popular.vue'
import Book from 'components/Book.vue'
import Like from 'components/Like.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'popular',
    component: Popular
  },
  {
    path: '/book',
    name: 'book',
    component: Book
  },
  {
    path: '/like',
    name: 'like',
    component: Like
  }]
})
