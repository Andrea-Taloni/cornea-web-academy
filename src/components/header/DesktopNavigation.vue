// src/components/header/DesktopNavigation.vue
<template>
  <nav class="hidden md:flex items-center space-x-8">
    <router-link to="/" class="nav-link">Home</router-link>

    <!-- Surgery Dropdown -->
    <NavDropdown title="Surgery" :items="surgeryTypes" baseUrl="/surgery/" />

    <router-link to="/publications" class="nav-link">Publications</router-link>
    <router-link to="/live-sessions" class="nav-link">Live Sessions</router-link>
    <router-link to="/about" class="nav-link">About Us</router-link>
    <router-link to="/contacts" class="nav-link">Contacts</router-link>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import NavDropdown from './SurgeryDropdown.vue'

const surgeryTypes = ref([
  { name: 'DALK', slug: 'dalk' },
  { name: 'DMEK', slug: 'dmek' },
  { name: 'DSAEK', slug: 'dsaek' },
  { name: 'UT-DSAEK', slug: 'ut-dsaek' },
  { name: 'SALK', slug: 'salk' },
])
</script>

<style scoped>
/* Navigation Link Styles with Animated Underline */
.nav-link {
  @apply text-gray-700 font-medium py-2 relative;
  transition: color 0.2s ease;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600;
  transition: width 0.2s ease;
}

.nav-link:hover {
  @apply text-blue-600;
}

.nav-link:hover::after {
  @apply w-full;
}

/* Active link with persistent underline */
.router-link-active.nav-link {
  @apply text-blue-600;
}

.router-link-active.nav-link::after {
  @apply w-full bg-gradient-to-r from-blue-500 to-blue-700;
}
</style>
