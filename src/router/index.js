import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/siswa',
    name: 'SiswaLogin',
    component: () => import('../views/siswa/Login.vue')
  },
  {
    path: '/siswa/dashboard',
    name: 'SiswaDashboard',
    component: () => import('../views/siswa/Dashboard.vue')
  },
  {
    path: '/guru',
    name: 'GuruLogin',
    component: () => import('../views/guru/Login.vue')
  },
  {
    path: '/guru/dashboard',
    name: 'GuruDashboard',
    component: () => import('../views/guru/Dashboard.vue')
  },
  {
    path: '/admin',
    name: 'AdminLogin',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/admin/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
