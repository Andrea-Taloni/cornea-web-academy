<!-- src/components/publications/FiltersSection.vue -->
<template>
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
              :value="searchQuery"
              @input="updateSearchQuery"
              type="text"
              placeholder="Search publications by title, authors, or journal..."
              class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <!-- Filter and Sort Controls -->
        <div class="flex flex-wrap gap-2">
          <!-- Sort Dropdown -->
          <div class="relative" ref="sortDropdownRef">
            <button
              @click.stop="toggleSortFilter"
              class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 flex items-center gap-2 min-w-0"
            >
              <svg
                class="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                ></path>
              </svg>
              <span class="truncate">{{ getSortLabel(sortBy, sortOrder) }}</span>
              <svg
                class="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': showSortFilter }"
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
            <!-- Sort Dropdown -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div
                v-show="showSortFilter"
                class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-[60] overflow-hidden"
              >
                <div class="py-1">
                  <button
                    v-for="option in sortOptions"
                    :key="option.value"
                    @click.stop="selectSort(option.field, option.order)"
                    class="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center justify-between transition-colors duration-150"
                    :class="{
                      'bg-blue-50 text-blue-600':
                        sortBy === option.field && sortOrder === option.order,
                    }"
                  >
                    <span>{{ option.label }}</span>
                    <svg
                      v-if="sortBy === option.field && sortOrder === option.order"
                      class="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </transition>
          </div>

          <!-- Year Filter -->
          <div class="relative" ref="yearDropdownRef">
            <button
              @click.stop="toggleYearFilter"
              class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 flex items-center gap-2 min-w-0"
            >
              <svg
                class="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span class="truncate">{{ selectedYear || 'All Years' }}</span>
              <svg
                class="w-4 h-4 flex-shrink-0 transition-transform duration-200"
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
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div
                v-show="showYearFilter"
                class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-[60] max-h-64 overflow-y-auto"
              >
                <button
                  @click.stop="selectYear(null)"
                  class="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-150"
                  :class="{ 'bg-blue-50 text-blue-600': !selectedYear }"
                >
                  All Years
                </button>
                <button
                  v-for="year in availableYears"
                  :key="year"
                  @click.stop="selectYear(year)"
                  class="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-150"
                  :class="{ 'bg-blue-50 text-blue-600': selectedYear === year }"
                >
                  {{ year }}
                </button>
              </div>
            </transition>
          </div>

          <!-- Journal Filter -->
          <div class="relative" ref="journalDropdownRef">
            <button
              @click.stop="toggleJournalFilter"
              class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 flex items-center gap-2 min-w-0"
            >
              <svg
                class="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
              <span class="truncate">{{
                selectedJournal ? truncateText(selectedJournal, 20) : 'All Journals'
              }}</span>
              <svg
                class="w-4 h-4 flex-shrink-0 transition-transform duration-200"
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
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div
                v-show="showJournalFilter"
                class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-[60] max-h-64 overflow-y-auto"
              >
                <button
                  @click.stop="selectJournal(null)"
                  class="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-150"
                  :class="{ 'bg-blue-50 text-blue-600': !selectedJournal }"
                >
                  All Journals
                </button>
                <button
                  v-for="journal in availableJournals"
                  :key="journal"
                  @click.stop="selectJournal(journal)"
                  class="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-150"
                  :class="{ 'bg-blue-50 text-blue-600': selectedJournal === journal }"
                >
                  {{ journal }}
                </button>
              </div>
            </transition>
          </div>

          <!-- Clear Filters -->
          <button
            v-if="hasActiveFilters"
            @click="clearAllFilters"
            class="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 flex items-center gap-2 transition-colors duration-150"
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
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  searchQuery: {
    type: String,
    required: true,
  },
  selectedYear: {
    type: Number,
    default: null,
  },
  selectedJournal: {
    type: String,
    default: null,
  },
  sortBy: {
    type: String,
    default: 'year',
  },
  sortOrder: {
    type: String,
    default: 'desc',
  },
  availableYears: {
    type: Array,
    required: true,
  },
  availableJournals: {
    type: Array,
    required: true,
  },
  hasActiveFilters: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:searchQuery',
  'update:selectedYear',
  'update:selectedJournal',
  'update:sortBy',
  'update:sortOrder',
  'search',
  'filter',
  'sort',
  'clear-filters',
])

const showYearFilter = ref(false)
const showJournalFilter = ref(false)
const showSortFilter = ref(false)

// Refs for dropdown containers
const sortDropdownRef = ref(null)
const yearDropdownRef = ref(null)
const journalDropdownRef = ref(null)

const sortOptions = [
  { label: 'Date (Newest First)', field: 'year', order: 'desc', value: 'year-desc' },
  { label: 'Date (Oldest First)', field: 'year', order: 'asc', value: 'year-asc' },
  { label: 'Citations (Most First)', field: 'citations', order: 'desc', value: 'citations-desc' },
  { label: 'Citations (Least First)', field: 'citations', order: 'asc', value: 'citations-asc' },
  { label: 'Title (A-Z)', field: 'title', order: 'asc', value: 'title-asc' },
  { label: 'Title (Z-A)', field: 'title', order: 'desc', value: 'title-desc' },
  { label: 'Journal (A-Z)', field: 'journal', order: 'asc', value: 'journal-asc' },
  { label: 'Journal (Z-A)', field: 'journal', order: 'desc', value: 'journal-desc' },
]

const updateSearchQuery = (event) => {
  emit('update:searchQuery', event.target.value)
  emit('search')
}

// Toggle functions
const toggleSortFilter = () => {
  showSortFilter.value = !showSortFilter.value
  showYearFilter.value = false
  showJournalFilter.value = false
}

const toggleYearFilter = () => {
  showYearFilter.value = !showYearFilter.value
  showSortFilter.value = false
  showJournalFilter.value = false
}

const toggleJournalFilter = () => {
  showJournalFilter.value = !showJournalFilter.value
  showSortFilter.value = false
  showYearFilter.value = false
}

// Selection functions
const selectYear = (year) => {
  emit('update:selectedYear', year)
  showYearFilter.value = false
  emit('filter')
}

const selectJournal = (journal) => {
  emit('update:selectedJournal', journal)
  showJournalFilter.value = false
  emit('filter')
}

const selectSort = (field, order) => {
  emit('update:sortBy', field)
  emit('update:sortOrder', order)
  showSortFilter.value = false
  emit('sort')
}

const clearAllFilters = () => {
  emit('clear-filters')
}

const getSortLabel = (sortBy, sortOrder) => {
  const option = sortOptions.find((opt) => opt.field === sortBy && opt.order === sortOrder)
  return option ? option.label : 'Date (Newest First)'
}

const truncateText = (text, maxLength) => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  // Check if click is outside all dropdown containers
  if (sortDropdownRef.value && !sortDropdownRef.value.contains(event.target)) {
    showSortFilter.value = false
  }
  if (yearDropdownRef.value && !yearDropdownRef.value.contains(event.target)) {
    showYearFilter.value = false
  }
  if (journalDropdownRef.value && !journalDropdownRef.value.contains(event.target)) {
    showJournalFilter.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
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

/* Ensure dropdowns are above other content */
.z-\[60\] {
  z-index: 60;
}
</style>
