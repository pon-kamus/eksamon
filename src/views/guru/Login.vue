<script setup>
import { ArrowLeft, Mail, Lock, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-zinc-50 dark:bg-black">
    <div class="w-full max-w-md">
      <router-link to="/" class="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6 sm:mb-8 transition-colors">
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back to Home
      </router-link>

      <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div class="mb-6 sm:mb-8 text-center">
          <div class="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock class="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
          </div>
          <h1 class="text-xl sm:text-2xl font-semibold mb-2">Teacher Login</h1>
          <p class="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">Access your faculty portal</p>
        </div>

        <form @submit.prevent="$router.push('/guru/dashboard')" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1.5 ml-1">Email Address</label>
            <div class="relative">
              <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="email"
                placeholder="teacher@school.edu"
                class="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm sm:text-base focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
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
                class="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm sm:text-base focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl transition-colors mt-4 flex items-center justify-center group text-sm sm:text-base"
          >
            Sign In to Portal
            <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
