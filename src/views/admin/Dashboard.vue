<script setup>
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
  Menu
} from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-400 flex">
    <!-- Mini Sidebar -->
    <aside class="w-20 border-r border-zinc-900 bg-zinc-950 flex flex-col items-center py-8">
      <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-10">
        <Shield class="w-6 h-6 text-white" />
      </div>

      <nav class="flex flex-col space-y-8">
        <a href="#" class="text-purple-500"><Activity class="w-6 h-6" /></a>
        <a href="#" class="hover:text-white transition-colors"><Users class="w-6 h-6" /></a>
        <a href="#" class="hover:text-white transition-colors"><Database class="w-6 h-6" /></a>
        <a href="#" class="hover:text-white transition-colors"><Server class="w-6 h-6" /></a>
        <a href="#" class="hover:text-white transition-colors"><Settings class="w-6 h-6" /></a>
      </nav>

      <router-link to="/admin" class="mt-auto hover:text-red-500 transition-colors">
        <LogOut class="w-6 h-6" />
      </router-link>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col">
      <!-- Header -->
      <header class="h-20 border-b border-zinc-900 flex items-center justify-between px-8 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
        <div class="flex items-center space-x-4">
          <Menu class="w-5 h-5 text-zinc-500" />
          <h1 class="text-lg font-bold text-white tracking-tight">SYSTEM OVERVIEW</h1>
        </div>

        <div class="flex items-center space-x-6">
          <div class="relative hidden md:block">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="text"
              placeholder="Search logs, users..."
              class="bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
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
      <div class="p-8 space-y-8">
        <!-- System Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div v-for="i in 4" :key="i" class="bg-zinc-900/50 border border-zinc-900 p-6 rounded-2xl">
            <p class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Metric 0{{i}}</p>
            <div class="flex items-end justify-between">
              <h3 class="text-2xl font-mono text-white">{{ (Math.random() * 100).toFixed(1) }}%</h3>
              <div class="h-8 w-24 bg-zinc-800 rounded flex items-end overflow-hidden">
                <div
                  v-for="j in 8"
                  :key="j"
                  class="flex-grow bg-purple-500/30"
                  :style="{ height: Math.random() * 100 + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- System Logs -->
        <div class="bg-zinc-900/30 border border-zinc-900 rounded-3xl overflow-hidden">
          <div class="p-6 border-b border-zinc-900 flex items-center justify-between">
            <h3 class="text-white font-bold">Audit Logs</h3>
            <span class="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">System Live</span>
          </div>
          <div class="p-0">
            <div v-for="i in 6" :key="i" class="px-6 py-4 flex items-center space-x-4 border-b border-zinc-900/50 hover:bg-zinc-900/20 transition-colors">
              <div class="w-2 h-2 rounded-full" :class="i % 3 === 0 ? 'bg-amber-500' : 'bg-zinc-700'"></div>
              <p class="text-sm font-mono flex-grow">
                <span class="text-zinc-600">[2025-06-12 09:42:{{10+i}}]</span>
                <span class="text-zinc-400 ml-4">User LOGIN_SUCCESS from IP 192.168.1.{{10+i}}</span>
              </p>
              <button class="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Details</button>
            </div>
          </div>
          <div class="p-4 text-center">
            <button class="text-xs font-bold hover:text-purple-500 transition-colors">Load More Logs</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
