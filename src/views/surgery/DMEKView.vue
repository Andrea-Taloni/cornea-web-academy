<!-- src/views/surgery/DMEKView.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <PageHero title="DMEK" subtitle="Descemet Membrane Endothelial Keratoplasty" />

    <!-- Collapsible Sections Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <!-- Each section component includes its own CollapsibleSection wrapper -->
      <IntroductionSection
        :isExpanded="expandedSections.introduction"
        @toggle="toggleSection('introduction')"
      />

      <IndicationsSection
        :isExpanded="expandedSections.indications"
        @toggle="toggleSection('indications')"
      />

      <SurgerySection :isExpanded="expandedSections.surgery" @toggle="toggleSection('surgery')" />

      <ResultsSection :isExpanded="expandedSections.results" @toggle="toggleSection('results')" />

      <ComplicationsSection
        :isExpanded="expandedSections.complications"
        @toggle="toggleSection('complications')"
      />

      <PostopSection :isExpanded="expandedSections.postop" @toggle="toggleSection('postop')" />

      <ReferencesSection
        :isExpanded="expandedSections.references"
        @toggle="toggleSection('references')"
      />
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'

// Import all DMEK section components
import IntroductionSection from './dmek/_Introduction.vue'
import IndicationsSection from './dmek/_Indications.vue'
import SurgerySection from './dmek/_Surgery.vue'
import ResultsSection from './dmek/_Results.vue'
import ComplicationsSection from './dmek/_Complications.vue'
import PostopSection from './dmek/_Postop.vue'
import ReferencesSection from './dmek/_References.vue'

// Reactive state for expanded sections
const expandedSections = ref({
  introduction: true, // Open by default
  indications: false,
  surgery: false,
  results: false,
  complications: false,
  postop: false,
  references: false,
})

// Toggle function for sections
const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section]
}
</script>
