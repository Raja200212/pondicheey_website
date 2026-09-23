<template>
  <div v-if="submission" class="modal-backdrop">
    <div class="modal-dialog glass-panel animate-pop">
      <!-- Confetti Cannon Button Trigger / Close -->
      <button class="close-btn" @click="$emit('close')" aria-label="Close Modal">✕</button>

      <!-- Celebration Header -->
      <div class="success-header text-center">
        <div class="celebration-icon-wrapper">
          <span class="celebration-emoji">🎉</span>
          <div class="trophy-sparkle">✨</div>
        </div>
        <span class="status-pill">REGISTRATION CONFIRMED</span>
        <h2 class="success-title font-cinematic">You're In the Spotlight!</h2>
        <p class="success-subtitle">
          Your reel has been officially registered for <strong>Reels For Real Change</strong>.
        </p>
      </div>

      <!-- Registration ID Pass Card -->
      <div class="id-pass-card">
        <div class="pass-top">
          <div class="pass-brand-with-logo">
            <div class="pass-logo-box">
              <img src="/logo.png" alt="We The Leaders" class="pass-logo-img" />
            </div>
            <div class="pass-brand">
              <span class="wtl-tag">WE THE LEADERS</span>
              <span class="rrc-tag">REELS FOR REAL CHANGE 2026</span>
            </div>
          </div>
          <div class="state-tag">TAMIL NADU</div>
        </div>

        <div class="pass-id-block">
          <span class="id-label">YOUR OFFICIAL REGISTRATION ID</span>
          <div class="id-value-row">
            <span class="id-code font-display">{{ submission.registrationId }}</span>
            <button class="copy-btn" @click="copyId" :title="copied ? 'Copied!' : 'Copy ID'">
              <span v-if="!copied">📋 Copy</span>
              <span v-else class="copied-text">✓ Copied!</span>
            </button>
          </div>
        </div>

        <!-- Summary Details Grid -->
        <div class="pass-details-grid">
          <div class="detail-item">
            <span class="detail-label">Participant</span>
            <span class="detail-val">{{ submission.fullName }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">District</span>
            <span class="detail-val">{{ submission.district }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Instagram Handle</span>
            <span class="detail-val text-accent">@{{ cleanHandle(submission.igHandle) }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Submitted On</span>
            <span class="detail-val">{{ submission.formattedDate }}</span>
          </div>
        </div>

        <div class="pass-reel-link">
          <span class="detail-label">Submitted Reel Link</span>
          <a :href="submission.reelLink" target="_blank" rel="noopener noreferrer" class="reel-url">
            {{ submission.reelLink }} ↗
          </a>
        </div>
      </div>

      <!-- Crucial Next Steps Checklist -->
      <div class="next-steps-card">
        <h4 class="next-steps-title">📌 Important Next Steps</h4>
        <ul class="steps-checklist">
          <li>
            <span class="check-icon">✓</span>
            <div><strong>Keep Profile Public:</strong> Ensure your Instagram account remains public so the jury can review your reel.</div>
          </li>
          <li>
            <span class="check-icon">✓</span>
            <div><strong>Accept Collab:</strong> Ensure you sent the Collab Request to <strong>@wtl_leadingthechange</strong>.</div>
          </li>
          <li>
            <span class="check-icon">✓</span>
            <div><strong>Save Your ID:</strong> Quote <strong>{{ submission.registrationId }}</strong> in all correspondence.</div>
          </li>
        </ul>
      </div>

      <!-- Action Buttons -->
      <div class="modal-actions">
        <button @click="shareOnWhatsApp" class="btn-whatsapp">
          <span>💬 Share on WhatsApp</span>
        </button>
        <button @click="$emit('close')" class="btn-secondary w-full text-center">
          Done & Return to Homepage
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import confetti from 'canvas-confetti'

const props = defineProps({
  submission: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const copied = ref(false)

const cleanHandle = (handle) => {
  if (!handle) return ''
  return handle.replace(/^@/, '')
}

const copyId = async () => {
  if (!props.submission?.registrationId) return
  try {
    await navigator.clipboard.writeText(props.submission.registrationId)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    console.error('Failed to copy ID', err)
  }
}

const shareOnWhatsApp = () => {
  if (!props.submission) return
  const text = `🎉 I have registered for Reels For Real Change (Tamil Nadu State-Level Reel Competition)!\n\n🪪 Reg ID: ${props.submission.registrationId}\n🎬 Creator: ${props.submission.fullName}\n📍 District: ${props.submission.district}\n\nCheck out my Reel here: ${props.submission.reelLink}\n\nJoin the movement with We The Leaders! @wtl_leadingthechange`
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

onMounted(() => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  })

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    })
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    })
  }, 300)
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(28, 25, 23, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}

