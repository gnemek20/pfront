import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/views/Landing.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/Shop.vue')
  },
  {
    path: '/shop/product',
    name: 'product',
    component: () => import('@/views/shop/Product.vue')
  },
  {
    path: '/shop/complete',
    name: 'complete',
    component: () => import('@/views/shop/Complete.vue')
  },
  {
    path: '/shop/cart',
    name: 'cart',
    component: () => import('@/views/shop/Cart.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/sign/In.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/sign/Up.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
