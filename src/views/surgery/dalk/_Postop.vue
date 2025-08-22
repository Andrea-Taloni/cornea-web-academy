<!-- src/views/surgery/dalk/_Postop.vue -->
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
      :followUp="postopData.followUp"
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

// Post-operative management data - From Busin et al. 2017
const postopData = ref({
  corticosteroids: {
    title: 'Topical Corticosteroids',
    medication: 'Dexamethasone phosphate 0.1%',
    dosing: [
      'Every 2 hours initially',
      'Tapered to single daily dose by 1 month after partial suture removal',
      'Discontinued at month 8',
    ],
  },
  antimicrobial: {
    title: 'Antimicrobial Prophylaxis',
    optionsLabel: 'Initial:',
    options: ['Tobramycin sulfate 0.3%'],
    dosingLabel: 'Dosing',
    dosing: 'Every 2 hours initially (with corticosteroid)',
  },
  followUp: {
    title: 'Follow-up Schedule',
    schedule: [
      'Regular monitoring as per standard protocol',
    ],
  },
  sutureManagement: {
    title: 'Suture Management Protocol',
    timings: [
      { text: 'First running suture removal: 2-3 months postoperatively', isSubItem: false },
      { text: 'Second suture removal (age-dependent):', isSubItem: false },
      { text: 'Within 10 months from surgery (patients <30 years)', isSubItem: true },
      { text: 'Within 12 months from surgery (patients ≥30 years)', isSubItem: true },
      { text: 'Monitor for astigmatism changes between removals', isSubItem: false },
    ],
  },
})
</script>
