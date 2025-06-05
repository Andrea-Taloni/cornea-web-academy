<!-- src/views/surgery/dmek/_Complications.vue -->
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

// Complications data
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Considerations',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Graft preparation',
        details: [
          { label: 'Mean time', value: '5.9 ± 1.1 minutes', highlight: true },
          { label: 'Technique', value: 'Tri-folded endothelium-in configuration' },
          { label: 'Advantage', value: 'Simplified loading and orientation' },
        ],
      },
      {
        name: 'Graft unfolding',
        details: [
          { label: 'Mean time', value: '2.9 ± 0.9 minutes', highlight: true },
          { label: 'Benefit', value: 'Addresses main surgical challenge' },
          { label: 'Technique', value: 'Bimanual pull-through delivery' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Outcomes by Indication',
    colorTheme: 'red',
    sections: [
      {
        title: 'Endothelial Cell Density Outcomes',
        items: [
          'Year 1: 1,818 ± 362 cells/mm²',
          'Year 2: 1,675 ± 372 cells/mm²',
          'Year 3: 1,580 ± 423 cells/mm²',
          'Significant decrease from baseline (P < 0.001)',
          'No difference between FECD and BK groups',
          'Failed graft eyes had significantly lower ECD',
        ],
      },
      {
        title: 'Graft Survival at 3 Years',
        items: [
          '**FECD**: 97% survival rate',
          '**Bullous Keratopathy**: 92% survival rate',
          '**Failed Previous Graft**: 71% survival rate',
          'Significant difference between groups (P < 0.001)',
        ],
      },
      {
        title: 'Visual Outcomes',
        items: [
          'Preoperative BSCVA: 0.92 ± 0.58 logMAR',
          'Postoperative BSCVA: 0.02 ± 0.07 logMAR at 1 year',
          'Visual acuity remained stable through 3 years',
          'Significant improvement (P < 0.001)',
          'Outcomes not adversely affected by modified technique',
        ],
      },
    ],
  },
})
</script>
