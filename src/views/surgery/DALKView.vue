<!-- src/views/surgery/DALKView.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <PageHero title="DALK" subtitle="Deep Anterior Lamellar Keratoplasty" />

    <!-- Collapsible Sections Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <!-- Each section component now includes its own CollapsibleSection wrapper -->
      <OverviewSection
        :isExpanded="expandedSections.overview"
        @toggle="toggleSection('overview')"
      />

      <IndicationsSection
        :isExpanded="expandedSections.indications"
        @toggle="toggleSection('indications')"
      />

      <TechniquesSection
        :isExpanded="expandedSections.techniques"
        @toggle="toggleSection('techniques')"
      />

      <OutcomesSection
        :isExpanded="expandedSections.outcomes"
        @toggle="toggleSection('outcomes')"
      />

      <OutcomesSection3
        :isExpanded="expandedSections.outcomes3"
        @toggle="toggleSection('outcomes3')"
      />

      <OutcomesSection4
        :isExpanded="expandedSections.outcomes4"
        @toggle="toggleSection('outcomes4')"
      />

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

// Import all DALK section components - each includes its own CollapsibleSection
import OverviewSection from './dalk/_Introduction.vue'
import IndicationsSection from './dalk/_Indications.vue'
import TechniquesSection from './dalk/_Surgery.vue'
import OutcomesSection from './dalk/_Results.vue'
import OutcomesSection3 from './dalk/_Results3.vue'
import OutcomesSection4 from './dalk/_Results4.vue'
import ComplicationsSection from './dalk/_Complications.vue'
import PostopSection from './dalk/_Postop.vue'
import ReferencesSection from './dalk/_References.vue'

// Reactive state for expanded sections
const expandedSections = ref({
  overview: true, // Open by default
  indications: false,
  techniques: false,
  outcomes: false,
  outcomes3: false,
  outcomes4: false,
  complications: false,
  postop: false,
  references: false,
})

// Toggle function for sections
const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section]
}
</script>
