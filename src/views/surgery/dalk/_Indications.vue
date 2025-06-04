<!-- src/views/surgery/dalk/_Indications.vue -->
<template>
  <CollapsibleSection
    :title="indicationsMetadata.title"
    :iconPath="indicationsMetadata.iconPath"
    :colorTheme="indicationsMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="indicationsMetadata.maxHeight"
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
import IndicationsSection, { indicationsMetadata } from '@/components/surgery/IndicationsComponent.vue'

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
