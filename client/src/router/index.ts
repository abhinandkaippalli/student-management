import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StudentVue from '@/views/student/StudentForm.vue'
import ViewStudent from '@/views/student/ViewStudent.vue'
import EditStudent from '@/views/student/EditStudent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'add-student',
    component: StudentVue
  },
  {
    path: '/view-student',
    name: 'view-student',
    component: ViewStudent
  },
  {
    path: '/edit-student',
    name: 'edit-student',
    component: EditStudent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
