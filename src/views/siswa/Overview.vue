<script setup>
import { ref, onMounted } from 'vue'
import {
  BookOpen,
  ChevronRight,
  TrendingUp,
  Clock,
  GraduationCap
} from '@lucide/vue'
import pb from '../../lib/pocketbase'

const coursesCount = ref(0)
const userName = ref('Alex Rivers')

const fetchDashboardData = async () => {
  try {
    const result = await pb.collection('courses').getList(1, 1)
    coursesCount.value = result.totalItems

    if (pb.authStore.isValid) {
      userName.value = pb.authStore.model.name || 'Student'
    }
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  fetchDashboardData()
})
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <!-- Welcome Card -->
    <div class="relative overflow-hidden rounded-3xl bg-blue-600 p-6 lg:p-10 text-white">
      <div class="relative z-10">
        <h1 class="text-2xl lg:text-3xl font-bold mb-2">Good morning, {{ userName }}!</h1>
        <p class="text-blue-100">You are enrolled in {{ coursesCount }} courses this semester. Stay focused!</p>
      </div>
      <div class="absolute right-0 bottom-0 opacity-10 -mr-10 -mb-10">
        <GraduationCap class="w-48 h-48 lg:w-64 lg:h-64" />
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <p class="text-sm text-zinc-500 mb-1">Courses</p>
        <p class="text-2xl font-bold">{{ coursesCount }}</p>
      </div>
      <div class="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 sm:col-span-2 lg:col-span-1">
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
</template>
