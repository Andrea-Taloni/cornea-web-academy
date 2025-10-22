<!-- src/views/surgery/salk/_Postop.vue -->
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

// Post-operative management from Myerscough et al. SALK study
const postopData = ref({
  corticosteroids: {
    title: 'Postoperative Medication Protocol',
    medication: 'Corticosteroid Regimen',
    dosing: [
      'Dexamethasone 0.1% every 2 hours during daytime for 1 week',
      'Then QID for 1 month',
      'Continued on slowly tapering dose to once daily by 4 months',
      'Discontinued completely at 1 year',
      'Secondary ocular hypertension in 20% (2/10 eyes) - resolved after steroid cessation',
    ],
  },
  antimicrobial: {
    title: 'Antimicrobial and Follow-up Protocol',
    optionsLabel: 'Antibiotic regimen:',
    options: [
      'Tobramycin 0.3% every 2 hours during daytime for 1 week',
      'Then QID for 1 month',
      'Stopped after 1 month'
    ],
    dosingLabel: 'Bandage contact lens',
    dosing: 'Soft 16mm BCL removed after re-epithelialization',
  },
  sutureManagement: {
    title: 'Follow-up Schedule',
    timings: [
      { text: 'Early follow-up:', isSubItem: false },
      { text: 'Examined twice weekly until re-epithelialization', isSubItem: true },
      { text: 'BCL removed once epithelium healed', isSubItem: true },
      { text: 'No sutures used (sutureless technique)', isSubItem: true },
      { text: 'Scheduled assessments:', isSubItem: false },
      { text: 'Refraction and BSCVA at 3, 6, 12, 18 months', isSubItem: true },
      { text: 'Then annually thereafter', isSubItem: true },
    ],
  },
})
</script>
