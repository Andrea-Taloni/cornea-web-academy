<!-- src/views/surgery/dmek/_References.vue -->
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

// References data
const references = [
  {
    authors: 'Melles GR, Ong TS, Ververs B, van der Wees J.',
    title: 'Descemet membrane endothelial keratoplasty (DMEK).',
    journal: 'Cornea.',
    year: '2006',
    volume: '25(8)',
    pages: '987-90',
  },
  {
    authors: 'Price MO, Giebel AW, Fairchild KM, Price FW Jr.',
    title:
      "Descemet's membrane endothelial keratoplasty: prospective multicenter study of visual and refractive outcomes and endothelial survival.",
    journal: 'Ophthalmology.',
    year: '2009',
    volume: '116(12)',
    pages: '2361-8',
  },
  {
    authors: 'Chamberlain W, Lin CC, Austin A, Schubach N, Clover J, McLeod SD, et al.',
    title:
      'Descemet Endothelial Thickness Comparison Trial: A Randomized Trial Comparing Ultrathin Descemet Stripping Automated Endothelial Keratoplasty with Descemet Membrane Endothelial Keratoplasty.',
    journal: 'Ophthalmology.',
    year: '2019',
    volume: '126(1)',
    pages: '19-26',
  },
  {
    authors: 'Dunker SL, Dickman MM, Wisse RPL, Nobacht S, Wijdh RHJ, Bartels MC, et al.',
    title:
      'Descemet Membrane Endothelial Keratoplasty versus Ultrathin Descemet Stripping Automated Endothelial Keratoplasty: A Multicenter Randomized Controlled Clinical Trial.',
    journal: 'JAMA Ophthalmol.',
    year: '2020',
    volume: '138(11)',
    pages: '1-9',
  },
  {
    authors: 'Price MO, Gupta P, Lass J, Price FW Jr.',
    title: 'EK (DLEK, DSEK, DMEK): New Frontier in Cornea Surgery.',
    journal: 'Annu Rev Vis Sci.',
    year: '2017',
    volume: '3',
    pages: '69-90',
  },
  {
    authors: 'Deng SX, Lee WB, Hammersmith KM, Kuo AN, Li JY, Shen JF, et al.',
    title:
      'Descemet Membrane Endothelial Keratoplasty: Safety and Outcomes: A Report by the American Academy of Ophthalmology.',
    journal: 'Ophthalmology.',
    year: '2018',
    volume: '125(2)',
    pages: '295-310',
  },
  {
    authors: 'Terry MA, Straiko MD, Veldman PB, Talajic JC, VanZyl C, Sales CS, et al.',
    title:
      'Standardized DMEK Technique: Reducing Complications Using Prestripped Tissue, Novel Glass Injector, and Sulfur Hexafluoride (SF6) Gas.',
    journal: 'Cornea.',
    year: '2015',
    volume: '34(8)',
    pages: '845-52',
  },
  {
    authors: 'Birbal RS, Ni Dhubhghaill S, Bourgonje VJA, Hanssen J, Ham L, Jager MJ, et al.',
    title:
      'Five-Year Graft Survival and Clinical Outcomes of 500 Consecutive Cases After Descemet Membrane Endothelial Keratoplasty.',
    journal: 'Cornea.',
    year: '2020',
    volume: '39(3)',
    pages: '290-297',
  },
  {
    authors: 'Woo JH, Ang M, Htoon HM, Tan D.',
    title:
      'Descemet Membrane Endothelial Keratoplasty Versus Descemet Stripping Automated Endothelial Keratoplasty and Penetrating Keratoplasty.',
    journal: 'Am J Ophthalmol.',
    year: '2019',
    volume: '207',
    pages: '288-303',
  },
  {
    authors: 'Price DA, Kelley M, Price FW Jr, Price MO.',
    title:
      'Five-Year Graft Survival of Descemet Membrane Endothelial Keratoplasty (EK) versus Descemet Stripping EK and the Effect of Donor Sex Matching.',
    journal: 'Ophthalmology.',
    year: '2018',
    volume: '125(10)',
    pages: '1508-1514',
  },
  {
    authors: 'Schlögl A, Tourtas T, Kruse FE, Weller JM.',
    title: 'Long-term Clinical Outcome After Descemet Membrane Endothelial Keratoplasty.',
    journal: 'Am J Ophthalmol.',
    year: '2016',
    volume: '169',
    pages: '218-226',
  },
  {
    authors: 'Maier AK, Gundlach E, Gonnermann J, Klamann MK, Eulufi C, Bertelmann E, et al.',
    title:
      'Retrospective contralateral study comparing Descemet membrane endothelial keratoplasty with Descemet stripping automated endothelial keratoplasty.',
    journal: 'Eye (Lond).',
    year: '2015',
    volume: '29(3)',
    pages: '327-32',
  },
]
</script>
