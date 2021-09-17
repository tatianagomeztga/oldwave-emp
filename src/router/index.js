import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/slider',
    name: 'Slider',
    component: () => import(/* webpackChunkName: "about" */ '../components/slider.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
