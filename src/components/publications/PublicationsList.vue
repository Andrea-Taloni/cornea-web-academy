<!-- src/components/publications/PublicationsList.vue -->
<template>
  <section class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Publications Display -->
      <div v-if="groupByYear" class="space-y-8">
        <!-- Grouped by Year -->
        <div v-for="yearGroup in groupedPublications" :key="yearGroup.year">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span>{{ yearGroup.year }}</span>
            <span class="ml-3 text-sm font-normal text-gray-500"
              >({{ yearGroup.publications.length }} publications)</span
            >
          </h2>
          <div class="space-y-4">
            <PublicationCard
              v-for="pub in yearGroup.publications"
              :key="pub.PMID"
              :publication="pub"
            />
          </div>
        </div>
      </div>
      <div v-else class="space-y-4">
        <!-- Flat List with Pagination -->
        <PublicationCard v-for="pub in paginatedPublications" :key="pub.PMID" :publication="pub" />
      </div>

      <!-- No Results -->
      <div v-if="filteredPublications.length === 0" class="text-center py-12 bg-gray-50 rounded-lg">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 class="mt-2 text-lg font-medium text-gray-900">No publications found</h3>
        <p class="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
      </div>

      <!-- Pagination (only when not grouped) -->
      <PaginationControls
        v-if="!groupByYear && totalPages > 1"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import PublicationCard from '@/components/PublicationCard.vue'
import PaginationControls from './PaginationControls.vue'

const props = defineProps({
  filteredPublications: {
    type: Array,
    required: true,
  },
  groupByYear: {
    type: Boolean,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['page-change'])

const totalPages = computed(() => {
  return Math.ceil(props.filteredPublications.length / props.itemsPerPage)
})

const paginatedPublications = computed(() => {
  if (props.groupByYear) return []
  const start = (props.currentPage - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return props.filteredPublications.slice(start, end)
})

const groupedPublications = computed(() => {
  if (!props.groupByYear) return []

  const grouped = {}
  props.filteredPublications.forEach((pub) => {
    const year = pub['Publication Year'] || 'Unknown'
    if (!grouped[year]) {
      grouped[year] = []
    }
    grouped[year].push(pub)
  })

  return Object.keys(grouped)
    .sort((a, b) => (b === 'Unknown' ? 1 : a === 'Unknown' ? -1 : b - a))
    .map((year) => ({
      year,
      publications: grouped[year],
    }))
})

const handlePageChange = (page) => {
  emit('page-change', page)
}
</script>
