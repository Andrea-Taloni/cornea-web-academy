<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center">
          <img :src="logoImage" alt="CWA Logo" class="h-14 w-auto" />
        </div>
        <nav class="hidden md:flex space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-gray-700 hover:text-blue-600 transition"
          >
            {{ link.name }}
          </a>
        </nav>
        <button @click="toggleMobileMenu" class="md:hidden p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logoImage from '@/assets/images/cwa-logo.png'

const navLinks = ref([
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Live Surgery', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Contact', href: '#' },
])

const toggleMobileMenu = () => {
  // TODO: Implement mobile menu toggle
  console.log('Mobile menu toggled')
}
</script>
