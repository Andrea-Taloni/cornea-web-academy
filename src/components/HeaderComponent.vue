// src/components/HeaderComponent.vue
<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="block">
            <img
              :src="logoImage"
              alt="CWA Logo"
              class="h-14 w-auto transform hover:scale-105 transition-transform duration-300"
            />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <DesktopNavigation />

        <!-- Auth Buttons -->
        <AuthButtons class="hidden md:flex" />

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-90': mobileMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <MobileNavigation :open="mobileMenuOpen" @close="mobileMenuOpen = false" />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logoImage from '@/assets/images/cwa-logo.png'
import DesktopNavigation from './header/DesktopNavigation.vue'
import MobileNavigation from './header/MobileNavigation.vue'
import AuthButtons from './header/LoginRegister.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
