<!-- src/views/surgery/dsaek/_References.vue -->
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

// References from the Cornea Donor Study used for this page
const references = [
  {
    authors: 'Price MO, Gorovoy M, Price FW Jr, Benetz BA, Menegay HJ, Lass JH.',
    title:
      'Descemet stripping automated endothelial keratoplasty 3-year graft and endothelial cell survival compared with penetrating keratoplasty.',
    journal: 'Ophthalmology.',
    year: '2013',
    volume: '120(2)',
    pages: '246-251',
  },
  {
    authors: 'Cornea Donor Study Investigator Group, Lass JH, Gal RL, Dontchev M, et al.',
    title:
      'Donor age and corneal endothelial cell loss 5 years after successful corneal transplantation: Specular Microscopy Ancillary Study results.',
    journal: 'Ophthalmology.',
    year: '2008',
    volume: '115(4)',
    pages: '627-632',
  },
  {
    authors: 'Cornea Donor Study Investigator Group, Gal RL, Dontchev M, Beck RW, et al.',
    title:
      'The effect of donor age on corneal transplantation outcome results of the Cornea Donor Study.',
    journal: 'Ophthalmology.',
    year: '2008',
    volume: '115(4)',
    pages: '620-626',
  },
]
</script>
