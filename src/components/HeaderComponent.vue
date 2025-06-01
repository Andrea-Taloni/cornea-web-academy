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
          <div
            class="relative group"
            @mouseenter="showDropdown = true"
            @mouseleave="handleMouseLeave"
          >
            <button class="nav-link flex items-center group-hover:text-blue-600 py-4">
              Surgery
              <svg
                class="w-4 h-4 ml-1 transform transition-transform duration-300"
                :class="{ 'rotate-180': showDropdown }"
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
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-show="showDropdown" class="dropdown-menu">
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
            </transition>
          </div>

          <router-link to="/publications" class="nav-link">Publications</router-link>
          <router-link to="/live-sessions" class="nav-link">Live Sessions</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </nav>

        <!-- Auth Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button class="login-button">
            <span class="button-text">Login</span>
            <div class="button-border"></div>
          </button>
          <button class="register-button">
            <span class="button-text">Register</span>
            <div class="button-glow"></div>
          </button>
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
              <button class="mobile-login-button">Login</button>
              <button class="mobile-register-button">Register</button>
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
const showDropdown = ref(false)

let dropdownTimeout = null

const surgeryTypes = ref(['DALK', 'DMEK', 'DSAEK', 'UT-DSAEK', 'SALK'])

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileSurgeryOpen.value = false
  }
}

const handleMouseLeave = () => {
  // Add a small delay before hiding to prevent flickering
  dropdownTimeout = setTimeout(() => {
    showDropdown.value = false
  }, 100)
}

// Clear timeout if re-entering before delay expires
const handleMouseEnter = () => {
  if (dropdownTimeout) {
    clearTimeout(dropdownTimeout)
  }
  showDropdown.value = true
}
</script>

<style scoped>
/* Navigation Link Styles with Animated Underline */
.nav-link {
  @apply text-gray-700 font-medium py-2 relative;
  transition: color 0.2s ease;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600;
  transition: width 0.2s ease;
}

.nav-link:hover {
  @apply text-blue-600;
}

.nav-link:hover::after {
  @apply w-full;
}

/* Active link with persistent underline */
.router-link-active.nav-link {
  @apply text-blue-600;
}

.router-link-active.nav-link::after {
  @apply w-full bg-gradient-to-r from-blue-500 to-blue-700;
}

/* Dropdown Menu Styles - Fixed positioning and z-index */
.dropdown-menu {
  @apply absolute left-0 w-56 bg-white rounded-xl shadow-2xl z-50;
  top: calc(100% - 0.5rem);
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 0.5rem;
}

/* Invisible bridge to maintain hover state */
.group::before {
  content: '';
  @apply absolute left-0 right-0 h-6;
  top: 100%;
  z-index: 40;
}

/* Dropdown Item Styles with Sliding Effect */
.dropdown-item {
  @apply block px-5 py-3 text-sm text-gray-700 relative overflow-hidden;
  transition: all 0.2s ease;
}

/* Gradient background animation on hover */
.dropdown-item::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50;
  transform: translateX(-100%);
  transition: transform 0.2s ease;
}

.dropdown-item:hover::before {
  transform: translateX(0);
}

.dropdown-item:hover {
  @apply text-blue-700 pl-7;
}

/* Arrow animation for dropdown items */
.dropdown-item::after {
  content: '→';
  @apply absolute right-4 top-1/2 -translate-y-1/2 opacity-0 text-blue-600;
  transition: all 0.2s ease;
}

.dropdown-item:hover::after {
  @apply opacity-100 right-5;
}

/* Dropdown item stagger animation */
@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.dropdown-item {
  opacity: 0;
  animation: fadeInSlide 0.3s ease forwards;
}

/* Modern Login Button with Magnetic Border Effect */
.login-button {
  @apply relative px-6 py-2.5 text-gray-700 font-medium overflow-hidden;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-button .button-text {
  @apply relative z-10;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-button .button-border {
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  padding: 2px;
  background: linear-gradient(45deg, #e5e7eb, #e5e7eb);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  background-size: 300% 300%;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.login-button:hover::before {
  opacity: 0.1;
  animation: gradientShift 3s ease infinite;
}

.login-button:hover .button-border {
  padding: 2px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  background-size: 300% 300%;
  animation: gradientShift 3s ease infinite;
}

.login-button:hover .button-text {
  @apply text-blue-600;
}

.login-button:hover {
  transform: translateY(-2px);
}

.login-button:active {
  transform: translateY(0);
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Modern Register Button with Shimmer Effect */
.register-button {
  @apply relative px-6 py-2.5 font-medium text-white overflow-hidden;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.register-button .button-text {
  @apply relative z-10;
}

.register-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.register-button .button-glow {
  position: absolute;
  inset: -2px;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  background-size: 300% 300%;
  opacity: 0;
  filter: blur(10px);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  animation: gradientShift 3s ease infinite;
}

.register-button:hover::before {
  left: 100%;
}

.register-button:hover .button-glow {
  opacity: 0.6;
}

.register-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

.register-button:active {
  transform: translateY(-1px) scale(1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

/* Mobile Navigation Styles with Slide Effect */
.mobile-nav-link {
  @apply block px-3 py-2 text-base font-medium text-gray-700 rounded-md relative overflow-hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-link::before {
  content: '';
  @apply absolute left-0 top-0 bottom-0 w-1 bg-blue-600;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-link:hover {
  @apply text-blue-600 bg-blue-50 pl-5;
}

.mobile-nav-link:hover::before {
  transform: translateX(0);
}

.mobile-dropdown-item {
  @apply block py-2 text-sm text-gray-600 rounded-md pl-4 relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-dropdown-item:hover {
  @apply text-blue-600 bg-blue-50 pl-6;
}

/* Mobile Auth Button Styles */
.mobile-login-button {
  @apply w-full px-4 py-2.5 text-gray-700 font-medium rounded-lg relative overflow-hidden;
  background: white;
  border: 2px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-login-button::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600;
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.mobile-login-button:hover {
  @apply text-white border-transparent;
}

.mobile-login-button:hover::before {
  transform: translateY(0);
}

.mobile-register-button {
  @apply w-full px-4 py-2.5 text-white font-medium rounded-lg relative overflow-hidden;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-register-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-register-button:hover::before {
  left: 100%;
}

.mobile-register-button:hover {
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

/* Router Link Active State for mobile */
.router-link-active.mobile-nav-link {
  @apply text-blue-600 bg-blue-50;
}
</style>
