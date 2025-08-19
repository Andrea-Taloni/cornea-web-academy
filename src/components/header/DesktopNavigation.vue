// src/components/header/DesktopNavigation.vue
<template>
  <nav class="hidden md:flex items-center space-x-8">
    <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>

    <!-- Surgery Dropdown -->
    <NavDropdown :title="$t('nav.surgery')" :items="surgeryTypes" baseUrl="/surgery/" />

    <router-link to="/publications" class="nav-link">{{ $t('nav.publications') }}</router-link>
    <router-link to="/live-surgery" class="nav-link">{{ $t('nav.liveSurgery') }}</router-link>
    <router-link to="/recordings" class="nav-link">{{ $t('nav.recordings') }}</router-link>
    <router-link to="/contacts" class="nav-link">{{ $t('nav.contacts') }}</router-link>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import NavDropdown from './SurgeryDropdown.vue'

const { t } = useI18n()

const surgeryTypes = computed(() => [
  { name: t('surgery.types.dalk'), slug: 'dalk' },
  { name: t('surgery.types.mushroomPk'), slug: 'mushroom-pk' },
  { name: t('surgery.types.dmek'), slug: 'dmek' },
  { name: t('surgery.types.dsaek'), slug: 'dsaek' },
  { name: t('surgery.types.utDsaek'), slug: 'ut-dsaek' },
  { name: t('surgery.types.salk'), slug: 'salk' },
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
