<!-- src/views/surgery/ut-dsaek/_References.vue -->
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

// References from Madi et al. Cornea 2019 study
const references = [
  {
    authors: 'Madi S, Leon P, Nahum Y, D\'Angelo S, Giannaccare G, Beltz J, Busin M.',
    title: 'Five-Year Outcomes of Ultrathin Descemet Stripping Automated Endothelial Keratoplasty.',
    journal: 'Cornea.',
    year: '2019',
    volume: '38(9)',
    pages: '1192-1197',
  },
  {
    authors: 'Busin M, Madi S, Santorum P, Scorcia V, Beltz J.',
    title: 'Ultrathin descemet\'s stripping automated endothelial keratoplasty with the microkeratome double-pass technique: two-year outcomes.',
    journal: 'Ophthalmology.',
    year: '2013',
    volume: '120(6)',
    pages: '1186-1194',
  },
  {
    authors: 'Busin M, Patel AK, Scorcia V, Ponzin D.',
    title: 'Microkeratome-assisted preparation of ultrathin grafts for Descemet stripping automated endothelial keratoplasty.',
    journal: 'Invest Ophthalmol Vis Sci.',
    year: '2012',
    volume: '53(1)',
    pages: '521-524',
  },
]
</script>
