<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero
      :title="t('contacts.title')"
      :subtitle="t('contacts.subtitle')"
    />

    <!-- Contact Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6">{{ t('contacts.sendMessage') }}</h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <svg
                  class="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg mb-2">Email Us</h3>
                  <p class="text-gray-600 mb-4">
                    For any inquiries, questions, or feedback, please feel free to contact us via email:
                  </p>
                  <a
                    href="mailto:corneawebacademy@gmail.com"
                    class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    corneawebacademy@gmail.com
                  </a>
                </div>
              </div>

              <div class="border-t pt-6">
                <p class="text-gray-600 text-sm leading-relaxed">
                  We strive to respond to all inquiries within 24-48 hours. Please include as much detail as possible in your message to help us assist you better.
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div>
            <div class="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 class="text-2xl font-bold mb-6">{{ t('contacts.getInTouch') }}</h3>

              <div class="space-y-4">
                <div class="flex items-start">
                  <svg
                    class="w-6 h-6 text-blue-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div>
                    <h4 class="font-semibold mb-1">{{ t('contacts.address') }}</h4>
                    <p class="text-gray-600">
                      Villa Igea Hospital<br />
                      Viale Antonio Gramsci, 42<br />
                      47122 Forlì, Italy
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg
                    class="w-6 h-6 text-blue-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div>
                    <h4 class="font-semibold mb-1">{{ t('contacts.phone') }}</h4>
                    <p class="text-gray-600">+39 0543 454111</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h3 class="text-xl font-bold mb-4">{{ t('contacts.location') }}</h3>
              <div class="h-96 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameborder="0"
                  style="border: 0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Viale%20Antonio%20Gramsci%2042,%2047122%20Forl%C3%AC,%20Italy+(Villa%20Igea%20Hospital)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Villa Igea Hospital - Viale Antonio Gramsci, 42, 47122 Forlì, Italy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* Smooth checkbox animation */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Prevent text selection */
.select-none {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Add subtle shadow to captcha box */
.bg-gray-50 {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

/* Hover effect for the captcha container */
.bg-gray-50:hover {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
}

/* Spin animation for loading */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
