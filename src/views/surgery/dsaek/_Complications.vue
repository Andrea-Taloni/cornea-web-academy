<!-- src/views/surgery/dsaek/_Complications.vue -->
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

// Updated complications data with evidence-based rates
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Complications',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Difficult graft insertion',
        details: [
          { label: 'Incidence', value: '5-10%' },
          { label: 'Risk factors', value: 'Shallow AC, small incision, thick graft >150μm' },
          { label: 'Prevention', value: 'Use insertion devices (21.8% vs 33.7% cell loss)' },
          {
            label: 'Management',
            value: 'Enlarge incision to 5mm, use Sheets glide for complex anatomy',
          },
        ],
      },
      {
        name: 'Upside-down graft',
        details: [
          { label: 'Incidence', value: '2-5%' },
          { label: 'S-stamp grafts', value: '20% rebubbling rate', highlight: false },
          { label: 'Prevention', value: 'Asymmetric orientation marks, verify S-stamp readable' },
          { label: 'Management', value: 'Immediate repositioning before air injection' },
        ],
      },
      {
        name: 'Incomplete Descemet stripping',
        details: [
          { label: 'Impact', value: 'Increases rebubbling to 20%', highlight: false },
          { label: 'Detection', value: 'Trypan blue staining of residual DM' },
          { label: 'Prevention', value: 'Systematic stripping pattern, adequate visualization' },
          { label: 'Management', value: 'Complete removal before graft insertion' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications & Management',
    colorTheme: 'red',
    sections: [
      {
        title: 'Early (&lt;1 month)',
        items: [
          '**Graft detachment**: 9.1-16.2% (surgeon-cut lower than preloaded)',
          'Management: Rebubble if >1/3 detached or central zone - 96% success rate',
          '**Primary graft failure**: 0.86% overall, 7-11% failure at 2 years',
          '**IOP elevation**: 51.9% incidence, 91.2% medical control, 8.8% surgical',
          '**Pupillary block**: 2-5% (prevent with PI/adequate mydriasis)',
        ],
      },
      {
        title: 'Intermediate (1-6 months)',
        items: [
          '**Interface haze**: 10-20% (usually clears spontaneously)',
          '**Rejection episodes**: 33% present asymptomatically',
          'Treatment: Hourly prednisolone 1% - >90% success with early detection',
          '**Glaucoma development**: 13.6% incidence',
          'Risk factors: Steroid response, pre-existing glaucoma, retained viscoelastic',
        ],
      },
      {
        title: 'Late (&gt;6 months)',
        items: [
          '**Progressive ECD loss**: 25-35% at 6 months, then 2-5% annually',
          'Accelerates after 5 years to 2-4% loss',
          '**Late failure**: Only 8% maintain >1000 cells/mm² at 10 years',
          '**Interface deposits**: 5-10% (may require enhancement)',
          '**Hyperopic shift**: 0.5-1.5D (account in IOL calculations)',
        ],
      },
      {
        title: 'High-Risk Scenarios',
        items: [
          '**Glaucoma shunts**: 26% dislocation, 40% vs 95% 5-year survival',
          'Management: Larger air fills, consider tube trimming',
          '**Diabetic donors**: 47% vs 43% ECD loss at 3 years',
          '**Failed grafts**: 71% 5-year survival for repeat DSAEK',
          '**Vitrectomized eyes**: Higher detachment risk, need continuous infusion',
        ],
      },
    ],
  },
})
</script>
