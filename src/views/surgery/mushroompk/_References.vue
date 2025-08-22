<!-- src/views/surgery/mushroompk/_References.vue -->
<template>
  <CollapsibleSection
    :title="referencesMetadata.title"
    :iconPath="referencesMetadata.iconPath"
    :colorTheme="referencesMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="referencesMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <ReferencesSection :references="references" />
  </CollapsibleSection>
</template>

<script setup>
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ReferencesSection, { referencesMetadata } from '@/components/surgery/ReferencesComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// References data
const references = [
  {
    authors: 'Busin M, Madi S, Scorcia V, Santorum P, Nahum Y.',
    title:
      'A two-piece microkeratome-assisted mushroom keratoplasty improves the outcomes and survival of grafts performed in eyes with diseased stroma and healthy endothelium (An American Ophthalmological Society Thesis).',
    journal: 'Trans Am Ophthalmol Soc.',
    year: '2015',
    volume: '113',
    pages: 'T1[1-22]',
  },
  {
    authors: 'Myerscough J, Bovone C, Scorcia V, Ricci-Filipovic B, Moramarco A, Fontana L, Busin M.',
    title:
      'The role of microkeratome-assisted anterior lamellar keratoplasty in the management of keratoconus: a multicenter study.',
    journal: 'Am J Ophthalmol.',
    year: '2020',
    volume: '220',
    pages: '82-90',
  },
]
</script>
