<!-- src/views/surgery/dmek/_Surgery.vue -->
<template>
  <CollapsibleSection
    :title="techniquesMetadata.title"
    :iconPath="techniquesMetadata.iconPath"
    :colorTheme="techniquesMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="techniquesMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <TechniquesSection :mainSteps="dmekTechnique" :alternativeTechniques="alternativeApproaches" />
  </CollapsibleSection>
</template>

<script setup>
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import TechniquesSection, { techniquesMetadata } from '@/components/surgery/SurgeryComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// DMEK surgical technique data
const dmekTechnique = {
  title: 'Tri-folded Endothelium-in DMEK with Bimanual Pull-through Technique',
  steps: [
    {
      title: 'Graft Preparation (5.9 ± 1.1 minutes)',
      description:
        'Prepare DMEK graft in standard fashion with appropriate diameter trephination. Configure graft in tri-folded, endothelium-in orientation. Load into disposable cartridge system designed for bimanual delivery. The tri-folded configuration protects endothelium while facilitating rapid unfolding.',
    },
    {
      title: 'Recipient Preparation',
      description:
        'Mark central cornea for graft centration. Create main incision and two paracenteses positioned for bimanual technique. Score and strip central Descemet membrane matching graft size. Remove all central DM fragments completely. Prepare anterior chamber for graft insertion.',
    },
    {
      title: 'Bimanual Pull-through Delivery',
      description:
        'Insert loaded cartridge through main incision. Use bimanual pull-through technique with second instrument through paracentesis. Controlled delivery of tri-folded graft into anterior chamber. The endothelium-in configuration prevents endothelial touch during insertion.',
    },
    {
      title: 'Rapid Graft Unfolding (2.9 ± 0.9 minutes)',
      description:
        'Tri-folded configuration allows predictable, rapid unfolding sequence. Minimal manipulation required due to pre-configured orientation. Use standardized unfolding technique specific to tri-fold design. Complete unfolding achieved in under 3 minutes average.',
    },
    {
      title: 'Graft Centration & Attachment',
      description:
        'Center graft over marked visual axis. Fill anterior chamber with air for graft attachment. Standard air tamponade protocol for 8-10 minutes. Perform air-liquid exchange as per standard DMEK technique. Ensure complete graft apposition without edge folds.',
    },
    {
      title: 'Closure & Positioning',
      description:
        'Standard wound closure and leak testing. Dilate pupil to prevent pupillary block. Patient positioning supine for optimal graft attachment. Face-up positioning for 24-48 hours recommended. Check graft attachment before discharge.',
    },
  ],
}

// Alternative approaches data
const alternativeApproaches = {
  title: 'Technical Modifications & Pearls',
  techniques: [
    {
      title: 'Pre-loaded DMEK',
      description:
        'Eye bank prepared tissue in viewing chamber. Reduces surgical time and learning curve. Maintains endothelial viability during transport. Higher cost but standardized quality. Useful for surgeons during learning phase.',
    },
    {
      title: 'Hemi-DMEK/Quarter-DMEK',
      description:
        'Uses partial Descemet grafts for localized pathology. Reduces donor tissue requirement. Useful for failed DMEK with partial graft detachment. Technically challenging with specific unfolding requirements.',
    },
    {
      title: 'DMEK-S (with stromal rim)',
      description:
        'Leaves thin peripheral stromal rim on graft. Easier handling and unfolding. S-stamp visible for orientation. Slightly thicker graft but minimal optical impact. Good transition technique from DSAEK.',
    },
  ],
}
</script>
