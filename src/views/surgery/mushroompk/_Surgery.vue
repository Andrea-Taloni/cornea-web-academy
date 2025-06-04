<!-- src/views/surgery/mushroompk/_Surgery.vue -->
<template>
  <CollapsibleSection
    :title="techniquesMetadata.title"
    :iconPath="techniquesMetadata.iconPath"
    :colorTheme="techniquesMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="techniquesMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <TechniquesSection
      :mainSteps="mushroomPKTechnique"
      :alternativeTechniques="alternativeApproaches"
    />
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

// Mushroom PK surgical technique data
const mushroomPKTechnique = {
  title: 'Mushroom PK Surgical Steps',
  steps: [
    {
      title: 'Recipient Bed Preparation',
      description:
        'Mark visual axis and desired diameters. For femtosecond: program anterior diameter 8.0-8.5mm, posterior 7.0-7.5mm, side cut angles 90-135°. For manual: use double-blade trephine or sequential trephination. Create posterior cut first, then anterior cut, ensuring proper centration.',
    },
    {
      title: 'Donor Tissue Preparation',
      description:
        'Mount donor cornea on artificial chamber or cutting block. Create matching mushroom configuration - punch from endothelial side first with smaller trephine (0.25mm larger than recipient), then anterior side with larger trephine. Maintain proper orientation throughout.',
    },
    {
      title: 'Recipient Button Removal',
      description:
        'Enter anterior chamber at junction of two diameters. Use corneal scissors to complete excision following pre-cut edges. Remove tissue carefully to preserve wound architecture. Note stepped configuration provides immediate stability even before suturing.',
    },
    {
      title: 'Graft Placement & Initial Fixation',
      description:
        "Transfer donor graft maintaining proper orientation (mark with gentian violet if needed). Place four cardinal 10-0 nylon sutures at 12, 3, 6, 9 o'clock positions. Ensure graft seats properly with smaller posterior portion fitting into recipient opening.",
    },
    {
      title: 'Final Suturing',
      description:
        'Complete suturing with 16 interrupted 10-0 nylon sutures (fewer than conventional PK due to inherent stability). Alternatively, use combined technique: 8 interrupted + 16-bite continuous suture. Adjust tension using keratoscope or intraoperative topography to minimize astigmatism.',
    },
    {
      title: 'Wound Verification & Closure',
      description:
        'Test wound integrity with fluorescein - mushroom configuration typically self-sealing. Reform anterior chamber completely, check for leaks. Remove viscoelastic if used. Subconjunctival injection: dexamethasone + antibiotic. Consider bandage contact lens for epithelial protection.',
    },
  ],
}

// Alternative approaches data
const alternativeApproaches = {
  title: 'Technical Variations',
  techniques: [
    {
      title: 'Femtosecond Laser-Assisted',
      description:
        'Precise, programmable cuts with customizable diameters and angles. Enables perfect donor-recipient matching. Smooth interfaces promote better healing. OCT-guided for optimal depth. Reduced open-sky time but higher cost.',
    },
    {
      title: 'Manual Double-Blade',
      description:
        'Specialized trephines create both cuts simultaneously. Good centration but requires specific instrumentation. Less precise depth control than laser. Cost-effective option for experienced surgeons.',
    },
    {
      title: 'Hybrid Technique',
      description:
        'Femtosecond for recipient, manual for donor preparation. Balances precision with cost considerations. Useful when laser time is limited. Maintains advantages of precise recipient bed.',
    },
  ],
}
</script>
