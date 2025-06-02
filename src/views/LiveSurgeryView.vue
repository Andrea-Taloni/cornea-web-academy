<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero
      title="Live Surgery"
      subtitle="Join our interactive live surgical broadcasts and learn from real-time procedures"
    />

    <!-- Live Now Section - Posizionata come primo elemento -->
    <LiveNowSection :liveSession="liveNow" />

    <!-- About Live Surgery Section -->
    <section class="py-8 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <div class="space-y-6 text-gray-700 leading-relaxed">
              <p class="text-lg">
                <span class="font-semibold text-blue-900">The Cornea Web Academy (CWA)</span> offers
                you the opportunity to enter the surgical theatre of Prof. Massimo Busin and connect
                directly with his microscope through high-speed HD video streaming.
              </p>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white/70 rounded-lg p-6 backdrop-blur-sm">
                  <h3 class="font-semibold text-blue-900 mb-3 flex items-center">
                    <svg
                      class="w-5 h-5 mr-2 text-blue-600"
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
                    Live Surgical Broadcasting
                  </h3>
                  <p class="text-sm">
                    In every session all surgical interventions are performed and discussed live.
                    The broadcasting is addressed both to junior surgeons and to more experienced
                    colleagues.
                  </p>
                </div>

                <div class="bg-white/70 rounded-lg p-6 backdrop-blur-sm">
                  <h3 class="font-semibold text-blue-900 mb-3 flex items-center">
                    <svg
                      class="w-5 h-5 mr-2 text-blue-600"
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
                    Interactive Participation
                  </h3>
                  <p class="text-sm">
                    Ask questions and receive explanations in real-time directly from the surgeon,
                    or simply observe and listen to the discussion in view-only mode.
                  </p>
                </div>
              </div>

              <div class="bg-white/70 rounded-lg p-6 backdrop-blur-sm">
                <h3 class="font-semibold text-blue-900 mb-3 flex items-center">
                  <svg
                    class="w-5 h-5 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                  Specialized Surgery Topics
                </h3>
                <p class="text-sm">
                  Each surgery focuses on specific themes including DALK, DMEK, UT-DSAEK, DSAEK in
                  PK, and DALK in PK, with at least 2 procedures performed and discussed per
                  surgery.
                </p>
              </div>

              <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
                <h3 class="font-semibold mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                  Customize Your Live Surgery Session
                </h3>
                <p class="text-sm text-blue-100">
                  Book and customize surgeries according to your needs. Choose from available dates,
                  times, and procedure types.
                </p>
              </div>

              <div class="text-center pt-4">
                <p class="text-lg font-semibold text-blue-900 mb-4">
                  Join us for this exciting educational experience!
                </p>
                <button
                  class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105 shadow-lg"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Live Surgeries Section -->
    <NewsSection />

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import LiveNowSection from '@/components/live/LiveNowSection.vue'
import { ref } from 'vue'

const liveNow = ref({
  title: 'DMEK Surgery - Complex Case',
  description: 'Live demonstration of DMEK surgery on a patient with Fuchs endothelial dystrophy',
  surgeon: 'Prof. Massimo Busin',
  procedure: 'DMEK',
  startTime: '10:00 AM CET',
})
</script>
