<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Live Surgery Sessions</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Join our interactive live surgical broadcasts and learn from real-time procedures
          </p>
        </div>
      </div>
    </section>

    <!-- Live Now Section -->
    <section class="py-16 bg-red-50" v-if="liveNow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-xl overflow-hidden">
          <div class="bg-red-600 text-white px-6 py-3 flex items-center">
            <div class="w-3 h-3 bg-white rounded-full animate-pulse mr-3"></div>
            <span class="font-bold text-lg">LIVE NOW</span>
          </div>
          <div class="p-6">
            <div class="grid lg:grid-cols-2 gap-8">
              <div>
                <div class="h-96 bg-black rounded-lg flex items-center justify-center">
                  <span class="text-white text-xl">Live Stream Player</span>
                </div>
              </div>
              <div>
                <h2 class="text-2xl font-bold mb-4">{{ liveNow.title }}</h2>
                <p class="text-gray-600 mb-4">{{ liveNow.description }}</p>
                <div class="space-y-2 mb-6">
                  <p><strong>Surgeon:</strong> {{ liveNow.surgeon }}</p>
                  <p><strong>Procedure:</strong> {{ liveNow.procedure }}</p>
                  <p><strong>Started:</strong> {{ liveNow.startTime }}</p>
                </div>
                <button
                  class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Join Live Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Sessions -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold mb-8">Upcoming Live Sessions</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="session in upcomingSessions"
            :key="session.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div class="h-48 bg-gray-300 relative">
              <div class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded">
                {{ session.date }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ session.title }}</h3>
              <p class="text-gray-600 mb-4">{{ session.description }}</p>
              <div class="space-y-1 text-sm text-gray-500 mb-4">
                <p><strong>Time:</strong> {{ session.time }}</p>
                <p><strong>Duration:</strong> {{ session.duration }}</p>
                <p><strong>Surgeon:</strong> {{ session.surgeon }}</p>
              </div>
              <button
                class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Sessions -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold mb-8">Past Sessions Archive</h2>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <table class="w-full">
            <thead class="bg-gray-50 border-b">
              <tr>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Surgeon
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Duration
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="session in pastSessions" :key="session.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ session.date }}
                </td>
                <td class="px-6 py-4 text-sm text-gray-900">
                  {{ session.title }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ session.surgeon }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ session.duration }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <a href="#" class="text-blue-600 hover:text-blue-800"> Watch Recording </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref } from 'vue'

const liveNow = ref({
  title: 'DMEK Surgery - Complex Case',
  description: 'Live demonstration of DMEK surgery on a patient with Fuchs endothelial dystrophy',
  surgeon: 'Prof. Massimo Busin',
  procedure: 'DMEK',
  startTime: '10:00 AM CET',
})

const upcomingSessions = ref([
  {
    id: 1,
    date: 'Jan 15, 2025',
    time: '14:00 CET',
    duration: '90 min',
    title: 'Advanced DALK Techniques',
    description: 'Live surgery demonstrating advanced big-bubble technique',
    surgeon: 'Prof. Massimo Busin',
  },
  {
    id: 2,
    date: 'Jan 22, 2025',
    time: '15:00 CET',
    duration: '60 min',
    title: 'UT-DSAEK Preparation',
    description: 'Step-by-step ultrathin graft preparation',
    surgeon: 'Dr. Stefano Madi',
  },
  {
    id: 3,
    date: 'Jan 29, 2025',
    time: '14:00 CET',
    duration: '120 min',
    title: 'Complex Corneal Reconstruction',
    description: 'Multi-step surgical approach for severe corneal disease',
    surgeon: 'Prof. Massimo Busin',
  },
])

const pastSessions = ref([
  {
    id: 1,
    date: '2024-12-20',
    title: 'DSAEK for Pseudophakic Bullous Keratopathy',
    surgeon: 'Prof. Massimo Busin',
    duration: '75 min',
  },
  {
    id: 2,
    date: '2024-12-15',
    title: 'DALK in Keratoconus',
    surgeon: 'Dr. Paolo Santorum',
    duration: '90 min',
  },
  {
    id: 3,
    date: '2024-12-08',
    title: 'DMEK: Tips and Tricks',
    surgeon: 'Prof. Massimo Busin',
    duration: '60 min',
  },
])
</script>
