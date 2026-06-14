<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Shield, Lock, ArrowRight } from 'lucide-vue-next'
import pb from '../../lib/pocketbase'

const router = useRouter()
const identifier = ref('admin@school.edu')
const masterKey = ref('password123')
const error = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  error.value = ''
  try {
    const authData = await pb.collection('users').authWithPassword(identifier.value, masterKey.value)
    if (authData.record.role !== 'admin') {
      pb.authStore.clear()
      error.value = 'ACCESS DENIED: Administrative privileges required.'
      return
    }
    router.push('/admin/dashboard')
  } catch (err) {
    error.value = 'AUTHENTICATION FAILED: Invalid credentials.'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-zinc-950">
    <div class="w-full max-w-md">
      <router-link to="/" class="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-300 mb-6 sm:mb-8 transition-colors">
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back to Home
      </router-link>

      <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div class="mb-6 sm:mb-8">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-900/20">
            <Shield class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h1 class="text-xl sm:text-2xl font-bold text-white mb-2">Admin Center</h1>
          <p class="text-sm sm:text-base text-zinc-400">System administration login</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div v-if="error" class="p-3 rounded-xl bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20 uppercase tracking-tight">
            {{ error }}
          </div>

          <div>
            <label class="block text-sm font-medium text-zinc-300 mb-1.5 ml-1">Admin Identifier</label>
            <input
              v-model="identifier"
              type="text"
              placeholder="root@system"
              required
              class="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all placeholder:text-zinc-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-zinc-300 mb-1.5 ml-1">Master Key</label>
            <div class="relative">
              <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                v-model="masterKey"
                type="password"
                placeholder="••••••••"
                required
                class="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl py-2.5 sm:py-3 pl-10 pr-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all placeholder:text-zinc-600"
              />
            </div>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all mt-4 flex items-center justify-center group text-sm sm:text-base"
          >
            {{ isLoading ? 'VERIFYING...' : 'Authenticate' }}
            <ArrowRight v-if="!isLoading" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>

      <p class="text-center mt-6 sm:mt-8 text-[10px] sm:text-xs text-zinc-600 uppercase tracking-widest font-bold">
        Secured by AES-256 Encryption
      </p>
    </div>
  </div>
</template>
