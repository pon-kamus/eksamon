<script setup>
import { ref, onMounted } from 'vue'
import { Activity, Bell, Search, Menu } from '@lucide/vue'
import pb from '../../lib/pocketbase'

const metrics = ref([
  { label: 'CPU Usage', value: '12.4%', history: [20, 30, 25, 40, 35, 45, 40, 50] },
  { label: 'Memory', value: '4.2 GB', history: [40, 45, 42, 48, 50, 47, 49, 52] },
  { label: 'Disk', value: '68%', history: [68, 68, 68, 68, 68, 68, 68, 68] },
  { label: 'Network', value: '842 Mb/s', history: [10, 80, 30, 90, 50, 70, 40, 100] },
])

const logs = ref([])
const isLoading = ref(true)

const fetchLogs = async () => {
  try {
    const records = await pb.collection('audit_logs').getList(1, 10, {
      sort: '-created',
    })
    logs.value = records.items
  } catch (err) {
    console.error('Error fetching logs:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchLogs()
})
</script>

<template>
  <div class="space-y-8">
    <!-- System Metrics -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="metric in metrics" :key="metric.label" class="bg-zinc-900/50 border border-zinc-900 p-6 rounded-2xl">
        <p class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{{ metric.label }}</p>
        <div class="flex items-end justify-between">
          <h3 class="text-2xl font-mono text-white">{{ metric.value }}</h3>
          <div class="h-8 w-24 bg-zinc-800 rounded flex items-end overflow-hidden">
            <div
              v-for="(h, j) in metric.history"
              :key="j"
              class="flex-grow bg-purple-500/30 mx-[1px]"
              :style="{ height: h + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- System Logs -->
    <div class="bg-zinc-900/30 border border-zinc-900 rounded-3xl overflow-hidden">
      <div class="p-6 border-b border-zinc-900 flex items-center justify-between">
        <h3 class="text-white font-bold">Audit Logs</h3>
        <span class="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">System Live</span>
      </div>

      <div v-if="isLoading" class="p-8 flex justify-center">
        <div class="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div v-else class="p-0 overflow-x-auto">
        <div v-for="log in logs" :key="log.id" class="px-6 py-4 flex items-center space-x-4 border-b border-zinc-900/50 hover:bg-zinc-900/20 transition-colors min-w-[500px]">
          <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
          <p class="text-sm font-mono flex-grow">
            <span class="text-zinc-600">[{{ new Date(log.created).toLocaleString() }}]</span>
            <span class="text-zinc-400 ml-4">{{ log.event }} from {{ log.user }} ({{ log.ip }})</span>
          </p>
          <button class="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Details</button>
        </div>
      </div>
      <div class="p-4 text-center">
        <button class="text-xs font-bold hover:text-purple-500 transition-colors">Load More Logs</button>
      </div>
    </div>
  </div>
</template>
