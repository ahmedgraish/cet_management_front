import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginMainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/teacher',
      name: 'teacherLogin',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'adminLogin',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StudentHome.vue')
    },
    {
      path: '/absenceRatio',
      name: 'absenceRatio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StudentAbsenceRatio.vue')
    },
    {
      path: '/grades',
      name: 'grades',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StudentGrade.vue')
    },
    {
      path: '/teacher/home',
      name: 'teacherHome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TeacherHome.vue')
    },
    {
      path: '/admin/home',
      name: 'adminHome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdminHome.vue')
    },
    {
      path: '/admin/create-student',
      name: 'adminCreateStudent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdminCreateStudent.vue')
    },
  ]
})

export default router
