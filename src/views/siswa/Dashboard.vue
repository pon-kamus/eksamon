<script setup>
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Bell,
  LogOut,
  ChevronRight,
  TrendingUp,
  Clock
} from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-black flex">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col">
      <div class="p-6">
        <div class="flex items-center space-x-3 text-blue-600">
          <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <LayoutDashboard class="w-5 h-5 text-white" />
          </div>
          <span class="font-bold text-zinc-900 dark:text-white tracking-tight">SISWA.IO</span>
        </div>
      </div>

      <nav class="flex-grow p-4 space-y-1">
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium">
          <LayoutDashboard class="w-5 h-5" />
          <span>Dashboard</span>
        </a>
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
          <BookOpen class="w-5 h-5" />
          <span>My Courses</span>
        </a>
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
          <Calendar class="w-5 h-5" />
          <span>Schedule</span>
        </a>
      </nav>

      <div class="p-4 mt-auto border-t border-zinc-200 dark:border-zinc-800">
        <router-link to="/siswa" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-red-500 transition-colors w-full text-left">
          <LogOut class="w-5 h-5" />
          <span>Sign Out</span>
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col overflow-hidden">
      <!-- Topbar -->
      <header class="h-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-8 flex items-center justify-between">
        <h2 class="text-xl font-semibold">Student Dashboard</h2>
        <div class="flex items-center space-x-6">
          <button class="relative text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
            <Bell class="w-5 h-5" />
            <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950"></span>
          </button>
          <div class="flex items-center space-x-3">
            <div class="text-right">
              <p class="text-sm font-medium">Alex Rivers</p>
              <p class="text-xs text-zinc-500">Grade 11-A</p>
            </div>
            <div class="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden border-2 border-white dark:border-zinc-900">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <div class="flex-grow overflow-y-auto p-8">
        <div class="max-w-6xl mx-auto space-y-8">
          <!-- Welcome Card -->
          <div class="relative overflow-hidden rounded-3xl bg-blue-600 p-10 text-white">
            <div class="relative z-10">
              <h1 class="text-3xl font-bold mb-2">Good morning, Alex!</h1>
              <p class="text-blue-100">You have 3 assignments due this week. Stay focused!</p>
            </div>
            <div class="absolute right-0 bottom-0 opacity-10 -mr-10 -mb-10">
              <GraduationCap class="w-64 h-64" />
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  <TrendingUp class="w-5 h-5" />
                </div>
                <span class="text-xs font-medium text-emerald-500">+2.4%</span>
              </div>
              <p class="text-sm text-zinc-500 mb-1">Current GPA</p>
              <p class="text-2xl font-bold">3.85</p>
            </div>
            <div class="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                  <BookOpen class="w-5 h-5" />
                </div>
                <span class="text-xs font-medium text-zinc-400">Total</span>
              </div>
              <p class="text-sm text-zinc-500 mb-1">Course Progress</p>
              <p class="text-2xl font-bold">78%</p>
            </div>
            <div class="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                  <Clock class="w-5 h-5" />
                </div>
                <span class="text-xs font-medium text-zinc-400">Attendance</span>
              </div>
              <p class="text-sm text-zinc-500 mb-1">Monthly Average</p>
              <p class="text-2xl font-bold">96.2%</p>
            </div>
          </div>

          <!-- Schedule & Assignments -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section>
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold">Today's Schedule</h3>
                <button class="text-xs text-blue-600 font-medium">View Full</button>
              </div>
              <div class="space-y-4">
                <div class="flex items-center space-x-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div class="w-16 text-center border-r border-zinc-100 dark:border-zinc-800 pr-4">
                    <p class="text-sm font-bold">08:00</p>
                    <p class="text-[10px] text-zinc-400 uppercase tracking-wider">AM</p>
                  </div>
                  <div class="flex-grow">
                    <p class="font-medium">Mathematics</p>
                    <p class="text-xs text-zinc-500">Room 204 • Mr. Harrison</p>
                  </div>
                  <ChevronRight class="w-4 h-4 text-zinc-300" />
                </div>
                <div class="flex items-center space-x-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div class="w-16 text-center border-r border-zinc-100 dark:border-zinc-800 pr-4">
                    <p class="text-sm font-bold">10:30</p>
                    <p class="text-[10px] text-zinc-400 uppercase tracking-wider">AM</p>
                  </div>
                  <div class="flex-grow">
                    <p class="font-medium">Physics</p>
                    <p class="text-xs text-zinc-500">Lab 02 • Ms. Sarah</p>
                  </div>
                  <ChevronRight class="w-4 h-4 text-zinc-300" />
                </div>
              </div>
            </section>

            <section>
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold">Recent Assignments</h3>
                <button class="text-xs text-blue-600 font-medium">See All</button>
              </div>
              <div class="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-100 dark:divide-zinc-800">
                <div class="p-4 flex items-center justify-between">
                  <div>
                    <p class="text-sm font-medium">Calculus Homework</p>
                    <p class="text-xs text-zinc-500">Due in 2 days</p>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-[10px] font-bold uppercase tracking-wider">Pending</span>
                </div>
                <div class="p-4 flex items-center justify-between">
                  <div>
                    <p class="text-sm font-medium">Literature Essay</p>
                    <p class="text-xs text-zinc-500">Submitted yesterday</p>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">Graded</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
