<!-- src/views/surgery/salk/_Complications.vue -->
<template>
  <CollapsibleSection
    :title="complicationsMetadata.title"
    :iconPath="complicationsMetadata.iconPath"
    :colorTheme="complicationsMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="complicationsMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <ComplicationsSection
      :intraoperativeBox="complicationsData.intraoperative"
      :postoperativeBox="complicationsData.postoperative"
    />
  </CollapsibleSection>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ComplicationsSection, {
  complicationsMetadata,
} from '@/components/surgery/ComplicationsComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Complications data from Myerscough et al. study
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Complications',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Study Results',
        details: [
          { label: 'Total intraoperative complications', value: '0%', highlight: true },
          { label: 'Number of eyes', value: '10 eyes' },
          { label: 'Microkeratome complications', value: 'None reported' },
          { label: 'Graft preparation issues', value: 'None reported' },
        ],
      },
      {
        name: 'Technical Details',
        details: [
          { label: 'Recipient cap thickness', value: '130 μm' },
          { label: 'Donor lamella thickness', value: '90 μm' },
          { label: 'Graft diameter', value: '9 mm' },
          { label: 'Sutures used', value: 'None (sutureless technique)' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications',
    colorTheme: 'red',
    sections: [
      {
        title: 'Visual Outcomes',
        items: [
          'Haze recurrence: 0% in any eye postoperatively',
          'Primary graft failure: 0% during 5-year follow-up',
          'Late graft failure: 0% during 5-year follow-up',
          'Mean BSCVA improvement: From 0.46 to 0.12 logMAR (p=0.0001)',
          'All patients achieved ≥20/50 vision at 5 years',
        ],
      },
      {
        title: 'Refractive Complications',
        items: [
          'Surgically induced astigmatism: 2.50±1.04D at 6 months',
          'SIA at 5 years: 2.53±1.39D (no significant change, p=0.95)',
          'All astigmatism correctable with spectacles',
          'No significant change in spherical equivalent (p=0.46)',
          'No significant change in astigmatism vectors',
        ],
      },
      {
        title: 'Other Complications',
        items: [
          'Secondary ocular hypertension: 20% (2/10 eyes)',
          'IOP elevation transient, normalized after steroid cessation',
          'No medical or surgical intervention required for IOP',
          'One patient with diabetic macular edema (limited vision to 0.40 logMAR)',
          'Bandage contact lens removed after re-epithelialization',
        ],
      },
      {
        title: 'Long-term Outcomes',
        items: [
          '5-year follow-up: No haze recurrence',
          '90% achieved ≥20/40 vision at 5 years',
          '50% achieved ≥20/25 vision at 5 years',
          '30% achieved 20/20 vision at 5 years',
          'Graft-host apposition confirmed by AS-OCT',
        ],
      },
    ],
  },
})
</script>
