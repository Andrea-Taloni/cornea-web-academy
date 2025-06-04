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
  'Full-thickness corneal pathology',
  'Need for enhanced wound stability',
  'High-risk eyes (pediatric, trauma, etc.)',
]

// Indications data
const indications = [
  {
    title: 'Advanced Keratoconus',
    subtitle: '(with scarring/hydrops)',
    description:
      'Severe keratoconus with central scarring or acute hydrops not amenable to DALK. Mushroom configuration ideal for enhanced stability.',
  },
  {
    title: 'Full-Thickness Corneal Scars',
    description:
      'Deep corneal scarring involving all layers including endothelium. Superior wound stability compared to conventional PK.',
  },
  {
    title: 'Failed Previous Grafts',
    description:
      'Failed DALK, DSAEK, DMEK, or previous PK requiring full-thickness replacement. Better stability for repeat grafts.',
  },
  {
    title: 'Corneal Perforations',
    description:
      'Active or impending perforations requiring urgent intervention. Self-sealing design provides immediate stability.',
  },
  {
    title: 'Combined Procedures',
    description:
      'When PK is combined with cataract surgery, vitrectomy, or glaucoma procedures. Enhanced stability crucial for complex surgeries.',
  },
  {
    title: 'Pediatric Keratoplasty',
    description:
      'Children requiring PK benefit from superior wound strength. Reduced risk of traumatic dehiscence in active patients.',
  },
]

// Contraindications data
const contraindications = {
  absolute: [
    'Severe limbal stem cell deficiency',
    'Uncontrolled glaucoma',
    'Active ocular infection',
    'Severe dry eye with melting',
  ],
  relative: [
    'Extensive peripheral anterior synechiae',
    'Significant iris abnormalities',
    'Previous vitrectomy with silicone oil',
    'Poor compliance potential',
  ],
}
</script>
