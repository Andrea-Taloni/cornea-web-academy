// src/components/header/AuthButtons.vue
<template>
  <div :class="[mobile ? 'space-y-2' : 'flex items-center space-x-4']">
    <!-- If user is authenticated -->
    <template v-if="authStore.isAuthenticated">
      <div v-if="!mobile" class="flex items-center space-x-4">
        <router-link 
          to="/profile"
          class="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <span class="hidden lg:inline">{{ authStore.username }}</span>
        </router-link>
        <button 
          @click="handleLogout"
          class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
      <div v-else class="space-y-2">
        <router-link 
          to="/profile"
          class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <div class="flex items-center justify-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>{{ authStore.username }}</span>
          </div>
        </router-link>
        <button 
          @click="handleLogout"
          class="w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>
    </template>
    
    <!-- If user is not authenticated AND auth is enabled -->
    <template v-else-if="features.enableAuth">
      <router-link
        to="/login"
        :class="mobile ? 'mobile-login-button' : 'login-button'"
      >
        <span class="button-text">Login</span>
      </router-link>
      <router-link
        to="/register"
        :class="mobile ? 'mobile-register-button' : 'register-button'"
      >
        <span class="button-text">Register</span>
      </router-link>
    </template>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { features } from '@/config/features'

const authStore = useAuthStore()
const router = useRouter()

defineProps({
  mobile: {
    type: Boolean,
    default: false,
  },
})

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<style scoped>
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
  box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

.register-button:active {
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
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

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
