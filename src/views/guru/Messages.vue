<script setup>
import { Search, Send, Paperclip } from '@lucide/vue'

const contacts = [
  { id: 1, name: 'Principal Miller', role: 'Admin', active: true, lastMsg: 'The schedule for next week...' },
  { id: 2, name: 'Parent of Alex Rivers', role: 'Parent', active: false, lastMsg: 'Thank you for the update.' },
  { id: 3, name: 'Sarah Chen', role: 'Student', active: true, lastMsg: 'I have a question about...' },
]
</script>

<template>
  <div class="max-w-6xl mx-auto h-[calc(100vh-10rem)] flex flex-col md:flex-row gap-6">
    <!-- Sidebar -->
    <div class="w-full md:w-80 flex flex-col bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div class="p-6 border-b border-zinc-100 dark:border-zinc-800">
        <h2 class="text-xl font-bold mb-4">Messages</h2>
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input type="text" placeholder="Search chats..." class="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500/20" />
        </div>
      </div>

      <div class="flex-grow overflow-y-auto">
        <button v-for="contact in contacts" :key="contact.id" class="w-full p-4 flex items-start space-x-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-left border-b border-zinc-50 dark:border-zinc-800/50">
          <div class="relative">
            <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xs font-bold text-emerald-600">
              {{ contact.name[0] }}
            </div>
            <div v-if="contact.active" class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full"></div>
          </div>
          <div class="flex-grow min-w-0">
            <div class="flex justify-between items-baseline">
              <h4 class="font-bold text-sm truncate">{{ contact.name }}</h4>
              <span class="text-[10px] text-zinc-400 uppercase">{{ contact.role }}</span>
            </div>
            <p class="text-xs text-zinc-500 truncate">{{ contact.lastMsg }}</p>
          </div>
        </button>
      </div>
    </div>

    <!-- Chat Area (Desktop) / Hidden on Mobile in this layout for simplicity -->
    <div class="hidden md:flex flex-grow flex-col bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div class="p-6 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-bold text-emerald-600">P</div>
          <div>
            <h3 class="font-bold">Principal Miller</h3>
            <p class="text-xs text-emerald-500 font-medium">Online</p>
          </div>
        </div>
      </div>

      <div class="flex-grow p-6 flex flex-col justify-end space-y-4 overflow-y-auto">
        <div class="flex flex-col space-y-1 items-start">
          <div class="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
            Hello Emily, have you finished the progress report for Grade 12-A?
          </div>
          <span class="text-[10px] text-zinc-400 ml-1">09:15 AM</span>
        </div>

        <div class="flex flex-col space-y-1 items-end">
          <div class="bg-emerald-600 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
            Yes, I just uploaded it to the system. You can check the dashboard.
          </div>
          <span class="text-[10px] text-zinc-400 mr-1">09:22 AM</span>
        </div>
      </div>

      <div class="p-6 border-t border-zinc-100 dark:border-zinc-800">
        <div class="flex items-center space-x-2">
          <button class="p-2 text-zinc-400 hover:text-zinc-600"><Paperclip class="w-5 h-5" /></button>
          <input type="text" placeholder="Type a message..." class="flex-grow bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20" />
          <button class="p-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors">
            <Send class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile fallback -->
    <div class="md:hidden flex-grow flex items-center justify-center p-8 text-center text-zinc-500 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
      Select a conversation to start messaging.
    </div>
  </div>
</template>
