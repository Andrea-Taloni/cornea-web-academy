<!-- src/views/surgery/dmek/_Indications.vue -->
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

// Indications data
const indications = [
  {
    title: 'Fuchs Endothelial Corneal Dystrophy',
    subtitle: '(Most common - 80%)',
    description:
      'Best outcomes with central guttae, mild-moderate stromal edema. Visual symptoms worse than clinical findings. Consider earlier intervention before significant stromal scarring develops.',
  },
  {
    title: 'Pseudophakic/Aphakic Bullous Keratopathy',
    subtitle: '(10-15%)',
    description:
      'Post-cataract surgery endothelial decompensation. Ensure adequate iris-lens diaphragm support. May require combined procedures (IOL exchange, pupilloplasty).',
  },
  {
    title: 'Failed Previous Grafts',
    description:
      'Failed DMEK, DSAEK, or PK with clear stroma. Repeat DMEK feasible with 85-90% success rate. Higher rebubbling rate (40-60%) compared to primary DMEK.',
  },
  {
    title: 'ICE Syndrome',
    subtitle: '(Iridocorneal Endothelial)',
    description:
      'Progressive endothelial dysfunction with iris abnormalities. May require concurrent glaucoma management. Higher failure risk due to progressive disease.',
  },
  {
    title: 'Posterior Polymorphous Corneal Dystrophy',
    description:
      'When causing symptomatic endothelial dysfunction. Careful evaluation for iris adhesions. May have irregular Descemet membrane.',
  },
  {
    title: 'Congenital Hereditary Endothelial Dystrophy',
    description:
      'CHED patients with clear stroma. Better outcomes in older children/adults. May have amblyopia requiring management.',
  },
]

// Contraindications data
const contraindications = {
  absolute: [
    'Significant stromal scarring/opacity',
    'Advanced peripheral anterior synechiae',
    'Severe hypotony (<6 mmHg)',
    'Uncontrolled glaucoma',
    'Active infection/inflammation',
  ],
  relative: [
    {
      text: 'Complex anterior segment',
      subtitle: '(AC-IOL, iris defects)',
    },
    {
      text: 'Prior vitrectomy',
      subtitle: '(especially with SO)',
    },
    {
      text: 'Severe dry eye',
      subtitle: '(compromises visualization)',
    },
    'Inability to position supine postoperatively',
    'Poor compliance/follow-up concerns',
    'Corneal neovascularization',
  ],
}
</script>
