import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
  },
  {
    path: "/productDetail",
    name: "ProductDetail",
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: "/productList",
    name: "ProductList",
    component: () => import('../views/ProductList.vue')
  },
  {
    path: "/productList2",
    name: "ProductList2",
    component: () => import('../views/ProductList2.vue')
  },
  
  
]

const router = new VueRouter({
  routes,
})

export default router;
