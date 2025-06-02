<template>
  <section class="py-16 md:py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">Latest News and Events</h3>

      <!-- Featured Event - DALK Day -->
      <div
        class="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg shadow-xl overflow-hidden mb-12"
      >
        <div class="p-8 text-white">
          <div class="mb-8">
            <h4 class="text-3xl font-bold mb-4">DALK Day Surgeries</h4>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span class="text-xl">June 4, 2025</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span class="text-xl">3:00 PM to 7:00 PM (CET)</span>
                </div>
                <p class="text-lg mt-4">
                  Live surgical demonstrations featuring advanced DALK procedures performed by
                  experienced surgeons.
                </p>
                <p class="text-lg">No registration fee required.</p>
                <div class="flex flex-wrap items-center gap-4 mt-6">
                  <a
                    href="https://bit.ly/3ZuXNkA"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    Register here or use the QR-code
                  </a>
                  <div class="bg-white p-2 rounded-lg">
                    <img :src="qrCode" alt="Registration QR Code" class="w-24 h-24" />
                  </div>
                </div>
              </div>
              <div>
                <p class="text-sm opacity-90 mb-4">In collaboration with:</p>
                <p class="text-xs opacity-75 mb-6">
                  University of Ferrara • Ospedali Privati Forlì • Istituto internazionale di
                  Ricerca e Formazione in Oftalmologia • All India Institute of Medical Sciences
                  (India) • Apollo Hospitals (India) • "Magna Graecia" University of Catanzaro •
                  Moria Ophthalmic Instruments
                </p>

                <!-- Sponsor Logos -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                  <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
                    <img
                      :src="sponsorLogos.unife"
                      alt="University of Ferrara"
                      class="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
                    <img
                      :src="sponsorLogos.opf"
                      alt="Ospedali Privati Forlì"
                      class="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
                    <img
                      :src="sponsorLogos.irfo"
                      alt="IRFO"
                      class="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
                    <img
                      :src="sponsorLogos.aiims"
                      alt="All India Institute of Medical Sciences"
                      class="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
                    <img
                      :src="sponsorLogos.apollo"
                      alt="Apollo Hospitals"
                      class="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
                    <img
                      :src="sponsorLogos.umg"
                      alt="Università Magna Graecia"
                      class="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
                    <img
                      :src="sponsorLogos.moria"
                      alt="Moria"
                      class="max-h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Surgeons Section -->
          <div class="mt-8">
            <h5 class="text-2xl font-semibold mb-6">Participating Surgeons</h5>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="text-center">
                <div class="w-24 h-24 rounded-full mx-auto mb-2 overflow-hidden bg-white">
                  <img
                    :src="surgeonImages.massimobusin"
                    alt="Massimo Busin"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-sm font-semibold">Massimo Busin, MD</p>
              </div>
              <div class="text-center">
                <div class="w-24 h-24 rounded-full mx-auto mb-2 overflow-hidden bg-white">
                  <img
                    :src="surgeonImages.namratasharma"
                    alt="Namrata Sharma"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-sm font-semibold">Namrata Sharma, MD</p>
              </div>
              <div class="text-center">
                <div class="w-24 h-24 rounded-full mx-auto mb-2 overflow-hidden bg-white">
                  <img
                    :src="surgeonImages.rajeshfogla"
                    alt="Rajesh Fogla"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-sm font-semibold">Rajesh Fogla, MD</p>
              </div>
              <div class="text-center">
                <div class="w-24 h-24 rounded-full mx-auto mb-2 overflow-hidden bg-white">
                  <img
                    :src="surgeonImages.cristinabovone"
                    alt="Cristina Bovone"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-sm font-semibold">Cristina Bovone, MD</p>
              </div>
              <div class="text-center">
                <div class="w-24 h-24 rounded-full mx-auto mb-2 overflow-hidden bg-white">
                  <img
                    :src="surgeonImages.vincenzoscorcia"
                    alt="Vincenzo Scorcia"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-sm font-semibold">Vincenzo Scorcia, MD</p>
              </div>
              <div class="text-center">
                <div class="w-24 h-24 rounded-full mx-auto mb-2 overflow-hidden bg-white">
                  <img
                    :src="surgeonImages.niccolosalgari"
                    alt="Niccolò Salgari"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-sm font-semibold">Niccolò Salgari, MD</p>
              </div>
              <div class="text-center">
                <div class="w-24 h-24 rounded-full mx-auto mb-2 overflow-hidden bg-white">
                  <img
                    :src="surgeonImages.angelichristyyu"
                    alt="Angeli Christy Yu"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-sm font-semibold">Angeli Christy Yu, MD, PhD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import surgeon images
import massimobusin from '@/assets/images/surgeons/massimobusin.png'
import namratasharma from '@/assets/images/surgeons/namratasharma.png'
import rajeshfogla from '@/assets/images/surgeons/rajeshfogla.png'
import cristinabovone from '@/assets/images/surgeons/cristinabovone.png'
import vincenzoscorcia from '@/assets/images/surgeons/vincenzoscorcia.png'
import niccolosalgari from '@/assets/images/surgeons/niccolosalgari.png'
import angelichristyyu from '@/assets/images/surgeons/angelichristyyu.png'

// Import sponsor logos
import apollohospitals from '@/assets/images/sponsors/apollohospitals.png'
import irfo from '@/assets/images/sponsors/irfo.png'
import unife from '@/assets/images/sponsors/unife.png'
import aiims from '@/assets/images/sponsors/aiims.png'
import moria from '@/assets/images/sponsors/moria.jpg'
import opf from '@/assets/images/sponsors/opf.jpg'
import umg from '@/assets/images/sponsors/umg.png'

// Import QR code
import qrCode from '@/assets/images/qrcodes/qrcode-dalkday-040625.png'

// Group surgeon images for easier reference
const surgeonImages = {
  massimobusin,
  namratasharma,
  rajeshfogla,
  cristinabovone,
  vincenzoscorcia,
  niccolosalgari,
  angelichristyyu,
}

// Group sponsor logos - INCLUDING ALL IMPORTED LOGOS
const sponsorLogos = {
  apollo: apollohospitals,
  irfo,
  unife, // Added this
  aiims, // Added this
  moria,
  opf,
  umg,
}
</script>
