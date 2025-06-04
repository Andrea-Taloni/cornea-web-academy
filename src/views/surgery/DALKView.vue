<!-- src/views/surgery/DALKView.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <PageHero
      title="Deep Anterior Lamellar Keratoplasty (DALK)"
      subtitle="Partial-thickness corneal transplantation technique"
    />

    <!-- Collapsible Sections Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <!-- Clinical Overview Section -->
      <CollapsibleSection
        title="Clinical Overview"
        iconPath="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        colorTheme="sky"
        :isExpanded="expandedSections.overview"
        @toggle="toggleSection('overview')"
        maxHeight="3000px"
      >
        <OverviewSection />
      </CollapsibleSection>

      <!-- Clinical Indications Section -->
      <CollapsibleSection
        title="Clinical Indications"
        iconPath="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        colorTheme="blue"
        :isExpanded="expandedSections.indications"
        @toggle="toggleSection('indications')"
        maxHeight="2000px"
      >
        <IndicationsSection />
      </CollapsibleSection>

      <!-- Surgical Techniques Section -->
      <CollapsibleSection
        title="Surgical Techniques"
        iconPath="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
        colorTheme="green"
        :isExpanded="expandedSections.techniques"
        @toggle="toggleSection('techniques')"
        maxHeight="2500px"
      >
        <TechniquesSection />
      </CollapsibleSection>

      <!-- Clinical Outcomes Section -->
      <CollapsibleSection
        title="Evidence-Based Outcomes"
        iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        colorTheme="purple"
        :isExpanded="expandedSections.outcomes"
        @toggle="toggleSection('outcomes')"
        maxHeight="3000px"
      >
        <OutcomesSection />
      </CollapsibleSection>

      <!-- Complications Section -->
      <CollapsibleSection
        title="Complications and Management"
        iconPath="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        colorTheme="red"
        :isExpanded="expandedSections.complications"
        @toggle="toggleSection('complications')"
        maxHeight="2000px"
      >
        <ComplicationsSection />
      </CollapsibleSection>

      <!-- Post-operative Management Section -->
      <CollapsibleSection
        title="Post-operative Management Protocol"
        iconPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        colorTheme="teal"
        :isExpanded="expandedSections.postop"
        @toggle="toggleSection('postop')"
        maxHeight="2000px"
      >
        <PostopSection />
      </CollapsibleSection>

      <!-- References Section -->
      <CollapsibleSection
        title="References"
        iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        colorTheme="gray"
        :isExpanded="expandedSections.references"
        @toggle="toggleSection('references')"
        maxHeight="1500px"
      >
        <ReferencesSection />
      </CollapsibleSection>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'

// Import all DALK section partials
import OverviewSection from './dalk/_Overview.vue'
import IndicationsSection from './dalk/_Indications.vue'
import TechniquesSection from './dalk/_Techniques.vue'
import OutcomesSection from './dalk/_Outcomes.vue'
import ComplicationsSection from './dalk/_Complications.vue'
import PostopSection from './dalk/_Postop.vue'
import ReferencesSection from './dalk/_References.vue'

// Reactive state for expanded sections
const expandedSections = ref({
  overview: true, // Open by default
  indications: false,
  techniques: false,
  outcomes: false,
  complications: false,
  postop: false,
  references: false,
})

// Toggle function for sections
const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section]
}
</script>
