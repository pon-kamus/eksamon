<script setup>
import { ref, onMounted } from 'vue'
import { Search, UserPlus, Filter } from '@lucide/vue'
import pb from '../../lib/pocketbase'

const users = ref([])
const isLoading = ref(true)

const fetchUsers = async () => {
  try {
    const records = await pb.collection('users').getFullList({
      sort: '-created',
    })
    users.value = records
  } catch (err) {
    console.error('Error fetching users:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchUsers()
})

const getInitials = (name) => {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-white">User Management</h1>
        <p class="text-sm">Manage all system users and permissions</p>
      </div>
      <div class="flex items-center space-x-3">
        <button class="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
          <Filter class="w-5 h-5" />
        </button>
        <button class="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          <UserPlus class="w-4 h-4" />
          <span class="text-sm font-bold">Add User</span>
        </button>
      </div>
    </div>

    <div class="bg-zinc-900/30 border border-zinc-900 rounded-3xl overflow-hidden">
      <div class="p-4 border-b border-zinc-900">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
          <input type="text" placeholder="Search by name, email or role..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-purple-500" />
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left min-w-[600px]">
          <thead class="bg-zinc-950/50 text-zinc-500">
            <tr>
              <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">User</th>
              <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Role</th>
              <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Email</th>
              <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Created</th>
              <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-zinc-900">
            <tr v-if="isLoading">
              <td colspan="5" class="px-6 py-8 text-center text-zinc-500">Loading users...</td>
            </tr>
            <tr v-else-if="users.length === 0">
              <td colspan="5" class="px-6 py-8 text-center text-zinc-500">No users found.</td>
            </tr>
            <tr v-for="user in users" :key="user.id" class="hover:bg-zinc-900/20 transition-colors">
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-xs font-bold text-white border border-zinc-700">
                    {{ getInitials(user.name) }}
                  </div>
                  <span class="text-sm font-medium text-white">{{ user.name || 'Anonymous' }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-sm capitalize">{{ user.role }}</td>
              <td class="px-6 py-4 text-sm">{{ user.email }}</td>
              <td class="px-6 py-4 text-sm">{{ new Date(user.created).toLocaleDateString() }}</td>
              <td class="px-6 py-4 text-right">
                <button class="text-xs font-bold hover:text-white transition-colors">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
