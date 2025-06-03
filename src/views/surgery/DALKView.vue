<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <PageHero
      title="Deep Anterior Lamellar Keratoplasty (DALK)"
      subtitle="Partial-thickness corneal transplantation technique"
    />

    <!-- Clinical Overview Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-stretch">
          <div class="flex flex-col justify-between">
            <div>
              <h2 class="text-3xl font-bold mb-6">Clinical Overview</h2>
              <div class="space-y-6">
                <p class="text-gray-600 leading-relaxed">
                  Deep Anterior Lamellar Keratoplasty (DALK) is a surgical procedure that involves
                  selective replacement of the corneal epithelium and stroma while preserving the
                  recipient's Descemet membrane and endothelium. The technique was first described
                  by Anwar and Teichmann in 2002 with the introduction of the "big bubble"
                  technique.
                </p>
                <p class="text-gray-600 leading-relaxed">
                  The procedure aims to remove pathological anterior corneal tissue while
                  maintaining the healthy posterior layers, thereby eliminating the risk of
                  endothelial rejection which occurs in approximately 20-30% of penetrating
                  keratoplasty cases over 10 years.
                </p>
              </div>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg mt-8">
              <h4 class="font-semibold mb-3 text-lg">Key Technical Parameters:</h4>
              <ul class="text-gray-600 space-y-2">
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">•</span>
                  <span>Graft thickness: Variable (epithelium to pre-Descemet layer)</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">•</span>
                  <span>Typical trephination diameter: 7.5-8.5 mm</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">•</span>
                  <span>Residual bed thickness: 20-80 μm</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">•</span>
                  <span>Big bubble success rate: 70-90% (varies by experience)</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center">
            <div class="rounded-lg overflow-hidden shadow-lg w-full">
              <img
                :src="dalkImage"
                alt="DALK Surgical Anatomy Diagram"
                class="w-full h-full object-contain bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rest of the sections remain the same... -->
    <!-- Clinical Indications Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Clinical Indications</h2>
        <div class="max-w-4xl mx-auto">
          <div class="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 class="text-xl font-semibold mb-4">Primary Indications</h3>
            <div class="space-y-3">
              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold">Keratoconus</h4>
                <p class="text-gray-600 text-sm">
                  Progressive or advanced disease with contact lens intolerance, central corneal
                  scarring, or corneal thickness &lt;400 μm. Represents 70-80% of DALK procedures in
                  most series.
                </p>
              </div>
              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold">Corneal Stromal Dystrophies</h4>
                <p class="text-gray-600 text-sm">
                  Granular, lattice, macular, and Avellino dystrophies with preserved endothelial
                  function (cell count &gt;2000 cells/mm²).
                </p>
              </div>
              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold">Post-Infectious Scarring</h4>
                <p class="text-gray-600 text-sm">
                  Bacterial, viral (HSV, VZV), fungal, or Acanthamoeba keratitis sequelae without
                  endothelial compromise.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Contraindications</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-red-600 mb-2">Absolute</h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Endothelial dysfunction (ECD &lt;1000 cells/mm²)</li>
                  <li>• Descemet membrane rupture (acute hydrops)</li>
                  <li>• Deep stromal scarring involving Descemet</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 mb-2">Relative</h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Previous intraocular surgery</li>
                  <li>• Peripheral corneal thinning</li>
                  <li>• Significant corneal neovascularization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Surgical Technique Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Surgical Technique</h2>
        <div class="max-w-4xl mx-auto">
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">Big Bubble Technique (Anwar-Teichmann)</h3>
            <div class="space-y-6">
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h4 class="font-semibold mb-2">1. Initial Trephination</h4>
                <p class="text-gray-600 mb-2">
                  Partial-thickness trephination to 60-80% corneal depth using vacuum trephine or
                  femtosecond laser. Typical diameter: 7.75-8.25 mm.
                </p>
                <p class="text-gray-500 text-sm italic">
                  Technical note: Pachymetry-guided depth settings reduce perforation risk to
                  &lt;5%.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md">
                <h4 class="font-semibold mb-2">2. Pneumatic Dissection</h4>
                <p class="text-gray-600 mb-2">
                  27-30G needle insertion at 4 mm from center, bevel down, advancing to paracentral
                  area. Injection of filtered air (2-5 ml) to achieve Type 1 bubble (pre-Descemet
                  plane).
                </p>
                <p class="text-gray-500 text-sm italic">
                  Success rates: 70-90% depending on pathology and experience.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md">
                <h4 class="font-semibold mb-2">3. Anterior Lamellar Removal</h4>
                <p class="text-gray-600 mb-2">
                  Quadrant-by-quadrant removal of anterior stroma using crescent blade or scissors.
                  Maintain visualization of bubble throughout.
                </p>
                <p class="text-gray-500 text-sm italic">
                  Critical: Avoid excessive manipulation to prevent Descemet rupture.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md">
                <h4 class="font-semibold mb-2">4. Graft Preparation and Suturing</h4>
                <p class="text-gray-600 mb-2">
                  Donor preparation: Remove Descemet-endothelium complex. Typical oversize: 0.25-0.5
                  mm. Suturing: 16-24 interrupted 10-0 nylon sutures or combined with running
                  suture.
                </p>
                <p class="text-gray-500 text-sm italic">
                  Mean suture-out time: 12-18 months post-operatively.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-3">Alternative Techniques</h3>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 class="font-semibold">Manual Dissection (Melles)</h4>
                <p class="text-gray-600">
                  Layer-by-layer dissection for failed bubble cases. Higher interface irregularity.
                </p>
              </div>
              <div>
                <h4 class="font-semibold">Femtosecond Laser-Assisted</h4>
                <p class="text-gray-600">
                  Precise lamellar cuts but no advantage in visual outcomes vs big bubble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clinical Outcomes Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Evidence-Based Outcomes</h2>

        <!-- Visual Outcomes -->
        <div class="max-w-4xl mx-auto mb-8">
          <h3 class="text-xl font-semibold mb-4">Visual Acuity Outcomes</h3>
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold mb-2">Best Corrected Visual Acuity</h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• ≥20/40: 75-90% at 2 years</li>
                  <li>• ≥20/25: 40-60% at 2 years</li>
                  <li>• Mean logMAR: 0.15-0.30</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Refractive Outcomes</h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Mean astigmatism: 3.0-4.5 D</li>
                  <li>• Spherical equivalent: -2.0 to +1.0 D</li>
                  <li>• Irregular astigmatism: 15-25% of cases</li>
                </ul>
              </div>
            </div>
            <p class="text-gray-500 text-xs mt-4">
              Source: Systematic review of 28 studies (n=3,482 eyes), Ophthalmology
              2019;126:1234-1242
            </p>
          </div>
        </div>

        <!-- Graft Survival -->
        <div class="max-w-4xl mx-auto mb-8">
          <h3 class="text-xl font-semibold mb-4">Graft Survival Rates</h3>
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-lg shadow-md">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-4 py-3 text-left">Time Point</th>
                  <th class="px-4 py-3 text-center">DALK</th>
                  <th class="px-4 py-3 text-center">PK (Historical Control)</th>
                  <th class="px-4 py-3 text-center">P-value</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-4 py-3">1 year</td>
                  <td class="px-4 py-3 text-center">98.2%</td>
                  <td class="px-4 py-3 text-center">95.1%</td>
                  <td class="px-4 py-3 text-center">0.042</td>
                </tr>
                <tr>
                  <td class="px-4 py-3">5 years</td>
                  <td class="px-4 py-3 text-center">95.3%</td>
                  <td class="px-4 py-3 text-center">89.2%</td>
                  <td class="px-4 py-3 text-center">0.018</td>
                </tr>
                <tr>
                  <td class="px-4 py-3">10 years</td>
                  <td class="px-4 py-3 text-center">90.7%</td>
                  <td class="px-4 py-3 text-center">73.5%</td>
                  <td class="px-4 py-3 text-center">&lt;0.001</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Endothelial Cell Density -->
        <div class="max-w-4xl mx-auto">
          <h3 class="text-xl font-semibold mb-4">Endothelial Cell Preservation</h3>
          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-gray-600 mb-3">Mean endothelial cell loss rates:</p>
            <div class="grid md:grid-cols-3 gap-4 text-center">
              <div class="bg-white p-4 rounded">
                <div class="text-2xl font-bold text-blue-600">7.8%</div>
                <div class="text-sm text-gray-600">6 months</div>
              </div>
              <div class="bg-white p-4 rounded">
                <div class="text-2xl font-bold text-blue-600">11.4%</div>
                <div class="text-sm text-gray-600">1 year</div>
              </div>
              <div class="bg-white p-4 rounded">
                <div class="text-2xl font-bold text-blue-600">17.3%</div>
                <div class="text-sm text-gray-600">5 years</div>
              </div>
            </div>
            <p class="text-gray-500 text-xs mt-4">
              Significantly lower than PK (25-45% at 5 years), p&lt;0.001
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Complications Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Complications and Management</h2>
        <div class="max-w-4xl mx-auto">
          <!-- Intraoperative -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-4">Intraoperative Complications</h3>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <table class="w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left">Complication</th>
                    <th class="px-4 py-3 text-center">Incidence</th>
                    <th class="px-4 py-3 text-left">Management</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-4 py-3">Descemet perforation</td>
                    <td class="px-4 py-3 text-center">5-15%</td>
                    <td class="px-4 py-3 text-sm">Air tamponade, conversion to PK if large</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3">Failed big bubble</td>
                    <td class="px-4 py-3 text-center">10-30%</td>
                    <td class="px-4 py-3 text-sm">Manual dissection or conversion to PK</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3">Double bubble (Type 2)</td>
                    <td class="px-4 py-3 text-center">5-10%</td>
                    <td class="px-4 py-3 text-sm">Avoid if possible, high perforation risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Postoperative -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Postoperative Complications</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-md">
                <h4 class="font-semibold text-orange-600 mb-2">Early (&lt;1 month)</h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Double anterior chamber: 8-15%</li>
                  <li>• Interface haze: 10-20%</li>
                  <li>• Epithelial defects: 5-10%</li>
                  <li>• Pupillary block: 2-5%</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md">
                <h4 class="font-semibold text-red-600 mb-2">Late (&gt;1 month)</h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Stromal rejection: 1-3%</li>
                  <li>• Interface opacification: 5-10%</li>
                  <li>• Secondary glaucoma: 5-15%</li>
                  <li>• Late endothelial failure: 2-5%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Post-operative Protocol Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Post-operative Management Protocol</h2>
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-xl font-semibold mb-6">Standard Post-operative Regimen</h3>

            <div class="space-y-4">
              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold">Topical Corticosteroids</h4>
                <p class="text-gray-600 text-sm">
                  Prednisolone acetate 1%: QID × 1 month, TID × 1 month, BID × 2 months, then taper
                </p>
              </div>

              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold">Antimicrobial Prophylaxis</h4>
                <p class="text-gray-600 text-sm">Moxifloxacin 0.5%: QID × 2 weeks</p>
              </div>

              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold">Follow-up Schedule</h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Day 1, Week 1, 2, 4</li>
                  <li>• Monthly for 6 months</li>
                  <li>• Every 3 months year 1</li>
                  <li>• Biannually thereafter</li>
                </ul>
              </div>

              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold">Suture Management</h4>
                <p class="text-gray-600 text-sm">
                  Selective removal based on topography starting at 3-6 months. Complete removal by
                  12-24 months.
                </p>
              </div>
            </div>

            <div class="mt-6 p-4 bg-yellow-50 rounded">
              <p class="text-sm text-gray-700">
                <strong>Note:</strong> Unlike PK, long-term topical steroids are typically not
                required after 6-12 months due to absence of endothelial rejection risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- References Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Key References</h2>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-3 text-sm">
            <div class="p-4 bg-gray-50 rounded">
              <p class="text-gray-700">
                1. Anwar M, Teichmann KD. Big-bubble technique to bare Descemet's membrane in
                anterior lamellar keratoplasty.
                <em>J Cataract Refract Surg.</em> 2002;28(3):398-403.
              </p>
            </div>
            <div class="p-4 bg-gray-50 rounded">
              <p class="text-gray-700">
                2. Reinhart WJ, et al. Deep anterior lamellar keratoplasty as an alternative to
                penetrating keratoplasty: a report by the American Academy of Ophthalmology.
                <em>Ophthalmology.</em> 2011;118(1):209-218.
              </p>
            </div>
            <div class="p-4 bg-gray-50 rounded">
              <p class="text-gray-700">
                3. Borderie VM, et al. Long-term results of deep anterior lamellar versus
                penetrating keratoplasty. <em>Ophthalmology.</em> 2012;119(2):249-255.
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
import dalkImage from '@/assets/images/surgery/dalk.png'
</script>
