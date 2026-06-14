<script setup>
import { ref, onMounted } from 'vue'
import { BookOpen, Search, PlayCircle } from 'lucide-vue-next'
import pb from '../../lib/pocketbase'

const courses = ref([])
const isLoading = ref(true)

const fetchCourses = async () => {
  try {
    const records = await pb.collection('courses').getFullList({
      sort: '-created',
    })
    courses.value = records
  } catch (err) {
    console.error('Error fetching courses:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCourses()
})
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold">My Courses</h1>
        <p class="text-zinc-500">You are enrolled in {{ courses.length }} courses this semester</p>
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

    <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="i in 3" :key="i" class="h-64 bg-zinc-100 dark:bg-zinc-900 animate-pulse rounded-2xl"></div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
