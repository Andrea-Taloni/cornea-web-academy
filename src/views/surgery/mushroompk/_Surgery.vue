<!-- src/views/surgery/mushroompk/_Surgery.vue -->
<template>
  <CollapsibleSection
    :title="techniquesMetadata.title"
    :iconPath="techniquesMetadata.iconPath"
    :colorTheme="techniquesMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="techniquesMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <TechniquesSection
      :mainSteps="mushroomPKTechnique"
      :alternativeTechniques="alternativeApproaches"
    />
  </CollapsibleSection>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import TechniquesSection, { techniquesMetadata } from '@/components/surgery/SurgeryComponent.vue'

const { t } = useI18n()

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Mushroom PK surgical technique data
const mushroomPKTechnique = computed(() => {
  const steps = t('surgery.mushroomPk.surgery.mainTechnique.steps')
  if (typeof steps === 'string' && steps === 'surgery.mushroomPk.surgery.mainTechnique.steps') {
    // Fallback content
    return {
      title: "Two-Piece Microkeratome-Assisted Mushroom PK Technique",
      steps: [
        {
          title: "Initial Trephination",
          description: "Create a 9.0mm circular incision approximately 250μm deep using a Barron suction trephine, centered on the recipient cornea. This partial-thickness cut establishes the outer diameter of the mushroom configuration."
        },
        {
          title: "Lamellar Dissection",
          description: "Perform manual lamellar dissection circumferentially from the base of the incision, extending approximately 3mm toward the center. Cauterization at the limbus is performed only when bleeding from corneal neovessels does not subside spontaneously."
        },
        {
          title: "Central Excision",
          description: "Remove the dissected tissue, leaving a central island of full-thickness corneal tissue approximately 3mm in diameter. Use a 6.0mm trephine to make a full-thickness circular incision centered on the pupil. Excise the central button with corneal scissors."
        },
        {
          title: "Donor Preparation",
          description: "Mount donor cornea on the artificial anterior chamber of the ALTK system (Moria SA). Use a 200μm head to split the donor into anterior and posterior lamellae (cuts ~20% deeper, yielding ~240μm). Punch both lamellae to proper size: 9.0mm for anterior and 6.0mm for posterior."
        },
        {
          title: "Graft Assembly",
          description: "Fit the donor stem (posterior lamella with endothelium) into the central hole without sutures. Place the anterior lamella on top and secure with 4 cardinal 10-0 nylon stitches. Suture bites pass only through the anterior lamella, leaving the posterior one free to adapt."
        },
        {
          title: "Final Suturing",
          description: "Complete with either double running 10-0 nylon suture or 16 interrupted sutures. Fill anterior chamber with BSS through a limbal puncture. Apply subconjunctival gentamicin (40mg) and methylprednisolone (40mg), plus topical tobramycin/dexamethasone ointment."
        }
      ]
    }
  }
  return {
    title: t('surgery.mushroomPk.surgery.mainTechnique.title'),
    steps: Array.isArray(steps) ? steps : []
  }
})

// Alternative approaches data
const alternativeApproaches = computed(() => {
  const techniques = t('surgery.mushroomPk.surgery.alternativeTechniques.techniques')
  if (typeof techniques === 'string' && techniques === 'surgery.mushroomPk.surgery.alternativeTechniques.techniques') {
    // Fallback content
    return {
      title: "Additional Procedures & Modifications",
      techniques: [
        {
          title: "Combined Procedures",
          description: "When necessary before reassembling the mushroom graft, additional intraocular procedures can be performed with open-sky technique: extracapsular cataract extraction, IOL implantation or exchange, pupilloplasty, or anterior vitrectomy."
        },
        {
          title: "Management of Posterior Lamella Detachment",
          description: "If detachment occurs (1.2% of cases), manage on first postoperative day by repositioning the detached button and injecting air into the anterior chamber through temporal paracentesis. Remove air 2 hours after surgery."
        },
        {
          title: "Wound Revision for High Astigmatism",
          description: "For astigmatism >4.5D after suture removal, open wound at steeper meridian using blunt forceps tips for ~1 clock hour. Insert cyclodialysis spatula between lamellae to opposite hemi-meridian. Mean reduction of 4.52D achieved without sutures."
        }
      ]
    }
  }
  return {
    title: t('surgery.mushroomPk.surgery.alternativeTechniques.title'),
    techniques: Array.isArray(techniques) ? techniques : []
  }
})
</script>
