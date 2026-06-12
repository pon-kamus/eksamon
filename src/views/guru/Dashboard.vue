<script setup>
import {
  Users,
  BookOpen,
  ClipboardList,
  Bell,
  LogOut,
  MoreHorizontal,
  Plus,
  MessageSquare
} from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-black flex">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col">
      <div class="p-6">
        <div class="flex items-center space-x-3 text-emerald-600">
          <div class="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
            <BookOpen class="w-5 h-5 text-white" />
          </div>
          <span class="font-bold text-zinc-900 dark:text-white tracking-tight">FACULTY.IO</span>
        </div>
      </div>

      <nav class="flex-grow p-4 space-y-1">
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 font-medium">
          <BookOpen class="w-5 h-5" />
          <span>Courses</span>
        </a>
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
          <Users class="w-5 h-5" />
          <span>Students</span>
        </a>
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
          <ClipboardList class="w-5 h-5" />
          <span>Assignments</span>
        </a>
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
          <MessageSquare class="w-5 h-5" />
          <span>Messages</span>
        </a>
      </nav>

      <div class="p-4 mt-auto border-t border-zinc-200 dark:border-zinc-800">
        <router-link to="/guru" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-red-500 transition-colors w-full text-left">
          <LogOut class="w-5 h-5" />
          <span>Sign Out</span>
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col overflow-hidden">
      <!-- Topbar -->
      <header class="h-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-8 flex items-center justify-between">
        <h2 class="text-xl font-semibold">Faculty Dashboard</h2>
        <div class="flex items-center space-x-6">
          <button class="relative text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
            <Bell class="w-5 h-5" />
            <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950"></span>
          </button>
          <div class="flex items-center space-x-3 border-l border-zinc-200 dark:border-zinc-800 pl-6">
            <div class="text-right">
              <p class="text-sm font-medium">Prof. Emily Stone</p>
              <p class="text-xs text-zinc-500">Mathematics Dept.</p>
            </div>
            <div class="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden border-2 border-white dark:border-zinc-900">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <div class="flex-grow overflow-y-auto p-8">
        <div class="max-w-6xl mx-auto space-y-8">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold">My Active Courses</h1>
              <p class="text-zinc-500">Managing 4 active classes for Fall 2025</p>
            </div>
            <button class="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black px-4 py-2.5 rounded-xl font-medium flex items-center hover:opacity-90 transition-opacity">
              <Plus class="w-4 h-4 mr-2" />
              New Course
            </button>
          </div>

          <!-- Course Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col">
              <div class="flex items-start justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  <span class="font-bold">M1</span>
                </div>
                <button class="text-zinc-400 hover:text-zinc-900"><MoreHorizontal /></button>
              </div>
              <h3 class="text-lg font-bold mb-1">Advanced Calculus</h3>
              <p class="text-sm text-zinc-500 mb-6">Grade 12-A • 28 Students</p>

              <div class="space-y-3 mt-auto">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-zinc-500">Curriculum Progress</span>
                  <span class="font-medium">65%</span>
                </div>
                <div class="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500 w-[65%]"></div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col">
              <div class="flex items-start justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                  <span class="font-bold">M2</span>
                </div>
                <button class="text-zinc-400 hover:text-zinc-900"><MoreHorizontal /></button>
              </div>
              <h3 class="text-lg font-bold mb-1">Linear Algebra</h3>
              <p class="text-sm text-zinc-500 mb-6">Grade 11-B • 32 Students</p>

              <div class="space-y-3 mt-auto">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-zinc-500">Curriculum Progress</span>
                  <span class="font-medium">42%</span>
                </div>
                <div class="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div class="h-full bg-emerald-500 w-[42%]"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pending Tasks -->
          <section>
            <h3 class="text-xl font-bold mb-4">Pending for Review</h3>
            <div class="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <table class="w-full text-left">
                <thead class="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                  <tr>
                    <th class="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Assignment</th>
                    <th class="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Course</th>
                    <th class="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Submissions</th>
                    <th class="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-100 dark:divide-zinc-800">
                  <tr>
                    <td class="px-6 py-4 font-medium">Derivatives Quiz</td>
                    <td class="px-6 py-4 text-sm text-zinc-500">Calculus</td>
                    <td class="px-6 py-4 text-sm">24/28</td>
                    <td class="px-6 py-4">
                      <button class="text-emerald-600 text-sm font-bold hover:underline">Grade Now</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 font-medium">Matrix Operations</td>
                    <td class="px-6 py-4 text-sm text-zinc-500">Linear Algebra</td>
                    <td class="px-6 py-4 text-sm">12/32</td>
                    <td class="px-6 py-4">
                      <button class="text-zinc-400 text-sm font-bold cursor-not-allowed">Review Later</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>
