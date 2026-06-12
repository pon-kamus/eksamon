<script setup>
import { ArrowLeft, User, Lock, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6">
    <div class="w-full max-w-md">
      <router-link to="/" class="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition-colors">
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back to Home
      </router-link>

      <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm">
        <div class="mb-8">
          <h1 class="text-2xl font-semibold mb-2">Student Login</h1>
          <p class="text-zinc-500 dark:text-zinc-400">Welcome back! Please enter your details.</p>
        </div>

        <form @submit.prevent="$router.push('/siswa/dashboard')" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1.5 ml-1">Student ID</label>
            <div class="relative">
              <User class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="ST-123456"
                class="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1.5 ml-1">Password</label>
            <div class="relative">
              <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="password"
                placeholder="••••••••"
                class="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors mt-4 flex items-center justify-center group"
          >
            Sign In
            <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
