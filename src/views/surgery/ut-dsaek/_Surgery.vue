<!-- src/views/surgery/ut-dsaek/_Surgery.vue -->
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
      :alternativeTechniques="graftPreparationMethods"
      :additionalSections="additionalTechniques"
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

// Busin UT-DSAEK technique data
const businTechnique = {
  title: 'The Busin Method: Double-Pass Microkeratome UT-DSAEK Technique',
  steps: [
    {
      title: 'Donor Preparation - First Pass',
      description:
        'Mount donor cornea on artificial anterior chamber with pressure 65-75 mmHg. Measure central corneal thickness with ultrasonic pachymetry. Perform first microkeratome pass using 300-350 μm head to remove anterior lamella. This creates a smooth stromal bed and removes epithelium/Bowman layer. Store anterior cap in medium if needed for future use.',
    },
    {
      title: 'Thickness Calculation',
      description:
        'Measure residual stromal bed thickness with pachymetry at multiple points. Calculate depth for second pass to achieve target 50-100 μm final thickness. Account for 10-15 μm compression during cutting. For 80 μm target: if bed measures 280 μm, set second pass for 200 μm cut. Document all measurements for quality control.',
    },
    {
      title: 'Second Pass - Ultra-thin Cut',
      description:
        'Replace microkeratome head with calculated cutting depth (typically 90-130 μm head). Ensure proper blade engagement and smooth gliding surface. Perform second pass at consistent speed to create ultra-thin posterior lamella. The double-pass technique allows precise thickness control impossible with single pass. Final graft contains endothelium, Descemet membrane, and minimal stroma.',
    },
    {
      title: 'Recipient Bed Preparation',
      description:
        'Mark visual axis and 8.0-8.5 mm graft diameter. Create 4-5 mm scleral tunnel or clear corneal incision. Score and strip Descemet membrane completely within marked area - incomplete removal increases rebubbling to 20%. Use cohesive viscoelastic to maintain chamber. Create additional paracenteses for manipulation.',
    },
    {
      title: 'Graft Insertion - Busin Glide',
      description:
        'Punch donor tissue to 8.0-8.5 mm using specialized UT-DSAEK punch. Load onto Busin glide with endothelial side down. The ultra-thin tissue requires delicate handling - avoid excessive manipulation. Insert through incision using pull-through technique with specialized UT-DSAEK forceps. The thinner tissue unfolds more readily than standard DSAEK.',
    },
    {
      title: 'Positioning and Attachment',
      description:
        'Center graft over visual axis using gentle BSS irrigation. Ultra-thin grafts conform better to posterior corneal curvature. Inject air for 8-10 minute tamponade - shorter than standard DSAEK due to faster adherence. Leave 80-90% air bubble. Verify orientation and centration. Check for interface fluid - critical for thin grafts.',
    },
  ],
}

// Graft preparation methods
const graftPreparationMethods = {
  title: 'Alternative UT-DSAEK Preparation Methods',
  techniques: [
    {
      title: 'Single-Pass Thin Head',
      description:
        'Uses specialized 90-130 μm microkeratome heads for single-pass preparation. Less predictable than double-pass but faster. Requires careful pre-cut pachymetry to ensure adequate thickness. Risk of irregular cuts with very thin heads. Best for experienced technicians with consistent technique.',
    },
    {
      title: 'Femtosecond Laser',
      description:
        'Programmable depth cuts achieve consistent sub-100 μm thickness. Superior precision with smooth interfaces. Reduced endothelial trauma compared to mechanical cutting. Higher cost but excellent for high-volume centers. Can create customized graft profiles for specific cases.',
    },
    {
      title: 'Pre-cut Tissue from Eye Bank',
      description:
        'Increasingly available from specialized eye banks. Standardized preparation protocols ensure quality. Reduces surgical time and equipment needs. Important to verify thickness and endothelial counts. Transport in specialized media to preserve ultra-thin tissue.',
    },
  ],
}

// Additional techniques
const additionalTechniques = [
  {
    title: 'Critical Factors for UT-DSAEK Success',
    numbered: false,
    bgColor: 'blue',
    items: [
      {
        title: 'Endothelial Protection',
        description:
          'Ultra-thin grafts more susceptible to trauma. Use dispersive viscoelastic coating, minimize manipulation, gentle irrigation only. Specialized instruments designed for thin tissue. Avoid folding >60 degrees.',
      },
      {
        title: 'Thickness Verification',
        description:
          'Pachymetry at multiple points pre and post-cut. Document for outcomes analysis. Target 70-90 μm for optimal results. Consider OCT verification in complex cases.',
      },
      {
        title: 'Interface Management',
        description:
          'Complete fluid removal critical with thin grafts. Use dry Weck-cel through paracentesis. Interface fluid causes detachment. May need repeat air injection day 1.',
      },
    ],
  },
  {
    title: 'Comparison with Other Techniques',
    numbered: false,
    bgColor: 'purple',
    items: [
      {
        title: 'vs Standard DSAEK',
        description:
          'Better visual outcomes (48.8% vs 21% achieve 20/20). Less hyperopic shift (+0.75D vs +1.25D). Slightly higher rebubbling (12% vs 9%). More technical skill required but similar surgical time.',
      },
      {
        title: 'vs DMEK',
        description:
          'Easier unfolding and positioning. Lower detachment rate (12% vs 35%). Slightly inferior vision (74% vs 79% ≥20/25). Better for complex anatomy. No scrolling tendency.',
      },
      {
        title: 'Triple Procedures',
        description:
          'Ideal for combined phaco-EK. Less hyperopic shift allows better IOL planning. Target -0.75D for expected +0.75D shift. Stable refraction by 3 months vs 6 months standard DSAEK.',
      },
    ],
  },
]
</script>
