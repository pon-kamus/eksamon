<script setup>
import { Bell, Shield, Eye, Globe } from '@lucide/vue'
</script>

<template>
  <div class="max-w-4xl space-y-8">
    <div>
      <h1 class="text-3xl font-bold text-white">Settings</h1>
      <p class="text-zinc-500">Configure system-wide parameters and security</p>
    </div>

    <div class="space-y-6">
      <section class="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8">
        <div class="flex items-center space-x-3 mb-6">
          <Globe class="w-5 h-5 text-purple-500" />
          <h3 class="text-lg font-bold text-white">General Configuration</h3>
        </div>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-bold text-white">System Name</p>
              <p class="text-xs text-zinc-500">The public name of the portal</p>
            </div>
            <input type="text" value="SISWA.IO" class="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-purple-500" />
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-bold text-white">Maintenance Mode</p>
              <p class="text-xs text-zinc-500">Disable access for non-admin users</p>
            </div>
            <button class="w-10 h-5 bg-zinc-800 rounded-full relative transition-colors">
              <span class="absolute left-1 top-1 w-3 h-3 bg-zinc-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </section>

      <section class="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8">
        <div class="flex items-center space-x-3 mb-6">
          <Shield class="w-5 h-5 text-emerald-500" />
          <h3 class="text-lg font-bold text-white">Security</h3>
        </div>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-bold text-white">Two-Factor Authentication</p>
              <p class="text-xs text-zinc-500">Require MFA for all staff accounts</p>
            </div>
            <button class="w-10 h-5 bg-purple-600 rounded-full relative transition-colors">
              <span class="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-bold text-white">Session Timeout</p>
              <p class="text-xs text-zinc-500">Automatic logout after inactivity</p>
            </div>
            <select class="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-purple-500">
              <option>30 Minutes</option>
              <option>1 Hour</option>
              <option>4 Hours</option>
            </select>
          </div>
        </div>
      </section>
    </div>

    <div class="flex justify-end pt-4">
      <button class="px-8 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors">
        Save Changes
      </button>
    </div>
  </div>
</template>
