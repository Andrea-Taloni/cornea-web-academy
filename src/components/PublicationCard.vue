<template>
  <article
    class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
  >
    <div class="flex flex-col lg:flex-row lg:items-start gap-4">
      <!-- Main Content -->
      <div class="flex-1">
        <!-- Title -->
        <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">
          {{ publication.Title }}
        </h3>

        <!-- Authors -->
        <p class="text-sm text-gray-600 mb-3 leading-relaxed">
          {{ formatAuthors(publication.Authors) }}
        </p>

        <!-- Journal Info -->
        <div class="flex flex-wrap items-center gap-2 mb-3 text-sm">
          <span class="font-medium text-gray-700">{{ publication['Journal/Book'] }}</span>
          <span class="text-gray-400">•</span>
          <span class="text-gray-600">{{ publication['Publication Year'] }}</span>
          <span v-if="publication.Citation" class="text-gray-400">•</span>
          <span v-if="publication.Citation" class="text-gray-600 italic">{{
            formatCitation(publication.Citation)
          }}</span>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap gap-3">
          <!-- PubMed Link -->
          <a
            v-if="publication.PMID"
            :href="`https://pubmed.ncbi.nlm.nih.gov/${publication.PMID}/`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              ></path>
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              ></path>
            </svg>
            PubMed
          </a>

          <!-- PMC Link -->
          <a
            v-if="publication.PMCID"
            :href="`https://www.ncbi.nlm.nih.gov/pmc/articles/${publication.PMCID}/`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
          >
            <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
              ></path>
            </svg>
            Full Text
          </a>

          <!-- DOI Link -->
          <a
            v-if="publication.DOI"
            :href="`https://doi.org/${publication.DOI}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
          >
            <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
            DOI
          </a>

          <!-- Copy Citation -->
          <button
            @click="copyCitation"
            class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
            :title="copied ? 'Copied!' : 'Copy citation'"
          >
            <svg
              v-if="!copied"
              class="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              ></path>
            </svg>
            <svg
              v-else
              class="w-4 h-4 mr-1.5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {{ copied ? 'Copied!' : 'Copy' }}
          </button>
        </div>
      </div>

      <!-- Year Badge -->
      <div class="lg:w-24 lg:text-right">
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
        >
          {{ publication['Publication Year'] || 'N/A' }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  publication: {
    type: Object,
    required: true,
  },
})

const copied = ref(false)

// Format authors list
const formatAuthors = (authors) => {
  if (!authors) return ''
  // If there are many authors, show first 3 and add et al.
  const authorList = authors.split(',').map((a) => a.trim())
  if (authorList.length > 6) {
    return authorList.slice(0, 3).join(', ') + ', et al.'
  }
  return authors
}

// Format citation
const formatCitation = (citation) => {
  if (!citation) return ''
  // Remove redundant information and clean up
  return citation
    .replace(/doi:.*$/i, '') // Remove DOI from citation text
    .replace(/Epub.*$/i, '') // Remove Epub info
    .trim()
}

// Copy citation to clipboard
const copyCitation = async () => {
  const citationText = `${props.publication.Authors}. ${props.publication.Title}. ${props.publication['Journal/Book']}. ${props.publication['Publication Year']};${props.publication.Citation}${props.publication.DOI ? ` doi: ${props.publication.DOI}` : ''}`

  try {
    await navigator.clipboard.writeText(citationText)
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
/* Hover effect for the card */
article {
  transition: all 0.3s ease;
}

article:hover {
  transform: translateY(-2px);
}

/* Link hover underline effect */
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
