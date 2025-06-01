// src/components/header/NavDropdown.vue
<template>
  <div
    ref="dropdownRef"
    class="relative group"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <button class="nav-link flex items-center group-hover:text-blue-600 py-4">
      {{ title }}
      <svg
        class="w-4 h-4 ml-1 transform transition-transform duration-300"
        :class="{ 'rotate-180': showDropdown }"
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

    <!-- Dropdown Menu with Animation -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="showDropdown" class="dropdown-menu">
        <div class="py-1">
          <router-link
            v-for="(item, index) in items"
            :key="item.name"
            :to="`${baseUrl}${item.slug}`"
            class="dropdown-item"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            <span class="relative z-10">{{ item.name }}</span>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  baseUrl: {
    type: String,
    default: '/',
  },
})

const showDropdown = ref(false)
let dropdownTimeout = null

const handleMouseLeave = () => {
  // Add a small delay before hiding to prevent flickering
  dropdownTimeout = setTimeout(() => {
    showDropdown.value = false
  }, 100)
}

// Clear timeout if re-entering before delay expires
const handleMouseEnter = () => {
  if (dropdownTimeout) {
    clearTimeout(dropdownTimeout)
  }
  showDropdown.value = true
}
</script>

<style scoped>
/* Dropdown Menu Styles - Fixed positioning and z-index */
.dropdown-menu {
  @apply absolute left-0 w-56 bg-white rounded-xl shadow-2xl z-50;
  top: 100%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 0.5rem;
  margin-top: 0.25rem;
}

/* Invisible bridge to maintain hover state */
.group::before {
  content: '';
  @apply absolute left-0 right-0 h-6;
  top: 100%;
  z-index: 40;
}

/* Dropdown Item Styles with Sliding Effect */
.dropdown-item {
  @apply block px-5 py-3 text-sm text-gray-700 relative overflow-hidden;
  transition: all 0.2s ease;
}

/* Gradient background animation on hover */
.dropdown-item::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50;
  transform: translateX(-100%);
  transition: transform 0.2s ease;
}

.dropdown-item:hover::before {
  transform: translateX(0);
}

.dropdown-item:hover {
  @apply text-blue-700 pl-7;
}

/* Arrow animation for dropdown items */
.dropdown-item::after {
  content: '→';
  @apply absolute right-4 top-1/2 -translate-y-1/2 opacity-0 text-blue-600;
  transition: all 0.2s ease;
}

.dropdown-item:hover::after {
  @apply opacity-100 right-5;
}

/* Dropdown item stagger animation */
@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.dropdown-item {
  opacity: 0;
  animation: fadeInSlide 0.3s ease forwards;
}
</style>
