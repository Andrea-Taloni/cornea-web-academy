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

// DSAEK surgical technique data - Based on Cochrane Review 2018
const dsaekTechnique = {
  title: 'Descemet Stripping Automated Endothelial Keratoplasty (DSAEK) Technique',
  steps: [
    {
      title: 'Donor Tissue Preparation',
      description:
        'Mount donor cornea on artificial anterior chamber. Use automated microkeratome to create a 50-150 micron thick posterior lamellar graft containing stroma, Descemet membrane, and endothelium. Standard DSAEK thickness: 100-150μm. Ultrathin DSAEK: <100μm for improved visual outcomes. Punch graft to 8.0-8.5mm diameter. Mark orientation to prevent inverted placement.',
    },
    {
      title: 'Recipient Bed Preparation',
      description:
        "Mark corneal center and measure graft diameter (typically 8.5-9.0mm). Create 5mm temporal scleral tunnel or 4.5mm clear corneal incision. Create paracenteses at 3 and 9 o'clock positions. Score and strip Descemet membrane and diseased endothelium using reverse Sinskey hook within marked zone. Complete removal critical to prevent interface haze and improve adherence.",
    },
    {
      title: 'Graft Insertion Techniques',
      description:
        'Multiple insertion methods available: Forceps technique with 60/40 folding configuration (higher endothelial loss), Busin glide with pull-through suture (moderate cell loss), or modern inserters like NS Endo-Inserter (reduced cell loss ~20%). Insert graft with endothelial side down, maintaining orientation marks visible.',
    },
    {
      title: 'Graft Unfolding and Centering',
      description:
        'Unfold graft using balanced salt solution irrigation through paracentesis. Employ "no-touch" technique using fluid dynamics to minimize endothelial trauma. Center graft over pupillary axis. Remove all interface fluid between host and donor tissue - critical for adherence. Verify correct orientation using pre-placed marks.',
    },
    {
      title: 'Air Tamponade',
      description:
        'Inject sterile air bubble beneath graft to achieve complete anterior chamber fill. Maintain for 8-10 minutes to ensure initial adherence. Partially release air to leave 80-90% bubble (6-8mm diameter). Check for pupillary block - perform inferior peripheral iridotomy if needed. Studies show 7-20% graft dislocation rate requiring rebubbling.',
    },
    {
      title: 'Postoperative Positioning',
      description:
        'Patient positioned supine for first 1-2 hours postoperatively. After initial period, intermittent supine positioning may be adequate. Studies show comparable outcomes with modified positioning protocols versus strict supine positioning. Monitor for graft dislocation in first 24-48 hours.',
    },
  ],
}

// Insertion methods data - Evidence-based approaches
const insertionMethods = {
  title: 'Graft Insertion Methods: Comparative Outcomes',
  techniques: [
    {
      title: 'Forceps Insertion (Traditional)',
      description:
        'Original technique using forceps to fold graft 60/40 or taco-fold configuration. Higher endothelial cell loss (30-40% at 6 months). Requires 5mm incision. Direct manipulation increases trauma risk. Still used but largely replaced by newer techniques.',
    },
    {
      title: 'Busin Glide Technique',
      description:
        'Pull-through technique using specialized glide and suture. Reduced endothelial loss compared to forceps (25-30%). Allows controlled insertion through 4.5mm incision. Learning curve moderate. Good option for standard DSAEK thickness.',
    },
    {
      title: 'Insertion Devices (NS Endo-Inserter, Endosaver)',
      description:
        'Modern inserters significantly reduce endothelial trauma. Cell loss reduced to 20-25% at 6 months. Accommodate 8-9mm grafts through 4mm incision. Particularly beneficial for ultrathin DSAEK. Higher initial cost offset by improved outcomes.',
    },
  ],
}

// Additional techniques for complex cases
const additionalTechniques = []
</script>
