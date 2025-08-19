import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import apiService from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  // Load user from localStorage on init and fetch fresh data
  const loadUser = async () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser)
        // Fetch fresh user data from backend
        if (apiService.getToken()) {
          try {
            const freshUser = await apiService.getCurrentUser()
            user.value = { ...user.value, ...freshUser.user }
            localStorage.setItem('user', JSON.stringify(user.value))
          } catch (error) {
            console.log('Could not fetch fresh user data:', error)
          }
        }
      } catch (e) {
        console.error('Error loading user:', e)
        localStorage.removeItem('user')
      }
    }
  }

  // Initialize
  loadUser()

  // Computed
  const isAuthenticated = computed(() => !!user.value)
  const username = computed(() => user.value?.username || '')
  const userEmail = computed(() => user.value?.email || '')

  // Actions
  const register = async (userData) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await apiService.register(userData)
      user.value = response.user
      localStorage.setItem('user', JSON.stringify(response.user))
      return { success: true }
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const login = async (credentials) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await apiService.login(credentials)
      user.value = response.user
      localStorage.setItem('user', JSON.stringify(response.user))
      return { success: true }
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      await apiService.logout()
    } catch (error) {
      console.log('Logout error:', error)
    }
    user.value = null
    localStorage.removeItem('user')
    apiService.removeToken()
    error.value = null
  }

  const clearError = () => {
    error.value = null
  }

  return {
    // State
    user,
    isLoading,
    error,
    // Computed
    isAuthenticated,
    username,
    userEmail,
    // Actions
    register,
    login,
    logout,
    clearError
  }
})