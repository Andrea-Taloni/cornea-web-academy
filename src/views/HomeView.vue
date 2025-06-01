<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />
    <SlideshowComponent />
    <HeroSection />
    <FeaturesSection />
    <CTASection />
    <NewsSection />
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import SlideshowComponent from '@/components/SlideshowComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import CTASection from '@/components/CTASection.vue'
import NewsSection from '@/components/NewsSection.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
