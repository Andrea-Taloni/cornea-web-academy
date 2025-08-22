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

// Indications data
const indications = [
  {
    title: 'Keratoconus',
    description:
      'Progressive/advanced disease, contact lens intolerance, central scarring.',
  },
  {
    title: 'Corneal Stromal Dystrophies',
    description:
      'Granular, lattice, macular, Avellino dystrophies.',
  },
  {
    title: 'Post-Infectious Scarring',
    description:
      'Bacterial, viral (HSV/VZV), fungal, Acanthamoeba sequelae. Deep scars contraindicate modified technique.',
  },
  {
    title: 'Non-perforating Trauma',
    description:
      'Corneal lacerations or injuries that do not penetrate through Descemet membrane, allowing preservation of the endothelium during surgical repair.',
  },
]

// Contraindications data
const contraindications = {
  absolute: [
    {
      title: 'Endothelial Dysfunction',
      description: 'Endothelial cell density less than 1000 cells/mm². Inadequate endothelial function would compromise graft survival and visual outcomes.',
    },
    {
      title: 'Acute Hydrops',
      description: 'Rupture of Descemet membrane with stromal edema. Requires resolution and stabilization before considering surgical intervention.',
    },
    {
      title: 'Deep Stromal Scarring',
      description: 'Scars extending to Descemet membrane that prevent safe dissection and bubble formation during pneumatic dissection.',
    },
  ],
}
</script>
