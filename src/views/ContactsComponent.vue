<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Get in touch with the CWA team for inquiries, support, or collaboration
          </p>
        </div>
      </div>
    </section>

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

              <button
                type="submit"
                class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.8098!2d12.0486!3d44.2228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ca49e5bbba7ab%3A0xef5e75c30e1e5e3f!2sVilla%20Igea%20Hospital!5e0!3m2!1sen!2sit!4v1234567890123"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Villa Igea Hospital - Via Marcona 69, 47121 Forlì, Italy"
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
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Reset form or show success message
}
</script>
