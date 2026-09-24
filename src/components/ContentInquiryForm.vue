<template>
  <div class="inquiry-form-wrapper">
    <div class="container-custom">
      <div class="inquiry-grid">
        <!-- Left: Official Contact Details & Info -->
        <div class="inquiry-contact-card">
          <div class="contact-card-header">
            <span class="card-badge">GET IN TOUCH</span>
            <h2 class="contact-title">Content & Collaboration Support</h2>
            <p class="contact-desc">
              Have questions about your reel theme, need script guidance, or seeking campus collaboration? Reach out directly to our organizing team.
            </p>
          </div>

          <div class="contact-channels">
            <!-- Email Channel -->
            <a href="mailto:reels4realchange.wtl@gmail.com" class="channel-item">
              <div class="channel-icon-box icon-email">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div class="channel-info">
                <span class="channel-label">Official Email</span>
                <span class="channel-val">reels4realchange.wtl@gmail.com</span>
              </div>
            </a>

            <!-- Phone Channel -->
            <a href="tel:9677861461" class="channel-item">
              <div class="channel-icon-box icon-phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div class="channel-info">
                <span class="channel-label">Helpline & WhatsApp</span>
                <span class="channel-val">+91 9677861461</span>
              </div>
            </a>

            <!-- Instagram Channel -->
            <a href="https://instagram.com/wtl_leadingthechange" target="_blank" rel="noopener noreferrer" class="channel-item">
              <div class="channel-icon-box icon-insta">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </div>
              <div class="channel-info">
                <span class="channel-label">Instagram Handle</span>
                <span class="channel-val">@wtl_leadingthechange</span>
              </div>
            </a>
          </div>

          <!-- Quick Direct Action Buttons (Call & WhatsApp) -->
          <div class="direct-actions-box">
            <div class="direct-actions-text">
              <strong>Need Quick Assistance?</strong>
              <p>Call or WhatsApp our organizing team directly:</p>
            </div>
            <div class="direct-buttons-row">
              <a href="tel:9677861461" class="btn-direct btn-direct-call">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>Call Helpline</span>
              </a>
              <a
                :href="'https://wa.me/919677861461?text=' + encodeURIComponent('Hi We The Leaders Team, I have a query regarding Reels For Real Change competition.')"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-direct btn-direct-wa"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Content & Contact Inquiry Form -->
        <div class="inquiry-form-card glass-panel">
          <div class="form-header">
            <h3 class="form-title">Send Us a Message / Content Query</h3>
            <p class="form-subtitle">Fill in your details below and our team will get back to you promptly.</p>
          </div>

          <!-- Success Alert -->
          <div v-if="isSubmitted" class="success-alert-box animate-fade">
            <div class="success-icon">🎉</div>
            <div class="success-content">
              <h4>Thank You, {{ form.name }}!</h4>
              <p>Your message has been received. Our team will contact you at <strong>{{ form.email }}</strong> or <strong>{{ form.phone }}</strong> shortly.</p>
              <button class="btn-secondary btn-sm mt-3" @click="resetForm">
                <span>Send Another Message</span>
              </button>
            </div>
          </div>

          <!-- Form Fields -->
          <form v-else @submit.prevent="handleSubmit" novalidate class="contact-form-body">
            <!-- Full Name -->
            <div class="form-field">
              <label for="contact-name" class="form-label">
                Full Name <span class="req">*</span>
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                class="form-input"
                placeholder="Enter your full name"
                :class="{ 'input-error': errors.name }"
                required
              />
              <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
            </div>

            <!-- Email & Phone Grid -->
            <div class="grid-2-col">
              <!-- Email -->
              <div class="form-field">
                <label for="contact-email" class="form-label">
                  Email Address <span class="req">*</span>
                </label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  placeholder="name@example.com"
                  :class="{ 'input-error': errors.email }"
                  required
                />
                <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
              </div>

              <!-- Phone -->
              <div class="form-field">
                <label for="contact-phone" class="form-label">
                  Phone Number <span class="req">*</span>
                </label>
                <div class="input-with-prefix">
                  <span class="input-prefix">+91</span>
                  <input
                    id="contact-phone"
                    v-model="form.phone"
                    type="tel"
                    maxlength="10"
                    class="form-input with-prefix"
                    placeholder="10-digit mobile number"
                    :class="{ 'input-error': errors.phone }"
                    required
                  />
                </div>
                <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
              </div>
            </div>

            <!-- Address / City -->
            <div class="form-field">
              <label for="contact-address" class="form-label">
                Address / District / City <span class="req">*</span>
              </label>
              <input
                id="contact-address"
                v-model="form.address"
                type="text"
                class="form-input"
                placeholder="e.g. 12th Main Road, Anna Nagar, Chennai, Tamil Nadu"
                :class="{ 'input-error': errors.address }"
                required
              />
              <span v-if="errors.address" class="error-msg">{{ errors.address }}</span>
            </div>

            <!-- Description -->
            <div class="form-field">
              <label for="contact-desc" class="form-label">
                Description / Query / Concept Details <span class="req">*</span>
              </label>
              <textarea
                id="contact-desc"
                v-model="form.description"
                rows="4"
                class="form-input textarea-input"
                placeholder="Describe your reel concept, theme inquiry, team details, or collaboration question..."
                :class="{ 'input-error': errors.description }"
                required
              ></textarea>
              <span v-if="errors.description" class="error-msg">{{ errors.description }}</span>
            </div>

            <!-- Submit Button -->
            <div class="form-actions">
              <button type="submit" class="btn-primary w-full" :disabled="isSubmitting">
                <span v-if="isSubmitting">Sending Message...</span>
                <span v-else>Submit Inquiry</span>
                <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  description: ''
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  description: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const validate = () => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.phone = ''
  errors.address = ''
  errors.description = ''

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
    isValid = false
  }

  const cleanPhone = form.phone.replace(/\D/g, '')
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phone = 'Please enter a valid 10-digit mobile number.'
    isValid = false
  }

  if (!form.address.trim()) {
    errors.address = 'Please enter your address, city, or district.'
    isValid = false
  }

  if (!form.description.trim()) {
    errors.description = 'Please enter a brief description or message.'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validate()) return

  isSubmitting.value = true

  // Save inquiry to localStorage
  try {
    const existingInquiries = JSON.parse(localStorage.getItem('wtl_content_inquiries') || '[]')
    existingInquiries.push({
      ...form,
      timestamp: new Date().toISOString()
    })
    localStorage.setItem('wtl_content_inquiries', JSON.stringify(existingInquiries))
  } catch (e) {
    console.warn('Storage warning', e)
  }

  // Simulate network brief delay
  await new Promise(resolve => setTimeout(resolve, 600))
  isSubmitting.value = false
  isSubmitted.value = true
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.address = ''
  form.description = ''
  isSubmitted.value = false
}
</script>

