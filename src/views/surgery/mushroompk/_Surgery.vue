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
      title: 'Recipient Bed Preparation - Anterior Dissection',
      description:
        'Under peribulbar anesthesia, create circular incision 9.0mm diameter, ~250μm depth using vacuum trephine centered on corneoscleral limbus. Perform manual lamellar dissection circumferentially 3mm toward center from incision base. Cauterize limbal vessels only if bleeding persists. Remove dissected tissue leaving central 3mm island of full-thickness cornea.',
    },
    {
      title: 'Central Full-Thickness Excision',
      description:
        'Using 6.0mm trephine, create full-thickness circular incision in residual central island, carefully centered on pupil (not limbus). Excise central button with corneal scissors. This creates stepped recipient bed: 9mm anterior diameter, 6mm posterior opening.',
    },
    {
      title: 'Donor Tissue Preparation - Microkeratome Dissection',
      description:
        'Mount donor cornea on ALTK artificial anterior chamber. Use 200μm microkeratome head to split donor into anterior and posterior lamellae (actual depth ~240μm due to 20% deeper cut). This thickness optimally matches removed recipient tissue.',
    },
    {
      title: 'Donor Punching',
      description:
        'Punch both lamellae to match recipient bed dimensions: anterior lamella to 9.0mm, posterior lamella to 6.0mm. Same size punches used as recipient bed to ensure proper fit. Mark orientation if needed.',
    },
    {
      title: 'Graft Placement & Initial Fixation',
      description:
        "Place posterior lamella (endothelium + deep stroma) into central 6mm opening without sutures - self-retaining fit. Position anterior lamella on top, secure with 4 cardinal 10-0 nylon sutures at 12, 3, 6, 9 o'clock. Ensure proper alignment.",
    },
    {
      title: 'Final Suturing & Closure',
      description:
        'Complete with double running 10-0 nylon suture or 16 interrupted sutures. Suture bites pass only through anterior lamella, leaving posterior button free to adapt. Fill AC with BSS via limbal paracentesis. Subconjunctival: gentamicin 40mg + methylprednisolone 40mg. Apply tobramycin-dexamethasone ointment.',
    },
  ],
}

// Alternative approaches data
const alternativeApproaches = {
  title: 'Technical Considerations',
  techniques: [
    {
      title: 'Combined Procedures',
      description:
        'Open-sky approach through 6mm opening allows ECCE + IOL (performed in 7.6% of cases), pupilloplasty, synechiolysis, or anterior vitrectomy. Smaller opening than conventional PK provides better anterior chamber control.',
    },
    {
      title: 'High-Risk Modifications',
      description:
        'For vascularized corneas (44.2% in series): careful limbal cautery, meticulous dissection through scarred tissue. Systemic steroids (prednisone 1.5mg/kg) started 3 days preop for high-risk cases.',
    },
    {
      title: 'Pediatric Adaptations',
      description:
        'Successfully performed in patients ≥2 years old. Lateral tarsorrhaphy considered for lagophthalmos. General anesthesia required for uncooperative patients. Enhanced wound stability crucial for active children.',
    },
  ],
}
</script>
