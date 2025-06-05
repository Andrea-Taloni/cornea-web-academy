<!-- src/views/surgery/ut-dsaek/_Complications.vue -->
<template>
  <CollapsibleSection
    :title="complicationsMetadata.title"
    :iconPath="complicationsMetadata.iconPath"
    :colorTheme="complicationsMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="complicationsMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <ComplicationsSection
      :intraoperativeBox="complicationsData.intraoperative"
      :postoperativeBox="complicationsData.postoperative"
    />
  </CollapsibleSection>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ComplicationsSection, {
  complicationsMetadata,
} from '@/components/surgery/ComplicationsComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Complications data specific to UT-DSAEK
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Complications',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Graft Preparation Challenges',
        details: [
          { label: 'Perforation during double-pass', value: '2-3%' },
          { label: 'Irregular thickness', value: '5-8%' },
          { label: 'Prevention', value: 'Careful pachymetry between passes' },
          { label: 'Management', value: 'Convert to standard DSAEK or use backup tissue' },
        ],
      },
      {
        name: 'Difficult Graft Handling',
        details: [
          { label: 'Incidence', value: '15-20% in early experience' },
          { label: 'Risk factors', value: 'Grafts <70 μm, excessive manipulation' },
          { label: 'Prevention', value: 'Specialized UT-DSAEK instruments, gentle technique' },
          { label: 'Tips', value: 'Use Busin glide, avoid folding >60°', highlight: true },
        ],
      },
      {
        name: 'Increased Endothelial Damage',
        details: [
          { label: 'Cell loss during prep', value: '5-10% higher than standard' },
          { label: 'Insertion trauma', value: '35-40% at 1 year' },
          { label: 'Mitigation', value: 'Dispersive viscoelastic coating', highlight: true },
          { label: 'Modern devices', value: 'NS Endo-Inserter reduces loss to 25%' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications',
    colorTheme: 'red',
    sections: [
      {
        title: 'Early (&lt;1 month)',
        items: [
          'Graft detachment: 12-15% (slightly higher than standard DSAEK)',
          'Rebubbling success: 95% with single attempt',
          'Interface fluid: More common with ultra-thin grafts',
          'Pupillary block: 3-5% (similar to standard DSAEK)',
          'Primary graft failure: 1.2% (acceptable rate)',
        ],
      },
      {
        title: 'Intermediate (1-6 months)',
        items: [
          'Interface haze: 5-10% (less than standard DSAEK)',
          'Faster visual recovery: 80% achieve best vision by 3 months',
          'Hyperopic shift stabilization: +0.5-0.75D by 3 months',
          'Rejection episodes: 3-7% (lower than standard)',
          'Need for enhancement: <2% require PRK/LASIK',
        ],
      },
      {
        title: 'Long-term (&gt;6 months)',
        items: [
          'Progressive ECD loss: Similar to standard DSAEK',
          '5-year survival: 95% (excellent outcomes)',
          'Late detachment: <1% after 6 months',
          'Graft clarity: Maintained in >98% at 5 years',
          'Visual regression: Minimal if ECD >800 cells/mm²',
        ],
      },
      {
        title: 'Technical Considerations',
        items: [
          '**Thickness-related issues**:',
          '<50 μm: High manipulation difficulty, increased trauma',
          '50-70 μm: Optimal for experienced surgeons',
          '70-100 μm: Best balance for most surgeons',
          '>100 μm: Reduced visual benefit vs standard DSAEK',
        ],
      },
    ],
  },
})
</script>
