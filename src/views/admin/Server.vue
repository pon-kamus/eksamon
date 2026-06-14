<script setup>
import { Server, Cpu, Zap, Globe } from '@lucide/vue'
</script>

<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-white">Infrastructure</h1>
        <p class="text-sm">Real-time server health and distribution</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
        <span class="text-xs font-bold uppercase tracking-widest text-emerald-500">All Systems Nominal</span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6">
        <div class="flex items-center space-x-3 mb-6">
          <Cpu class="w-5 h-5 text-purple-500" />
          <h3 class="text-sm font-bold uppercase tracking-widest text-white">CPU Load</h3>
        </div>
        <div class="text-4xl font-mono text-white mb-2">12.4%</div>
        <p class="text-xs text-zinc-500">Average across 4 instances</p>
      </div>

      <div class="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6">
        <div class="flex items-center space-x-3 mb-6">
          <Zap class="w-5 h-5 text-amber-500" />
          <h3 class="text-sm font-bold uppercase tracking-widest text-white">Memory</h3>
        </div>
        <div class="text-4xl font-mono text-white mb-2">4.2 GB</div>
        <p class="text-xs text-zinc-500">Total usage: 32%</p>
      </div>

      <div class="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6">
        <div class="flex items-center space-x-3 mb-6">
          <Globe class="w-5 h-5 text-blue-500" />
          <h3 class="text-sm font-bold uppercase tracking-widest text-white">Network</h3>
        </div>
        <div class="text-4xl font-mono text-white mb-2">842 Mb/s</div>
        <p class="text-xs text-zinc-500">Current throughput</p>
      </div>
    </div>

    <div class="bg-zinc-900/30 border border-zinc-900 rounded-3xl overflow-hidden">
      <div class="p-6 border-b border-zinc-900">
        <h3 class="text-white font-bold">Node Instances</h3>
      </div>
      <div class="p-0">
        <div v-for="node in ['US-East-1', 'EU-West-1', 'AP-South-1']" :key="node" class="px-6 py-4 flex items-center justify-between border-b border-zinc-900/50">
          <div class="flex items-center space-x-4">
            <Server class="w-5 h-5 text-zinc-600" />
            <div>
              <p class="text-sm font-bold text-white">{{ node }}</p>
              <p class="text-xs text-zinc-500">i-0a1b2c3d4e5f6g7h8</p>
            </div>
          </div>
          <div class="flex items-center space-x-8">
            <div class="text-right">
              <p class="text-xs text-zinc-500 uppercase tracking-widest">Latency</p>
              <p class="text-sm font-mono text-emerald-500">{{ Math.floor(Math.random() * 50) + 10 }}ms</p>
            </div>
            <div class="w-20 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-500 w-[85%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
