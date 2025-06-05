<!-- src/components/surgery/ReferencesSection.vue -->
<template>
  <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <ol class="list-decimal list-inside divide-y divide-gray-200">
      <li
        v-for="(reference, index) in references"
        :key="index"
        class="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <span v-html="processBoldText(reference.authors)"></span>
        <span v-html="processBoldText(reference.title)"></span>
        <em class="text-gray-600" v-html="processBoldText(reference.journal)"></em>
        {{ reference.year }};{{ reference.volume }}:{{ reference.pages }}.
      </li>
    </ol>
  </div>
</template>

<script>
// Export component metadata for CollapsibleSection
export const referencesMetadata = {
  title: 'References',
  iconPath:
    'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  colorTheme: 'gray',
  defaultExpanded: false,
  maxHeight: '1200px',
}
</script>

<script setup>
import { processBoldText } from '@/utils/textFormatting'

defineProps({
  references: {
    type: Array,
    required: true,
    validator: (value) => {
      // Ensure each reference has the required fields
      return value.every(
        (ref) =>
          typeof ref === 'object' &&
          'authors' in ref &&
          'title' in ref &&
          'journal' in ref &&
          'year' in ref,
      )
    },
  },
})
</script>
