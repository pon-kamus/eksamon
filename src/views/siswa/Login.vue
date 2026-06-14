<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, User, Lock, ArrowRight } from '@lucide/vue'
import pb from '../../lib/pocketbase'

const router = useRouter()
const email = ref('student@school.edu')
const password = ref('password123')
const error = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  error.value = ''
  try {
    const authData = await pb.collection('users').authWithPassword(email.value, password.value)
    if (authData.record.role !== 'student') {
      pb.authStore.clear()
      error.value = 'Unauthorized: Access restricted to students.'
      return
    }
    router.push('/siswa/dashboard')
  } catch (err) {
    error.value = 'Invalid email or password.'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-zinc-50 dark:bg-black">
    <div class="w-full max-w-md">
      <router-link to="/" class="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6 sm:mb-8 transition-colors">
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back to Home
      </router-link>

      <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div class="mb-6 sm:mb-8">
          <h1 class="text-xl sm:text-2xl font-semibold mb-2">Student Login</h1>
          <p class="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">Welcome back! Please enter your details.</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div v-if="error" class="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 text-xs font-medium border border-red-100 dark:border-red-900/30">
            {{ error }}
          </div>

          <div>
            <label class="block text-sm font-medium mb-1.5 ml-1">Email Address</label>
            <div class="relative">
              <User class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                v-model="email"
                type="email"
                placeholder="student@school.edu"
                required
                class="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm sm:text-base focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1.5 ml-1">Password</label>
            <div class="relative">
              <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                v-model="password"
                type="password"
                placeholder="••••••••"
                required
                class="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm sm:text-base focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-3 rounded-xl transition-colors mt-4 flex items-center justify-center group text-sm sm:text-base"
          >
            {{ isLoading ? 'Signing In...' : 'Sign In' }}
            <ArrowRight v-if="!isLoading" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
