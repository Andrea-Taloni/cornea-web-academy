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

// Sutureless SALK Technique from Myerscough et al. study
const businTechnique = {
  title: 'Sutureless Superficial Anterior Lamellar Keratoplasty Technique',
  steps: [
    {
      title: 'Anesthesia',
      description: `Intravenous droperidol 3 mL administered. Peribulbar anesthesia with 50% mixture of 2% lidocaine and 0.5% bupivacaine. Complete preoperative ophthalmological evaluation including slit-lamp examination, BSCVA, refraction, tonometry, funduscopy, endothelial specular microscopy, and AS-OCT.`,
    },
    {
      title: 'Recipient Corneal Cap Creation',
      description: `A superficial free cap 9 mm in diameter cut from recipient cornea. Employ a 130 μm microkeratome head (Moria, Antony, France) with a 'zero' suction ring on intact epithelium. Continuous slow advancement of microkeratome with counter rotation of fixation ring performed to achieve planar cut of correct diameter.`,
    },
    {
      title: 'Donor Tissue Preparation',
      description: `Donor cornea mounted on artificial chamber of automated lamellar therapeutic keratoplasty system (Moria). Anterior donor lamella dissected using a 90 μm microkeratome head. Donor tissue punched to 9 mm using Hessburg-Baron punch (Katena Products, Denville, New Jersey, USA).`,
    },
    {
      title: 'Graft Placement',
      description: `Graft laid onto host stromal bed without sutures. No sutures used in this technique. Soft 16 mm diameter bandage contact lens inserted for stabilization.`,
    },
    {
      title: 'Postoperative Management',
      description: `Tobramycin (0.3%) and dexamethasone (0.1%) eye drops every 2 hours during daytime for 1 week. Then four times daily for 1 month, at which point tobramycin stopped. Dexamethasone continued on slowly tapering dose to once daily by 4 months, discontinued completely at 1 year. Patients examined twice weekly until re-epithelialization, then bandage contact lens removed.`,
    },
    {
      title: 'Follow-up Schedule',
      description: `Refraction and BSCVA assessed at 3, 6, 12, and 18 months, then annually. AS-OCT performed to evaluate graft-host apposition. Endothelial cell counts monitored throughout follow-up period. Vector analysis performed for astigmatism evaluation.`,
    },
  ],
}

// Study patient characteristics
const alternativeTechniquesData = {
  title: 'Study Population and Indications',
  techniques: [
    {
      title: 'Patient Demographics',
      description: `10 consecutive eyes undergoing sutureless SALK for recurrent post-excimer laser corneal haze. Mean age: 48.8 ± 10.2 years. 5/10 patients were female. All had grade 3 corneal haze (according to Fantes et al) with moderate obscuration of iris detail.`,
    },
    {
      title: 'Inclusion Criteria',
      description: `Corneal haze secondary to PRK, recurring after at least one PTK treatment with or without MMC. Patients not satisfied with their BSCVA were included. All cases had at least one PRK treatment and one PTK treatment with or without MMC at least 12 months prior to referral.`,
    },
    {
      title: 'Preoperative Assessments',
      description: `Complete ophthalmological evaluation including slit-lamp examination, BSCVA in logMAR, refraction, tonometry, funduscopy. Endothelial specular microscopy (EM-3000; Tomey, Erlangen, Germany). Anterior segment OCT (Casia; Tomey, Tokyo, Japan) for structural assessment.`,
    },
  ],
}

// Key technical details from study
const additionalSections = [
  {
    title: 'Technical Considerations from Study',
    numbered: false,
    bgColor: 'blue',
    items: [
      {
        title: 'Microkeratome Technique',
        description: 'Recipient: 130 μm head with zero suction ring for 9 mm diameter cut. Donor: 90 μm head (40 μm less than recipient) for uniform apposition. Continuous slow advancement with counter rotation ensures planar cut.',
      },
      {
        title: 'Sutureless Approach Benefits',
        description: 'No sutures required, only bandage contact lens for fixation. Eliminates suture-related astigmatism. Faster visual recovery compared to sutured techniques. Particularly effective for post-PRK haze cases.',
      },
      {
        title: 'Postoperative Steroid Protocol',
        description: 'Dexamethasone 0.1% tapered over 1 year. Initial intensive dosing (every 2 hours) for 1 week. Gradual tapering to once daily by 4 months. Complete discontinuation at 1 year.',
      },
    ],
  },
]
</script>
