<script setup>
import { ref } from 'vue'
import {
  Shield,
  Users,
  Settings,
  Database,
  Activity,
  Server,
  LogOut,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-vue-next'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const navItems = [
  { name: 'Overview', path: '/admin/dashboard', icon: Activity },
  { name: 'Users', path: '/admin/users', icon: Users },
  { name: 'Database', path: '/admin/database', icon: Database },
  { name: 'Server', path: '/admin/server', icon: Server },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
]
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-400 flex">
    <!-- Sidebar Overlay -->
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/80 z-40 lg:hidden"
    ></div>

    <!-- Mini/Full Sidebar -->
    <aside
      :class="[
        'fixed lg:static inset-y-0 left-0 w-64 lg:w-20 border-r border-zinc-900 bg-zinc-950 flex flex-col items-center py-8 z-50 transition-transform duration-300 lg:translate-x-0',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-10 shrink-0">
        <Shield class="w-6 h-6 text-white" />
      </div>

      <nav class="flex flex-col space-y-8 items-center w-full px-4">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="isSidebarOpen = false"
          class="transition-colors flex items-center space-x-4 lg:space-x-0 w-full lg:w-auto"
          :class="$route.path === item.path ? 'text-purple-500' : 'hover:text-white'"
        >
          <component :is="item.icon" class="w-6 h-6 shrink-0" />
          <span class="lg:hidden font-medium text-sm">{{ item.name }}</span>
        </router-link>
      </nav>

      <div class="mt-auto flex flex-col items-center space-y-8 w-full px-4">
        <router-link to="/admin" class="hover:text-red-500 transition-colors flex items-center space-x-4 lg:space-x-0 w-full lg:w-auto">
          <LogOut class="w-6 h-6 shrink-0" />
          <span class="lg:hidden font-medium text-sm text-zinc-500">Sign Out</span>
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col min-w-0">
      <!-- Header -->
      <header class="h-20 border-b border-zinc-900 flex items-center justify-between px-4 lg:px-8 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
        <div class="flex items-center space-x-4">
          <button @click="toggleSidebar" class="lg:hidden text-zinc-500">
            <Menu class="w-6 h-6" />
          </button>
          <h1 class="text-sm lg:text-lg font-bold text-white tracking-tight uppercase">System Center</h1>
        </div>

        <div class="flex items-center space-x-3 lg:space-x-6">
          <div class="relative hidden sm:block">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="text"
              placeholder="Search logs..."
              class="bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm w-40 lg:w-64 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
            />
          </div>
          <button class="relative">
            <Bell class="w-5 h-5" />
            <span class="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full"></span>
          </button>
          <div class="w-8 h-8 bg-zinc-800 rounded-full border border-zinc-700"></div>
        </div>
      </header>

      <!-- Content -->
      <div class="flex-grow overflow-y-auto p-4 lg:p-8">
        <router-view />
      </div>
    </main>
  </div>
</template>
