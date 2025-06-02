// src/components/header/MobileNavigation.vue
<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <div v-show="open" class="md:hidden border-t border-gray-200 bg-white shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/" class="mobile-nav-link" @click="handleLinkClick"> Home </router-link>

        <!-- Mobile Surgery Accordion -->
        <div>
          <button
            @click="mobileSurgeryOpen = !mobileSurgeryOpen"
            class="mobile-nav-link w-full flex justify-between items-center"
          >
            Surgery
            <svg
              class="w-4 h-4 transition-transform duration-300"
              :class="{ 'rotate-180': mobileSurgeryOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div v-show="mobileSurgeryOpen" class="pl-6 space-y-1 mt-1">
              <router-link
                v-for="surgery in surgeryTypes"
                :key="surgery.name"
                :to="`/surgery/${surgery.slug}`"
                class="mobile-dropdown-item"
                @click="handleLinkClick"
              >
                {{ surgery.name }}
              </router-link>
            </div>
          </transition>
        </div>

        <router-link to="/publications" class="mobile-nav-link" @click="handleLinkClick">
          Publications
        </router-link>
        <router-link to="/live-sessions" class="mobile-nav-link" @click="handleLinkClick">
          Live Sessions
        </router-link>
        <router-link to="/about" class="mobile-nav-link" @click="handleLinkClick">
          About Us
        </router-link>
        <router-link to="/contacts" class="mobile-nav-link" @click="handleLinkClick">
          Contacts
        </router-link>

        <div class="pt-4 space-y-2">
          <AuthButtons mobile />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import AuthButtons from './LoginRegister.vue'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const mobileSurgeryOpen = ref(false)

const handleLinkClick = () => {
  emit('close')
}

const surgeryTypes = ref([
  { name: 'DALK', slug: 'dalk' },
  { name: 'DMEK', slug: 'dmek' },
  { name: 'DSAEK', slug: 'dsaek' },
  { name: 'UT-DSAEK', slug: 'ut-dsaek' },
  { name: 'SALK', slug: 'salk' },
])
</script>

<style scoped>
/* Mobile Navigation Styles with Slide Effect */
.mobile-nav-link {
  @apply block px-3 py-2 text-base font-medium text-gray-700 rounded-md relative overflow-hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-link::before {
  content: '';
  @apply absolute left-0 top-0 bottom-0 w-1 bg-blue-600;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-link:hover {
  @apply text-blue-600 bg-blue-50 pl-5;
}

.mobile-nav-link:hover::before {
  transform: translateX(0);
}

.mobile-dropdown-item {
  @apply block py-2 text-sm text-gray-600 rounded-md pl-4 relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-dropdown-item:hover {
  @apply text-blue-600 bg-blue-50 pl-6;
}

/* Router Link Active State for mobile */
.router-link-active.mobile-nav-link {
  @apply text-blue-600 bg-blue-50;
}
</style>
