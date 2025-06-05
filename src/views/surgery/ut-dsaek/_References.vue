<!-- src/views/surgery/ut-dsaek/_References.vue -->
<template>
  <CollapsibleSection
    :title="referencesMetadata.title"
    :iconPath="referencesMetadata.iconPath"
    :colorTheme="referencesMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="referencesMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <ReferencesSection :references="references" />
  </CollapsibleSection>
</template>

<script setup>
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ReferencesSection, { referencesMetadata } from '@/components/surgery/ReferencesComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// References data for UT-DSAEK
const references = [
  {
    authors: 'Busin M, Madi S, Santorum P, Scorcia V, Beltz J.',
    title: 'Ultrathin descemet\'s stripping automated endothelial keratoplasty with the microkeratome double-pass technique: two-year outcomes.',
    journal: 'Ophthalmology.',
    year: '2013',
    volume: '120(6)',
    pages: '1186-94',
  },
  {
    authors: 'Romano V, Parekh M, Ruzza A, et al.',
    title: 'Comparison of preservation and transportation protocols for preloaded Descemet membrane endothelial keratoplasty.',
    journal: 'Br J Ophthalmol.',
    year: '2018',
    volume: '102(4)',
    pages: '549-555',
  },
  {
    authors: 'Chamberlain W, Lin CC, Austin A, et al.',
    title: 'Descemet Endothelial Thickness Comparison Trial: A Randomized Trial Comparing Ultrathin Descemet Stripping Automated Endothelial Keratoplasty with Descemet Membrane Endothelial Keratoplasty.',
    journal: 'Ophthalmology.',
    year: '2019',
    volume: '126(1)',
    pages: '19-26',
  },
  {
    authors: 'Romano V, Passacantando T, Airaldi M, et al.',
    title: 'Ultrathin Descemet Stripping Automated Endothelial Keratoplasty (UT-DSAEK) versus Descemet Membrane Endothelial Keratoplasty (DMEK)—a systematic review and meta-analysis.',
    journal: 'Eye (Lond).',
    year: '2023',
    volume: '37(15)',
    pages: '3088-3095',
  },
  {
    authors: 'Dickman MM, Kruit PJ, Remeijer L, et al.',
    title: 'A Randomized Multicenter Clinical Trial of Ultrathin Descemet Stripping Automated Endothelial Keratoplasty (DSAEK) versus DSAEK.',
    journal: 'Ophthalmology.',
    year: '2016',
    volume: '123(11)',
    pages: '2276-2284',
  },
  {
    authors: 'Woo JH, Ang M, Htoon HM, Tan D.',
    title: 'Descemet Membrane Endothelial Keratoplasty Versus Descemet Stripping Automated Endothelial Keratoplasty and Penetrating Keratoplasty.',
    journal: 'Am J Ophthalmol.',
    year: '2019',
    volume: '207',
    pages: '288-303',
  },
  {
    authors: 'Torras-Sanvicens J, Blanco-Domínguez I, Sánchez-González JM, et al.',
    title: 'Visual Quality and Subjective Satisfaction in Ultrathin Descemet Stripping Automated Endothelial Keratoplasty (UT-DSAEK) versus Descemet Membrane Endothelial Keratoplasty (DMEK): A Fellow-Eye Comparison.',
    journal: 'J Clin Med.',
    year: '2021',
    volume: '10(3)',
    pages: '419',
  },
  {
    authors: 'Busin M, Leon P, Scorcia V, Ponzin D.',
    title: 'Contact Lens-Assisted Pull-Through Technique for Delivery of Tri-Folded (Endothelium in) DMEK Grafts Minimizes Surgical Time and Cell Loss.',
    journal: 'Ophthalmology.',
    year: '2016',
    volume: '123(3)',
    pages: '476-83',
  },
  {
    authors: 'Kurji KH, Cheung AY, Eslani M, et al.',
    title: 'Comparison of Visual Acuity Outcomes Between Nanothin Descemet Stripping Automated Endothelial Keratoplasty and Descemet Membrane Endothelial Keratoplasty.',
    journal: 'Cornea.',
    year: '2018',
    volume: '37(10)',
    pages: '1226-1231',
  },
  {
    authors: 'Cheung AY, Hou JH, Bedard P, et al.',
    title: 'Technique for Preparing Ultrathin and Nanothin Descemet Stripping Automated Endothelial Keratoplasty Tissue.',
    journal: 'Cornea.',
    year: '2018',
    volume: '37(5)',
    pages: '661-666',
  },
  {
    authors: 'Roberts HW, Mukherjee A, Aichner H, Rajan MS.',
    title: 'Visual Outcomes and Graft Thickness in Microthin DSAEK-One-Year Results.',
    journal: 'Cornea.',
    year: '2015',
    volume: '34(11)',
    pages: '1345-50',
  },
  {
    authors: 'Maier AK, Gundlach E, Gonnermann J, et al.',
    title: 'Retrospective contralateral study comparing Descemet membrane endothelial keratoplasty with ultrathin Descemet stripping automated endothelial keratoplasty.',
    journal: 'Eye (Lond).',
    year: '2015',
    volume: '29(3)',
    pages: '327-32',
  },
]
</script>
