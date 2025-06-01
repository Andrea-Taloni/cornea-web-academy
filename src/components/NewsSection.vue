<template>
  <section class="py-16 md:py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">Latest News and Events</h3>
      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="article in newsArticles"
          :key="article.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
        >
          <div class="h-48 bg-gray-300"></div>
          <div class="p-6">
            <p class="text-sm text-blue-600 mb-2">{{ article.date }}</p>
            <h4 class="text-xl font-semibold mb-2">{{ article.title }}</h4>
            <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
            <a href="#" class="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const newsArticles = ref([
  {
    id: 1,
    date: 'December 15, 2024',
    title: 'Upcoming Live Surgery: Advanced DALK Technique',
    excerpt:
      'Join us for an exclusive live demonstration of the latest DALK surgical techniques...',
  },
  {
    id: 2,
    date: 'December 10, 2024',
    title: 'New Educational Module Released',
    excerpt:
      "We're excited to announce our latest educational module on corneal transplantation...",
  },
  {
    id: 3,
    date: 'December 5, 2024',
    title: 'International Workshop Success',
    excerpt:
      'Over 500 participants joined our recent international workshop on innovative corneal...',
  },
])
</script>
