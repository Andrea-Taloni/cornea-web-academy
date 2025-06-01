<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Scientific publications and research from Prof. Massimo Busin and the CWA team
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="bg-white border-b py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-4 items-center">
          <select
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Years</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
          <select
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Categories</option>
            <option>Research Papers</option>
            <option>Case Studies</option>
            <option>Reviews</option>
          </select>
          <input
            type="text"
            placeholder="Search publications..."
            class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </section>

    <!-- Publications List -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-6">
          <!-- Publication Item -->
          <article
            v-for="pub in publications"
            :key="pub.id"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div class="flex flex-col md:flex-row md:items-start gap-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2">{{ pub.title }}</h3>
                <p class="text-gray-600 mb-2">{{ pub.authors }}</p>
                <p class="text-sm text-gray-500 mb-3">
                  {{ pub.journal }} • {{ pub.year }} • {{ pub.type }}
                </p>
                <p class="text-gray-700 mb-4">{{ pub.abstract }}</p>
                <div class="flex gap-4">
                  <a href="#" class="text-blue-600 hover:text-blue-800 font-medium"> View PDF </a>
                  <a href="#" class="text-blue-600 hover:text-blue-800 font-medium"> PubMed </a>
                  <a href="#" class="text-blue-600 hover:text-blue-800 font-medium"> DOI </a>
                </div>
              </div>
              <div class="md:w-32 text-center">
                <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {{ pub.citations }} citations
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div class="mt-12 flex justify-center">
          <nav class="flex items-center gap-2">
            <button class="px-3 py-1 rounded border hover:bg-gray-100">Previous</button>
            <button class="px-3 py-1 rounded bg-blue-600 text-white">1</button>
            <button class="px-3 py-1 rounded border hover:bg-gray-100">2</button>
            <button class="px-3 py-1 rounded border hover:bg-gray-100">3</button>
            <button class="px-3 py-1 rounded border hover:bg-gray-100">Next</button>
          </nav>
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

const publications = ref([
  {
    id: 1,
    title: 'Long-term Outcomes of Ultra-Thin Descemet Stripping Automated Endothelial Keratoplasty',
    authors: 'Busin M, Madi S, Santorum P, Scorcia V, Beltz J',
    journal: 'Ophthalmology',
    year: '2024',
    type: 'Research Article',
    abstract: 'This study evaluates the long-term clinical outcomes and graft survival rates...',
    citations: 45,
  },
  {
    id: 2,
    title: 'Microkeratome-Assisted Preparation of Ultrathin Grafts for DSAEK',
    authors: 'Busin M, Albé E',
    journal: 'Cornea',
    year: '2024',
    type: 'Technical Note',
    abstract: 'We describe a standardized technique for preparing ultrathin grafts...',
    citations: 28,
  },
  {
    id: 3,
    title: 'Outcomes of Deep Anterior Lamellar Keratoplasty Using the Big-Bubble Technique',
    authors: 'Busin M, Zambianchi L, Garweg JG',
    journal: 'American Journal of Ophthalmology',
    year: '2023',
    type: 'Clinical Study',
    abstract: 'Purpose: To evaluate the visual and clinical outcomes of DALK performed...',
    citations: 67,
  },
])
</script>
