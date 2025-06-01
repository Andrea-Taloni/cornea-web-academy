<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Explore the extensive research contributions from Prof. Massimo Busin and the CWA team
          </p>
        </div>
      </div>
    </section>

    <!-- Statistics Overview -->
    <section v-if="!loading && publications.length > 0" class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex justify-center gap-16">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600">{{ publications.length }}</div>
            <div class="text-sm text-gray-600 mt-1">Total Publications</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-600">{{ yearRange }}</div>
            <div class="text-sm text-gray-600 mt-1">Years Active</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <!-- Search and Filters -->
        <div class="flex flex-col lg:flex-row gap-4">
          <!-- Search Bar -->
          <div class="flex-1">
            <div class="relative">
              <svg
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search publications by title, authors, or journal..."
                class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                @input="debouncedSearch"
              />
            </div>
          </div>

          <!-- Filter Buttons -->
          <div class="flex gap-2">
            <!-- Year Filter -->
            <div class="relative">
              <button
                @click="showYearFilter = !showYearFilter"
                class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                {{ selectedYear || 'All Years' }}
                <svg
                  class="w-4 h-4"
                  :class="{ 'rotate-180': showYearFilter }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <!-- Year Dropdown -->
              <div
                v-if="showYearFilter"
                class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50 max-h-64 overflow-y-auto"
              >
                <button
                  @click="selectYear(null)"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  All Years
                </button>
                <button
                  v-for="year in availableYears"
                  :key="year"
                  @click="selectYear(year)"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100"
                  :class="{ 'bg-blue-50 text-blue-600': selectedYear === year }"
                >
                  {{ year }}
                </button>
              </div>
            </div>

            <!-- Journal Filter -->
            <div class="relative">
              <button
                @click="showJournalFilter = !showJournalFilter"
                class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
                {{ selectedJournal ? truncateText(selectedJournal, 20) : 'All Journals' }}
                <svg
                  class="w-4 h-4"
                  :class="{ 'rotate-180': showJournalFilter }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <!-- Journal Dropdown -->
              <div
                v-if="showJournalFilter"
                class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50 max-h-64 overflow-y-auto"
              >
                <button
                  @click="selectJournal(null)"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  All Journals
                </button>
                <button
                  v-for="journal in availableJournals"
                  :key="journal"
                  @click="selectJournal(journal)"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100"
                  :class="{ 'bg-blue-50 text-blue-600': selectedJournal === journal }"
                >
                  {{ journal }}
                </button>
              </div>
            </div>

            <!-- Clear Filters -->
            <button
              v-if="hasActiveFilters"
              @click="clearFilters"
              class="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              Clear
            </button>
          </div>
        </div>

        <!-- Active Filters Display -->
        <div v-if="hasActiveFilters" class="mt-3 flex flex-wrap gap-2">
          <span class="text-sm text-gray-600">Active filters:</span>
          <span
            v-if="searchQuery"
            class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          >
            Search: "{{ truncateText(searchQuery, 30) }}"
          </span>
          <span
            v-if="selectedYear"
            class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
          >
            Year: {{ selectedYear }}
          </span>
          <span
            v-if="selectedJournal"
            class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
          >
            Journal: {{ truncateText(selectedJournal, 30) }}
          </span>
        </div>

        <!-- Results Count -->
        <div class="mt-3 text-sm text-gray-600">
          Showing {{ filteredPublications.length }} of {{ publications.length }} publications
        </div>
      </div>
    </section>

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
    <section v-else class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Group by Year Toggle -->
        <div class="mb-6 flex justify-end">
          <label class="flex items-center cursor-pointer">
            <input
              v-model="groupByYear"
              type="checkbox"
              class="sr-only peer"
              @change="handleGroupingChange"
            />
            <div
              class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
            ></div>
            <span class="ml-3 text-sm font-medium text-gray-700">Group by year</span>
          </label>
        </div>

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
          <PublicationCard
            v-for="pub in paginatedPublications"
            :key="pub.PMID"
            :publication="pub"
          />
        </div>

        <!-- No Results -->
        <div
          v-if="filteredPublications.length === 0 && !loading"
          class="text-center py-12 bg-gray-50 rounded-lg"
        >
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
        <div v-if="!groupByYear && totalPages > 1" class="mt-12">
          <nav class="flex items-center justify-between">
            <div class="flex-1 flex justify-between sm:hidden">
              <button
                @click="previousPage"
                :disabled="currentPage === 1"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-gray-700">
                  Showing
                  <span class="font-medium">{{ paginationStart }}</span>
                  to
                  <span class="font-medium">{{ paginationEnd }}</span>
                  of
                  <span class="font-medium">{{ filteredPublications.length }}</span>
                  results
                </p>
              </div>
              <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button
                    @click="previousPage"
                    :disabled="currentPage === 1"
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <template v-for="page in displayedPages" :key="page">
                    <span
                      v-if="page === '...'"
                      class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                    >
                      ...
                    </span>
                    <button
                      v-else
                      @click="goToPage(page)"
                      :class="[
                        'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                        currentPage === page
                          ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                      ]"
                    >
                      {{ page }}
                    </button>
                  </template>
                  <button
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Papa from 'papaparse'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PublicationCard from '@/components/PublicationCard.vue'

