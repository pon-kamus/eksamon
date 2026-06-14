<script setup>
import { Calendar as CalendarIcon, Clock, MapPin } from '@lucide/vue'

const schedule = [
  { day: 'Monday', classes: [
    { name: 'Mathematics', time: '08:00 - 09:30', room: '204', teacher: 'Mr. Harrison', color: 'bg-blue-500' },
    { name: 'Physics', time: '10:00 - 11:30', room: 'Lab 02', teacher: 'Ms. Sarah', color: 'bg-purple-500' },
  ]},
  { day: 'Tuesday', classes: [
    { name: 'English', time: '09:00 - 10:30', room: '101', teacher: 'Mrs. Gable', color: 'bg-emerald-500' },
    { name: 'History', time: '13:00 - 14:30', room: '305', teacher: 'Mr. Thompson', color: 'bg-orange-500' },
  ]},
  { day: 'Wednesday', classes: [
    { name: 'Mathematics', time: '08:00 - 09:30', room: '204', teacher: 'Mr. Harrison', color: 'bg-blue-500' },
    { name: 'Art', time: '11:00 - 12:30', room: 'Studio', teacher: 'Ms. Bloom', color: 'bg-pink-500' },
  ]},
]
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <div>
      <h1 class="text-3xl font-bold">Weekly Schedule</h1>
      <p class="text-zinc-500">Academic Year 2024/2025</p>
    </div>

    <div class="space-y-8">
      <div v-for="day in schedule" :key="day.day">
        <h3 class="text-lg font-bold mb-4 flex items-center">
          <CalendarIcon class="w-5 h-5 mr-2 text-zinc-400" />
          {{ day.day }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="cls in day.classes" :key="cls.name" class="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
            <div class="absolute left-0 top-0 bottom-0 w-1" :class="cls.color"></div>
            <div class="flex justify-between items-start mb-4">
              <h4 class="font-bold">{{ cls.name }}</h4>
              <span class="text-xs font-medium px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-500">{{ cls.room }}</span>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-zinc-500">
                <Clock class="w-4 h-4 mr-2" />
                {{ cls.time }}
              </div>
              <div class="flex items-center text-sm text-zinc-500">
                <MapPin class="w-4 h-4 mr-2" />
                {{ cls.teacher }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
