import { createRouter, createWebHistory } from 'vue-router'
import Index from './../components/Index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "setting" */'./../views/Setting')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */"./../views/History")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
