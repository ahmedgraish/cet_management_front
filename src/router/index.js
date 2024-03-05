import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginMainView.vue'
import { useUserStore } from '@/stores/UserStore';


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
      component: () => import('../views/StudentHome.vue'),
      beforeEnter: (to, from, next) => {
      const user =useUserStore();
        if ((
          from.path === '/' ||
          from.path === '/absenceRatio' ||
          from.path === '/grades') && user.userAuth) {
          next();
        } else {
          next('/');
        }
      },
     
    },
    {
      path: '/absenceRatio',
      name: 'absenceRatio',
      component: () => import('../views/StudentAbsenceRatio.vue'),
      beforeEnter: (to, from, next) => {
        if (from.path === '/home'||from.path === '/grades') {
          next();
        } else {
          next('/');
        }
      },
    },
    {
      path: '/grades',
      name: 'grades',
      component: () => import('../views/StudentGrade.vue'),
      beforeEnter: (to, from, next) => {
        if (from.path === '/home'||from.path === '/absenceRatio') {
          next();
        } else {
          next('/');
        }
      },
    },
    {
      path: '/teacher/home',
      name: 'teacherHome',
      component: () => import('../views/TeacherHome.vue'),
      beforeEnter: (to, from, next) => {
        const user =useUserStore();
        if ((
          from.path === '/teacher' ||
          from.path === '/teacher/attendence'||
          from.path === '/teacher/subjects' ||
          from.path === '/teacher/grades')
           && user.userAuth) {
          next();
        } else {
          next('/teacher');
        }
      },
    },
    {
      path: '/teacher/attendence',
      name: 'StudentAttendence',
      component: () => import('../views/StudentAttendence.vue'),
      beforeEnter: (to, from, next) => {
        if (from.path === '/teacher/home') {
          next();
        } else {
          next('/teacher');
        }
      },
    },
    {
      path: '/teacher/subjects',
      name: 'TeacherSubjects',
      component: () => import('../views/TeacherSubjects.vue'),
      beforeEnter: (to, from, next) => {
        if (from.path === '/teacher/home'||from.path === '/teacher/attendence'||from.path === '/teacher/grades') {
          next();
        } else {
          next('/teacher');
        }
      },
    },
    {
      path: '/teacher/grades',
      name: 'TeacherGrades',
      component: () => import('../views/TeacherStudentGrades.vue'),
      beforeEnter: (to, from, next) => {
        if (from.path === '/teacher/subjects') {
          next();
        } else {
          next('/teacher');
        }
      },
    },
    {
      path: '/admin/home',
      name: 'adminHome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdminHome.vue')
    },
  ]
})

export default router
