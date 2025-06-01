<template>
  <article
    class="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 p-5 border border-gray-100 hover:-translate-y-0.5 relative"
  >
    <!-- Citation Count in Top Right -->
    <div v-if="publication.CitedBy !== undefined" class="absolute top-4 right-4">
      <span
        class="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full"
        :class="citationBadgeClass"
      >
        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
          />
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
        {{ publication.CitedBy }}
      </span>
    </div>

    <div class="flex flex-col gap-3 pr-20">
      <!-- Title -->
      <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">
        {{ publication.Title }}
      </h3>

      <!-- Authors - Full List -->
      <p class="text-sm text-gray-600">
        {{ publication.Authors }}
      </p>

      <!-- Badges Row -->
      <div class="flex items-center gap-2 flex-wrap">
        <!-- Journal Badge -->
        <span
          class="inline-flex items-center px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full"
        >
          {{ publication['Journal/Book'] }}
        </span>

        <!-- Year Badge -->
        <span
          class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full"
        >
          {{ publication['Publication Year'] || 'N/A' }}
        </span>

        <!-- Document Type Badge -->
        <span
          v-if="publication.DocumentType"
          class="inline-flex items-center px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full"
        >
          {{ publication.DocumentType }}
        </span>

        <!-- Open Access Badge -->
        <span
          v-if="publication.OpenAccess && publication.OpenAccess !== 'No'"
          class="inline-flex items-center px-3 py-1 text-sm font-medium text-orange-700 bg-orange-100 rounded-full"
        >
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm1 4a1 1 0 100 2h2a1 1 0 100-2H9z"
              clip-rule="evenodd"
            />
          </svg>
          Open Access
        </span>

        <!-- Volume/Issue Info -->
        <span v-if="volumeInfo" class="text-sm text-gray-500">
          {{ volumeInfo }}
        </span>
      </div>

      <!-- Action Links -->
      <div class="flex flex-wrap gap-3 text-sm mt-1">
        <!-- DOI -->
        <a
          v-if="publication.DOI"
          :href="`https://doi.org/${publication.DOI}`"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
        >
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          DOI
        </a>

        <!-- Scopus Link -->
        <a
          v-if="publication.Link"
          :href="publication.Link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            />
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
            />
          </svg>
          Scopus
        </a>

        <!-- Copy -->
        <button
          @click="copyCitation"
          class="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          :title="copied ? 'Copied!' : 'Copy citation'"
        >
          <svg
            v-if="!copied"
            class="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <svg
            v-else
            class="w-4 h-4 mr-1 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  publication: {
    type: Object,
    required: true,
  },
})

const copied = ref(false)

// Build volume/issue/pages info
const volumeInfo = computed(() => {
  const { Volume, Issue, PageStart, PageEnd } = props.publication
  let info = ''

  if (Volume) {
    info += Volume
    if (Issue) {
      info += `(${Issue})`
    }
  }

  if (PageStart) {
    if (info) info += ':'
    info += PageStart
    if (PageEnd && PageEnd !== PageStart) {
      info += `-${PageEnd}`
    }
  }

  return info
})

// Determine citation badge color based on count
const citationBadgeClass = computed(() => {
  const count = props.publication.CitedBy || 0
  if (count >= 100) return 'text-red-700 bg-red-100' // High impact
  if (count >= 50) return 'text-orange-700 bg-orange-100' // Good impact
  if (count >= 10) return 'text-yellow-700 bg-yellow-100' // Moderate impact
  return 'text-gray-700 bg-gray-100' // Low impact
})

// Copy citation to clipboard
const copyCitation = async () => {
  const {
    Title,
    Authors,
    'Journal/Book': journal,
    'Publication Year': year,
    DOI,
  } = props.publication
  const citation = `${Authors}. ${Title}. ${journal}. ${year}${volumeInfo.value ? ';' + volumeInfo.value : ''}${DOI ? `. doi: ${DOI}` : ''}`

  try {
    await navigator.clipboard.writeText(citation)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy citation:', err)
  }
}
</script>

<style scoped>
/* Line clamp utility for title truncation */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* Smooth hover effect */
article {
  transition: all 0.2s ease;
}

/* Link hover effects */
a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -1px;
  left: 0;
  background-color: currentColor;
  transition: width 0.2s ease;
}

a:hover::after {
  width: 100%;
}
</style>
