<!-- src/views/surgery/salk/_Surgery.vue -->
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
      :mainSteps="businTechnique"
      :alternativeTechniques="alternativeTechniquesData"
      :additionalSections="additionalSections"
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

// Busin's Microkeratome-Assisted SALK Technique
const businTechnique = {
  title: 'Busin\'s Microkeratome-Assisted SALK Technique',
  steps: [
    {
      title: 'Preoperative Assessment',
      description: `AS-OCT measurement of pathology depth (must be <220 μm). Central corneal thickness evaluation. Endothelial cell count confirmation. Mark corneal center and 9.0-9.5 mm diameter zone. Topical anesthesia preparation as this is an extraocular procedure per Busin's technique.`,
    },
    {
      title: 'Donor Tissue Preparation (Extraocular)',
      description: `Mount donor cornea on artificial anterior chamber (Busin uses ALTK system). Initial microkeratome pass with 250 μm head for 9 mm diameter cut. For SALK grafts, use 130-160 μm head (Busin's optimal range) or up to 200 μm maximum. Create donor lenticule matching recipient bed depth. Typical final graft thickness: 130-160 μm per Busin's standard.`,
    },
    {
      title: 'Recipient Bed Preparation',
      description: `Apply matching microkeratome head depth to recipient cornea. Create 9.0-9.5 mm diameter lamellar cut (Busin's standard). Remove anterior lamella completely. Ensure smooth, uniform bed surface. No manual dissection required with proper microkeratome technique. Irrigate interface thoroughly.`,
    },
    {
      title: 'Graft Placement - Original Sutured Technique',
      description: `Transfer donor lenticule to recipient bed using Busin glide. Ensure proper orientation and centration. Original technique: 16 interrupted 10-0 nylon sutures. Alternative "Star of David" pattern: 2 continuous sutures creating 6-pointed star. Busin's key innovation: Remove ALL sutures at 2-3 days, never beyond 1 week.`,
    },
    {
      title: 'Sutureless Modification (Busin\'s Evolution)',
      description: `After graft positioning, apply fibrin glue to edges. Alternative: Use bandage contact lens only for fixation. No sutures required in selected cases. Particularly effective for post-PRK haze cases. Reduces recovery time and eliminates suture-related astigmatism. Monitor for 10-15 minutes to ensure adhesion.`,
    },
    {
      title: 'Postoperative Protocol',
      description: `Immediate examination to confirm graft position. Topical antibiotics (moxifloxacin 0.5% QID). Mild steroids only (fluorometholone 0.1% QID × 2 weeks). Suture removal at 2-3 days if sutured technique used. Follow-up: Day 1, 3, 7, then weekly × 1 month. Visual recovery typically complete by 1 month per Busin's data.`,
    },
  ],
}

// Alternative techniques mentioned in Busin's work
const alternativeTechniquesData = {
  title: 'Busin\'s Technique Variations',
  techniques: [
    {
      title: 'Two-Stage Technique for Reis-Bücklers',
      description: `Busin's innovation for recurrent dystrophies. First stage: Create 9 mm flap with microkeratome. Second stage: Replace central 7 mm with donor tissue. Completely sutureless approach. Prevents peripheral recurrence while maintaining stability.`,
    },
    {
      title: 'Combined SALK with Phacoemulsification',
      description: `Triple procedure validated by Busin. Perform SALK first, then phacoemulsification through clear cornea. 100% visual improvement reported in combined cases. No increased complications versus staged approach. Ideal for patients >50 years with cataract.`,
    },
    {
      title: 'SALK for Failed PK',
      description: `Busin's 2012 series on post-PK opacities. Uses same microkeratome technique on previous graft. 77.8% achieve ≥20/40 vision. Reduces pre-existing astigmatism by average 0.7D. Avoids risks of repeat full-thickness transplant.`,
    },
  ],
}

// Additional surgical pearls from Busin
const additionalSections = [
  {
    title: 'Busin\'s Key Technical Points',
    numbered: false,
    bgColor: 'blue',
    items: [
      {
        title: 'Microkeratome Selection',
        description: 'Always use 130-160 μm head for optimal results. 250 μm only for initial donor pass. Match recipient and donor depths precisely. Regular maintenance critical for consistent cuts.',
      },
      {
        title: 'Timing is Critical',
        description: 'Suture removal MUST occur at 2-3 days, maximum 7 days. Early removal prevents suture-induced astigmatism. Epithelium provides sufficient adhesion by day 2. Delayed removal compromises visual outcomes.',
      },
      {
        title: 'Anesthesia Advantage',
        description: 'Topical anesthesia sufficient for entire procedure. No retrobulbar block needed (extraocular technique). Reduces surgical time and patient discomfort. Allows immediate postoperative assessment.',
      },
    ],
  },
]
</script>
