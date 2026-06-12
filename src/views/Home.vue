<script setup>
import { GraduationCap, BookOpen, Settings } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6 text-center">
    <header class="mb-12">
      <h1 class="text-4xl font-light tracking-tight mb-2">School Portal</h1>
      <p class="text-zinc-500 dark:text-zinc-400">Select your role to continue</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
      <router-link
        to="/siswa"
        class="group p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md"
      >
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <GraduationCap class="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 class="text-xl font-medium mb-2">Student</h2>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Access your grades, schedules, and assignments.</p>
        </div>
      </router-link>

      <router-link
        to="/guru"
        class="group p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md"
      >
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <BookOpen class="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 class="text-xl font-medium mb-2">Teacher</h2>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Manage your classes, students, and curriculum.</p>
        </div>
      </router-link>

      <router-link
        to="/admin"
        class="group p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md"
      >
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Settings class="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 class="text-xl font-medium mb-2">Administrator</h2>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Full system control and user management.</p>
        </div>
      </router-link>
    </div>

    <footer class="mt-20 text-xs text-zinc-400">
      &copy; 2025 Minimalist School. All rights reserved.
    </footer>
  </div>
</template>
