<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center">
            <img src="@/assets/images/cwa-logo.png" alt="CWA Logo" class="h-14 w-auto" />
          </div>
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition">Live Surgery</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition">Resources</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </nav>
          <button class="md:hidden p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Image Slideshow -->
    <section
      class="relative h-[350px] md:h-[450px] lg:h-[550px] bg-black overflow-hidden"
      @mouseenter="stopSlideshow"
      @mouseleave="startSlideshow"
    >
      <div class="relative h-full">
        <!-- Slides -->
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="[
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            currentSlide === index ? 'opacity-100' : 'opacity-0',
          ]"
        >
          <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover object-center" />
          <!-- Optional overlay for better text visibility -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          <!-- Image caption -->
          <div v-if="image.caption" class="absolute bottom-16 left-0 right-0 text-center px-4">
            <p class="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
              {{ image.caption }}
            </p>
          </div>
        </div>

        <!-- Navigation dots -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            v-for="(_, index) in images"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50',
            ]"
          ></button>
        </div>

        <!-- Previous/Next buttons -->
        <button
          @click="goToPreviousSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          @click="goToNextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </section>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div class="text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Welcome to CWA</h2>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Cornea Web Academy - Enter the surgical theatre of Prof. Massimo Busin through
            interactive high-definition video streaming
          </p>
          <div class="space-x-4">
            <button
              class="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Watch Live Surgery
            </button>
            <button
              class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Experience Interactive Surgical Education
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2">HD Video Streaming</h4>
            <p class="text-gray-600">
              Watch surgeries in crystal-clear high-definition video quality
            </p>
          </div>

          <div class="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2">Live Interaction</h4>
            <p class="text-gray-600">
              Interact via audio or chat and get answers directly from the surgeon
            </p>
          </div>

          <div class="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2">Educational Resources</h4>
            <p class="text-gray-600">
              Access comprehensive learning materials and surgical techniques
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-blue-900 text-white py-16">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h3 class="text-3xl font-bold mb-4">Ready to Enhance Your Surgical Skills?</h3>
        <p class="text-xl mb-8">
          Join thousands of ophthalmologists learning from Prof. Massimo Busin
        </p>
        <button
          class="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
        >
          Get Started Today
        </button>
      </div>
    </section>

    <!-- News Section -->
    <section class="py-16 md:py-20 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">Latest News and Events</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <p class="text-sm text-blue-600 mb-2">December 15, 2024</p>
              <h4 class="text-xl font-semibold mb-2">
                Upcoming Live Surgery: Advanced DALK Technique
              </h4>
              <p class="text-gray-600 mb-4">
                Join us for an exclusive live demonstration of the latest DALK surgical
                techniques...
              </p>
              <a href="#" class="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
            </div>
          </article>

          <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <p class="text-sm text-blue-600 mb-2">December 10, 2024</p>
              <h4 class="text-xl font-semibold mb-2">New Educational Module Released</h4>
              <p class="text-gray-600 mb-4">
                We're excited to announce our latest educational module on corneal
                transplantation...
              </p>
              <a href="#" class="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
            </div>
          </article>

          <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <p class="text-sm text-blue-600 mb-2">December 5, 2024</p>
              <h4 class="text-xl font-semibold mb-2">International Workshop Success</h4>
              <p class="text-gray-600 mb-4">
                Over 500 participants joined our recent international workshop on innovative
                corneal...
              </p>
              <a href="#" class="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h5 class="text-xl font-semibold mb-4">CWA</h5>
            <p class="text-gray-400">
              Cornea Web Academy - Advancing ophthalmic education through interactive surgical
              experiences
            </p>
          </div>
          <div>
            <h6 class="font-semibold mb-4">Quick Links</h6>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition">About Us</a></li>
              <li><a href="#" class="hover:text-white transition">Live Surgery</a></li>
              <li><a href="#" class="hover:text-white transition">Resources</a></li>
              <li><a href="#" class="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 class="font-semibold mb-4">Resources</h6>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition">Video Library</a></li>
              <li><a href="#" class="hover:text-white transition">Publications</a></li>
              <li><a href="#" class="hover:text-white transition">Guidelines</a></li>
              <li><a href="#" class="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h6 class="font-semibold mb-4">Connect</h6>
            <p class="text-gray-400 mb-4">Stay updated with our latest news</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 CWA - Cornea Web Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Slideshow data
const currentSlide = ref(0)
const images = ref([
  {
    src: '@/assets/images/slideshow/slide1.jpg',
    alt: 'Advanced surgical microscope and operating room setup',
    caption: 'State-of-the-art surgical equipment for precision corneal procedures',
  },
  {
    src: '@/assets/images/slideshow/slide2.jpg',
    alt: 'Live eye surgery with streaming equipment',
    caption: 'Interactive live surgery sessions with real-time streaming',
  },
  {
    src: '@/assets/images/slideshow/slide3.jpg',
    alt: 'CWA - Cornea Web Academy with Prof. Busin',
    caption: "Learn from Prof. Massimo Busin's expertise in corneal surgery",
  },
  {
    src: '@/assets/images/slideshow/slide4.jpg',
    alt: 'Detailed view of corneal surgery with Eye Stream technology',
    caption: 'High-definition Eye Stream technology for enhanced surgical education',
  },
])

let slideInterval = null

// Slideshow functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? images.value.length - 1 : currentSlide.value - 1
}

// Manual navigation functions (these reset the auto-play)
const goToSlide = (index) => {
  currentSlide.value = index
  stopSlideshow()
  startSlideshow()
}

const goToNextSlide = () => {
  nextSlide()
  stopSlideshow()
  startSlideshow()
}

const goToPreviousSlide = () => {
  previousSlide()
  stopSlideshow()
  startSlideshow()
}

// Auto-play slideshow
const startSlideshow = () => {
  slideInterval = setInterval(() => {
    nextSlide()
  }, 6000) // Change slide every 6 seconds
}

const stopSlideshow = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
}

// Lifecycle hooks
onMounted(() => {
  // Preload images for smoother transitions
  images.value.forEach((image) => {
    const img = new Image()
    img.src = image.src
  })

  startSlideshow()
})

onUnmounted(() => {
  stopSlideshow()
})
</script>

<style scoped>
/* Custom animations for slideshow */
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Optional: Add Ken Burns effect for more dynamic feel */
@keyframes kenBurns {
  0% {
    transform: scale(1) translateY(0);
  }
  100% {
    transform: scale(1.08) translateY(-10px);
  }
}

/* Apply Ken Burns to active slide */
.opacity-100 img {
  animation: kenBurns 12s ease-out;
}

/* Ensure smooth transitions */
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
