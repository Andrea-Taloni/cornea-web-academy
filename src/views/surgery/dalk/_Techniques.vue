<!-- src/views/surgery/dalk/_Techniques.vue -->
<template>
  <!-- Large Diameter Big-Bubble Technique -->
  <SurgicalSteps :title="largeDiameterTechnique.title" :steps="largeDiameterTechnique.steps" />

  <!-- Alternative Dissection Strategies -->
  <AlternativeTechniques :techniques="alternativeTechniques" />
</template>

<script setup>
import SurgicalSteps from '@/components/surgery/SurgicalSteps.vue'
import AlternativeTechniques from '@/components/surgery/AlternativeTechniques.vue'

// Large Diameter Big-Bubble Technique data
const largeDiameterTechnique = {
  title: 'Large Diameter Big-Bubble Technique (9-mm DALK with 6-mm Optical Zone)',
  steps: [
    {
      title: 'Deep Trephination',
      description: `Peribulbar anesthesia: 10ml of 0.75% ropivacaine. Create side entry for chamber maintenance.
        9mm diameter vacuum trephination to 450-550μm depth. Blade setting precisely calculated:
        within 100μm of thinnest AS-OCT pachymetry at 9mm zone. Measurable blade advancement
        allows 50μm adjustment increments for optimal depth control.`,
    },
    {
      title: 'Modified Pneumatic Dissection',
      description: `Insert dedicated probe followed by cannula precisely 2mm inside trephination edge.
        Controlled air injection creates pre-Descemetic separation. Assess bubble diameter and type
        (Type 1 vs Type 2) for surgical planning. Bubble should extend beyond planned 6mm optical zone.`,
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
      description: `Mark central 6mm with disposable trephine. Apply adhesive viscoelastic (IAL-F) centrally
        for tissue protection. Enter bubble with 15° blade, extend opening with Vannas scissors inferior blade.
        Complete circumferential excision of deep stroma/bubble roof strictly within 6mm mark using
        corneal scissors. Preserve peripheral 1.5mm stromal crown intact.`,
    },
    {
      title: 'Microkeratome-Assisted Graft Preparation',
      description: `Mount donor on ALTK system artificial chamber. Create anterior lamella using 400μm microkeratome head.
        Punch lamella to 9mm diameter. Position in recipient bed ensuring proper orientation.
        Secure with double running 10-0 nylon suture technique. Final configuration: direct graft-to-Descemet
        contact centrally, peripheral "lap-joint" with recipient stroma.`,
    },
    {
      title: 'Chamber Formation & Closure',
      description: `Reform anterior chamber with BSS through paracentesis created pre-operatively.
        Check for wound leaks with fluorescein. Subconjunctival injection: triamcinolone acetonide
        and gentamicin 0.3%. Apply bandage contact lens if epithelial irregularity present.
        Patch eye with antibiotic ointment.`,
    },
  ],
}

// Alternative dissection strategies data
const alternativeTechniques = [
  {
    title: 'Manual Layer-by-Layer (Melles)',
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
    description: `Alternative when air injection unsuccessful. Inject high molecular weight OVD (Healon GV, Viscoat)
      through small stromal pocket. Multiple injection sites may be required for complete separation.
      Creates hydrodissection plane. Requires thorough irrigation to remove all viscoelastic material.`,
  },
]
</script>
