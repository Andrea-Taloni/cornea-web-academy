<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <HeaderComponent />
    
    <div class="flex-1 container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
        
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <!-- Profile Header -->
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-8">
            <div class="flex items-center space-x-6">
              <!-- Profile Image -->
              <div class="relative">
                <div class="w-32 h-32 rounded-full overflow-hidden bg-white border-4 border-white">
                  <img 
                    v-if="profileImage" 
                    :src="profileImage" 
                    alt="Profile" 
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
                    <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <button 
                  @click="$refs.imageInput.click()"
                  class="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </button>
                <input 
                  ref="imageInput"
                  type="file" 
                  accept="image/*" 
                  @change="handleImageUpload"
                  class="hidden"
                />
              </div>
              
              <!-- User Info -->
              <div class="text-white">
                <h2 class="text-2xl font-bold">{{ authStore.username }}</h2>
                <p class="text-blue-100">{{ authStore.userEmail }}</p>
              </div>
            </div>
          </div>
          
          <!-- Profile Content -->
          <div class="p-6">
            <!-- Success/Error Messages -->
            <div v-if="successMessage" class="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {{ errorMessage }}
            </div>
            
            <!-- Update Profile Form -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Update Profile</h3>
              <form @submit.prevent="updateProfile" class="space-y-4">
                <div>
                  <label for="username" class="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    id="username"
                    v-model="profileForm.username"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="profileForm.email"
                    type="email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  :disabled="isUpdating"
                  class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {{ isUpdating ? 'Updating...' : 'Update Profile' }}
                </button>
              </form>
            </div>
            
            <!-- Change Password -->
            <div class="mb-8 pb-8 border-b border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
              <form @submit.prevent="changePassword" class="space-y-4">
                <div>
                  <label for="currentPassword" class="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input
                    id="currentPassword"
                    v-model="passwordForm.currentPassword"
                    type="password"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    v-model="passwordForm.newPassword"
                    type="password"
                    required
                    minlength="6"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    id="confirmPassword"
                    v-model="passwordForm.confirmPassword"
                    type="password"
                    required
                    minlength="6"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  :disabled="isChangingPassword"
                  class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {{ isChangingPassword ? 'Changing...' : 'Change Password' }}
                </button>
              </form>
            </div>
            
            <!-- Delete Account -->
            <div class="pt-4">
              <button
                @click="showDeleteModal = true"
                class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Delete Account Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Delete Account</h3>
        <p class="text-gray-600 mb-4">
          Are you sure you want to delete your account? This action cannot be undone.
        </p>
        <p class="text-gray-600 mb-4">
          Please type your password to confirm:
        </p>
        <input
          v-model="deletePassword"
          type="password"
          placeholder="Enter your password"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <div class="flex justify-end space-x-3">
          <button
            @click="showDeleteModal = false; deletePassword = ''"
            class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            @click="deleteAccount"
            :disabled="!deletePassword || isDeletingAccount"
            class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ isDeletingAccount ? 'Deleting...' : 'Delete Account' }}
          </button>
        </div>
      </div>
    </div>
    
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import apiService from '@/services/api'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const router = useRouter()
const authStore = useAuthStore()

// State
const profileImage = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const isUpdating = ref(false)
const isChangingPassword = ref(false)
const isDeletingAccount = ref(false)
const showDeleteModal = ref(false)
const deletePassword = ref('')

// Forms
const profileForm = ref({
  username: authStore.username,
  email: authStore.userEmail
})

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// Computed
const memberSince = computed(() => {
  if (authStore.user?.createdAt) {
    return new Date(authStore.user.createdAt).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    })
  }
  return 'Unknown'
})

// Methods
const clearMessages = () => {
  successMessage.value = ''
  errorMessage.value = ''
}

const handleImageUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  // Check file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    errorMessage.value = 'Image size must be less than 5MB'
    return
  }
  
  clearMessages()
  
  try {
    // Convert to base64
    const reader = new FileReader()
    reader.onload = async (e) => {
      profileImage.value = e.target.result
      
      // Upload to server as base64
      try {
        const response = await fetch(`${apiService.baseURL}/users/${authStore.user.id}/avatar`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiService.getToken()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ profileImage: e.target.result })
        })
        
        if (response.ok) {
          successMessage.value = 'Profile image updated successfully'
          // Update local user data
          const data = await response.json()
          authStore.user.profileImage = data.profileImage
        } else {
          throw new Error('Failed to upload image')
        }
      } catch (error) {
        errorMessage.value = 'Failed to upload image. Please try again.'
        console.error('Upload error:', error)
      }
    }
    reader.readAsDataURL(file)
  } catch (error) {
    errorMessage.value = 'Failed to process image'
    console.error('Image processing error:', error)
  }
}

const updateProfile = async () => {
  clearMessages()
  isUpdating.value = true
  
  try {
    const response = await apiService.updateUser(authStore.user.id, {
      username: profileForm.value.username,
      email: profileForm.value.email
    })
    
    // Update auth store
    authStore.user.username = profileForm.value.username
    authStore.user.email = profileForm.value.email
    localStorage.setItem('user', JSON.stringify(authStore.user))
    
    successMessage.value = 'Profile updated successfully'
  } catch (error) {
    errorMessage.value = error.message || 'Failed to update profile'
  } finally {
    isUpdating.value = false
  }
}

const changePassword = async () => {
  clearMessages()
  
  // Validate passwords match
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    errorMessage.value = 'New passwords do not match'
    return
  }
  
  isChangingPassword.value = true
  
  try {
    const response = await fetch(`${apiService.baseURL}/users/${authStore.user.id}/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiService.getToken()}`
      },
      body: JSON.stringify({
        currentPassword: passwordForm.value.currentPassword,
        newPassword: passwordForm.value.newPassword
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to change password')
    }
    
    successMessage.value = 'Password changed successfully'
    
    // Clear form
    passwordForm.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  } catch (error) {
    errorMessage.value = error.message || 'Failed to change password'
  } finally {
    isChangingPassword.value = false
  }
}

const deleteAccount = async () => {
  if (!deletePassword.value) {
    errorMessage.value = 'Please enter your password'
    return
  }
  
  isDeletingAccount.value = true
  
  try {
    const response = await fetch(`${apiService.baseURL}/users/${authStore.user.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiService.getToken()}`
      },
      body: JSON.stringify({
        password: deletePassword.value
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete account')
    }
    
    // Logout and redirect
    await authStore.logout()
    router.push('/')
  } catch (error) {
    errorMessage.value = error.message || 'Failed to delete account'
  } finally {
    isDeletingAccount.value = false
    showDeleteModal.value = false
    deletePassword.value = ''
  }
}

// Load profile image on mount
onMounted(async () => {
  if (authStore.user?.profileImage) {
    profileImage.value = authStore.user.profileImage
  }
})
</script>