// State
const publications = ref([])
const filteredPublications = ref([])
const loading = ref(true)
const error = ref('')
const currentPage = ref(1)
const itemsPerPage = 20
const groupByYear = ref(false)

// Filters
const searchQuery = ref('')
const selectedYear = ref(null)
const selectedJournal = ref(null)
const showYearFilter = ref(false)
const showJournalFilter = ref(false)

// Close dropdowns when clicking outside
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

const handleClickOutside = (e) => {
  if (!e.target.closest('.relative')) {
    showYearFilter.value = false
    showJournalFilter.value = false
  }
}

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

const yearRange = computed(() => {
  if (publications.value.length === 0) return '0'
  const years = availableYears.value
  if (years.length === 0) return '0'
  return `${years[years.length - 1]}-${years[0]}`
})

const totalPages = computed(() => {
  return Math.ceil(filteredPublications.value.length / itemsPerPage)
})

const paginatedPublications = computed(() => {
  if (groupByYear.value) return []
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPublications.value.slice(start, end)
})

const groupedPublications = computed(() => {
  if (!groupByYear.value) return []

  const grouped = {}
  filteredPublications.value.forEach((pub) => {
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

const paginationStart = computed(() => {
  return (currentPage.value - 1) * itemsPerPage + 1
})

const paginationEnd = computed(() => {
  return Math.min(currentPage.value * itemsPerPage, filteredPublications.value.length)
})

const displayedPages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)
    if (current > 3) pages.push('...')
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i)
    }
    if (current < total - 2) pages.push('...')
    pages.push(total)
  }

  return pages
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

    // Sort by year (newest first)
    publications.value.sort((a, b) => {
      const yearA = a['Publication Year'] || 0
      const yearB = b['Publication Year'] || 0
      return yearB - yearA
    })

    filteredPublications.value = [...publications.value]
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

  filteredPublications.value = filtered
  currentPage.value = 1
}

// Debounced search
let searchTimeout = null
const debouncedSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    filterPublications()
  }, 300)
}

const selectYear = (year) => {
  selectedYear.value = year
  showYearFilter.value = false
  filterPublications()
}

const selectJournal = (journal) => {
  selectedJournal.value = journal
  showJournalFilter.value = false
  filterPublications()
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedYear.value = null
  selectedJournal.value = null
  filterPublications()
}

const handleGroupingChange = () => {
  currentPage.value = 1
}

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Pagination methods
const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const goToPage = (page) => {
  currentPage.value = page
}

// Watch for filter changes
watch([selectedYear, selectedJournal], () => {
  filterPublications()
})

// Load publications on mount
onMounted(() => {
  loadPublications()
})
</script>

<style scoped>
/* Custom scrollbar for dropdowns */
.max-h-64::-webkit-scrollbar {
  width: 6px;
}

.max-h-64::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.max-h-64::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.max-h-64::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
