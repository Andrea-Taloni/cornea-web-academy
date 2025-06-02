<template>
  <section class="py-16 bg-red-50" v-if="liveSession">
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
              <h2 class="text-2xl font-bold mb-4">{{ liveSession.title }}</h2>
              <p class="text-gray-600 mb-4">{{ liveSession.description }}</p>
              <div class="space-y-2 mb-6">
                <p><strong>Surgeon:</strong> {{ liveSession.surgeon }}</p>
                <p><strong>Procedure:</strong> {{ liveSession.procedure }}</p>
                <p><strong>Started:</strong> {{ liveSession.startTime }}</p>
              </div>
              <button
                class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Join Live Surgery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  liveSession: {
    type: Object,
    default: null,
  },
})
</script>

<style scoped>
/* Pulsating animation for the live indicator */
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
