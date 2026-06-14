<script setup>
import { ref, onMounted } from 'vue'
import { Plus, Filter, FileText } from '@lucide/vue'
import pb from '../../lib/pocketbase'

const assignments = ref([])
const isLoading = ref(true)

const fetchAssignments = async () => {
  try {
    const records = await pb.collection('assignments').getFullList({
      sort: '-created',
    })
    assignments.value = records
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchAssignments()
})
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold">Assignments</h1>
        <p class="text-zinc-500">Create and manage student assessments</p>
      </div>
      <div class="flex items-center space-x-3">
        <button class="flex items-center space-x-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
          <Filter class="w-4 h-4" />
          <span class="text-sm font-medium">Filter</span>
        </button>
        <button class="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors">
          <Plus class="w-4 h-4" />
          <span class="text-sm font-medium">New Assignment</span>
        </button>
      </div>
    </div>

    <div v-if="isLoading" class="space-y-4">
      <div v-for="i in 3" :key="i" class="h-24 bg-zinc-100 dark:bg-zinc-900 animate-pulse rounded-2xl"></div>
    </div>

    <div v-else-if="assignments.length === 0" class="text-center py-12 text-zinc-500">
      No assignments found.
    </div>

    <div v-else class="grid grid-cols-1 gap-4">
      <div v-for="assign in assignments" :key="assign.id" class="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
            <FileText class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-lg">{{ assign.title }}</h3>
            <p class="text-sm text-zinc-500">{{ assign.course }} • Due {{ assign.due }}</p>
          </div>
        </div>

        <div class="flex items-center justify-between md:justify-end gap-8">
          <div class="text-center">
            <p class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Submissions</p>
            <p class="font-mono">{{ assign.submissions }}</p>
          </div>

          <div class="flex items-center space-x-4">
            <span
              class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
              :class="{
                'bg-blue-100 dark:bg-blue-900/30 text-blue-600': assign.status === 'Active',
                'bg-amber-100 dark:bg-amber-900/30 text-amber-600': assign.status === 'Grading',
                'bg-zinc-100 dark:bg-zinc-800/30 text-zinc-500': assign.status === 'Draft'
              }"
            >
              {{ assign.status }}
            </span>
            <button class="text-sm font-bold text-emerald-600 hover:underline">Manage</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
