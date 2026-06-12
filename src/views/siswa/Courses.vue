<script setup>
import { BookOpen, Search, PlayCircle } from 'lucide-vue-next'

const courses = [
  { id: 1, name: 'Advanced Mathematics', teacher: 'Mr. Harrison', progress: 75, image: 'https://images.unsplash.com/photo-1509228468518-180dd4822955?w=400&h=250&fit=crop' },
  { id: 2, name: 'Theoretical Physics', teacher: 'Ms. Sarah', progress: 45, image: 'https://images.unsplash.com/photo-1636466483764-4e45c7a4cbda?w=400&h=250&fit=crop' },
  { id: 3, name: 'English Literature', teacher: 'Mrs. Gable', progress: 90, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=250&fit=crop' },
]
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold">My Courses</h1>
        <p class="text-zinc-500">You are enrolled in 3 courses this semester</p>
      </div>
      <div class="relative">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        <input
          type="text"
          placeholder="Search courses..."
          class="pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl w-full md:w-64 outline-none focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="course in courses" :key="course.id" class="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow">
        <img :src="course.image" :alt="course.name" class="w-full h-40 object-cover" />
        <div class="p-6">
          <h3 class="font-bold text-lg mb-1">{{ course.name }}</h3>
          <p class="text-sm text-zinc-500 mb-4">{{ course.teacher }}</p>

          <div class="space-y-2">
            <div class="flex justify-between text-xs font-medium">
              <span class="text-zinc-500">Progress</span>
              <span>{{ course.progress }}%</span>
            </div>
            <div class="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-full bg-blue-600" :style="{ width: course.progress + '%' }"></div>
            </div>
          </div>

          <button class="w-full mt-6 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-600 hover:text-white transition-colors group">
            <PlayCircle class="w-4 h-4 group-hover:fill-current" />
            <span class="font-medium">Continue Learning</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
