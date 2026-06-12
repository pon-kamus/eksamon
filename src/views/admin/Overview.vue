<script setup>
</script>

<template>
  <div class="space-y-8">
    <!-- System Metrics -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="i in 4" :key="i" class="bg-zinc-900/50 border border-zinc-900 p-6 rounded-2xl">
        <p class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Metric 0{{i}}</p>
        <div class="flex items-end justify-between">
          <h3 class="text-2xl font-mono text-white">{{ (Math.random() * 100).toFixed(1) }}%</h3>
          <div class="h-8 w-24 bg-zinc-800 rounded flex items-end overflow-hidden">
            <div
              v-for="j in 8"
              :key="j"
              class="flex-grow bg-purple-500/30"
              :style="{ height: Math.random() * 100 + '%' }"
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
      <div class="p-0 overflow-x-auto">
        <div v-for="i in 6" :key="i" class="px-6 py-4 flex items-center space-x-4 border-b border-zinc-900/50 hover:bg-zinc-900/20 transition-colors min-w-[500px]">
          <div class="w-2 h-2 rounded-full" :class="i % 3 === 0 ? 'bg-amber-500' : 'bg-zinc-700'"></div>
          <p class="text-sm font-mono flex-grow">
            <span class="text-zinc-600">[2025-06-12 09:42:{{10+i}}]</span>
            <span class="text-zinc-400 ml-4">User LOGIN_SUCCESS from IP 192.168.1.{{10+i}}</span>
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
