<!-- ====== src/components/surgery/ReferencesSection.vue ====== -->
<template>
  <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <ol class="list-decimal list-inside divide-y divide-gray-200">
      <li
        v-for="(reference, index) in references"
        :key="index"
        class="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
      >
        {{ reference.authors }}
        {{ reference.title }}
        <em class="text-gray-600">{{ reference.journal }}</em>
        {{ reference.year }};{{ reference.volume }}:{{ reference.pages }}.
      </li>
    </ol>
  </div>
</template>

<script setup>
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
          'year' in ref
      )
    },
  },
})
</script>
