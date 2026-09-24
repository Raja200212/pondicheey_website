<template>
  <section id="register" class="registration-section" :class="{ 'modal-form-mode': isModalMode }">
    <div :class="isModalMode ? '' : 'container-custom'">
      <div v-if="!isModalMode" class="section-header text-center">
        <span class="section-badge">OFFICIAL ENTRY FORM</span>
        <h2 class="section-title">
          Register & <span class="text-gradient-hero">Submit Your Reel</span>
        </h2>
        <p class="section-subtitle">
          Fill in the details below to lock your entry. Free registration • No hidden fees.
        </p>
      </div>

      <div class="form-wrapper" :class="isModalMode ? 'modal-form-wrapper' : 'glass-panel'">
        <form @submit.prevent="handleSubmit" novalidate class="submission-form">
          <!-- Section 1: Creator Details -->
          <div class="form-group-section">
            <div class="section-divider-title">
              <span class="divider-icon">👤</span>
              <h3>1. Creator & Contact Information</h3>
            </div>

            <div class="grid-2-col">
              <!-- Full Name -->
              <div class="form-field">
                <label for="fullName" class="form-label">
                  Full Name (Main Creator) <span class="req">*</span>
                </label>
                <input
                  id="fullName"
                  v-model="form.fullName"
                  type="text"
                  class="form-input"
                  placeholder="e.g. Sivakumar R"
                  :class="{ 'input-error': errors.fullName }"
                  required
                />
                <span v-if="errors.fullName" class="error-msg">{{ errors.fullName }}</span>
              </div>

              <!-- WhatsApp Number -->
              <div class="form-field">
                <label for="whatsapp" class="form-label">
                  WhatsApp Number <span class="req">*</span>
                  <span class="label-hint">(For direct competition updates)</span>
                </label>
                <div class="input-with-prefix">
                  <span class="input-prefix">+91</span>
                  <input
                    id="whatsapp"
                    v-model="form.whatsapp"
                    type="tel"
                    maxlength="10"
                    class="form-input with-prefix"
                    placeholder="10-digit mobile number"
                    :class="{ 'input-error': errors.whatsapp }"
                    required
                  />
                </div>
                <span v-if="errors.whatsapp" class="error-msg">{{ errors.whatsapp }}</span>
              </div>
            </div>

            <div class="grid-2-col">
              <!-- Email Address -->
              <div class="form-field">
                <label for="email" class="form-label">
                  Email Address <span class="req">*</span>
                  <span class="label-hint">(For official confirmation mail)</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  placeholder="name@example.com"
                  :class="{ 'input-error': errors.email }"
                  required
                />
                <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
              </div>

              <!-- District / City Dropdown -->
              <div class="form-field">
                <label for="district" class="form-label">
                  District / City <span class="req">*</span>
                  <span class="label-hint">(TN Districts + Puducherry)</span>
                </label>
                <div class="select-wrapper">
                  <select
                    id="district"
                    v-model="form.district"
                    class="form-input select-input"
                    :class="{ 'input-error': errors.district }"
                    required
                  >
                    <option value="" disabled>Select your district</option>
                    <option v-for="d in districts" :key="d" :value="d">
                      {{ d }}
                    </option>
                  </select>
                </div>
                <span v-if="errors.district" class="error-msg">{{ errors.district }}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Instagram Reel Details -->
          <div class="form-group-section">
            <div class="section-divider-title">
              <span class="divider-icon">🎬</span>
              <h3>2. Reel & Social Links</h3>
            </div>

            <div class="grid-2-col">
              <!-- Instagram Reel Link -->
              <div class="form-field">
                <label for="reelLink" class="form-label">
                  Instagram Reel Link <span class="req">*</span>
                  <span class="label-hint">(Strictly Instagram Reel/Post URL)</span>
                </label>
                <input
                  id="reelLink"
                  v-model="form.reelLink"
                  type="url"
                  class="form-input"
                  placeholder="https://www.instagram.com/reel/Cxxxxxx/"
                  :class="{ 'input-error': errors.reelLink }"
                  required
                />
                <span v-if="errors.reelLink" class="error-msg">{{ errors.reelLink }}</span>
                <span class="field-help">Link format: https://instagram.com/reel/...</span>
              </div>

              <!-- Instagram Handle -->
              <div class="form-field">
                <label for="igHandle" class="form-label">
                  Instagram Handle / Username <span class="req">*</span>
                </label>
                <div class="input-with-prefix">
                  <span class="input-prefix">@</span>
                  <input
                    id="igHandle"
                    v-model="form.igHandle"
                    type="text"
                    class="form-input with-prefix"
                    placeholder="your_creator_handle"
                    :class="{ 'input-error': errors.igHandle }"
                    required
                  />
                </div>
                <span v-if="errors.igHandle" class="error-msg">{{ errors.igHandle }}</span>
              </div>
            </div>

            <!-- Reel Concept & Description -->
            <div class="form-field">
              <div class="label-row">
                <label for="description" class="form-label">
                  Reel Concept & Description <span class="req">*</span>
                </label>
                <span class="word-counter" :class="{ 'counter-limit': isNearLimit }">
                  {{ wordCount }} words / 500 max
                </span>
              </div>
              <textarea
                id="description"
                v-model="form.description"
                rows="4"
                class="form-input textarea-input"
                placeholder="Briefly explain the social message, storyline, and inspiration behind your reel..."
                :class="{ 'input-error': errors.description }"
                required
              ></textarea>
              <span v-if="errors.description" class="error-msg">{{ errors.description }}</span>
            </div>
          </div>

          <!-- Section 3: Cast & Crew Sub-fields -->
          <div class="form-group-section">
            <div class="section-divider-title">
              <span class="divider-icon">👥</span>
              <h3>3. Cast & Crew Details</h3>
            </div>

            <!-- Standard Note Banner -->
            <div class="form-note-box">
              <strong>📌 Note:</strong>
              <p>
                If handled by you, type <strong>"Self"</strong>. If a specific role is not applicable, type <strong>"N/A"</strong> (Not Applicable) or <strong>"Nil"</strong>.
                <br>
                <em class="note-example">(Example: If you wrote the script yourself, type "Self". If there is no voice-over, type "N/A".)</em>
              </p>
            </div>

            <div class="grid-3-col">
              <!-- Script & Story -->
              <div class="form-field">
                <label for="crewScript" class="form-label">✍️ Script & Story</label>
                <input
                  id="crewScript"
                  v-model="form.crew.script"
                  type="text"
                  class="form-input"
                  placeholder='e.g. "Self" or "Name"'
                />
              </div>

              <!-- Artists / Cast -->
              <div class="form-field">
                <label for="crewCast" class="form-label">🎭 Artists / Cast</label>
                <input
                  id="crewCast"
                  v-model="form.crew.cast"
                  type="text"
                  class="form-input"
                  placeholder='e.g. "Self" or "Actor 1, Actor 2"'
                />
              </div>

              <!-- Cinematography -->
              <div class="form-field">
                <label for="crewCamera" class="form-label">📹 Cinematography</label>
                <input
                  id="crewCamera"
                  v-model="form.crew.camera"
                  type="text"
                  class="form-input"
                  placeholder='e.g. "Self" or "DOP Name"'
                />
              </div>

              <!-- Editing -->
              <div class="form-field">
                <label for="crewEditing" class="form-label">🎬 Editing</label>
                <input
                  id="crewEditing"
                  v-model="form.crew.editing"
                  type="text"
                  class="form-input"
                  placeholder='e.g. "Self" or "Editor Name"'
                />
              </div>

              <!-- Voice & Narration -->
              <div class="form-field">
                <label for="crewVoice" class="form-label">🎙️ Voice & Narration</label>
                <input
                  id="crewVoice"
                  v-model="form.crew.voice"
                  type="text"
                  class="form-input"
                  placeholder='e.g. "Self" or "N/A"'
                />
              </div>

              <!-- Music & Sound Design -->
              <div class="form-field">
                <label for="crewMusic" class="form-label">🎵 Music & Sound Design</label>
                <input
                  id="crewMusic"
                  v-model="form.crew.music"
                  type="text"
                  class="form-input"
                  placeholder='e.g. "Self" or "Artist / N/A"'
                />
              </div>
            </div>
          </div>

          <!-- Section 4: Collab & Terms Confirmation -->
          <div class="form-group-section terms-section">
            <div class="checkbox-container" :class="{ 'checkbox-error': errors.collabCheck }">
              <label class="custom-checkbox">
                <input
                  type="checkbox"
                  v-model="form.collabCheck"
                  required
                />
                <span class="checkmark"></span>
                <span class="checkbox-text">
                  I have posted the Reel on my public Instagram profile & sent Collab Request to 
                  <strong class="collab-tag">@wtl_leadingthechange</strong>. 
                  I confirm this is an original entry adhering to competition guidelines.
                </span>
              </label>
            </div>
            <span v-if="errors.collabCheck" class="error-msg">{{ errors.collabCheck }}</span>
          </div>

          <!-- Submit Button -->
          <div class="submit-action-row">
            <div v-if="submitError" class="form-validation-alert">
              ⚠️ {{ submitError }}
            </div>

            <button
              type="submit"
              class="btn-primary submit-btn"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">SUBMIT ENTRY & GET REGISTRATION ID 🚀</span>
              <span v-else class="submitting-spinner">
                <svg class="spinner-svg" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Processing Registration...
              </span>
            </button>
            <p class="submit-security-note">
              🔒 Your data is securely handled by We The Leaders. Confirmation pass will be issued immediately.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { DISTRICTS } from '../data/districts.js'
