<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero
      title="About Us"
      subtitle="Cornea Web Academy - Interactive Surgical Education Platform"
    />

    <!-- Mission Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Overview</h2>
            <p class="text-gray-600 mb-4">
              The Cornea Web Academy (CWA) is an educational platform for corneal surgery based at the Department of Ophthalmology, Ospedali Privati Forlì, Villa Igea, in Forlì, Italy. Founded in 2018 by Prof. Massimo Busin.
            </p>
            <p class="text-gray-600 mb-4">
              Our department performs approximately 300 keratoplasty procedures annually, including DALK, DMEK, DSAEK, UT-DSAEK, SALK, and mushroom keratoplasty. These surgeries are broadcast live through our streaming platform.
            </p>
            <p class="text-gray-600 mb-4">
              CWA is supported by the Istituto Internazionale di Ricerca e Formazione in Oftalmologia (IRFO).
            </p>
            <!-- IRFO Logo Placeholder -->
            <div class="mt-6 inline-flex items-center">
              <div class="h-16 w-32 bg-gray-300 rounded flex items-center justify-center">
                <span class="text-gray-500 text-sm">IRFO Logo</span>
              </div>
            </div>
          </div>
          <div class="h-96 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16">
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

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'
import { ref } from 'vue'

const teamMembers = ref([
  {
    name: 'Prof. Massimo Busin, MD',
    title: 'Director',
    bio: 'Professor of Ophthalmology. Developed large-diameter DALK and mushroom keratoplasty techniques.',
  },
  {
    name: 'Stefano Madi, MD',
    title: 'Senior Surgeon',
    bio: 'Specialist in endothelial keratoplasty. Focus on DMEK and UT-DSAEK procedures.',
  },
  {
    name: 'Paolo Santorum, MD',
    title: 'Educational Coordinator',
    bio: 'Coordinates live surgery broadcasts and educational programs.',
  },
])
</script>
