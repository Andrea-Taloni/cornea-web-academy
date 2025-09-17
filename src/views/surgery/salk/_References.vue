<!-- src/views/surgery/salk/_References.vue -->
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

// References from Myerscough et al. study
const references = [
  {
    authors: 'Myerscough J, Bovone C, Thomas PBM, Mimouni M, Aljassar F, Padroni S, Busin M.',
    title: 'Sutureless superficial anterior lamellar keratoplasty for recurrent corneal haze after repeat excimer laser surface ablation.',
    journal: 'Br J Ophthalmol.',
    year: '2019',
    volume: '0',
    pages: '1-4',
  },
]
</script>