import { submitToGoogleSheet } from '../services/submissionService.js'

const props = defineProps({
  isModalMode: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submitted'])

const districts = DISTRICTS

const form = ref({
  fullName: '',
  whatsapp: '',
  email: '',
  district: '',
  reelLink: '',
  igHandle: '',
  description: '',
  crew: {
    script: 'Self',
    cast: 'Self',
    camera: 'Self',
    editing: 'Self',
    voice: 'Self',
    music: 'N/A'
  },
  collabCheck: false
})

const errors = ref({})
const isSubmitting = ref(false)

const wordCount = computed(() => {
  if (!form.value.description) return 0
  return form.value.description.trim().split(/\s+/).filter(Boolean).length
})

const isNearLimit = computed(() => wordCount.value > 450)
const submitError = ref('')

const validateForm = () => {
  const errs = {}
  submitError.value = ''

  if (!form.value.fullName || !form.value.fullName.trim()) {
    errs.fullName = 'Full Name is required'
  }

  const cleanPhone = (form.value.whatsapp || '').replace(/\D/g, '')
  if (!cleanPhone || cleanPhone.length < 10) {
    errs.whatsapp = 'Please enter a valid 10-digit mobile number'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.value.email || !emailRegex.test(form.value.email.trim())) {
    errs.email = 'Please enter a valid email address'
  }

  if (!form.value.district) {
    errs.district = 'Please select your District / City'
  }

  const cleanReel = (form.value.reelLink || '').trim().toLowerCase()
  if (!cleanReel || (!cleanReel.includes('instagram.com') && !cleanReel.includes('instagr.am') && !cleanReel.startsWith('http'))) {
    errs.reelLink = 'Please provide a valid Instagram link (e.g. https://instagram.com/reel/...)'
  }

  if (!form.value.igHandle || !form.value.igHandle.trim()) {
    errs.igHandle = 'Instagram Handle is required'
  }

  if (!form.value.description || !form.value.description.trim()) {
    errs.description = 'Please provide a brief concept description'
  } else if (wordCount.value > 500) {
    errs.description = 'Description exceeds 500 words limit'
  }

  if (!form.value.collabCheck) {
    errs.collabCheck = 'Please tick the checkbox confirming your post & collab request to @wtl_leadingthechange'
  }

  errors.value = errs

  if (Object.keys(errs).length > 0) {
    submitError.value = 'Please fill all required fields correctly to submit.'
    return false
  }

  return true
}

const getNextRegistrationId = () => {
  const STORAGE_KEY = 'wtl_rrc_counter'
  let currentCount = parseInt(localStorage.getItem(STORAGE_KEY) || '1000', 10)
  currentCount += 1
  localStorage.setItem(STORAGE_KEY, currentCount.toString())
  return `WTL-RRC-${currentCount}`
}

const handleSubmit = async () => {
  if (!validateForm()) {
    const firstErrorElem = document.querySelector('.input-error, .checkbox-error, .form-validation-alert')
    if (firstErrorElem) {
      firstErrorElem.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    return
  }

  isSubmitting.value = true

  const registrationId = getNextRegistrationId()
  const submissionRecord = {
    registrationId,
    timestamp: new Date().toISOString(),
    formattedDate: new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    ...JSON.parse(JSON.stringify(form.value))
  }

  // 1. Sync to Google Sheets
  try {
    await submitToGoogleSheet(submissionRecord)
  } catch (err) {
    console.error('Google Sheet submission error:', err)
  }

  // 2. Save to localStorage history as backup
  try {
    const existing = JSON.parse(localStorage.getItem('wtl_rrc_submissions') || '[]')
    existing.push(submissionRecord)
    localStorage.setItem('wtl_rrc_submissions', JSON.stringify(existing))
  } catch (e) {
    console.error('Failed to save to local storage', e)
  }

  isSubmitting.value = false

  // Emit event to display the Success popup modal immediately
  emit('submitted', submissionRecord)

  // Reset form for next entry
  form.value = {
    fullName: '',
    whatsapp: '',
    email: '',
    district: '',
    reelLink: '',
    igHandle: '',
    description: '',
    crew: {
      script: 'Self',
      cast: 'Self',
      camera: 'Self',
      editing: 'Self',
      voice: 'Self',
      music: 'N/A'
    },
    collabCheck: false
  }
  errors.value = {}
  submitError.value = ''
}
</script>

<style scoped>
.registration-section {
  padding: 90px 0;
  position: relative;
  background-color: #FFFFFF;
}

.modal-form-mode {
  padding: 0 !important;
  background: transparent !important;
}

.modal-form-wrapper {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}

.text-center {
  text-align: center;
}

.section-header {
  max-width: 720px;
  margin: 0 auto 50px;
}

.section-badge {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #2563EB;
  text-transform: uppercase;
  margin-bottom: 12px;
  background: #EFF6FF;
  padding: 5px 16px;
  border-radius: 9999px;
  border: 1px solid #BFDBFE;
}

.section-title {
  font-family: var(--font-cinematic);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #10183F;
  line-height: 1.2;
  margin-bottom: 12px;
}

.section-subtitle {
  color: #526078;
  font-size: 1.1rem;
}

.form-wrapper {
  max-width: 880px;
  margin: 0 auto;
  padding: 44px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  box-shadow: 0 4px 25px rgba(16, 24, 63, 0.05);
}

.submission-form {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.form-group-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-divider-title {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid #E2E8F0;
}

.divider-icon {
  font-size: 1.3rem;
}

.section-divider-title h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: #10183F;
}

.grid-2-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.grid-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.req {
  color: #2563EB;
  font-weight: bold;
}

.label-hint {
  font-size: 0.75rem;
  color: #526078;
  font-weight: normal;
  margin-left: 4px;
}

.input-with-prefix {
  display: flex;
  align-items: center;
  position: relative;
}

.input-prefix {
  position: absolute;
  left: 14px;
  color: #526078;
  font-weight: 700;
  font-size: 0.95rem;
  pointer-events: none;
}

.with-prefix {
  padding-left: 44px;
}

.select-wrapper {
  position: relative;
}

.select-input {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.select-wrapper::after {
  content: '▼';
  font-size: 0.7rem;
  color: #526078;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.textarea-input {
  resize: vertical;
  min-height: 100px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.word-counter {
  font-size: 0.75rem;
  color: #526078;
}

.counter-limit {
  color: #2563EB;
  font-weight: bold;
}

.field-help {
  font-size: 0.75rem;
  color: #526078;
  margin-top: 4px;
}

.error-msg {
  color: #DC2626;
  font-size: 0.775rem;
  margin-top: 4px;
  font-weight: 600;
}

.input-error {
  border-color: #DC2626 !important;
  background: #FEF2F2 !important;
}

.form-note-box {
  margin-bottom: 4px;
  background: #EFF6FF;
  border-left: 4px solid #2563EB;
  border-top: 1px solid #DBEAFE;
  border-right: 1px solid #DBEAFE;
  border-bottom: 1px solid #DBEAFE;
  padding: 14px 18px;
  border-radius: 0 12px 12px 0;
  font-size: 0.85rem;
  color: #10183F;
}

.form-note-box strong {
  color: #2563EB;
}

.note-example {
  color: #526078;
  font-size: 0.775rem;
  display: inline-block;
  margin-top: 2px;
}

/* Custom Checkbox */
.terms-section {
  padding-top: 8px;
}

.custom-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  font-size: 0.9rem;
  color: #10183F;
  line-height: 1.5;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  width: 22px;
  height: 22px;
  background: #FFFFFF;
  border: 1.5px solid #CBD5E1;
  border-radius: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  transition: all 0.2s ease;
}

.custom-checkbox:hover input ~ .checkmark {
  border-color: #2563EB;
}

.custom-checkbox input:checked ~ .checkmark {
  background: #2563EB;
  border-color: #2563EB;
}

.custom-checkbox input:checked ~ .checkmark::after {
  content: '✔';
  color: #FFFFFF;
  font-size: 0.8rem;
  font-weight: 900;
}

.collab-tag {
  color: #2563EB;
  text-decoration: underline;
}

.checkbox-error .checkmark {
  border-color: #DC2626;
}

/* Submit Action */
.submit-action-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 10px;
}

.form-validation-alert {
  width: 100%;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #1E40AF;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 12px 18px;
  border-radius: 12px;
  text-align: center;
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.submit-btn {
  width: 100%;
  padding: 18px 32px;
  font-size: 1.1rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submitting-spinner {
  display: flex;
  align-items: center;
  gap: 10px;
}

.spinner-svg {
  animation: spin 1s linear infinite;
  width: 20px;
  height: 20px;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.submit-security-note {
  font-size: 0.8rem;
  color: #526078;
  text-align: center;
}

@media (max-width: 860px) {
  .form-wrapper {
    padding: 24px 18px;
  }
  .grid-2-col, .grid-3-col {
    grid-template-columns: 1fr;
  }
}
</style>
