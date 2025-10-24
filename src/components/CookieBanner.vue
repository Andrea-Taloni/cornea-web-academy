<template>
  <transition name="fade">
    <div v-if="!cookieConsent" class="cookie-overlay">
      <transition name="slide-up">
        <div v-if="!cookieConsent" class="cookie-banner">
          <div class="cookie-content">
            <h2 class="cookie-title">GDPR COOKIE POLICY</h2>

            <div class="cookie-text">
              <p>
                In order to offer you the best possible experience while navigating this Web site,
                some information will be temporarily recorded in your computer within small text files
                named <strong>cookie</strong>. We consider very important to make you aware of this and
                to get your approval on the privacy and cookie policy of this Web site. For additional
                information, please read our privacy and cookie policy.
              </p>

              <a href="/privacypolicy.pdf" target="_blank" class="privacy-link">
                Privacy and cookie policy
              </a>
            </div>

            <div class="cookie-buttons">
              <button @click="acceptCookies" class="btn-accept">
                OK, I UNDERSTOOD AND ACCEPT
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cookieConsent = ref(false)

onMounted(() => {
  // Check if user has already accepted cookies
  const consent = localStorage.getItem('cookieConsent')
  if (consent === 'true') {
    cookieConsent.value = true
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'true')
  cookieConsent.value = true
}
</script>

<style scoped>
/* Overlay with fade animation */
.cookie-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Banner that slides up from bottom */
.cookie-banner {
  width: 100%;
  max-width: 900px;
  margin: 0 20px 0;
  background-color: #1a1a1a;
  border-radius: 8px 8px 0 0;
}

.slide-up-enter-active {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.slide-up-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-leave-to {
  transform: translateY(100%);
}

.cookie-content {
  padding: 40px;
}

.cookie-title {
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 30px 0;
  letter-spacing: 1px;
}

.cookie-text {
  margin-bottom: 30px;
}

.cookie-text p {
  color: #ffffff;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
}

.privacy-link {
  color: #ffffff;
  text-decoration: underline;
  font-size: 16px;
  display: inline-block;
  margin-top: 10px;
  transition: color 0.3s ease;
}

.privacy-link:hover {
  color: #4a9eff;
}

.cookie-buttons {
  display: flex;
  justify-content: center;
}

.btn-accept {
  padding: 12px 40px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: #ffffff;
  color: #1a1a1a;
  min-width: 300px;
}

.btn-accept:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .cookie-overlay {
    align-items: flex-end;
  }

  .cookie-banner {
    margin: 0;
    border-radius: 16px 16px 0 0;
  }

  .cookie-content {
    padding: 30px 20px;
  }

  .cookie-title {
    font-size: 24px;
  }

  .cookie-text p {
    font-size: 14px;
  }

  .btn-accept {
    width: 100%;
    min-width: unset;
  }
}
</style>
