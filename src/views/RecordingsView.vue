<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <PageHero
      :title="t('recordings.title')"
      :subtitle="t('recordings.subtitle')"
    />

    <!-- Main Content Container -->
    <div class="container mx-auto px-4 py-8 max-w-7xl">
      <!-- Error Alert -->
      <div v-if="error && !isLoading" class="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
          <span>{{ error }}</span>
          <button @click="refreshVideos" class="ml-auto text-yellow-600 hover:text-yellow-800 font-semibold">
            {{ t('recordings.retry') }}
          </button>
        </div>
      </div>

      <!-- Video Player Section -->
      <div class="mb-8">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
            <!-- Video Player Container with Fixed Aspect Ratio -->
            <div class="video-player-wrapper bg-black">
              <div class="video-player-container">
                <iframe
                  v-if="currentVideo"
                  :src="`https://www.youtube.com/embed/${currentVideo.youtubeId}?rel=0`"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="video-iframe"
                ></iframe>
                <div
                  v-else
                  class="video-placeholder"
                >
                  {{ t('recordings.selectVideo') }}
                </div>
              </div>
            </div>

            <!-- Video Information -->
            <div v-if="currentVideo" class="p-6">
              <!-- Title and description should be fetched from YouTube Data API -->
              <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ currentVideo.title }}</h2>
              <p class="text-gray-600 mb-4">{{ currentVideo.description }}</p>
              <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {{ currentVideo.surgeon }}
                </span>
              </div>
            </div>
          </div>
      </div>

      <!-- Search and Filter Bar -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div class="flex flex-col md:flex-row gap-4">
          <!-- Search Bar -->
          <div class="flex-1">
            <div class="relative">
              <svg
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                :placeholder="t('recordings.searchPlaceholder')"
                class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- Category Filter -->
          <select
            v-model="selectedCategory"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
          >
            <option value="">{{ t('recordings.allCategories') }}</option>
            <option value="dalk">{{ t('recordings.categories.dalk') }}</option>
            <option value="dmek">{{ t('recordings.categories.dmek') }}</option>
            <option value="dsaek">{{ t('recordings.categories.dsaek') }}</option>
            <option value="ut-dsaek">{{ t('recordings.categories.utDsaek') }}</option>
            <option value="mushroom-pk">{{ t('recordings.categories.mushroomPk') }}</option>
            <option value="educational">{{ t('recordings.categories.educational') }}</option>
          </select>

          <!-- Sort Options -->
          <select
            v-model="sortBy"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
          >
            <option value="title">{{ t('recordings.sortTitleAZ') }}</option>
            <option value="category">{{ t('recordings.sortCategory') }}</option>
          </select>
        </div>
      </div>

      <!-- Video Library Section (Full Width Below Player) -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold text-gray-800">{{ t('recordings.videoLibrary') }}</h3>
          <button
            @click="refreshVideos"
            :disabled="isLoading"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg 
              class="w-4 h-4"
              :class="{ 'animate-spin': isLoading }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            {{ isLoading ? t('recordings.refreshing') : t('recordings.refreshVideos') }}
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-center py-8">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>

        <!-- Video Grid -->
        <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div
            v-for="video in filteredVideos"
            :key="video.id"
            @click="selectVideo(video)"
            class="cursor-pointer rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 bg-gray-50 group"
            :class="{
              'ring-2 ring-blue-500 bg-blue-50': currentVideo && currentVideo.id === video.id,
            }"
          >
            <!-- Video Thumbnail -->
            <div class="relative aspect-video">
              <img
                :src="`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`"
                :alt="video.title"
                class="w-full h-full object-cover"
                @error="handleImageError($event, video.youtubeId)"
              />
              <!-- Play button overlay -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="bg-black bg-opacity-50 rounded-full p-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Video Info -->
            <div class="p-3">
              <h4 class="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">
                {{ video.title }}
              </h4>
              <p class="text-xs text-gray-600 mb-2">{{ video.surgeon }}</p>
              <span
                class="inline-block px-2 py-0.5 text-xs font-medium rounded-full"
                :class="getCategoryClass(video.category)"
              >
                {{ getCategoryLabel(video.category) }}
              </span>
            </div>
          </div>

        </div>
        
        <!-- No Results Message -->
        <div
          v-if="!isLoading && filteredVideos.length === 0"
          class="text-center py-12 text-gray-500"
        >
          <svg
            class="mx-auto h-16 w-16 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p class="text-lg font-medium">{{ t('recordings.noVideosFound') }}</p>
          <p class="text-sm text-gray-400 mt-1">{{ t('recordings.tryAdjusting') }}</p>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'
