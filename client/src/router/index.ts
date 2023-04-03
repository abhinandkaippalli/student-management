import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StudentVue from '@/views/StudenVue.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: StudentVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
