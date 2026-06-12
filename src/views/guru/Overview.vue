<script setup>
import {
  MoreHorizontal,
  Plus
} from 'lucide-vue-next'
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl lg:text-3xl font-bold">My Active Courses</h1>
        <p class="text-zinc-500">Managing 4 active classes for Fall 2025</p>
      </div>
      <button class="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black px-4 py-2.5 rounded-xl font-medium flex items-center justify-center hover:opacity-90 transition-opacity">
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
      <div class="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden overflow-x-auto">
        <table class="w-full text-left min-w-[600px]">
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
</template>
