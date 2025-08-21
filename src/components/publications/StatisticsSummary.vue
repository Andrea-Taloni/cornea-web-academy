<!-- src/components/publications/StatisticsOverview.vue -->
<template>
  <section class="bg-white border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-8">{{ $t('publications.scopusMetrics') }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div class="text-center p-4 bg-blue-50 rounded-lg">
          <div class="text-3xl font-bold text-blue-600">{{ publications.length }}</div>
          <div class="text-sm text-gray-600 mt-1">{{ $t('publications.totalPublications') }}</div>
        </div>
        <div class="text-center p-4 bg-purple-50 rounded-lg">
          <div class="text-3xl font-bold text-purple-600">{{ yearRange }}</div>
          <div class="text-sm text-gray-600 mt-1">{{ $t('publications.yearsActive') }}</div>
        </div>
        <div class="text-center p-4 bg-green-50 rounded-lg">
          <div class="text-3xl font-bold text-green-600">{{ hIndex }}</div>
          <div class="text-sm text-gray-600 mt-1">{{ $t('publications.hIndex') }}</div>
        </div>
        <div class="text-center p-4 bg-orange-50 rounded-lg">
          <div class="text-3xl font-bold text-orange-600">
            {{ totalCitations.toLocaleString() }}
          </div>
          <div class="text-sm text-gray-600 mt-1">{{ $t('publications.totalCitations') }}</div>
        </div>
        <div class="text-center p-4 bg-red-50 rounded-lg">
          <div class="text-3xl font-bold text-red-600">{{ avgCitationsPerPub }}</div>
          <div class="text-sm text-gray-600 mt-1">{{ $t('publications.avgCitationsPerPaper') }}</div>
        </div>
        <div class="text-center p-4 bg-teal-50 rounded-lg">
          <div class="text-3xl font-bold text-teal-600">{{ uniqueCoAuthors }}</div>
          <div class="text-sm text-gray-600 mt-1">{{ $t('publications.coAuthors') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  publications: {
    type: Array,
    required: true,
  },
})

const availableYears = computed(() => {
  const years = [...new Set(props.publications.map((pub) => pub['Publication Year']))]
    .filter((year) => year)
    .sort((a, b) => b - a)
  return years
})

const yearRange = computed(() => {
  if (props.publications.length === 0) return '0'
  const years = availableYears.value
  if (years.length === 0) return '0'
  return `${years[years.length - 1]}-${years[0]}`
})

const totalCitations = computed(() => {
  return props.publications.reduce((sum, pub) => sum + (pub.CitedBy || 0), 0)
})

const hIndex = computed(() => {
  // Calculate h-index: h papers with at least h citations each
  const sortedByCitations = [...props.publications].sort(
    (a, b) => (b.CitedBy || 0) - (a.CitedBy || 0),
  )

  let h = 0
  for (let i = 0; i < sortedByCitations.length; i++) {
    const citations = sortedByCitations[i].CitedBy || 0
    if (citations >= i + 1) {
      h = i + 1
    } else {
      break
    }
  }
  return h
})

const avgCitationsPerPub = computed(() => {
  if (props.publications.length === 0) return '0'
  const avg = totalCitations.value / props.publications.length
  return avg.toFixed(1)
})

const uniqueCoAuthors = computed(() => {
  const allAuthors = new Set()
  props.publications.forEach((pub) => {
    if (pub.Authors) {
      // Split authors by semicolon or comma
      const authors = pub.Authors.split(/[;,]/)
        .map((a) => a.trim())
        .filter((a) => a)
      authors.forEach((author) => allAuthors.add(author))
    }
  })
  return allAuthors.size
})
</script>
