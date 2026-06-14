<script setup>
import { ref, onMounted } from 'vue'
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Bell,
  LogOut,
  Menu,
  X
} from '@lucide/vue'
import pb from '../lib/pocketbase'

const isSidebarOpen = ref(false)
const user = ref({ name: 'Alex Rivers', role: 'student' })

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const navItems = [
  { name: 'Dashboard', path: '/siswa/dashboard', icon: LayoutDashboard },
  { name: 'My Courses', path: '/siswa/courses', icon: BookOpen },
  { name: 'Schedule', path: '/siswa/schedule', icon: Calendar },
]

onMounted(() => {
  if (pb.authStore.isValid) {
    user.value = pb.authStore.model
  }
})
</script>

<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-black flex">
    <!-- Sidebar Overlay -->
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
    ></div>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed lg:static inset-y-0 left-0 w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col z-50 transition-transform duration-300 lg:translate-x-0',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="p-6 flex items-center justify-between">
        <div class="flex items-center space-x-3 text-blue-600">
          <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <LayoutDashboard class="w-5 h-5 text-white" />
          </div>
          <span class="font-bold text-zinc-900 dark:text-white tracking-tight">SISWA.IO</span>
        </div>
        <button @click="isSidebarOpen = false" class="lg:hidden text-zinc-500">
          <X class="w-6 h-6" />
        </button>
      </div>

      <nav class="flex-grow p-4 space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="isSidebarOpen = false"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors"
          :class="[
            $route.path === item.path
              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium'
              : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'
          ]"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span>{{ item.name }}</span>
        </router-link>
      </nav>

      <div class="p-4 mt-auto border-t border-zinc-200 dark:border-zinc-800">
        <router-link to="/siswa" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-red-500 transition-colors w-full text-left">
          <LogOut class="w-5 h-5" />
          <span>Sign Out</span>
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col overflow-hidden w-full">
      <!-- Topbar -->
      <header class="h-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 lg:px-8 flex items-center justify-between">
        <div class="flex items-center">
          <button @click="toggleSidebar" class="mr-4 lg:hidden text-zinc-500">
            <Menu class="w-6 h-6" />
          </button>
          <h2 class="text-lg lg:text-xl font-semibold truncate">Student Dashboard</h2>
        </div>

        <div class="flex items-center space-x-3 lg:space-x-6">
          <button class="relative text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
            <Bell class="w-5 h-5" />
            <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950"></span>
          </button>
          <div class="flex items-center space-x-3">
            <div class="text-right hidden sm:block">
              <p class="text-sm font-medium">{{ user.name }}</p>
              <p class="text-xs text-zinc-500 capitalize">{{ user.role }}</p>
            </div>
            <div class="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden border-2 border-white dark:border-zinc-900">
              <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <div class="flex-grow overflow-y-auto p-4 lg:p-8">
        <router-view />
      </div>
    </main>
  </div>
</template>
