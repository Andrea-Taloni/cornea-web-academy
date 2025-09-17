<!-- src/views/surgery/ut-dsaek/_Complications.vue -->
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

// Complications data from Madi et al. Cornea 2019 study
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Complications',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Microkeratome-related Complications',
        details: [
          { label: 'Total incidence', value: '8.2% (29/354 eyes)' },
          { label: 'Tissue loss', value: '2.5% (9 eyes)' },
          { label: 'Hand refinement needed', value: '5.6% (20 eyes)' },
          { label: 'Learning curve effect', value: 'Most occurred in first year' },
        ],
      },
      {
        name: 'Surgical Technique',
        details: [
          { label: 'Graft thickness achieved', value: '74 ± 35 μm (range 19-209)' },
          { label: '<100 μm achieved', value: '80% of grafts' },
          { label: '<130 μm achieved', value: '94% of grafts' },
          { label: 'Insertion method', value: 'Pull-through with Busin glide' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications (354 eyes)',
    colorTheme: 'red',
    sections: [
      {
        title: 'Early Complications',
        items: [
          '**Graft detachment**: 3.9% (14/354 eyes)',
          'Management: Air injection rebubbling',
          'Success rate: 13/14 with single injection, 1/14 needed triple injection',
          '**Persistent epithelial defect**: 0.5% (2 eyes)',
          '**Interface infection**: 0.5% (2 eyes)',
          '**Urrets-Zavalia syndrome**: 0.2% (1 eye)',
        ],
      },
      {
        title: 'Late Complications',
        items: [
          '**Cystoid macular edema**: 4.2% (15 eyes)',
          'Treatment: Conservative medical management with acetazolamide',
          'Resolution: All cases resolved',
          '**Primary graft failure**: 1.4% (5/354 eyes)',
          '**Secondary graft failure**: 2.5% (9/354 eyes)',
          '**Total graft failure**: 3.9% (14/354 eyes)',
        ],
      },
      {
        title: 'Immunologic Rejection',
        items: [
          '**Total rejection episodes**: 3.9% (14/354 eyes)',
          '**Successfully reversed**: 13/14 eyes (92.9%)',
          '**Failed despite treatment**: 1/14 eyes (7.1%)',
          '**Cumulative probability**:',
          '1 year: 3.4%',
          '3 years: 5.0%',
          '5 years: 6.9%',
        ],
      },
      {
        title: 'Other Complications',
        items: [
          '**Posterior capsule opacification**: 2.5% (9 eyes)',
          '**Postoperative cataract**: 1.1% overall',
          'In phakic eyes: 12.1% (4/33 eyes)',
          '**Persistent interface haze**: 0.5% (2 eyes)',
        ],
      },
    ],
  },
})
</script>
