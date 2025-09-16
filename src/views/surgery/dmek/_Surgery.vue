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

// DMEK surgical technique data - Based on Busin et al. 2015 technique
const dmekTechnique = {
  title: 'Contact Lens-Assisted Pull-Through DMEK Technique (Busin et al.)',
  steps: [
    {
      title: 'Donor Tissue Preparation',
      description:
        'Use pre-stripped donor tissue from eye bank (9.5mm strip, 1 clock hour hinge marked). Punch tissue to 8.25mm diameter using Barron punch with trypan blue staining. Tri-fold graft with endothelium INWARD using dedicated forceps. Place tri-folded graft onto sterile soft contact lens as scaffold. Contact lens maintains tri-fold architecture during loading.',
    },
    {
      title: 'Recipient Bed Preparation',
      description:
        'Create 2.75mm clear corneal tunnel (inferotemporal OD, supranasal OS). Score and remove central 9mm Descemet membrane under air. Perform inferior peripheral iridotomy with vitreoretinal scissors. Insert anterior chamber maintainer (ACM) at 12 o\'clock with lateral port design. The lateral port prevents direct fluid jet against graft.',
    },
    {
      title: 'Graft Loading into Cartridge',
      description:
        'Move contact lens with tri-folded graft onto IOL cartridge funnel entrance. Fill cartridge with BSS from distal end. Insert microincision forceps through cartridge to grasp graft center. Pull graft into funnel - unfolded edge slides on funnel floor. Graft opens partially in BSS, endothelium remains protected inward. Seal cartridge back with silicone plug on handle.',
    },
    {
      title: 'Bimanual Pull-Through Delivery',
      description:
        'Rotate cartridge 180° (floor becomes ceiling). Insert cartridge into main wound. Create second paracentesis for microincision forceps (supranasal OD, inferotemporal OS). Deliver graft bimanually under continuous low-flow irrigation from ACM. Descemetic surface of unfolded part now faces recipient cornea correctly.',
    },
    {
      title: 'Graft Unfolding (Average 2.9 minutes)',
      description:
        'Natural tendency of tissue to roll endothelium-outward facilitates spontaneous unfolding. Gentle corneal tapping helps unfold lateral edges. May use forceps twisting or gentle graft movement if needed. Minimal manipulation required - tissue unfolds predictably. Stop ACM flow once unfolding complete.',
    },
    {
      title: 'Air Injection and Attachment',
      description:
        'Insert 27-gauge cannula through paracentesis to graft center. Inject air beneath graft for complete anterior chamber fill. Maintain full air fill for proper attachment. Suture main wound and paracenteses with 10-0 nylon. Final air injection through limbus with 32-gauge needle. Apply pressure patch, position patient supine 2 hours.',
    },
  ],
}

// Alternative approaches and key outcomes data
const alternativeApproaches = {
  title: 'Key Advantages of Contact Lens-Assisted Technique',
  techniques: [
    {
      title: 'Reduced Surgical Time',
      description:
        'Average DMEK procedure time only 17.1 ± 1.6 minutes (never exceeding 20 minutes). Graft preparation averages 5.9 ± 1.1 minutes. Unfolding completed in 2.9 ± 0.9 minutes. Standardized technique reduces variability. Significantly faster than conventional DMEK approaches.',
    },
    {
      title: 'Minimal Endothelial Cell Loss',
      description:
        'Cell loss at 6 months only 9.9 ± 2.1% (range 4.1-11.9%). Superior to conventional DMEK techniques reporting 15-30% loss. Endothelium-in configuration protects cells during delivery. Contact lens scaffold prevents tissue damage during loading. Bimanual technique minimizes graft manipulation.',
    },
    {
      title: 'Excellent Visual Outcomes',
      description:
        'All patients achieved BCVA 20/25 or better at 6 months. Average endothelial cell density 2363 ± 82.7 cells/mm² at 6 months. Comparable to best reported DMEK outcomes. Graft detachment rate 23.8%, all successfully rebubbled once. No primary graft failures in series.',
    },
  ],
}
</script>
