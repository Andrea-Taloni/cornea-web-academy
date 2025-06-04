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

// Post-operative management data
const postopData = ref({
  corticosteroids: {
    title: 'Topical Corticosteroids',
    medication: 'Prednisolone 1% / Dexamethasone 0.1%',
    dosing: ['QID × 1 month', 'TID × 1 month', 'BID × 2 months → taper'],
  },
  antimicrobial: {
    title: 'Antimicrobial Prophylaxis',
    optionsLabel: 'Options:',
    options: ['Moxifloxacin 0.5%', 'Tobramycin 0.3%'],
    dosingLabel: 'Dosing',
    dosing: 'QID × 2 weeks',
  },
  followUp: {
    title: 'Follow-up Schedule',
    schedule: [
      'Day 1, Week 1, 2, 4',
      'Monthly × 6 months',
      'Every 3 months year 1',
      'Biannually thereafter',
    ],
  },
  sutureManagement: {
    title: 'Suture Management',
    timings: [
      { text: 'First running suture: 2-3 months', isSubItem: false },
      { text: 'Second suture:', isSubItem: false },
      { text: '10 months (age <30 years)', isSubItem: true },
      { text: '12 months (age >30 years)', isSubItem: true },
    ],
  },
})
</script>
