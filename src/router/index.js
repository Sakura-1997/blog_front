import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/admin/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
