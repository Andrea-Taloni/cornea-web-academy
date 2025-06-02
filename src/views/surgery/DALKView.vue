<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero title="DALK" subtitle="Deep Anterior Lamellar Keratoplasty" />

    <!-- Overview Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">What is DALK?</h2>
            <p class="text-gray-600 mb-4">
              Deep Anterior Lamellar Keratoplasty (DALK) is a partial-thickness corneal transplant
              procedure that replaces the corneal epithelium and stroma while preserving the
              patient's own Descemet's membrane and endothelium.
            </p>
            <p class="text-gray-600 mb-4">
              This innovative technique offers significant advantages over full-thickness
              penetrating keratoplasty, including reduced risk of endothelial rejection and better
              long-term graft survival.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Preservation of healthy endothelium</li>
              <li>Lower rejection risk</li>
              <li>Stronger wound integrity</li>
              <li>Faster visual recovery</li>
            </ul>
          </div>
          <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span class="text-gray-500">DALK Procedure Illustration</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Indications Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Indications for DALK</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Keratoconus</h3>
            <p class="text-gray-600">
              Advanced keratoconus with clear central cornea and healthy endothelium
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Corneal Scars</h3>
            <p class="text-gray-600">
              Superficial and stromal corneal scars not involving the endothelium
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Stromal Dystrophies</h3>
            <p class="text-gray-600">
              Various stromal dystrophies with preserved endothelial function
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Surgical Technique Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Surgical Technique</h2>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  1
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Preparation</h3>
                <p class="text-gray-600">
                  The recipient cornea is marked and a partial-thickness trephination is performed,
                  typically leaving 80-100 μm of posterior stroma.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  2
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Big Bubble Technique</h3>
                <p class="text-gray-600">
                  Air is injected into the deep stroma to create a separation between Descemet's
                  membrane and the overlying stroma, facilitating safe removal of diseased tissue.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  3
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Graft Preparation</h3>
                <p class="text-gray-600">
                  The donor cornea is prepared by removing the Descemet's membrane and endothelium,
                  leaving only the anterior layers.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  4
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Graft Suturing</h3>
                <p class="text-gray-600">
                  The donor tissue is sutured to the recipient bed using interrupted or continuous
                  sutures, ensuring proper wound apposition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Benefits of DALK</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">No Endothelial Rejection</h3>
            <p class="text-gray-600 text-sm">
              Since the patient's endothelium is preserved, there's no risk of endothelial rejection
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Stronger Eye</h3>
            <p class="text-gray-600 text-sm">
              The eye remains structurally stronger as it's not a full-thickness procedure
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Lower Complication Risk</h3>
            <p class="text-gray-600 text-sm">
              Reduced risk of expulsive hemorrhage and other intraoperative complications
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Better Graft Survival</h3>
            <p class="text-gray-600 text-sm">
              Long-term graft survival rates are excellent due to preserved endothelium
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recovery Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Recovery & Follow-up</h2>
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-2">Immediate Post-operative</h3>
                <p class="text-gray-600">
                  Patients typically experience mild discomfort and blurred vision. Topical
                  antibiotics and steroids are prescribed.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">First Month</h3>
                <p class="text-gray-600">
                  Regular follow-up visits to monitor healing and adjust medications. Vision
                  gradually improves.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">3-6 Months</h3>
                <p class="text-gray-600">
                  Selective suture removal based on topography. Visual acuity continues to improve.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Long-term</h3>
                <p class="text-gray-600">
                  Annual follow-ups to monitor graft clarity and endothelial health. Most patients
                  achieve excellent visual outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Videos Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Related Videos</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">DALK Big Bubble Technique</h3>
              <p class="text-gray-600 text-sm">Prof. Busin demonstrates the big bubble technique</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">DALK for Advanced Keratoconus</h3>
              <p class="text-gray-600 text-sm">Complete surgical case with commentary</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">DALK Complications Management</h3>
              <p class="text-gray-600 text-sm">How to handle intraoperative challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/PageHero.vue'
</script>
