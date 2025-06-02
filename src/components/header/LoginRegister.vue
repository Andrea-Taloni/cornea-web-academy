// src/components/header/AuthButtons.vue
<template>
  <div :class="[mobile ? 'space-y-2' : 'items-center space-x-4']">
    <button :class="mobile ? 'mobile-login-button' : 'login-button'">
      <span class="button-text">Login</span>
    </button>
    <button :class="mobile ? 'mobile-register-button' : 'register-button'">
      <span class="button-text">Register</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  mobile: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
/* Modern Login Button with Magnetic Border Effect */
.login-button {
  @apply relative px-6 py-2.5 text-gray-700 font-medium overflow-hidden;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-button .button-text {
  @apply relative z-10;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-button .button-border {
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  padding: 2px;
  background: linear-gradient(45deg, #e5e7eb, #e5e7eb);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  background-size: 300% 300%;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.login-button:hover::before {
  opacity: 0.1;
  animation: gradientShift 3s ease infinite;
}

.login-button:hover .button-border {
  padding: 2px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  background-size: 300% 300%;
  animation: gradientShift 3s ease infinite;
}

.login-button:hover .button-text {
  @apply text-blue-600;
}

/* Modern Register Button with Shimmer Effect */
.register-button {
  @apply relative px-6 py-2.5 font-medium text-white overflow-hidden;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.register-button .button-text {
  @apply relative z-10;
}

.register-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.register-button .button-glow {
  position: absolute;
  inset: -2px;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  background-size: 300% 300%;
  opacity: 0;
  filter: blur(10px);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  animation: gradientShift 3s ease infinite;
}

.register-button:hover::before {
  left: 100%;
}

.register-button:hover .button-glow {
  opacity: 0.6;
}

.register-button:hover {
  box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

.register-button:active {
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

/* Mobile Auth Button Styles */
.mobile-login-button {
  @apply w-full px-4 py-2.5 text-gray-700 font-medium rounded-lg relative overflow-hidden;
  background: white;
  border: 2px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-login-button::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600;
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.mobile-login-button:hover {
  @apply text-white border-transparent;
}

.mobile-login-button:hover::before {
  transform: translateY(0);
}

.mobile-register-button {
  @apply w-full px-4 py-2.5 text-white font-medium rounded-lg relative overflow-hidden;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-register-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-register-button:hover::before {
  left: 100%;
}

.mobile-register-button:hover {
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
