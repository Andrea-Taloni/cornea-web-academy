<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <HeaderComponent />
    
    <div class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div class="max-w-md w-full space-y-8">
        <!-- Logo/Title -->
        <div class="text-center">
          <img
            src="/src/assets/images/cwa-logo.png"
            alt="CWA Logo"
            class="h-16 mx-auto mb-4"
          />
          <h2 class="text-3xl font-bold text-gray-900">Create Account</h2>
          <p class="mt-2 text-sm text-gray-600">
            Join the Cornea Web Academy community
          </p>
        </div>

        <!-- Register Form -->
        <form @submit.prevent="handleRegister" class="mt-8 space-y-6">
          <div class="bg-white shadow-lg rounded-lg px-8 py-10">
            <!-- Error Message -->
            <div v-if="authStore.error" class="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {{ authStore.error }}
            </div>

            <!-- Success Message -->
            <div v-if="showSuccess" class="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
              Registration successful! Redirecting...
            </div>

            <!-- Username Field -->
            <div class="mb-6">
              <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="username"
                v-model="formData.username"
                type="text"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <!-- Email Field -->
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <!-- Password Field -->
            <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                v-model="formData.password"
                type="password"
                required
                minlength="6"
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Minimum 6 characters"
              />
            </div>

            <!-- Confirm Password Field -->
            <div class="mb-6">
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                v-model="formData.confirmPassword"
                type="password"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Re-enter your password"
              />
              <p v-if="passwordError" class="mt-1 text-sm text-red-600">
                {{ passwordError }}
              </p>
            </div>

            <!-- Terms & Conditions -->
            <div class="mb-6">
              <div class="flex items-start">
                <input
                  id="terms"
                  v-model="acceptTerms"
                  type="checkbox"
                  required
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
                />
                <label for="terms" class="ml-2 block text-sm text-gray-900">
                  I agree to the 
                  <a href="#" class="text-blue-600 hover:text-blue-500">Terms and Conditions</a>
                  and 
                  <a href="#" class="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                </label>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="authStore.isLoading || !isFormValid"
              class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg v-if="authStore.isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ authStore.isLoading ? 'Creating Account...' : 'Create Account' }}
            </button>

            <!-- Divider -->
            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">Already have an account?</span>
                </div>
              </div>
            </div>

            <!-- Login Link -->
            <div class="mt-6 text-center">
              <router-link
                to="/login"
                class="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in instead
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
    
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const router = useRouter()
const authStore = useAuthStore()

// Form data
const formData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})
const acceptTerms = ref(false)
const showSuccess = ref(false)

// Computed
const passwordError = computed(() => {
  if (formData.value.password && formData.value.confirmPassword) {
    if (formData.value.password !== formData.value.confirmPassword) {
      return 'Passwords do not match'
    }
  }
  return ''
})

const isFormValid = computed(() => {
  return (
    formData.value.username &&
    formData.value.email &&
    formData.value.password &&
    formData.value.confirmPassword &&
    formData.value.password === formData.value.confirmPassword &&
    formData.value.password.length >= 6 &&
    acceptTerms.value
  )
})

// Handle registration
const handleRegister = async () => {
  if (!isFormValid.value) return
  
  authStore.clearError()
  
  try {
    await authStore.register({
      username: formData.value.username,
      email: formData.value.email,
      password: formData.value.password
    })
    
    showSuccess.value = true
    
    // Redirect after 2 seconds
    setTimeout(() => {
      router.push('/')
    }, 2000)
  } catch (error) {
    // Error is already handled in the store
    console.error('Registration failed:', error)
  }
}
</script>