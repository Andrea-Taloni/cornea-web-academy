<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero title="DMEK" subtitle="Descemet's Membrane Endothelial Keratoplasty" />

    <!-- Overview Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">What is DMEK?</h2>
            <p class="text-gray-600 mb-4">
              Descemet's Membrane Endothelial Keratoplasty (DMEK) is the most advanced form of
              endothelial keratoplasty, involving transplantation of only the Descemet's membrane
              and endothelium from a donor cornea.
            </p>
            <p class="text-gray-600 mb-4">
              This ultra-thin graft (10-15 micrometers) provides superior visual outcomes compared
              to other endothelial transplant techniques, with faster recovery and better optical
              quality.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Thinnest possible endothelial graft</li>
              <li>Superior visual acuity results</li>
              <li>Minimal optical aberrations</li>
              <li>Fastest visual recovery</li>
              <li>Lowest rejection rates</li>
            </ul>
          </div>
          <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span class="text-gray-500">DMEK Procedure Illustration</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Indications Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Indications for DMEK</h2>
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fuchs' Dystrophy</h3>
            <p class="text-gray-600">
              Primary indication for DMEK in patients with endothelial dysfunction
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
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Pseudophakic Bullous Keratopathy</h3>
            <p class="text-gray-600">
              Endothelial failure following cataract or other intraocular surgery
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Failed DSAEK</h3>
            <p class="text-gray-600">
              Conversion from failed DSAEK to DMEK for better visual outcomes
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
            <h3 class="text-xl font-semibold mb-2">Endothelial Dystrophies</h3>
            <p class="text-gray-600">
              Various posterior polymorphous and other endothelial dystrophies
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
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Iridocorneal Endothelial Syndrome</h3>
            <p class="text-gray-600">ICE syndrome with corneal edema and endothelial dysfunction</p>
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
                  d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v3m3-4h8m0 0h2a1 1 0 011 1v3M7 4v10a1 1 0 001 1h8a1 1 0 001-1V4M7 4H5a1 1 0 00-1 1v10a1 1 0 001 1h2"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Birth Trauma</h3>
            <p class="text-gray-600">
              Congenital endothelial damage from forceps delivery or other birth trauma
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Surgical Technique Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">DMEK Surgical Technique</h2>
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
                <h3 class="text-xl font-semibold mb-2">Graft Preparation</h3>
                <p class="text-gray-600">
                  The donor Descemet's membrane with endothelium is carefully peeled from the donor
                  cornea. This ultra-thin tissue naturally curls into a tube-like configuration.
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
                <h3 class="text-xl font-semibold mb-2">Descemetorhexis</h3>
                <p class="text-gray-600">
                  The patient's diseased Descemet's membrane and endothelium are removed through
                  controlled circular tearing, leaving the posterior stroma intact.
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
                <h3 class="text-xl font-semibold mb-2">Graft Insertion</h3>
                <p class="text-gray-600">
                  The curled DMEK graft is inserted through a small corneal incision using
                  specialized techniques such as pull-through or tap-and-pull methods.
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
                <h3 class="text-xl font-semibold mb-2">Graft Unfolding</h3>
                <p class="text-gray-600">
                  The graft is carefully unfolded and positioned using air bubbles, ensuring proper
                  orientation with the endothelium facing inward.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  5
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Air Tamponade</h3>
                <p class="text-gray-600">
                  A complete air fill is performed to provide tamponade, pressing the graft against
                  the recipient stroma for initial adherence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="py-16 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Advantages of DMEK</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Superior Visual Acuity</h3>
            <p class="text-gray-600 text-sm">
              Achieves 20/20 vision in 60-70% of patients due to anatomical reconstruction
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Minimal Optical Distortion</h3>
            <p class="text-gray-600 text-sm">
              Ultra-thin graft causes negligible changes to corneal optics
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Fastest Recovery</h3>
            <p class="text-gray-600 text-sm">
              Visual rehabilitation occurs within weeks rather than months
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Lowest Rejection Risk</h3>
            <p class="text-gray-600 text-sm">
              Rejection rates lower than 5% due to minimal antigenic material
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">No Sutures Required</h3>
            <p class="text-gray-600 text-sm">
              Sutureless technique eliminates suture-related complications
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Anatomical Restoration</h3>
            <p class="text-gray-600 text-sm">
              Replaces only diseased tissue, preserving normal anatomy
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">No Interface Haze</h3>
            <p class="text-gray-600 text-sm">
              Absence of stromal interface eliminates potential haze formation
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Long-term Stability</h3>
            <p class="text-gray-600 text-sm">
              Excellent long-term graft survival and endothelial cell counts
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Technical Challenges</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-red-600">Surgical Challenges</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Steep learning curve requiring specialized training
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Graft manipulation difficulties due to extreme thinness
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Risk of graft tears during preparation or insertion
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Orientation challenges requiring careful technique
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Longer operative time compared to DSAEK
              </li>
            </ul>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Post-operative Concerns</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Higher rate of graft detachment (10-25%)
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Need for rebubbling procedures in some cases
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Strict positioning requirements post-operatively
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Pupillary block risk requiring careful monitoring
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Limited donor tissue availability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Recovery Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Recovery & Follow-up</h2>
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-2">Immediate Post-operative (0-24 hours)</h3>
                <p class="text-gray-600 mb-2">
                  Patient must maintain supine positioning for 1-2 hours to ensure graft adherence.
                  Careful monitoring for pupillary block and IOP elevation.
                </p>
                <div class="bg-blue-50 p-3 rounded">
                  <p class="text-blue-800 text-sm font-medium">
                    Critical: Face-up positioning essential for graft attachment
                  </p>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">First Week</h3>
                <p class="text-gray-600">
                  Daily examination to monitor graft attachment. Gradual air absorption with visual
                  improvement. Topical steroids and antibiotics initiated.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">First Month</h3>
                <p class="text-gray-600">
                  Significant visual improvement as corneal edema resolves. Steroid taper begins
                  based on graft clarity and anterior chamber reaction.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">3-6 Months</h3>
                <p class="text-gray-600">
                  Near-final visual acuity achieved. Endothelial cell count stabilizes. Continued
                  steroid therapy to prevent rejection.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Long-term Follow-up</h3>
                <p class="text-gray-600">
                  Annual examinations to monitor endothelial cell count, graft clarity, and overall
                  eye health. Most patients achieve excellent long-term outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Outcomes Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Clinical Outcomes</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-green-50 rounded-lg">
            <div class="text-4xl font-bold text-green-600 mb-2">94%</div>
            <h3 class="font-semibold mb-2">5-Year Graft Survival</h3>
            <p class="text-gray-600 text-sm">
              Excellent long-term survival rates with proper patient selection
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div class="text-4xl font-bold text-blue-600 mb-2">65%</div>
            <h3 class="font-semibold mb-2">20/20 Vision or Better</h3>
            <p class="text-gray-600 text-sm">
              Majority of patients achieve excellent uncorrected visual acuity
            </p>
          </div>
          <div class="text-center p-6 bg-purple-50 rounded-lg">
            <div class="text-4xl font-bold text-purple-600 mb-2">2-4</div>
            <h3 class="font-semibold mb-2">Weeks to Clear Vision</h3>
            <p class="text-gray-600 text-sm">
              Rapid visual rehabilitation compared to other transplant techniques
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Videos Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Related DMEK Videos</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">DMEK Graft Preparation Techniques</h3>
              <p class="text-gray-600 text-sm">
                Prof. Busin demonstrates optimal graft preparation methods
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">DMEK for Fuchs' Dystrophy</h3>
              <p class="text-gray-600 text-sm">
                Complete surgical case with step-by-step commentary
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">Managing DMEK Complications</h3>
              <p class="text-gray-600 text-sm">
                Strategies for handling graft detachment and rebubbling
              </p>
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
