<template>
  <CookieBanner />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import CookieBanner from './components/CookieBanner.vue'
</script>

<style scoped>
/* Add any global styles here */
</style>
