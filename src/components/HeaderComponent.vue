<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <img
            :src="logoImage"
            alt="CWA Logo"
            class="h-14 w-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#" class="nav-link">Home</a>

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

          <a href="#" class="nav-link">Publications</a>
          <a href="#" class="nav-link">Live Sessions</a>
          <a href="#" class="nav-link">Contacts</a>
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
            <a href="#" class="mobile-nav-link"> Home </a>

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

            <a href="#" class="mobile-nav-link"> Publications </a>
            <a href="#" class="mobile-nav-link"> Live Sessions </a>
            <a href="#" class="mobile-nav-link"> Contacts </a>

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
/* Desktop Navigation Links */
.nav-link {
  @apply text-gray-700 font-medium relative px-1 py-2 transition-all duration-300;
  @apply hover:text-blue-600;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

/* Dropdown Menu */
.dropdown-menu {
  @apply absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg;
  @apply opacity-0 invisible translate-y-2 transition-all duration-300;
  @apply group-hover:opacity-100 group-hover:visible group-hover:translate-y-0;
  @apply border border-gray-200;
}

/* Dropdown Items */
.dropdown-item {
  @apply relative block px-4 py-3 text-sm text-gray-700 transition-all duration-200;
  @apply hover:bg-gray-50 hover:text-blue-600;
  @apply first:rounded-t-lg last:rounded-b-lg;
  @apply border-l-2 border-transparent hover:border-blue-600;
  animation: slideIn 0.3s ease-out forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.dropdown-item::before {
  content: '';
  @apply absolute left-0 top-0 bottom-0 w-1 bg-blue-600;
  @apply transform scale-y-0 transition-transform duration-200 origin-top;
}

.dropdown-item:hover::before {
  @apply scale-y-100;
}

/* Auth Buttons */
.auth-button-outline {
  @apply text-gray-700 font-medium px-5 py-2 rounded-lg border-2 border-gray-300;
  @apply hover:border-blue-600 hover:text-blue-600 hover:shadow-md;
  @apply transition-all duration-300 transform hover:scale-105;
}

.auth-button-filled {
  @apply bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium px-5 py-2 rounded-lg;
  @apply hover:from-blue-700 hover:to-blue-800 hover:shadow-lg;
  @apply transition-all duration-300 transform hover:scale-105;
}

/* Mobile Navigation */
.mobile-nav-link {
  @apply block px-3 py-2 text-base font-medium text-gray-700 rounded-md;
  @apply hover:text-blue-600 hover:bg-blue-50;
  @apply transition-all duration-200;
}

.mobile-dropdown-item {
  @apply block px-3 py-2 text-sm text-gray-600 rounded-md;
  @apply hover:text-blue-600 hover:bg-gray-50;
  @apply transition-all duration-200;
  @apply border-l-2 border-transparent hover:border-blue-600 ml-2;
}

.mobile-auth-button-outline {
  @apply w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md;
  @apply border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600;
  @apply transition-all duration-200;
}

.mobile-auth-button-filled {
  @apply w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-md;
  @apply hover:from-blue-700 hover:to-blue-800;
  @apply transition-all duration-200;
}
</style>
