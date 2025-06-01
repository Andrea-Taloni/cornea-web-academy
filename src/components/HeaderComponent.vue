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
        <nav class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="nav-link">Home</router-link>

          <!-- Surgery Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center group">
              Surgery
              <svg
                class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <!-- Dropdown Menu with Animation -->
            <div class="dropdown-menu">
              <div class="py-1">
                <a
                  v-for="(surgery, index) in surgeryTypes"
                  :key="surgery"
                  href="#"
                  class="dropdown-item"
                  :style="{ animationDelay: `${index * 50}ms` }"
                >
                  <span class="relative z-10">{{ surgery }}</span>
                </a>
              </div>
            </div>
          </div>

          <router-link to="/publications" class="nav-link">Publications</router-link>
          <router-link to="/live-sessions" class="nav-link">Live Sessions</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </nav>

        <!-- Auth Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button class="auth-button-outline">Login</button>
          <button class="auth-button-filled">Register</button>
        </div>

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

      <!-- Mobile Menu with Animation -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <div v-show="mobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white shadow-lg">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <router-link to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">
              Home
            </router-link>

            <!-- Mobile Surgery Accordion -->
            <div>
              <button
                @click="mobileSurgeryOpen = !mobileSurgeryOpen"
                class="mobile-nav-link w-full flex justify-between items-center"
              >
                Surgery
                <svg
                  class="w-4 h-4 transition-transform duration-300"
                  :class="{ 'rotate-180': mobileSurgeryOpen }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <div v-show="mobileSurgeryOpen" class="pl-6 space-y-1 mt-1">
                  <a
                    v-for="surgery in surgeryTypes"
                    :key="surgery"
                    href="#"
                    class="mobile-dropdown-item"
                  >
                    {{ surgery }}
                  </a>
                </div>
              </transition>
            </div>

            <router-link to="/publications" class="mobile-nav-link" @click="mobileMenuOpen = false">
              Publications
            </router-link>
            <router-link
              to="/live-sessions"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              Live Sessions
            </router-link>
            <router-link to="/about" class="mobile-nav-link" @click="mobileMenuOpen = false">
              About Us
            </router-link>
            <router-link to="/contacts" class="mobile-nav-link" @click="mobileMenuOpen = false">
              Contacts
            </router-link>

            <div class="pt-4 space-y-2">
              <button class="mobile-auth-button-outline">Login</button>
              <button class="mobile-auth-button-filled">Register</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoImage from '@/assets/images/cwa-logo.png'

const mobileMenuOpen = ref(false)
const mobileSurgeryOpen = ref(false)

const surgeryTypes = ref(['DALK', 'DMEK', 'DSAEK', 'UT-DSAEK', 'SALK'])

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileSurgeryOpen.value = false
  }
}
</script>

<style scoped>
/* Navigation Link Styles */
.nav-link {
  @apply text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2;
}

/* Dropdown Menu Styles */
.dropdown-menu {
  @apply absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible
         transform -translate-y-2 transition-all duration-200 ease-out z-50;
}

/* Show dropdown on hover */
.group:hover .dropdown-menu {
  @apply opacity-100 visible translate-y-0;
}

/* Dropdown Item Styles */
.dropdown-item {
  @apply block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600
         transition-all duration-200 relative overflow-hidden;
}

/* Dropdown item animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group:hover .dropdown-item {
  animation: fadeInUp 0.3s ease-out forwards;
}

/* Dropdown item hover effect */
.dropdown-item::before {
  content: '';
  @apply absolute left-0 top-0 h-full w-0 bg-blue-100 transition-all duration-300 -z-10;
}

.dropdown-item:hover::before {
  @apply w-full;
}

/* Auth Button Styles */
.auth-button-outline {
  @apply px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50
         transition-all duration-200 font-medium;
}

.auth-button-filled {
  @apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700
         transition-all duration-200 font-medium transform hover:scale-105;
}

/* Mobile Navigation Styles */
.mobile-nav-link {
  @apply block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600
         hover:bg-gray-50 rounded-md transition-colors duration-200;
}

.mobile-dropdown-item {
  @apply block py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50
         rounded-md transition-colors duration-200;
}

/* Mobile Auth Button Styles */
.mobile-auth-button-outline {
  @apply w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg
         hover:bg-gray-50 transition-colors duration-200 font-medium;
}

.mobile-auth-button-filled {
  @apply w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700
         transition-colors duration-200 font-medium;
}

/* Router Link Active State */
.router-link-active {
  @apply text-blue-600;
}
</style>
