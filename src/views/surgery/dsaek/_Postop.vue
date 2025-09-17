<!-- src/views/surgery/dsaek/_Postop.vue -->
<template>
  <CollapsibleSection
    :title="postopMetadata.title"
    :iconPath="postopMetadata.iconPath"
    :colorTheme="postopMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="postopMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <PostopSection
      :corticosteroids="postopData.corticosteroids"
      :antimicrobial="postopData.antimicrobial"
      :sutureManagement="postopData.sutureManagement"
    />
  </CollapsibleSection>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import PostopSection, { postopMetadata } from '@/components/surgery/PostopComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Post-operative management from Cornea Donor Study
const postopData = ref({
  corticosteroids: {
    title: 'Study Protocol Management',
    medication: 'Surgical Technique',
    dosing: [
      '2 experienced DSAEK surgeons (FWP and MG)',
      'Topical anesthesia with IV sedation',
      'Descemet membrane removal from planned graft area',
      'Donor dissection with microkeratome (8.25-9.0 mm)',
      'Graft insertion: Forceps (n=167) or funnel glide (n=6)',
    ],
  },
  antimicrobial: {
    title: 'Key Study Findings at 3 Years',
    optionsLabel: 'Graft survival rates:',
    options: [
      'Overall: 94% DSAEK vs 93% PKP',
      "Fuchs' dystrophy: 96% both procedures",
      "Non-Fuchs': 86% DSAEK vs 84% PKP"
    ],
    dosingLabel: 'Cell loss comparison',
    dosing: '48% DSAEK vs 53% PKP (P=0.17)',
  },
  sutureManagement: {
    title: 'Clinical Recommendations from Study',
    timings: [
      { text: 'Incision width selection:', isSubItem: false },
      { text: '5 mm incision: 33% cell loss at 3 years', isSubItem: true },
      { text: '3.2 mm incision: 60% cell loss at 3 years', isSubItem: true },
      { text: 'Recommendation: Use 5 mm when feasible', isSubItem: true },
      { text: 'Rejection monitoring:', isSubItem: false },
      { text: 'Lower risk vs PKP (9% vs 20%)', isSubItem: true },
      { text: 'Most rejections manageable without failure', isSubItem: true },
      { text: 'Follow-up schedule:', isSubItem: false },
      { text: 'Regular ECD monitoring recommended', isSubItem: true },
      { text: 'Long-term surveillance for cell loss', isSubItem: true },
    ],
  },
})
</script>
