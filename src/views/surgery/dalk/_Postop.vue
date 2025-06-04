<!-- src/views/surgery/dalk/_Postop.vue -->
<template>
  <CollapsibleSection
    title="Post-operative Management Protocol"
    iconPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    colorTheme="teal"
    :isExpanded="isExpanded"
    maxHeight="800px"
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
import PostopSection from '@/components/surgery/PostopSection.vue'

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
