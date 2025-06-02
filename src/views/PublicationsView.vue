<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero
      title="Publications"
      subtitle="Explore the extensive research contributions from Prof. Massimo Busin and colleagues"
    />

    <!-- Statistics Overview -->
    <StatisticsOverview v-if="!loading && publications.length > 0" :publications="publications" />

    <!-- Filters Section -->
    <FiltersSection
      v-model:searchQuery="searchQuery"
      v-model:selectedYear="selectedYear"
      v-model:selectedJournal="selectedJournal"
      v-model:sortBy="sortBy"
      v-model:sortOrder="sortOrder"
      :availableYears="availableYears"
      :availableJournals="availableJournals"
      :hasActiveFilters="hasActiveFilters"
      @search="debouncedSearch"
      @filter="filterPublications"
      @sort="filterPublications"
      @clear-filters="clearFilters"
    />

    <!-- Loading State -->
    <section v-if="loading" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p class="mt-4 text-gray-600">Loading publications...</p>
        </div>
      </div>
    </section>

    <!-- Error State -->
    <section v-else-if="error" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <svg
            class="mx-auto h-12 w-12 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 class="mt-2 text-lg font-medium text-red-800">Error Loading Publications</h3>
          <p class="mt-1 text-sm text-red-600">{{ error }}</p>
          <button
            @click="loadPublications"
            class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    </section>

    <!-- Publications List -->
    <PublicationsList
      v-else
      :filteredPublications="filteredPublications"
      :currentPage="currentPage"
      :itemsPerPage="itemsPerPage"
      @page-change="handlePageChange"
    />

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Papa from 'papaparse'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/PageHero.vue'
import StatisticsOverview from '@/components/publications/StatisticsSummary.vue'
import FiltersSection from '@/components/publications/FiltersSection.vue'
import PublicationsList from '@/components/publications/PublicationsList.vue'

// State
const publications = ref([])
const filteredPublications = ref([])
const loading = ref(true)
const error = ref('')
const currentPage = ref(1)
const itemsPerPage = 20

// Filters
const searchQuery = ref('')
const selectedYear = ref(null)
const selectedJournal = ref(null)

// Sorting
const sortBy = ref('year')
const sortOrder = ref('desc')

// Computed properties
const hasActiveFilters = computed(() => {
  return searchQuery.value || selectedYear.value || selectedJournal.value
})

const availableYears = computed(() => {
  const years = [...new Set(publications.value.map((pub) => pub['Publication Year']))]
    .filter((year) => year)
    .sort((a, b) => b - a)
  return years
})

const availableJournals = computed(() => {
  const journals = [...new Set(publications.value.map((pub) => pub['Journal/Book']))]
    .filter((journal) => journal)
    .sort()
  return journals
})

// Methods
const loadPublications = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await fetch('/scopus.csv')
    if (!response.ok) {
      throw new Error('Failed to fetch CSV file')
    }
    let csvText = await response.text()

    // Remove BOM if present
    if (csvText.charCodeAt(0) === 0xfeff) {
      csvText = csvText.substring(1)
    }

    // Parse CSV
    const result = Papa.parse(csvText, {
      header: true,
      delimiter: ',',
      skipEmptyLines: true,
      transformHeader: (header) => header.trim().replace(/^\uFEFF/, ''),
    })

    if (result.errors.length > 0) {
      console.warn('CSV parsing warnings:', result.errors)
    }

    // Process and clean data - map Scopus columns to our format
    publications.value = result.data
      .filter((pub) => pub && pub.Title)
      .map((pub) => ({
        ...pub,
        Title: (pub.Title || '').trim(),
        Authors: (pub.Authors || '').trim(),
        'Journal/Book': (pub['Source title'] || '').trim(),
        'Publication Year': pub.Year ? parseInt(pub.Year.toString()) : null,
        DOI: (pub.DOI || '').trim(),
        CitedBy: pub['Cited by'] ? parseInt(pub['Cited by'].toString()) : 0,
        DocumentType: (pub['Document Type'] || '').trim(),
        Volume: pub.Volume || '',
        Issue: pub.Issue || '',
        PageStart: pub['Page start'] || '',
        PageEnd: pub['Page end'] || '',
        OpenAccess: pub['Open Access'] || '',
      }))

    console.log('Loaded', publications.value.length, 'publications from Scopus')

    // Apply initial sorting
    filteredPublications.value = sortPublications([...publications.value])
  } catch (err) {
    console.error('Error loading publications:', err)
    error.value = 'Failed to load publication data. Please try again.'
  } finally {
    loading.value = false
  }
}

const filterPublications = () => {
  let filtered = [...publications.value]

  // Filter by year
  if (selectedYear.value) {
    filtered = filtered.filter((pub) => pub['Publication Year'] === selectedYear.value)
  }

  // Filter by journal
  if (selectedJournal.value) {
    filtered = filtered.filter((pub) => pub['Journal/Book'] === selectedJournal.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((pub) => {
      return (
        pub.Title.toLowerCase().includes(query) ||
        pub.Authors.toLowerCase().includes(query) ||
        pub['Journal/Book'].toLowerCase().includes(query) ||
        (pub.Citation || '').toLowerCase().includes(query)
      )
    })
  }

  // Apply sorting
  filtered = sortPublications(filtered)

  filteredPublications.value = filtered
  currentPage.value = 1
}

// Sorting function
const sortPublications = (pubs) => {
  const sorted = [...pubs]

  switch (sortBy.value) {
    case 'year':
      sorted.sort((a, b) => {
        const yearA = a['Publication Year'] || 0
        const yearB = b['Publication Year'] || 0
        return sortOrder.value === 'desc' ? yearB - yearA : yearA - yearB
      })
      break

    case 'citations':
      sorted.sort((a, b) => {
        const citA = a.CitedBy || 0
        const citB = b.CitedBy || 0
        return sortOrder.value === 'desc' ? citB - citA : citA - citB
      })
      break

    case 'title':
      sorted.sort((a, b) => {
        const titleA = a.Title.toLowerCase()
        const titleB = b.Title.toLowerCase()
        const comparison = titleA.localeCompare(titleB)
        return sortOrder.value === 'desc' ? -comparison : comparison
      })
      break

    case 'journal':
      sorted.sort((a, b) => {
        const journalA = (a['Journal/Book'] || '').toLowerCase()
        const journalB = (b['Journal/Book'] || '').toLowerCase()
        const comparison = journalA.localeCompare(journalB)
        return sortOrder.value === 'desc' ? -comparison : comparison
      })
      break
  }

  return sorted
}

// Debounced search
let searchTimeout = null
const debouncedSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    filterPublications()
  }, 300)
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedYear.value = null
  selectedJournal.value = null
  sortBy.value = 'year'
  sortOrder.value = 'desc'
  filterPublications()
}

const handlePageChange = (page) => {
  currentPage.value = page
}

// Watch for filter changes
watch([selectedYear, selectedJournal], () => {
  filterPublications()
})

// Watch for sort changes
watch([sortBy, sortOrder], () => {
  filterPublications()
})

// Load publications on mount
onMounted(() => {
  loadPublications()
})
</script>
