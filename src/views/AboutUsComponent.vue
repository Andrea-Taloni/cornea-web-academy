<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">About CWA</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Pioneering Interactive Surgical Education in Corneal Transplantation
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
            <p class="text-gray-600 mb-4">
              The Cornea Web Academy (CWA) is dedicated to advancing ophthalmic education through
              innovative technology and interactive learning experiences. We bridge the gap between
              theoretical knowledge and practical surgical skills.
            </p>
            <p class="text-gray-600 mb-4">
              Founded by Prof. Massimo Busin, CWA provides surgeons worldwide with unprecedented
              access to live surgical procedures, expert techniques, and comprehensive educational
              resources.
            </p>
            <p class="text-gray-600">
              Our platform enables real-time interaction during surgeries, allowing participants to
              ask questions and receive immediate feedback from world-renowned experts.
            </p>
          </div>
          <div class="h-96 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in teamMembers" :key="member.name" class="text-center">
            <div class="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 class="text-xl font-bold mb-2">{{ member.name }}</h3>
            <p class="text-blue-600 mb-2">{{ member.title }}</p>
            <p class="text-gray-600 text-sm">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-blue-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-blue-200">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- History Timeline -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <!-- Timeline items -->
            <div v-for="(event, index) in timeline" :key="index" class="relative mb-8">
              <div class="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
              <div class="ml-16">
                <div class="text-sm text-gray-500 mb-1">{{ event.year }}</div>
                <h3 class="text-lg font-bold mb-2">{{ event.title }}</h3>
                <p class="text-gray-600">{{ event.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="i in 8"
            :key="i"
            class="h-24 bg-white rounded-lg shadow flex items-center justify-center"
          >
            <span class="text-gray-400">Partner Logo</span>
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

const teamMembers = ref([
  {
    name: 'Prof. Massimo Busin',
    title: 'Founder & Director',
    bio: 'Internationally renowned corneal surgeon with over 30 years of experience',
  },
  {
    name: 'Dr. Stefano Madi',
    title: 'Senior Surgeon',
    bio: 'Specialist in endothelial keratoplasty and complex corneal procedures',
  },
  {
    name: 'Dr. Paolo Santorum',
    title: 'Educational Director',
    bio: 'Leading the development of innovative surgical education programs',
  },
])

const stats = ref([
  { value: '10,000+', label: 'Registered Members' },
  { value: '500+', label: 'Live Surgeries' },
  { value: '50+', label: 'Countries Reached' },
  { value: '1,000+', label: 'Hours of Content' },
])

const timeline = ref([
  {
    year: '2018',
    title: 'CWA Founded',
    description: 'Prof. Massimo Busin establishes the Cornea Web Academy',
  },
  {
    year: '2019',
    title: 'First Live Surgery',
    description: 'Successfully broadcast first interactive live surgery session',
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Platform reaches surgeons in over 30 countries worldwide',
  },
  {
    year: '2022',
    title: 'Eye Stream Technology',
    description: 'Launch of proprietary HD streaming technology for surgical education',
  },
  {
    year: '2024',
    title: '10,000 Members',
    description: 'CWA community grows to over 10,000 active members',
  },
])
</script>