.modal-dialog {
  background: #ffffff;
  border: 1.5px solid rgba(197, 155, 39, 0.6);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25), 0 0 40px rgba(222, 185, 96, 0.2);
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  padding: 36px 32px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  background: #f5f0e6;
  border: none;
  color: #78716c;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #ecd394;
  color: #1c1917;
}

.text-center {
  text-align: center;
}

.celebration-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 12px;
}

.celebration-emoji {
  font-size: 3.5rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

.trophy-sparkle {
  position: absolute;
  top: -6px;
  right: -10px;
  font-size: 1.5rem;
}

.status-pill {
  display: inline-block;
  background: rgba(253, 246, 226, 0.95);
  border: 1px solid rgba(197, 155, 39, 0.5);
  color: #85580a;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 4px 16px;
  border-radius: 9999px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(184, 134, 11, 0.08);
}

.success-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #1c1917;
  margin-bottom: 6px;
}

.success-subtitle {
  font-size: 0.95rem;
  color: #57534e;
  margin-bottom: 24px;
}

.success-subtitle strong {
  color: #85580a;
}

/* ID Pass Card */
.id-pass-card {
  background: linear-gradient(135deg, #fffef9 0%, #faf3df 100%);
  border: 1.5px dashed rgba(197, 155, 39, 0.7);
  border-radius: 18px;
  padding: 22px;
  margin-bottom: 24px;
  box-shadow: 0 6px 20px rgba(184, 134, 11, 0.08);
}

.pass-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(197, 155, 39, 0.2);
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.pass-brand-with-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pass-logo-box {
  width: 38px;
  height: 38px;
  background: #ffffff;
  border-radius: 50%;
  padding: 1px;
  border: 1px solid rgba(197, 155, 39, 0.5);
  box-shadow: 0 2px 8px rgba(197, 155, 39, 0.2);
  flex-shrink: 0;
}

.pass-logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.pass-brand {
  display: flex;
  flex-direction: column;
}

.wtl-tag {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #c51d24;
}

.rrc-tag {
  font-family: var(--font-cinematic);
  font-size: 0.85rem;
  font-weight: 800;
  color: #14244a;
}

.state-tag {
  font-size: 0.7rem;
  font-weight: 800;
  background: rgba(197, 155, 39, 0.15);
  border: 1px solid rgba(197, 155, 39, 0.3);
  padding: 4px 10px;
  border-radius: 6px;
  color: #85580a;
}

.pass-id-block {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  margin-bottom: 18px;
  border: 1px solid rgba(197, 155, 39, 0.35);
  box-shadow: 0 4px 12px rgba(184, 134, 11, 0.06);
}

.id-label {
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #78716c;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
}

.id-value-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.id-code {
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  font-weight: 900;
  color: #85580a;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(197, 155, 39, 0.2);
}

.copy-btn {
  background: rgba(253, 246, 226, 0.95);
  border: 1px solid rgba(197, 155, 39, 0.5);
  color: #85580a;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: #ecd394;
  color: #1a1408;
}

.copied-text {
  color: #059669;
}

.pass-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 14px;
}

.detail-item {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.7rem;
  color: #78716c;
  text-transform: uppercase;
  font-weight: 600;
}

.detail-val {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1c1917;
}

.text-accent {
  color: #85580a;
}

.pass-reel-link {
  border-top: 1px solid rgba(197, 155, 39, 0.2);
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.reel-url {
  font-size: 0.8rem;
  color: #b45309;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}

.reel-url:hover {
  text-decoration: underline;
}

/* Next Steps */
.next-steps-card {
  background: #fbf9f4;
  border: 1px solid rgba(197, 155, 39, 0.25);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 24px;
}

.next-steps-title {
  font-size: 0.9rem;
  font-weight: 800;
  color: #85580a;
  margin-bottom: 10px;
}

.steps-checklist {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.825rem;
  color: #44403c;
}

.steps-checklist li {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.check-icon {
  color: #059669;
  font-weight: bold;
}

/* Modal Actions */
.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #25D366;
  color: #ffffff;
  font-family: var(--font-display);
  font-weight: 700;
  padding: 14px 20px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.25s;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.btn-whatsapp:hover {
  background: #20ba5a;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
}

@keyframes popIn {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.animate-pop {
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media (max-width: 580px) {
  .modal-dialog {
    padding: 24px 18px;
  }
  .pass-details-grid {
    grid-template-columns: 1fr;
  }
}
</style>
