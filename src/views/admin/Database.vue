<script setup>
import { Database, HardDrive, RefreshCw } from '@lucide/vue'
</script>

<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-white">Database Status</h1>
        <p class="text-sm">Monitor database performance and clusters</p>
      </div>
      <button class="p-2 text-zinc-400 hover:text-white transition-colors">
        <RefreshCw class="w-5 h-5" />
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8">
        <div class="flex items-center space-x-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
            <Database class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-white">Main Cluster</h3>
            <p class="text-xs text-zinc-500">PostgreSQL 15.4 • Running</p>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <div class="flex justify-between text-sm mb-2">
              <span>Storage Used</span>
              <span class="text-white">42.8 / 100 GB</span>
            </div>
            <div class="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-full bg-blue-500 w-[42.8%]"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-2">
              <span>Connections</span>
              <span class="text-white">124 / 500</span>
            </div>
            <div class="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-500 w-[24.8%]"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8">
        <div class="flex items-center space-x-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
            <HardDrive class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-white">Backup Status</h3>
            <p class="text-xs text-zinc-500">Last backup: 4 hours ago</p>
          </div>
        </div>

        <div class="space-y-4">
          <div v-for="i in 3" :key="i" class="flex items-center justify-between p-4 bg-zinc-950/50 rounded-xl border border-zinc-900">
            <div class="flex items-center space-x-3 text-sm">
              <span class="text-zinc-500 font-mono">backup_v{{124+i}}.sql.gz</span>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-zinc-600">842 MB</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
