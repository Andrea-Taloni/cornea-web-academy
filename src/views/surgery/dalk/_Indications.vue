<!-- src/views/surgery/dalk/_Indications.vue -->
<template>
  <CollapsibleSection
    title="Clinical Indications"
    iconPath="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    colorTheme="blue"
    :isExpanded="isExpanded"
    maxHeight="2000px"
    @toggle="$emit('toggle')"
  >
    <IndicationsSection
      :keyRequirements="keyRequirements"
      :indications="indications"
      :contraindications="contraindications"
    />
  </CollapsibleSection>
</template>

<script setup>
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import IndicationsSection from '@/components/surgery/IndicationsSection.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Key requirements data
const keyRequirements = ['Healthy endothelium', 'No DM involvement', 'Anterior pathology only']

// Indications data
const indications = [
  {
    title: 'Keratoconus',
    subtitle: '(70-80% of cases)',
    description:
      'Progressive/advanced disease, contact lens intolerance, central scarring, thickness <400μm. Large diameter technique ideal for broad-base cases.',
  },
  {
    title: 'Corneal Stromal Dystrophies',
    description:
      'Granular, lattice, macular, Avellino dystrophies. Preserved endothelial function required (ECD >2000/mm²).',
  },
  {
    title: 'Post-Infectious Scarring',
    description:
      'Bacterial, viral (HSV/VZV), fungal, Acanthamoeba sequelae. Deep scars contraindicate modified technique.',
  },
  {
    title: 'Other Anterior Pathology',
    description:
      'Trauma (non-perforating), chemical burns (superficial), degenerations, anterior dystrophies.',
  },
]

// Contraindications data
const contraindications = {
  absolute: [
    {
      text: 'Endothelial dysfunction',
      subtitle: '(ECD <1000 cells/mm²)',
    },
    {
      text: 'Descemet rupture',
      subtitle: '(acute hydrops)',
    },
    'Deep stromal scars to DM',
    'Active infection',
  ],
  relative: [
    'Previous IOL surgery',
    'Peripheral thinning',
    'Significant neovascularization',
    'Severe dry eye',
  ],
}
</script>
