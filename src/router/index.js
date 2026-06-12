import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // SISWA ROUTES
  {
    path: '/siswa',
    name: 'SiswaLogin',
    component: () => import('../views/siswa/Login.vue')
  },
  {
    path: '/siswa/dashboard',
    component: () => import('../layouts/SiswaLayout.vue'),
    children: [
      {
        path: '',
        name: 'SiswaOverview',
        component: () => import('../views/siswa/Overview.vue')
      },
      {
        path: '/siswa/courses',
        name: 'SiswaCourses',
        component: () => import('../views/siswa/Courses.vue')
      },
      {
        path: '/siswa/schedule',
        name: 'SiswaSchedule',
        component: () => import('../views/siswa/Schedule.vue')
      }
    ]
  },
  // GURU ROUTES
  {
    path: '/guru',
    name: 'GuruLogin',
    component: () => import('../views/guru/Login.vue')
  },
  {
    path: '/guru/dashboard',
    component: () => import('../layouts/GuruLayout.vue'),
    children: [
      {
        path: '',
        name: 'GuruOverview',
        component: () => import('../views/guru/Overview.vue')
      },
      {
        path: '/guru/students',
        name: 'GuruStudents',
        component: () => import('../views/guru/Students.vue')
      },
      {
        path: '/guru/assignments',
        name: 'GuruAssignments',
        component: () => import('../views/guru/Assignments.vue')
      },
      {
        path: '/guru/messages',
        name: 'GuruMessages',
        component: () => import('../views/guru/Messages.vue')
      }
    ]
  },
  // ADMIN ROUTES
  {
    path: '/admin',
    name: 'AdminLogin',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/admin/dashboard',
    component: () => import('../layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminOverview',
        component: () => import('../views/admin/Overview.vue')
      },
      {
        path: '/admin/users',
        name: 'AdminUsers',
        component: () => import('../views/admin/Users.vue')
      },
      {
        path: '/admin/database',
        name: 'AdminDatabase',
        component: () => import('../views/admin/Database.vue')
      },
      {
        path: '/admin/server',
        name: 'AdminServer',
        component: () => import('../views/admin/Server.vue')
      },
      {
        path: '/admin/settings',
        name: 'AdminSettings',
        component: () => import('../views/admin/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