import youtubeService from '@/services/youtube.js'

// i18n
const { t } = useI18n()

// State
const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('title')
const currentVideo = ref(null)
const videos = ref([])
const isLoading = ref(true)
const error = ref(null)

// Filtered and sorted videos
const filteredVideos = computed(() => {
  let filtered = videos.value

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (video) =>
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.surgeon.toLowerCase().includes(query),
    )
  }

  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter((video) => video.category === selectedCategory.value)
  }

  // Sort videos
  switch (sortBy.value) {
    case 'title':
      filtered.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'category':
      filtered.sort((a, b) => a.category.localeCompare(b.category))
      break
  }

  return filtered
})

// Methods
const selectVideo = (video) => {
  currentVideo.value = video
  // Scroll to top of video player on mobile
  if (window.innerWidth < 1024) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handleImageError = (event, youtubeId) => {
  // Fallback to lower quality thumbnail if mqdefault is not available
  event.target.src = `https://img.youtube.com/vi/${youtubeId}/default.jpg`
}

const getCategoryClass = (category) => {
  const classes = {
    dalk: 'bg-blue-100 text-blue-700',
    dmek: 'bg-green-100 text-green-700',
    dsaek: 'bg-purple-100 text-purple-700',
    'ut-dsaek': 'bg-indigo-100 text-indigo-700',
    'mushroom-pk': 'bg-red-100 text-red-700',
    educational: 'bg-yellow-100 text-yellow-700',
  }
  return classes[category] || 'bg-gray-100 text-gray-700'
}

const getCategoryLabel = (category) => {
  const labels = {
    dalk: t('recordings.categories.dalk'),
    dmek: t('recordings.categories.dmek'),
    dsaek: t('recordings.categories.dsaek'),
    'ut-dsaek': t('recordings.categories.utDsaek'),
    'mushroom-pk': t('recordings.categories.mushroomPk'),
    educational: t('recordings.categories.educational'),
  }
  return labels[category] || category
}

// Load videos from YouTube API
const loadVideos = async () => {
  try {
    isLoading.value = true
    error.value = null
    
    const result = await youtubeService.getChannelVideos()
    
    if (result.error) {
      error.value = result.error
      // Use fallback sample data if API fails
      videos.value = getFallbackVideos()
    } else if (result.videos && result.videos.length > 0) {
      videos.value = result.videos
    } else {
      videos.value = result
    }
    
    // Set initial video
    if (filteredVideos.value.length > 0) {
      currentVideo.value = filteredVideos.value[0]
    }
  } catch (err) {
    console.error('Error loading videos:', err)
    error.value = 'Failed to load videos. Please try again later.'
    // Use fallback data
    videos.value = getFallbackVideos()
  } finally {
    isLoading.value = false
  }
}

// Fallback video data when API is not available
const getFallbackVideos = () => [
  {
    id: 1,
    youtubeId: 'dQw4w9WgXcQ',
    title: 'DMEK Surgery - Complex Case Management',
    description: 'Detailed demonstration of DMEK surgery on a patient with Fuchs endothelial dystrophy.',
    surgeon: 'Prof. Massimo Busin',
    category: 'dmek',
  },
  {
    id: 2,
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Large Diameter DALK with Big Bubble Technique',
    description: 'Step-by-step demonstration of the modified big bubble technique for DALK.',
    surgeon: 'Prof. Massimo Busin',
    category: 'dalk',
  },
]

// Refresh videos (bypasses cache)
const refreshVideos = () => {
  youtubeService.clearCache()
  loadVideos()
}

// Set initial video on mount
onMounted(() => {
  loadVideos()
})
</script>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* Video Player Container - Maintains 16:9 aspect ratio */
.video-player-wrapper {
  position: relative;
  width: 100%;
  background-color: #000;
}

.video-player-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.125rem;
}

/* Aspect ratio utility for video thumbnails */
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
