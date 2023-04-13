import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ViewAllStudent from '@/views/student/ViewAllStudent.vue'
import StudentVue from '@/views/student/StudentForm.vue'
import ViewStudent from '@/views/student/ViewStudent.vue'
import EditStudent from '@/views/student/EditStudent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'all-student',
    component: ViewAllStudent
  },
  {
    path: '/add-student',
    name: 'add-student',
    component: StudentVue
  },
  {
    path: '/view-student/:studentId',
    name: 'view-student',
    component: ViewStudent
  },
  {
    path: '/edit-student/:studentId',
    name: 'edit-student',
    component: EditStudent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
