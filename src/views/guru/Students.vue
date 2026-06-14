<script setup>
import { ref, onMounted } from 'vue'
import { Search, UserPlus, Mail } from '@lucide/vue'
import pb from '../../lib/pocketbase'

const students = ref([])
const isLoading = ref(true)

const fetchStudents = async () => {
  try {
    const records = await pb.collection('users').getFullList({
      filter: 'role = "student"',
      sort: '-created',
    })
    students.value = records
  } catch (err) {
    console.error('Error fetching students:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchStudents()
})

const getInitials = (name) => {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold">My Students</h1>
        <p class="text-zinc-500">Overview of students across your active courses</p>
      </div>
      <div class="flex items-center space-x-3">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input type="text" placeholder="Search students..." class="pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
        </div>
        <button class="p-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors">
          <UserPlus class="w-5 h-5" />
        </button>
      </div>
    </div>

    <div class="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden overflow-x-auto">
      <table class="w-full text-left min-w-[700px]">
        <thead class="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
          <tr>
            <th class="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Student Name</th>
            <th class="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Role</th>
            <th class="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Email</th>
            <th class="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-100 dark:divide-zinc-800">
          <tr v-if="isLoading">
            <td colspan="4" class="px-6 py-8 text-center text-zinc-500">Loading students...</td>
          </tr>
          <tr v-else-if="students.length === 0">
            <td colspan="4" class="px-6 py-8 text-center text-zinc-500">No students found.</td>
          </tr>
          <tr v-for="student in students" :key="student.id">
            <td class="px-6 py-4 font-medium flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs">
                {{ getInitials(student.name) }}
              </div>
              <span>{{ student.name || 'Anonymous' }}</span>
            </td>
            <td class="px-6 py-4 text-sm text-zinc-500 capitalize">{{ student.role }}</td>
            <td class="px-6 py-4 text-sm text-zinc-500">{{ student.email }}</td>
            <td class="px-6 py-4">
              <button class="p-2 hover:text-emerald-600 transition-colors">
                <Mail class="w-4 h-4" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
