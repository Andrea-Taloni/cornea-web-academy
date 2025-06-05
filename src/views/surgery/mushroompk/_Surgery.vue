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
  title: 'Two-Piece Microkeratome-Assisted Mushroom PK Technique',
  steps: [
    {
      title: 'Recipient Bed Preparation',
      description:
        'For conversion from DALK: Having already performed 9mm anterior keratectomy, excise central 6mm optical zone full-thickness, leaving 1.5mm posterior stromal crown (~100-150μm thick). For primary mushroom PK: Mark visual axis and desired diameters. Use femtosecond laser or manual double-blade trephine to create stepped configuration.',
    },
    {
      title: 'Donor Tissue Preparation',
      description:
        'Mount donor on artificial chamber (ALTK system). Split cornea using 350μm microkeratome head to create anterior and posterior lamellae. Punch anterior lamella to 9mm and posterior lamella to 6mm diameter. Maintain proper orientation throughout preparation.',
    },
    {
      title: 'Posterior Lamella Placement',
      description:
        'Place 6mm posterior lamella (endothelium and deep stroma) into central recipient opening without sutures. This mushroom "stem" contains only 25% of total corneal endothelium, preserving peripheral host endothelium.',
    },
    {
      title: 'Anterior Lamella Positioning',
      description:
        'Place 9mm anterior lamella on top, ensuring proper orientation (mark with gentian violet if needed). The larger anterior "cap" provides wide optical zone while the overlap creates enhanced wound stability.',
    },
    {
      title: 'Suturing Technique',
      description:
        'Secure with double running 10-0 nylon sutures or combined technique (8 interrupted + continuous). Fewer sutures needed than conventional PK due to inherent mushroom stability. Adjust tension with keratoscope to minimize astigmatism.',
    },
    {
      title: 'Chamber Formation & Closure',
      description:
        'Reform anterior chamber with BSS. Test wound integrity with fluorescein - mushroom configuration typically self-sealing. Subconjunctival injection: triamcinolone + antibiotic. Apply bandage contact lens if needed.',
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
