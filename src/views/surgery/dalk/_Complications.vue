<!-- src/views/surgery/dalk/_Complications.vue -->
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

// General DALK Complications
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Complications',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Descemet Membrane Perforation',
        details: [
          { label: 'Incidence', value: '5-20% depending on technique' },
          { label: 'Management', value: 'Air tamponade, conversion to PK if large' },
        ],
      },
      {
        name: 'Failed Big Bubble',
        details: [
          { label: 'Incidence', value: '15-30% of cases' },
          { label: 'Management', value: 'Manual dissection' },
        ],
      },
      {
        name: 'Conversion to PK',
        details: [
          { label: 'Incidence', value: '0-15% depending on experience' },
          { label: 'Management', value: 'Complete penetrating keratoplasty' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications',
    colorTheme: 'red',
    sections: [
      {
        title: 'Early Complications (< 1 month)',
        items: [
          'Double anterior chamber',
          'Interface haze',
          'Epithelial defects',
          'Pupillary block',
          'Descemet membrane detachment',
          'Wound leak',
          'Elevated intraocular pressure',
        ],
      },
      {
        title: 'Late Complications (> 1 month)',
        items: [
          'Stromal rejection',
          'Interface opacification',
          'Secondary glaucoma',
          'Late endothelial failure',
          'Wound dehiscence',
          'Recurrence of primary disease',
          'Irregular astigmatism',
        ],
      },
    ],
  },
})
</script>
