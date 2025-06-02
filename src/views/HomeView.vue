<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />
    <SlideshowComponent />
    <HeroSection />
    <FeaturesSection />
    <NewsSection />
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import SlideshowComponent from '@/components/home/SlideshowGallery.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import NewsSection from '@/components/NewsSection.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
