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

// Indications data for SALK
const indications = [
  {
    title: 'Recurrent Post-Excimer Laser Corneal Haze',
    description:
      'Corneal haze following PRK or LASIK, recurring after PTK treatment with or without MMC. Grade 3 haze with moderate obscuration of iris detail. Patients not satisfied with visual acuity despite previous treatments.',
  },
  {
    title: 'Anterior Stromal Corneal Dystrophies',
    description:
      'Granular, lattice, macular, Reis-Bücklers dystrophies limited to anterior stroma. Pathology must be confined to superficial 220 μm on AS-OCT. Clear deep stroma and healthy endothelium required.',
  },
  {
    title: 'Post-Refractive Surgery Complications',
    description:
      'PRK/LASIK complications including persistent haze, irregular astigmatism, central islands. Failed conservative management including PTK. Excellent results with sutureless technique showing no haze recurrence.',
  },
  {
    title: 'Anterior Corneal Scars',
    description:
      'Post-infectious or traumatic scars limited to anterior 220 μm. Includes healed keratitis sequelae with residual scarring. AS-OCT essential for precise depth assessment before surgery.',
  },
  {
    title: 'Post-Penetrating Keratoplasty Opacities',
    description:
      'Anterior stromal opacities developing in previous PK grafts. Can improve visual acuity and reduce pre-existing astigmatism. Avoids risks associated with repeat full-thickness transplantation.',
  },
  {
    title: 'Salzmann\'s Nodular Degeneration',
    description:
      'Elevated nodular opacities causing visual disturbance and irregular astigmatism. Superficial location makes it ideal for SALK treatment. Can be combined with cataract surgery when indicated.',
  },
]

// Contraindications for SALK
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
