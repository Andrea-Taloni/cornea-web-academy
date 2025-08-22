<!-- src/views/surgery/salk/_Indications.vue -->
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

// Indications data from Busin's studies
const indications = [
  {
    title: 'Anterior Stromal Corneal Dystrophies',
    subtitle: '(60% of Busin\'s cases)',
    description:
      'Granular, lattice, macular, Reis-Bücklers dystrophies. Busin reported 12/20 eyes in original study. Excellent outcomes with 100% achieving 20/40 or better vision. Two-stage technique developed for Reis-Bücklers.',
  },
  {
    title: 'Post-Refractive Surgery Complications',
    subtitle: '(30% of cases)',
    description:
      'PRK/LASIK complications including haze, irregular astigmatism, central islands. 6/20 eyes in Busin\'s original series. 5-year follow-up shows 0% haze recurrence with sutureless SALK.',
  },
  {
    title: 'Anterior Corneal Scars',
    subtitle: '(10% of cases)',
    description:
      'Post-infectious or traumatic scars limited to anterior 220 μm. Includes keratitis sequelae (2/20 in original study). AS-OCT essential for depth assessment.',
  },
  {
    title: 'Post-Penetrating Keratoplasty Opacities',
    description:
      'Anterior stromal opacities in previous PK grafts. Busin\'s 2012 study showed 77.8% achieving ≥20/40 vision. Average 0.7D reduction in astigmatism. 100% improvement in BCVA.',
  },
  {
    title: 'Salzmann\'s Nodular Degeneration',
    description:
      'Elevated nodular opacities causing visual disturbance. Superficial location ideal for SALK. Can be combined with phacoemulsification as triple procedure.',
  },
  {
    title: 'Recurrent Erosion Syndrome',
    description:
      'Severe cases with anterior basement membrane dystrophy. Failed conservative treatment. Microkeratome removes abnormal epithelium and Bowman\'s layer effectively.',
  },
]

// Contraindications data from Busin's selection criteria
const contraindications = {
  absolute: [
    {
      text: 'Pathology depth >220 μm',
      subtitle: '(AS-OCT measurement)',
    },
    {
      text: 'Endothelial dysfunction',
      subtitle: '(Any degree)',
    },
    'Descemet\'s membrane involvement',
    'Active infection or inflammation',
    'Posterior stromal scarring',
  ],
  relative: [
    'Significant corneal thinning',
    'Severe dry eye syndrome',
    'Previous DALK or deep stromal surgery',
    'Uncontrolled glaucoma',
    'Patient unable to lie flat (extraocular procedure)',
  ],
}
</script>
