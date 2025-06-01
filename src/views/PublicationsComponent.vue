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
            v-model="selectedYear"
            @change="filterPublications"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Years</option>
            <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
          </select>
          <select
            v-model="selectedJournal"
            @change="filterPublications"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Journals</option>
            <option v-for="journal in availableJournals" :key="journal" :value="journal">
              {{ journal }}
            </option>
          </select>
          <input
            v-model="searchQuery"
            @input="filterPublications"
            type="text"
            placeholder="Search publications..."
            class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mt-4 text-sm text-gray-600">
          Showing {{ paginatedPublications.length }} of
          {{ filteredPublications.length }} publications
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <section v-if="loading" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600"
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
          <span>Loading publications...</span>
        </div>
      </div>
    </section>

    <!-- Error State -->
    <section v-else-if="error" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p class="text-red-600">{{ error }}</p>
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
    <section v-else class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-6">
          <!-- Publication Item -->
          <article
            v-for="pub in paginatedPublications"
            :key="pub.PMID"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div class="flex flex-col md:flex-row md:items-start gap-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2">{{ pub.Title }}</h3>
                <p class="text-gray-600 mb-2">{{ pub.Authors }}</p>
                <p class="text-sm text-gray-500 mb-3">
                  <span class="font-medium">{{ pub['Journal/Book'] }}</span> •
                  {{ pub['Publication Year'] }}
                  <span v-if="pub.Citation"> • {{ pub.Citation }}</span>
                </p>
                <div class="flex flex-wrap gap-4 text-sm">
                  <a
                    v-if="pub.PMID"
                    :href="`https://pubmed.ncbi.nlm.nih.gov/${pub.PMID}/`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                      ></path>
                      <path
                        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                      ></path>
                    </svg>
                    PubMed
                  </a>
                  <a
                    v-if="pub.PMCID"
                    :href="`https://www.ncbi.nlm.nih.gov/pmc/articles/${pub.PMCID}/`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                      ></path>
                      <path
                        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                      ></path>
                    </svg>
                    PMC Full Text
                  </a>
                  <a
                    v-if="pub.DOI"
                    :href="`https://doi.org/${pub.DOI}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                      ></path>
                      <path
                        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                      ></path>
                    </svg>
                    DOI
                  </a>
                </div>
              </div>
              <div class="md:w-32 text-center">
                <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {{ pub['Publication Year'] }}
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- No Results -->
        <div v-if="filteredPublications.length === 0 && !loading" class="text-center py-12">
          <p class="text-gray-500 text-lg">No publications found matching your criteria.</p>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="mt-12 flex justify-center">
          <nav class="flex items-center gap-2">
            <button
              @click="currentPage = Math.max(1, currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-3 py-1 rounded border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <!-- Page numbers -->
            <template v-for="page in displayedPages" :key="page">
              <button v-if="page === '...'" class="px-3 py-1" disabled>...</button>
              <button
                v-else
                @click="currentPage = page"
                :class="[
                  'px-3 py-1 rounded border',
                  currentPage === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-100',
                ]"
              >
                {{ page }}
              </button>
            </template>

            <button
              @click="currentPage = Math.min(totalPages, currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-3 py-1 rounded border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Papa from 'papaparse'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

// State
const publications = ref([])
const filteredPublications = ref([])
const loading = ref(true)
const error = ref('')
const currentPage = ref(1)
const itemsPerPage = 10

// Filters
const selectedYear = ref('')
const selectedJournal = ref('')
const searchQuery = ref('')

// Computed properties
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

const totalPages = computed(() => {
  return Math.ceil(filteredPublications.value.length / itemsPerPage)
})

const paginatedPublications = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPublications.value.slice(start, end)
})

const displayedPages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    // Show all pages if 7 or fewer
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    // Always show first page
    pages.push(1)

    if (current > 3) {
      pages.push('...')
    }

    // Show pages around current
    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (current < total - 2) {
      pages.push('...')
    }

    // Always show last page
    pages.push(total)
  }

  return pages
})

