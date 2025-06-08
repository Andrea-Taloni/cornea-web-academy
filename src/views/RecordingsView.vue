<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <PageHero
      title="Surgery Recordings"
      subtitle="Watch recorded surgical procedures from our expert surgeons"
    />

    <!-- Main Content Container -->
    <div class="container mx-auto px-4 py-8 max-w-7xl">
      <!-- Search and Filter Bar -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-8">
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
                placeholder="Search videos by title, surgeon, or procedure..."
                class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- Category Filter -->
          <select
            v-model="selectedCategory"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
          >
            <option value="">All Categories</option>
            <option value="dalk">DALK</option>
            <option value="dmek">DMEK</option>
            <option value="dsaek">DSAEK</option>
            <option value="ut-dsaek">UT-DSAEK</option>
            <option value="mushroom-pk">Mushroom PK</option>
            <option value="educational">Educational</option>
          </select>

          <!-- Sort Options -->
          <select
            v-model="sortBy"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
          >
            <option value="title">Title (A-Z)</option>
            <option value="surgeon">Surgeon</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      <!-- Video Player and List Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Video Player Section (Left - Takes 2 columns on large screens) -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
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
                  Select a video to play
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

        <!-- Video List Section (Right - Takes 1 column on large screens) -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-lg p-4">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Video Library</h3>

            <!-- Scrollable Video List -->
            <div class="video-list-container">
              <div
                v-for="video in filteredVideos"
                :key="video.id"
                @click="selectVideo(video)"
                class="video-list-item cursor-pointer rounded-lg overflow-hidden hover:shadow-md transition-all duration-200 bg-gray-50 mb-3"
                :class="{
                  'ring-2 ring-blue-500 bg-blue-50': currentVideo && currentVideo.id === video.id,
                }"
              >
                <!-- Video Thumbnail -->
                <div class="relative">
                  <img
                    :src="`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`"
                    :alt="video.title"
                    class="w-full h-auto"
                    @error="handleImageError($event, video.youtubeId)"
                  />
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

              <!-- No Results Message -->
              <div
                v-if="filteredVideos.length === 0"
                class="text-center py-8 text-gray-500"
              >
                <svg
                  class="mx-auto h-12 w-12 text-gray-400 mb-3"
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
                <p class="text-sm">No videos found</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'

// State
const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('title')
const currentVideo = ref(null)

// Sample video data
// In production, title and description should be fetched from YouTube Data API v3
// using the video ID to get the actual video metadata
const videos = ref([
  {
    id: 1,
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
    title: 'DMEK Surgery - Complex Case Management', // Should be fetched from YouTube
    description:
      'Detailed demonstration of DMEK surgery on a patient with Fuchs endothelial dystrophy, showcasing advanced techniques for graft preparation and insertion.', // Should be fetched from YouTube
    surgeon: 'Prof. Massimo Busin',
    category: 'dmek',
  },
  {
    id: 2,
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
    title: 'Large Diameter DALK with Big Bubble Technique', // Should be fetched from YouTube
    description:
      'Step-by-step demonstration of the modified big bubble technique for deep anterior lamellar keratoplasty in advanced keratoconus.', // Should be fetched from YouTube
    surgeon: 'Prof. Massimo Busin',
    category: 'dalk',
  },
  {
    id: 3,
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
    title: 'UT-DSAEK: Microkeratome Preparation Technique', // Should be fetched from YouTube
    description:
      'Comprehensive guide to preparing ultra-thin grafts for DSAEK using the microkeratome technique, with tips for optimal thickness achievement.', // Should be fetched from YouTube
    surgeon: 'Dr. Angeli Christy Yu',
    category: 'ut-dsaek',
  },
  {
    id: 4,
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
    title: 'Mushroom PK: Two-Piece Technique', // Should be fetched from YouTube
    description:
      'Innovative two-piece mushroom keratoplasty technique for full-thickness corneal replacement with enhanced wound stability.', // Should be fetched from YouTube
    surgeon: 'Prof. Massimo Busin',
    category: 'mushroom-pk',
  },
  {
    id: 5,
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
    title: 'Managing Complications in Corneal Surgery', // Should be fetched from YouTube
    description:
      'Educational session covering common complications in various corneal transplant procedures and their management strategies.', // Should be fetched from YouTube
    surgeon: 'Dr. Vincenzo Scorcia',
    category: 'educational',
  },
  {
    id: 6,
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
    title: 'DSAEK in Complex Eyes', // Should be fetched from YouTube
    description:
      'Challenging DSAEK surgery in eyes with previous vitrectomy and anterior chamber IOL, demonstrating modified surgical approaches.', // Should be fetched from YouTube
    surgeon: 'Dr. Cristina Bovone',
    category: 'dsaek',
  },
])

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
    case 'surgeon':
      filtered.sort((a, b) => a.surgeon.localeCompare(b.surgeon))
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
    dalk: 'DALK',
    dmek: 'DMEK',
    dsaek: 'DSAEK',
    'ut-dsaek': 'UT-DSAEK',
    'mushroom-pk': 'Mushroom PK',
    educational: 'Educational',
  }
  return labels[category] || category
}

// Set initial video on mount
onMounted(() => {
  if (filteredVideos.value.length > 0) {
    currentVideo.value = filteredVideos.value[0]
  }
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

/* Video List Container */
.video-list-container {
  max-height: 600px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

/* Custom scrollbar for video list */
.video-list-container::-webkit-scrollbar {
  width: 6px;
}

.video-list-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.video-list-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.video-list-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Video list item hover effect */
.video-list-item:hover {
  transform: translateY(-2px);
}
</style>
