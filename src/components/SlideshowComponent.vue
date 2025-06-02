<template>
  <section
    class="relative bg-black overflow-hidden"
    @mouseenter="stopSlideshow"
    @mouseleave="startSlideshow"
  >
    <!-- Container con larghezza massima -->
    <div class="max-w-[1920px] mx-auto relative h-[350px] md:h-[450px] lg:h-[550px]">
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

        <!-- Bottom overlay for text visibility -->
        <div
          class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"
        ></div>

        <!-- Image caption -->
        <div v-if="image.caption" class="absolute bottom-16 left-0 right-0 text-center px-4">
          <p class="text-white text-lg md:text-xl font-semibold drop-shadow-lg max-w-4xl mx-auto">
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import delle immagini
import slide1 from '@/assets/images/slideshow/slide1.jpg'
import slide2 from '@/assets/images/slideshow/slide2.jpg'
import slide3 from '@/assets/images/slideshow/slide3.jpg'
import slide4 from '@/assets/images/slideshow/slide4.jpg'

// Slideshow data
const currentSlide = ref(0)
const images = ref([
  {
    src: slide1,
    alt: 'Advanced surgical microscope and operating room setup',
    caption: 'Welcome to the official Web site of the Cornea Web Academy',
  },
  {
    src: slide2,
    alt: 'Live eye surgery with streaming equipment',
    caption: 'Live surgery sessions with Prof. Massimo Busin',
  },
  {
    src: slide3,
    alt: 'CWA - Cornea Web Academy with Prof. Busin',
    caption: 'Eye Stream - High-definition video streaming setup',
  },
  {
    src: slide4,
    alt: 'Detailed view of corneal surgery with Eye Stream technology',
    caption: 'Interact via audio or chat and get answers directly from the surgeon',
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

// Manual navigation functions
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
  }, 7000)
}

const stopSlideshow = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
}

// Lifecycle hooks
onMounted(() => {
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
/* Solo transizione di dissolvenza, senza animazioni di zoom */
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
