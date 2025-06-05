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

// Complications data from Busin's studies
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Complications (Busin Data)',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Overall Intraoperative Complications',
        details: [
          { label: 'Busin original series (n=20)', value: '0%', highlight: true },
          { label: 'Post-PK series (n=9)', value: '0%', highlight: true },
          { label: '5-year PRK series (n=10)', value: '0%', highlight: true },
          { label: 'Total across all studies', value: '0-5%', highlight: true },
        ],
      },
      {
        name: 'Technical Challenges',
        details: [
          { label: 'Microkeratome malfunction', value: 'Rare (<1%)' },
          { label: 'Inadequate donor thickness', value: 'Preventable with measurement' },
          { label: 'Interface debris', value: 'Manageable with irrigation' },
          { label: 'Graft decentration', value: 'Correctable immediately' },
        ],
      },
      {
        name: 'Busin\'s Preventive Measures',
        details: [
          { label: 'Proper microkeratome maintenance', value: 'Critical', highlight: true },
          { label: 'Standardized head selection', value: '130-160 μm optimal' },
          { label: 'Extraocular technique', value: 'Eliminates open-sky risks' },
          { label: 'Topical anesthesia only', value: 'Reduces complications' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications (Busin Series)',
    colorTheme: 'red',
    sections: [
      {
        title: 'Early (&lt;1 month)',
        items: [
          'Epithelial defects: Minimal, heal within days',
          'Interface haze: Transient, resolves spontaneously',
          'Loose sutures: Not applicable if removed at 2-3 days per protocol',
          'Graft displacement: 0% with proper technique',
          'Infection: 0% reported across all series',
        ],
      },
      {
        title: 'Intermediate (1-6 months)',
        items: [
          'Astigmatism >4D: 0% (all cases ≤4D per Busin)',
          'Interface opacity: Rare, does not affect final vision',
          'Epithelial ingrowth: Most common issue but manageable',
          'Haze recurrence (PRK cases): 0% at 5 years',
          'Visual regression: Not observed with proper selection',
        ],
      },
      {
        title: 'Late (&gt;6 months)',
        items: [
          'Graft failure: 0% reported in all Busin series',
          'Endothelial decompensation: 0% (extraocular procedure)',
          'Stromal rejection: 0% documented',
          'Recurrent dystrophy: Possible but manageable with re-SALK',
          'Vision-threatening complications: 0% across all studies',
        ],
      },
      {
        title: 'Busin\'s Management Strategies',
        items: [
          'Epithelial ingrowth: Mechanical debridement if symptomatic',
          'Interface debris: Irrigation at time of surgery prevents',
          'Astigmatism: Prevented by early suture removal (2-3 days)',
          'Delayed healing: Rare with microkeratome technique',
          'All complications: Lower rate than DALK or PK',
        ],
      },
    ],
  },
})
</script>