<style scoped>
.inquiry-form-wrapper {
  padding: 80px 0;
  background-color: #FFFFFF;
}

.inquiry-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: flex-start;
}

/* Left Contact Info Card */
.inquiry-contact-card {
  background: #10183F;
  border-radius: 24px;
  padding: 44px 36px;
  color: #FFFFFF;
  box-shadow: 0 16px 40px rgba(16, 24, 63, 0.2);
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.card-badge {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #93C5FD;
  background: rgba(37, 99, 235, 0.25);
  border: 1px solid rgba(147, 197, 253, 0.3);
  padding: 4px 14px;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 14px;
}

.contact-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  margin-bottom: 12px;
}

.contact-desc {
  font-size: 0.95rem;
  color: #CBD5E1;
  line-height: 1.6;
}

.contact-channels {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.channel-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 16px 20px;
  border-radius: 16px;
  text-decoration: none;
  color: #FFFFFF;
  transition: all 0.25s ease;
}

.channel-item:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: #60A5FA;
  transform: translateX(4px);
}

.channel-icon-box {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-email {
  background: #2563EB;
  color: #FFFFFF;
}

.icon-phone {
  background: #2563EB;
  color: #FFFFFF;
}

.icon-insta {
  background: #2563EB;
  color: #FFFFFF;
}

.channel-info {
  display: flex;
  flex-direction: column;
}

.channel-label {
  font-size: 0.725rem;
  font-weight: 700;
  color: #93C5FD;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.channel-val {
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF;
  word-break: break-all;
}

.direct-actions-box {
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(147, 197, 253, 0.3);
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.direct-actions-text strong {
  font-size: 0.95rem;
  color: #FFFFFF;
  display: block;
  margin-bottom: 2px;
}

.direct-actions-text p {
  font-size: 0.8rem;
  color: #CBD5E1;
}

.direct-buttons-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.btn-direct {
  padding: 11px 14px;
  border-radius: 9999px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.825rem;
  font-weight: 800;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-direct-call {
  background: #2563EB;
  color: #FFFFFF;
}

.btn-direct-call:hover {
  background: #1D4ED8;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.3);
}

.btn-direct-wa {
  background: #25D366;
  color: #FFFFFF;
}

.btn-direct-wa:hover {
  background: #1EBE5D;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.3);
}

/* Right Form Card */
.inquiry-form-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 24px;
  padding: 44px 38px;
  box-shadow: 0 10px 30px rgba(16, 24, 63, 0.05);
}

.form-header {
  margin-bottom: 28px;
  padding-bottom: 18px;
  border-bottom: 1px solid #E2E8F0;
}

.form-title {
  font-family: var(--font-cinematic);
  font-size: 1.5rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 6px;
}

.form-subtitle {
  font-size: 0.9rem;
  color: #526078;
}

.contact-form-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grid-2-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #10183F;
  margin-bottom: 6px;
}

.req {
  color: #2563EB;
}

.input-with-prefix {
  display: flex;
  align-items: center;
  position: relative;
}

.input-prefix {
  position: absolute;
  left: 14px;
  font-weight: 700;
  font-size: 0.9rem;
  color: #526078;
  pointer-events: none;
}

.form-input.with-prefix {
  padding-left: 48px;
}

.textarea-input {
  resize: vertical;
  min-height: 100px;
}

.input-error {
  border-color: #EF4444 !important;
  background-color: #FEF2F2 !important;
}

.error-msg {
  font-size: 0.775rem;
  color: #EF4444;
  margin-top: 4px;
  font-weight: 600;
}

.w-full {
  width: 100%;
}

.mt-3 {
  margin-top: 12px;
}

/* Success Alert Box */
.success-alert-box {
  background: #EFF6FF;
  border: 1.5px solid #BFDBFE;
  border-radius: 18px;
  padding: 32px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.success-icon {
  font-size: 2.6rem;
}

.success-content h4 {
  font-family: var(--font-cinematic);
  font-size: 1.3rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 6px;
}

.success-content p {
  font-size: 0.9rem;
  color: #526078;
  line-height: 1.55;
  max-width: 480px;
}

.animate-fade {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 992px) {
  .inquiry-grid {
    grid-template-columns: 1fr;
  }
  .grid-2-col {
    grid-template-columns: 1fr;
  }
  .inquiry-contact-card, .inquiry-form-card {
    padding: 30px 22px;
  }
}
</style>
