<!-- src/views/surgery/mushroompk/_Complications.vue -->
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
    title: 'Intraoperative Complications',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Conversion from DALK',
        details: [
          { label: 'Incidence', value: '16.4% of intended DALK', highlight: true },
          { label: 'Main causes', value: 'DM macroperforation, full-thickness opacity' },
          { label: 'Management', value: 'Two-piece mushroom PK maintains 9mm benefits' },
        ],
      },
      {
        name: 'Iris prolapse',
        details: [
          { label: 'Incidence', value: '5-10%' },
          { label: 'Risk factors', value: 'Shallow AC, positive vitreous pressure' },
          { label: 'Management', value: 'Gentle reposition, peripheral iridectomy if needed' },
        ],
      },
      {
        name: 'Donor tissue damage',
        details: [
          { label: 'Incidence', value: '1-3%' },
          { label: 'Causes', value: 'Microkeratome issues, handling errors' },
          { label: 'Management', value: 'New donor tissue required' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications',
    colorTheme: 'red',
    sections: [
      {
        title: 'Early (&lt;1 month)',
        items: [
          'Posterior lamella detachment: 1.47% (rebubble with air)',
          'Wound leak: 2-5% (less common than conventional PK)',
          'Pupillary block: 3-5% (manage with PI or mydriatics)',
          'Primary graft failure: <1% with good donor selection',
          'Interface infection: 1.47%',
          'Persistent epithelial defects: Rare with mushroom design',
        ],
      },
      {
        title: 'Late (&gt;1 month)',
        items: [
          'Endothelial rejection: 5.88% (lower than expected for 9mm anterior diameter)',
          'Stromal rejection: 2.94% (manageable medically)',
          'High astigmatism (>4.5D): 7.35% (vs 10% in conventional DALK)',
          'Secondary cataract: 7.35% (higher than DALK)',
          'Wound dehiscence: 2.94% (significantly reduced risk)',
          'Graft failure (all causes): 5.88% at 5 years',
        ],
      },
    ],
  },
})
</script>
