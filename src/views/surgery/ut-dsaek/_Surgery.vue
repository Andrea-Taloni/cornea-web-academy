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

// UT-DSAEK surgical technique from Madi et al. study
const businTechnique = {
  title: 'Microkeratome-Assisted Double-Pass UT-DSAEK Technique',
  steps: [
    {
      title: 'Donor Tissue Preparation',
      description:
        'Donor corneas from donors aged 10-75 years with eye-bank determined ECD of 2300-3300 cells/mm². Death to surgery time ≤5 days, death to preservation ≤12 hours if refrigerated or ≤8 hours if not. Tissue prepared using microkeratome-assisted double-pass technique aiming at graft thickness <100 μm.',
    },
    {
      title: 'Graft Dissection',
      description:
        'Donor tissue dissected with microkeratome using double-pass technique. First pass to remove anterior lamella, second pass to create ultrathin graft. Final graft thickness measured (achieved mean: 74 ± 35 μm, range 19-209 μm). Cut to diameter of 8.25-9.0 mm depending on recipient corneal diameter.',
    },
    {
      title: 'Anesthesia and Incision',
      description:
        'Topical anesthesia with monitored intravenous sedation. Create 3.2 mm clear corneal incision. Additional paracenteses as needed for manipulation and air injection.',
    },
    {
      title: 'Descemet Stripping',
      description:
        'Strip Descemet membrane under air within the planned graft area. Complete removal is critical to minimize rebubbling risk. Stripping performed under air to maintain anterior chamber depth and protect crystalline lens.',
    },
    {
      title: 'Graft Insertion',
      description:
        'Graft delivered into anterior chamber using pull-through technique through 3.2 mm incision using modified Busin glide. Graft folded into "taco" configuration with endothelial side protected. Single-point fixation forceps used for controlled insertion.',
    },
    {
      title: 'Graft Positioning and Air Tamponade',
      description:
        'Center graft over visual axis. Inject air bubble for tamponade. Verify proper orientation and absence of interface fluid. Leave adequate air bubble at end of procedure. Patient positioned supine postoperatively.',
    },
  ],
}

// Study-specific surgical details
const graftPreparationMethods = {
  title: 'Surgical Procedures Performed in Study',
  techniques: [
    {
      title: 'Stand-alone UT-DSAEK',
      description:
        '39 eyes underwent UT-DSAEK alone. Hyperopic shift observed: +0.69 ± 1.39 D at 1 year, decreasing to +0.22 ± 0.47 D at 5 years (P=0.017).',
    },
    {
      title: 'Combined with Phacoemulsification',
      description:
        '114 eyes underwent UT-DSAEK combined with phacoemulsification and PC-IOL implantation. This was the most common combined procedure in the study.',
    },
    {
      title: 'Other Combined Procedures',
      description:
        'UT-DSAEK with pupilloplasty (6 eyes), anterior vitrectomy (3 eyes), AC-IOL removal with PC-IOL implantation (3 eyes), and pIOL removal with phaco and PC-IOL (1 eye).',
    },
  ],
}

// Key findings from the study
const additionalTechniques = [
  {
    title: 'Key Technical Outcomes from Study',
    numbered: false,
    bgColor: 'blue',
    items: [
      {
        title: 'Graft Thickness Achievement',
        description:
          'Mean thickness: 74 ± 35 μm (range 19-209 μm). 80% of grafts <100 μm, 94% <130 μm. Thickness measured at 6 months postoperatively using anterior segment OCT.',
      },
      {
        title: 'Microkeratome Complications',
        description:
          '8.2% microkeratome-related complications (29/354 eyes). Tissue loss in 2.5% (9 eyes), hand refinement needed in 5.6% (20 eyes). Most occurred during learning curve.',
      },
      {
        title: 'Rebubbling Rate',
        description:
          '3.9% graft detachment rate (14/354 eyes). Successfully managed with air injection: 13/14 with single injection, 1/14 needed triple injection.',
      },
    ],
  },
  {
    title: 'Refractive Changes Observed',
    numbered: false,
    bgColor: 'purple',
    items: [
      {
        title: 'Cylinder Changes',
        description:
          'Mean refractive cylinder: 1.2 ± 1.3 D preoperatively to 1.3 ± 1.1 D at 1 year (P=0.377). At 5 years: 1.1 ± 0.7 D (P=0.249). No significant change observed.',
      },
      {
        title: 'Spherical Equivalent',
        description:
          'In stand-alone cases (n=39): -0.58 ± 2.45 D preoperatively to 0.19 ± 2.61 D at 1 year. Hyperopic shift of 0.69 ± 1.39 D, decreasing to 0.22 ± 0.47 D at 5 years.',
      },
    ],
  },
]
</script>
