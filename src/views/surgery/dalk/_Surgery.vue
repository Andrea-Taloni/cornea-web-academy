<!-- src/views/surgery/dalk/_Techniques.vue -->
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
      :mainSteps="largeDiameterTechnique"
      :alternativeTechniques="alternativeTechniquesData"
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

// Large Diameter Big-Bubble Technique data
const largeDiameterTechnique = {
  title: 'Large Diameter Big-Bubble Technique (9-mm DALK with 6-mm Optical Zone) [5]',
  steps: [
    {
      title: 'Deep Trephination',
      description: `Peribulbar anesthesia: 10ml of 0.75% ropivacaine solution. Create side entry for anterior chamber maintenance.
        9mm diameter vacuum trephination to 450-550μm depth. Blade setting precisely calibrated:
        within 100μm of thinnest AS-OCT measurement at trephination site (9mm diameter). Measurable blade advancement
        regulated in 50μm steps for optimal depth control to minimize perforation risk.`,
    },
    {
      title: 'Modified Pneumatic Dissection',
      description: `Advance dedicated probe then cannula up to 2mm centripetally from bottom of deep trephination.
        Controlled air injection creates big bubble separation.
        Type 1 bubble (pre-Descemetic) obtained in 83.7% of cases. Average bubble size: 7.7±0.8mm (range 6-9mm).
        Success independent of bubble extension to trephination edge.`,
    },
    {
      title: 'Standardized Anterior Debulking',
      description: `Perform anterior keratectomy removing ~80% of anterior stroma uniformly across 9mm zone.
        Execute regardless of pneumatic dissection success/failure. Use combination of sharp
        dissection with crescent blade and blunt separation. Creates consistent stromal bed
        thickness for subsequent deep dissection phase.`,
    },
    {
      title: 'Selective 6-mm Deep Dissection',
      description: `Mark central 6mm optical zone with disposable handheld trephine. Apply adhesive viscoelastic (IAL-F) centrally
        onto bubble roof for tissue protection. Enter bubble with 15° blade. Insert inferior branch of blunt Vannas scissors
        into pre-Descemetic space, enlarge slit. Complete excision of central deep stroma following 6mm mark using
        corneal scissors. Preserve peripheral ~1.5mm width stromal crown for lap-joint configuration.`,
    },
    {
      title: 'Microkeratome-Assisted Graft Preparation',
      description: `Mount donor cornea on automated lamellar therapeutic keratoplasty (ALTK) system artificial chamber.
        Dissect with 400μm microkeratome head creating anterior lamella. Punch lamella to 9mm diameter.
        Transplant into recipient bed. Secure with double running 10-0 nylon suture technique.
        Final architecture: 6mm central optical zone with direct donor-to-Descemet contact,
        peripheral 1.5mm crown overlap creating lap-joint wound configuration.`,
    },
    {
      title: 'Chamber Formation & Closure',
      description: `Fill anterior chamber with balanced salt solution through side entry created before pneumatic dissection.
        Verify wound integrity. Subconjunctival injection: triamcinolone acetonide and gentamicin sulfate 0.3%.
        Eye patching. Postoperative regimen: dexamethasone phosphate 0.1% and tobramycin sulfate 0.3% q2h,
        tapered to single daily steroid by 1 month post partial suture removal, discontinued at month 8.`,
    },
  ],
  postoperative: {
    title: 'Suture Management Protocol',
    description: `First running suture removal: 2-3 months postoperatively. Second suture removal timing age-dependent:
      Patients <30 years: within 10 months from surgery. Patients ≥30 years: within 12 months from surgery.
      Monitor for astigmatism changes between removals. Complete suture removal allows final visual rehabilitation.`
  }
}

// Alternative dissection strategies data
const alternativeTechniquesData = {
  title: 'Alternative Dissection Strategies',
  techniques: [
    {
      title: 'Manual Layer-by-Layer',
      description: `Sequential lamellar dissection when pneumatic separation fails. Begin with superficial plane using
        crescent blade, progress deeper with specialized spatulas. Identify tissue planes by color/texture changes.
        Continue until reaching characteristic pre-Descemetic plane appearance. Requires experience to avoid perforation.`,
    },
    {
      title: 'Femtosecond Laser-Assisted',
      description: `Computer-controlled lamellar cuts at predetermined depth/diameter. Spiral or raster patterns create
        smooth interface. Requires docking with patient interface. Limited by corneal opacity preventing laser
        transmission. Post-laser manual dissection often needed to complete separation.`,
    },
    {
      title: 'Viscoelastic-Assisted Dissection',
      description: `Alternative when air injection unsuccessful. Inject high molecular weight OVD
        through small stromal pocket. Multiple injection sites may be required for complete separation.
        Creates hydrodissection plane. Requires thorough irrigation to remove all viscoelastic material.`,
    },
  ],
}
</script>
