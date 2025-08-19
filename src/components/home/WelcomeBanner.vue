<template>
  <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">{{ $t('home.welcome.title') }}</h2>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {{ $t('home.welcome.description') }}
        </p>
        <div class="space-x-4">
          <router-link
            to="/live-surgery"
            class="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 group"
          >
            <span class="text-lg">{{ $t('home.welcome.exploreLiveSurgery') }}</span>
            <div class="flex items-center gap-2">
              <span class="text-sm opacity-80 group-hover:opacity-100">{{ $t('home.welcome.learnMore') }}</span>
              <svg
                class="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