// Methods
const loadPublications = async () => {
  loading.value = true
  error.value = ''

  try {
    // Fetch the CSV file from the public directory
    const response = await fetch('/csvBusinMassiset.csv')
    if (!response.ok) {
      throw new Error('Failed to fetch CSV file')
    }
    let csvText = await response.text()

    console.log('CSV loaded, length:', csvText.length)

    // Remove BOM if present
    if (csvText.charCodeAt(0) === 0xfeff) {
      csvText = csvText.substring(1)
      console.log('BOM removed')
    }

    // Log the first line to see what we're dealing with
    const firstNewline = csvText.indexOf('\n')
    const firstLine = csvText.substring(0, firstNewline > 0 ? firstNewline : 100)
    console.log('First line of CSV:', firstLine)
    console.log(
      'First line char codes:',
      firstLine.split('').map((c) => c.charCodeAt(0)),
    )

    // Parse CSV data with Papaparse - explicitly set comma as delimiter
    const result = Papa.parse(csvText, {
      header: true,
      delimiter: ',', // Explicitly set comma as delimiter
      newline: '\n', // Explicitly set newline
      quoteChar: '"',
      escapeChar: '"',
      dynamicTyping: false, // Keep as strings for now
      skipEmptyLines: true,
      transformHeader: (header) => {
        // Clean up header names
        const cleaned = header.trim().replace(/^\uFEFF/, '') // Remove BOM from headers
        console.log(`Header: "${header}" -> "${cleaned}"`)
        return cleaned
      },
    })

    console.log('Parse result:', result)
    console.log('Parsed data count:', result.data.length)
    console.log('Headers found:', result.meta.fields)
    console.log('First parsed row:', result.data[0])

    if (result.errors.length > 0) {
      console.warn('CSV parsing warnings:', result.errors)
      // Continue processing even with warnings
    }

    // Clean up the data
    publications.value = result.data
      .filter((pub) => pub && Object.keys(pub).length > 0) // Filter out empty objects
      .map((pub, index) => {
        // Log the first few publications to debug
        if (index < 3) {
          console.log(`Publication ${index}:`, pub)
        }

        // Ensure all fields are properly formatted
        return {
          ...pub,
          Title: (pub.Title || '').toString().trim(),
          Authors: (pub.Authors || '').toString().trim(),
          'Journal/Book': (pub['Journal/Book'] || '').toString().trim(),
          Citation: (pub.Citation || '').toString().trim(),
          DOI: (pub.DOI || '').toString().trim(),
          PMID: (pub.PMID || '').toString().trim(),
          PMCID: (pub.PMCID || '').toString().trim(),
          'Publication Year': pub['Publication Year']
            ? parseInt(pub['Publication Year'].toString())
            : null,
        }
      })
      .filter((pub) => pub.Title && pub.Title.length > 0) // Filter out entries without titles

    console.log('Cleaned publications count:', publications.value.length)

    // Sort by year (newest first)
    publications.value.sort((a, b) => {
      const yearA = a['Publication Year'] || 0
      const yearB = b['Publication Year'] || 0
      return yearB - yearA
    })

    filteredPublications.value = [...publications.value]

    if (publications.value.length === 0) {
      console.warn('No publications found after parsing. Check the CSV format.')
      error.value = 'No valid publications found in the CSV file.'
    }
  } catch (err) {
    console.error('Error loading publications:', err)
    error.value =
      'Failed to load publication data. Please check if csvBusinMassiset.csv is in the public directory.'
  } finally {
    loading.value = false
  }
}

const filterPublications = () => {
  let filtered = [...publications.value]

  // Filter by year
  if (selectedYear.value) {
    filtered = filtered.filter((pub) => pub['Publication Year'] === parseInt(selectedYear.value))
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
        (pub['Journal/Book'] || '').toLowerCase().includes(query) ||
        (pub.Citation || '').toLowerCase().includes(query)
      )
    })
  }

  filteredPublications.value = filtered
  currentPage.value = 1 // Reset to first page when filtering
}

// Add a test button to manually check CSV loading
const testCSVLoad = async () => {
  try {
    const response = await fetch('/csvBusinMassiset.csv')
    console.log('Response status:', response.status)
    console.log('Response OK:', response.ok)

    const text = await response.text()
    console.log('==================== RAW CSV CONTENT ====================')
    console.log(text)
    console.log('==================== END RAW CONTENT ====================')
    console.log('Total length:', text.length)

    // Check for different line endings
    const crlfCount = (text.match(/\r\n/g) || []).length
    const lfCount = (text.match(/\n/g) || []).length
    const crCount = (text.match(/\r/g) || []).length
    console.log('Line endings - CRLF:', crlfCount, 'LF:', lfCount, 'CR:', crCount)

    // Count commas to estimate fields
    const firstLine = text.split(/[\r\n]+/)[0]
    const commaCount = (firstLine.match(/,/g) || []).length
    console.log('Commas in first line:', commaCount)
  } catch (err) {
    console.error('Test load error:', err)
  }
}
</script>
