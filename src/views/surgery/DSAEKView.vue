<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero title="DSAEK" subtitle="Descemet's Stripping Automated Endothelial Keratoplasty" />

    <!-- Overview Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">What is DSAEK?</h2>
            <p class="text-gray-600 mb-4">
              Descemet's Stripping Automated Endothelial Keratoplasty (DSAEK) is a partial-thickness
              corneal transplant that replaces only the diseased endothelium and Descemet's membrane
              along with a thin layer of posterior stroma.
            </p>
            <p class="text-gray-600 mb-4">
              This technique offers significant advantages over full-thickness penetrating
              keratoplasty, including faster visual recovery, stronger wound integrity, and reduced
              risk of complications while maintaining excellent visual outcomes.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Selective replacement of diseased tissue</li>
              <li>Faster visual rehabilitation than PKP</li>
              <li>Sutureless technique</li>
              <li>Lower rejection rates</li>
              <li>Stronger eye integrity</li>
              <li>Predictable visual outcomes</li>
            </ul>
          </div>
          <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span class="text-gray-500">DSAEK Procedure Illustration</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Indications Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Indications for DSAEK</h2>
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
            <h3 class="text-xl font-semibold mb-2">Fuchs' Endothelial Dystrophy</h3>
            <p class="text-gray-600">
              Most common indication for DSAEK in patients with symptomatic corneal edema
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
            <h3 class="text-xl font-semibold mb-2">Pseudophakic Bullous Keratopathy</h3>
            <p class="text-gray-600">
              Endothelial decompensation following cataract surgery or IOL complications
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
            <h3 class="text-xl font-semibold mb-2">Posterior Polymorphous Dystrophy</h3>
            <p class="text-gray-600">
              Congenital endothelial dystrophy causing corneal edema and visual impairment
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
            <p class="text-gray-600">
              ICE syndrome variants with corneal edema and endothelial dysfunction
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
            <h3 class="text-xl font-semibold mb-2">Endothelial Trauma</h3>
            <p class="text-gray-600">
              Endothelial damage from surgical trauma, inflammation, or toxic substances
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
            <h3 class="text-xl font-semibold mb-2">Failed Previous Grafts</h3>
            <p class="text-gray-600">
              Endothelial failure of previous penetrating or endothelial keratoplasty
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Surgical Technique Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">DSAEK Surgical Technique</h2>
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
                <h3 class="text-xl font-semibold mb-2">Donor Graft Preparation</h3>
                <p class="text-gray-600">
                  A microkeratome is used to create a posterior lamellar disc from the donor cornea,
                  typically 100-200 μm thick, including Descemet's membrane and endothelium.
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
                <h3 class="text-xl font-semibold mb-2">Descemet's Stripping</h3>
                <p class="text-gray-600">
                  The recipient's diseased Descemet's membrane and endothelium are stripped off
                  using a reverse Sinskey hook or similar instrument through small corneal
                  incisions.
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
                  The DSAEK graft is folded and inserted through a 5mm scleral tunnel or clear
                  corneal incision using forceps or a specialized inserter device.
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
                <h3 class="text-xl font-semibold mb-2">Graft Positioning</h3>
                <p class="text-gray-600">
                  The graft is unfolded and positioned centrally using gentle manipulation with a
                  cannula or spatula, ensuring proper orientation with endothelium facing inward.
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
                  An air bubble is injected to provide tamponade, pressing the graft against the
                  recipient stroma. The air is partially removed leaving a therapeutic bubble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages vs DMEK Section -->
    <section class="py-16 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">DSAEK Advantages</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Easier Surgical Technique</h3>
            <p class="text-gray-600 text-sm">
              More forgiving than DMEK with shorter learning curve and lower complication rates
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Lower Detachment Rate</h3>
            <p class="text-gray-600 text-sm">
              Graft detachment occurs in only 1-5% of cases compared to 10-25% with DMEK
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Thicker Graft</h3>
            <p class="text-gray-600 text-sm">
              100-200 μm thickness provides easier handling and manipulation during surgery
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Reliable Technique</h3>
            <p class="text-gray-600 text-sm">
              Proven track record with over 15 years of successful outcomes worldwide
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Versatile Application</h3>
            <p class="text-gray-600 text-sm">
              Suitable for a wide range of endothelial diseases and patient conditions
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Consistent Results</h3>
            <p class="text-gray-600 text-sm">
              Predictable visual outcomes with high patient satisfaction rates
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison with Other Techniques -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">DSAEK vs Other Techniques</h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Parameter</th>
                <th class="px-6 py-4 text-left font-semibold text-blue-600">DSAEK</th>
                <th class="px-6 py-4 text-left font-semibold">DMEK</th>
                <th class="px-6 py-4 text-left font-semibold">PKP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 font-medium">Graft Thickness</td>
                <td class="px-6 py-4 text-blue-600">100-200 μm</td>
                <td class="px-6 py-4">10-15 μm</td>
                <td class="px-6 py-4">Full thickness</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Visual Recovery</td>
                <td class="px-6 py-4 text-blue-600">2-6 months</td>
                <td class="px-6 py-4">2-8 weeks</td>
                <td class="px-6 py-4">6-12 months</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Detachment Rate</td>
                <td class="px-6 py-4 text-blue-600">1-5%</td>
                <td class="px-6 py-4">10-25%</td>
                <td class="px-6 py-4">N/A</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Learning Curve</td>
                <td class="px-6 py-4 text-blue-600">Moderate</td>
                <td class="px-6 py-4">Steep</td>
                <td class="px-6 py-4">Standard</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Final Visual Acuity</td>
                <td class="px-6 py-4 text-blue-600">20/25-20/40</td>
                <td class="px-6 py-4">20/20-20/25</td>
                <td class="px-6 py-4">20/40-20/60</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Rejection Risk</td>
                <td class="px-6 py-4 text-blue-600">5-10%</td>
                <td class="px-6 py-4">1-5%</td>
                <td class="px-6 py-4">15-20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Post-operative Care Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Post-operative Care & Recovery</h2>
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-2">Day of Surgery</h3>
                <p class="text-gray-600 mb-2">
                  Patient maintains supine positioning for several hours to promote graft adherence.
                  Eye shield protection and pressure patch may be applied.
                </p>
                <div class="bg-blue-50 p-3 rounded">
                  <p class="text-blue-800 text-sm font-medium">
                    Important: Avoid rapid head movements and maintain face-up positioning initially
                  </p>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">First Week</h3>
                <p class="text-gray-600">
                  Frequent follow-up visits to monitor graft attachment and intraocular pressure.
                  Topical antibiotics and steroids initiated. Gradual improvement in vision as
                  corneal edema resolves.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">1-3 Months</h3>
                <p class="text-gray-600">
                  Continued visual improvement as interface clears. Steroid dosage adjusted based on
                  inflammation. Most patients notice significant vision improvement during this
                  period.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">3-6 Months</h3>
                <p class="text-gray-600">
                  Near-final visual acuity achieved. Endothelial cell count stabilizes. Prescription
                  glasses may be updated as refractive error stabilizes.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Long-term Follow-up</h3>
                <p class="text-gray-600">
                  Annual examinations to monitor graft health, endothelial cell count, and overall
                  eye health. Long-term steroid therapy to prevent rejection episodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Complications Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Potential Complications</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Early Complications</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Graft detachment (1-5% incidence)
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Primary graft failure (rare, less than 1%)
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Elevated intraocular pressure from air bubble
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Pupillary block (uncommon with proper technique)
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Interface haze or irregularities
              </li>
            </ul>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-red-600">Late Complications</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Graft rejection (5-10% risk)
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Endothelial cell loss over time
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Interface opacification or deposits
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Late graft failure requiring repeat transplant
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Persistent epithelial defects (rare)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Rates Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Clinical Outcomes</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center p-6 bg-green-50 rounded-lg">
            <div class="text-4xl font-bold text-green-600 mb-2">95%</div>
            <h3 class="font-semibold mb-2">5-Year Graft Survival</h3>
            <p class="text-gray-600 text-sm">
              Excellent long-term success rates in appropriate candidates
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div class="text-4xl font-bold text-blue-600 mb-2">85%</div>
            <h3 class="font-semibold mb-2">20/40 Vision or Better</h3>
            <p class="text-gray-600 text-sm">
              Most patients achieve functional visual acuity for daily activities
            </p>
          </div>
          <div class="text-center p-6 bg-purple-50 rounded-lg">
            <div class="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <h3 class="font-semibold mb-2">Patient Satisfaction</h3>
            <p class="text-gray-600 text-sm">
              High satisfaction rates with visual improvement and quality of life
            </p>
          </div>
          <div class="text-center p-6 bg-yellow-50 rounded-lg">
            <div class="text-4xl font-bold text-yellow-600 mb-2">3-6</div>
            <h3 class="font-semibold mb-2">Months to Best Vision</h3>
            <p class="text-gray-600 text-sm">
              Gradual but significant visual improvement over several months
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Videos Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Related DSAEK Videos</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">DSAEK Surgical Technique</h3>
              <p class="text-gray-600 text-sm">
                Complete step-by-step DSAEK procedure with Prof. Busin
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">DSAEK Graft Preparation</h3>
              <p class="text-gray-600 text-sm">
                Optimal techniques for preparing DSAEK grafts using microkeratome
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">Managing DSAEK Complications</h3>
              <p class="text-gray-600 text-sm">
                Strategies for handling graft detachment and other complications
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
import PageHero from '@/components/HeroComponent.vue'
</script>
