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
        name: 'Incorrect trephination',
        details: [
          { label: 'Incidence', value: '2-5%' },
          { label: 'Common causes', value: 'Decentration, wrong diameter selection' },
          { label: 'Management', value: 'Re-trephination if possible, convert to conventional PK' },
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
          { label: 'Causes', value: 'Incorrect punching, handling errors' },
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
          'Wound leak: Less common than conventional PK (2-5%)',
          'Pupillary block: 3-5% (manage with PI or mydriatics)',
          'Shallow anterior chamber: Often self-limiting with mushroom design',
          'Primary graft failure: <1% with good donor selection',
          'Infection (endophthalmitis): 0.1-0.5%',
          'Persistent epithelial defects: 5-10%',
        ],
      },
      {
        title: 'Late (&gt;1 month)',
        items: [
          'Graft rejection: 15-20% over 5 years (similar to conventional PK)',
          'High astigmatism: Lower incidence (10-15% >5D vs 25-30%)',
          'Glaucoma: 20-35% (steroid-induced, angle damage)',
          'Progressive endothelial loss: 3-5% annually',
          'Suture-related: Loosening, infection, giant papillary conjunctivitis',
          'Wound dehiscence: Significantly reduced risk (0.5-1.2% vs 2.8-5.5%)',
        ],
      },
    ],
  },
})
</script>
