<!-- src/views/surgery/mushroompk/_Indications.vue -->
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
import IndicationsSection, {
  indicationsMetadata,
} from '@/components/surgery/IndicationsComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Key requirements data
const keyRequirements = [
  'Full-thickness central corneal opacity',
  'Healthy peripheral endothelium',
  'Need for complete corneal replacement',
]

// Indications data
const indications = [
  {
    title: 'Keratoconus',
    subtitle: '',
    description:
      'Advanced disease with hydrops, central scarring, or deep stromal involvement. Most common indication for mushroom PK.',
  },
  {
    title: 'Post-Infectious Scars',
    subtitle: '(includes herpetic and non-herpetic)',
    description:
      'Herpetic scars, bacterial/fungal/protozoal scars. Requires months without reactivation before surgery.',
  },
  {
    title: 'Traumatic Scars',
    subtitle: '',
    description:
      'Full-thickness scars from perforating or non-perforating trauma with healthy peripheral endothelium.',
  },
  {
    title: 'Corneal Dystrophies',
    subtitle: '',
    description:
      'Stromal dystrophies affecting full corneal thickness but with preserved peripheral endothelial function.',
  },
  {
    title: 'Other Indications',
    description:
      'Interstitial keratitis, exposure keratopathy with lagophthalmos, acne rosacea, chemical burns.',
  },
]

// Contraindications data
const contraindications = {
  absolute: [
    'Unhealthy peripheral endothelium',
    'Active ocular infection',
    'Uncontrolled ocular surface disease',
    'Poor compliance potential',
  ],
  relative: [
    'Extensive limbal stem cell deficiency',
    'Severe dry eye',
    'Uncontrolled glaucoma',
    'Multiple previous graft failures',
  ],
}
</script>
