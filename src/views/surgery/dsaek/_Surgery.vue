<!-- src/views/surgery/dsaek/_Surgery.vue -->
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
      :mainSteps="dsaekTechnique"
      :alternativeTechniques="insertionMethods"
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

// DSAEK surgical technique data
const dsaekTechnique = {
  title: 'Standard DSAEK Surgical Technique with Modern Refinements',
  steps: [
    {
      title: 'Donor Graft Preparation',
      description:
        'Mount donor cornea on artificial anterior chamber (2500-3000 cells/mm² ideal). For ultrathin DSAEK: Use double-pass microkeratome technique - first pass with 350-400μm head, measure residual bed, second pass to achieve 50-100μm final thickness. Achieve 48.8% rate of 20/20 vision at 24 months with <100μm grafts. Punch to 8.0-8.5mm diameter. Mark orientation with asymmetric marks to prevent upside-down placement.',
    },
    {
      title: 'Recipient Bed Preparation',
      description:
        "Mark corneal center and planned graft diameter. Create 5mm scleral tunnel (4mm for advanced inserters) or clear corneal incision. Additional paracenteses at 3 and 9 o'clock. Score Descemet's membrane with reverse Sinskey hook - complete stripping critical (incomplete stripping increases rebubbling to 20%). Remove all diseased tissue within marked area. Avoid excessive manipulation to preserve peripheral endothelium.",
    },
    {
      title: 'Advanced Graft Insertion',
      description:
        'Modern insertion options: NS Endo-Inserter (21.8% cell loss vs 33.7% traditional), Endosaver device (handles up to 8.5mm through 4mm incision), or Busin glide with pull-through technique. For complex anatomy: Modified Sheets glide technique. Fold graft 60/40 configuration. Insert with endothelial side down, verified by orientation marks.',
    },
    {
      title: 'Graft Unfolding & Positioning',
      description:
        'Unfold using gentle BSS irrigation through paracentesis. "No-touch" technique: Use fluid waves and air positioning. Center over marked visual axis. For vitrectomized eyes: Continuous posterior infusion prevents chamber collapse. Remove all interface fluid - critical for adherence. Verify correct orientation (S-stamp should read correctly).',
    },
    {
      title: 'Optimized Air Tamponade',
      description:
        'Complete air fill for wound-assisted technique. 10-minute tamponade ensures initial adhesion. Glaucoma eyes: 90-100% fill vs standard 80%. Release air to 80-90% bubble, leaving 6-8mm diameter. Check for pupillary block - perform inferior PI if needed. Dilate pupil with tropicamide 1% to prevent block.',
    },
    {
      title: 'Final Steps & Positioning',
      description:
        'Verify all wounds sealed with fluorescein. Subconjunctival injection: Dexamethasone 2mg + Cefazolin 50mg. Modern positioning: When fully air-filled for 2 hours, strict supine positioning beyond day 1 may be unnecessary. Current protocol: Supine 2 hours continuously, then 45 min supine/15 min upright cycles on day 1.',
    },
  ],
}

// Insertion methods data
const insertionMethods = {
  title: 'Contemporary Graft Insertion Devices & Techniques',
  techniques: [
    {
      title: 'NS Endo-Inserter',
      description:
        'Latest generation device showing superior outcomes. 21.8% endothelial cell loss vs 33.7% with Busin glide. Accommodates grafts up to 9mm. Controlled insertion with minimal manipulation. Requires 4mm incision. Ideal for surgeons transitioning from forceps technique.',
    },
    {
      title: 'Endosaver Device',
      description:
        'Handles grafts up to 8.5mm through 4mm incision. Protective chamber design minimizes endothelial contact. Pre-loaded option available from eye banks. Particularly useful for UT-DSAEK grafts. Lower learning curve than pull-through techniques.',
    },
    {
      title: 'Modified Sheets Glide',
      description:
        'Specifically designed for altered anatomy cases. Accommodates irregular anterior chambers. Useful in aphakic eyes or with iris defects. Requires larger 5mm incision. Allows direct visualization during insertion.',
    },
  ],
}

// Additional techniques for complex cases
const additionalTechniques = [
  {
    title: 'Ultrathin DSAEK Preparation Techniques',
    numbered: false,
    bgColor: 'blue',
    items: [
      {
        title: 'Double-Pass Microkeratome (Busin Technique)',
        description:
          'First pass 300-350μm, measure residual bed with pachymetry, second pass calculated to achieve <100μm. Results in 48.8% achieving 20/20 vision.',
      },
      {
        title: 'Single-Pass with Thin Head',
        description:
          'Using 90-130μm microkeratome heads. Less predictable than double-pass but faster. Requires careful donor pachymetry pre-cut.',
      },
      {
        title: 'Femtosecond Laser',
        description:
          'Programmable depth cuts achieving consistent sub-50μm thickness. Reduced endothelial cell loss. Higher cost but superior precision.',
      },
    ],
  },
  {
    title: 'Special Scenarios & Modified Techniques',
    numbered: false,
    bgColor: 'purple',
    items: [
      {
        title: 'Vitrectomized Eyes',
        description:
          'Continuous posterior segment infusion maintains chamber stability. Consider sulcus IOL fixation if unstable. May need larger air fill (95-100%).',
      },
      {
        title: 'Eyes with Glaucoma Devices',
        description:
          'Trim tube if protruding >2mm into AC. Larger air fills (90-100%) required. Higher rebubbling rate (26% with shunts). Consider concurrent tube revision.',
      },
      {
        title: 'Triple Procedures (Phaco + IOL + DSAEK)',
        description:
          'Target -1.0 to -1.5D for expected hyperopic shift. Perform DSAEK after IOL is secure. Median visual improvement 0.99 to 0.36 logMAR at 12 months.',
      },
    ],
  },
]
</script>
