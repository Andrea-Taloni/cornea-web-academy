<!-- src/views/surgery/ut-dsaek/_Indications.vue -->
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
    title: "Fuchs' Endothelial Dystrophy",
    subtitle: '(Primary indication)',
    description:
      'Optimal when superior visual outcomes are desired with lower surgical risk than DMEK. Particularly suitable for patients with realistic visual expectations who prioritize safety over maximal visual potential.',
  },
  {
    title: 'Complex Anterior Segments',
    description:
      'Cases with anterior chamber abnormalities where DMEK would be technically challenging: aphakia, AC IOLs, iris defects, aniridia, or significant peripheral anterior synechiae. UT-DSAEK offers better control and lower detachment risk.',
  },
  {
    title: 'Failed DMEK',
    description:
      'Alternative approach after DMEK failure or repeated detachments. The additional stromal support provides greater surgical predictability and reduces risk of re-detachment.',
  },
  {
    title: 'Pseudophakic Bullous Keratopathy',
    description:
      'Endothelial decompensation following cataract surgery or other intraocular procedures. UT-DSAEK provides excellent outcomes with manageable surgical complexity.',
  },
  {
    title: 'Eyes with Glaucoma Surgery',
    description:
      'Patients with tube shunts or filtering procedures where air management is challenging. The thicker graft provides better stability despite altered anterior chamber dynamics.',
  },
  {
    title: 'Vitrectomized Eyes',
    description:
      'Absence of vitreous support makes DMEK more challenging. UT-DSAEK provides structural stability while still achieving good visual outcomes.',
  },
  {
    title: 'Surgeon Learning Curve',
    description:
      'Ideal stepping stone from standard DSAEK to DMEK. Allows surgeons to gain experience with thinner grafts while maintaining familiar surgical techniques.',
  },
]

// Contraindications data
const contraindications = {
  absolute: [
    'Significant stromal scarring or irregularity',
    'Active infection or inflammation',
    'Severe ocular surface disease',
    'Uncontrolled glaucoma',
    'Poor visual potential from other pathology',
  ],
  relative: [
    'Young patients desiring maximal vision (consider DMEK)',
    'Simple cases suitable for DMEK',
    'Inability to obtain thin donor tissue',
    'Previous failed UT-DSAEK',
    'Severe chamber angle abnormalities',
    'Poor compliance with positioning',
  ],
}
</script>
