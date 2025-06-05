<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero
      title="Contacts"
      subtitle="Get in touch with the CWA team for inquiries, support, or collaboration"
    />

    <!-- Contact Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    v-model="form.firstName"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    v-model="form.lastName"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  v-model="form.subject"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="membership">Membership</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <!-- Captcha -->
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div class="flex items-center justify-between">
                  <label
                    class="flex items-center cursor-pointer select-none"
                    @click="toggleCaptcha"
                  >
                    <div class="relative">
                      <div
                        class="w-6 h-6 border-2 rounded transition-all duration-200 flex items-center justify-center"
                        :class="
                          captcha.verified
                            ? 'bg-blue-600 border-blue-600'
                            : captcha.loading
                              ? 'bg-gray-100 border-gray-300'
                              : 'bg-white border-gray-300 hover:border-gray-400'
                        "
                      >
                        <!-- Loading spinner -->
                        <svg
                          v-if="captcha.loading"
                          class="animate-spin h-4 w-4 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <!-- Checkmark -->
                        <svg
                          v-else-if="captcha.verified"
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span class="ml-3 text-sm font-medium text-gray-700">I'm not a robot</span>
                  </label>
                  <div class="flex items-center">
                    <svg class="w-10 h-10 text-gray-400" viewBox="0 0 48 48" fill="currentColor">
                      <path
                        d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16 0-3.7 1.27-7.09 3.37-9.8L33.8 36.63C31.09 38.73 27.7 40 24 40zm12.63-6.2L14.2 11.37C16.91 9.27 20.3 8 24 8c8.84 0 16 7.16 16 16 0 3.7-1.27 7.09-3.37 9.8z"
                      />
                      <path d="M18 24l4 4 8-8-1.5-1.5L22 25l-2.5-2.5z" opacity="0.9" />
                    </svg>
                    <div class="ml-2 text-xs text-gray-500">
                      <div class="font-medium">reCAPTCHA</div>
                      <div class="text-[10px] flex items-center gap-1">
                        <a
                          href="https://policies.google.com/privacy?hl=it"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="hover:text-gray-700 underline"
                        >
                          Privacy
                        </a>
                        <span>-</span>
                        <a
                          href="https://policies.google.com/terms?hl=it"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="hover:text-gray-700 underline"
                        >
                          Terms
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p v-if="captcha.error" class="mt-2 text-sm text-red-600">
                  {{ captcha.error }}
                </p>
              </div>

              <button
                type="submit"
                class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                :disabled="!captcha.verified || captcha.loading"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <div class="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 class="text-2xl font-bold mb-6">Get in Touch</h3>

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
                    <h4 class="font-semibold mb-1">Address</h4>
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
                    <h4 class="font-semibold mb-1">Phone</h4>
                    <p class="text-gray-600">+39 0543 454111</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h3 class="text-xl font-bold mb-4">Location</h3>
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
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

// Captcha state
const captcha = ref({
  verified: false,
  loading: false,
  error: '',
})

// Toggle captcha verification
const toggleCaptcha = () => {
  // Don't do anything if currently loading
  if (captcha.value.loading) return

  captcha.value.error = ''

  // If not verified, start verification process
  if (!captcha.value.verified) {
    captcha.value.loading = true

    // Simulate verification delay (like real reCAPTCHA)
    setTimeout(() => {
      captcha.value.loading = false
      captcha.value.verified = true
    }, 1500)
  } else {
    // If already verified, uncheck
    captcha.value.verified = false
  }
}

const handleSubmit = () => {
  // Validate captcha
  if (!captcha.value.verified) {
    captcha.value.error = 'Please verify that you are not a robot'
    return
  }

  // If captcha is verified, proceed with form submission
  console.log('Form submitted:', form.value)

  // Show success message
  alert('Message sent successfully!')

  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }

  // Reset captcha
  captcha.value.verified = false
  captcha.value.loading = false
  captcha.value.error = ''
}
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
