<template>
  <div class="creator-hub-wrapper">
    <!-- Floating Prompt Hint Bubble (Auto shows briefly or on hover) -->
    <transition name="fade-bounce">
      <div v-if="!isOpen && showHint" class="floating-hint-bubble" @click="isOpen = true">
        <span class="hint-sparkle">✨</span>
        <span class="hint-txt">Creator Hub: <strong>Get Reel Ideas & Support</strong></span>
        <button class="hint-close-btn" @click.stop="showHint = false">×</button>
      </div>
    </transition>

    <!-- Interactive Glassmorphic Creator Widget Panel -->
    <transition name="widget-scale">
      <div v-if="isOpen" class="creator-hub-panel" @click.stop>
        <!-- Panel Header -->
        <div class="hub-header">
          <div class="hub-header-brand">
            <div class="hub-avatar-ring">
              <span class="hub-logo-emoji">🎬</span>
              <span class="online-indicator"></span>
            </div>
            <div class="hub-brand-meta">
              <h4 class="hub-title">Creator Help & Idea Hub</h4>
              <span class="hub-status-text">We The Leaders • Active Support</span>
            </div>
          </div>
          <button class="hub-close-btn" @click="isOpen = false" aria-label="Close Hub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <!-- Hub Navigation Tabs -->
        <div class="hub-tabs-row">
          <button
            class="hub-tab-btn"
            :class="{ active: activeTab === 'actions' }"
            @click="activeTab = 'actions'"
          >
            <span>⚡ Quick Help</span>
          </button>
          <button
            class="hub-tab-btn"
            :class="{ active: activeTab === 'generator' }"
            @click="activeTab = 'generator'"
          >
            <span>💡 Reel Sparks</span>
          </button>
          <button
            class="hub-tab-btn"
            :class="{ active: activeTab === 'faq' }"
            @click="activeTab = 'faq'"
          >
            <span>❓ Quick FAQ</span>
          </button>
        </div>

        <!-- Panel Body -->
        <div class="hub-body-content">
          <!-- TAB 1: Quick Actions & Instant Contact -->
          <div v-if="activeTab === 'actions'" class="tab-pane">
            <!-- Register CTA Banner -->
            <div class="hub-action-card hub-register-card" @click="handleRegisterClick">
              <div class="card-icon-box bg-blue">🚀</div>
              <div class="card-text-box">
                <span class="card-title">Register & Submit Reel</span>
                <span class="card-sub">100% Free Entry • Win ₹90,000+</span>
              </div>
              <span class="card-arrow-icon">→</span>
            </div>

            <!-- WhatsApp Direct Action -->
            <a
              href="https://wa.me/919677861461?text=Hi%20We%20The%20Leaders%20Team%2C%20I%20have%20a%20query%20regarding%20Reels%20For%20Real%20Change%20competition."
              target="_blank"
              rel="noopener noreferrer"
              class="hub-action-card"
            >
              <div class="card-icon-box bg-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <div class="card-text-box">
                <span class="card-title">Chat on WhatsApp</span>
                <span class="card-sub">+91 9677861461 (Instant Response)</span>
              </div>
              <span class="card-arrow-icon">→</span>
            </a>

            <!-- Call Action -->
            <a href="tel:9677861461" class="hub-action-card">
              <div class="card-icon-box bg-indigo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div class="card-text-box">
                <span class="card-title">Call Contest Helpline</span>
                <span class="card-sub">+91 9677861461 (Mon-Sat 9am-7pm)</span>
              </div>
              <span class="card-arrow-icon">→</span>
            </a>

            <!-- Email Action -->
            <a href="mailto:reels4realchange.wtl@gmail.com" class="hub-action-card">
              <div class="card-icon-box bg-slate">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div class="card-text-box">
                <span class="card-title">Email Desk</span>
                <span class="card-sub">reels4realchange.wtl@gmail.com</span>
              </div>
              <span class="card-arrow-icon">→</span>
            </a>
          </div>

          <!-- TAB 2: AI / Creative Reel Idea Sparks -->
          <div v-if="activeTab === 'generator'" class="tab-pane tab-generator">
            <div class="generator-box">
              <div class="generator-badge">💡 REEL IDEA GENERATOR</div>
              <h5 class="gen-theme-name">{{ currentIdea.theme }}</h5>
              <p class="gen-idea-text">"{{ currentIdea.prompt }}"</p>
              
              <div class="gen-tags-row">
                <span class="gen-tag">📍 {{ currentIdea.district }}</span>
                <span class="gen-tag">⏱️ 60-180 Secs</span>
                <span class="gen-tag">🎬 {{ currentIdea.style }}</span>
              </div>

              <button class="btn-spark-next" @click="generateNextIdea">
                <span>✨ Spark Another Idea</span>
              </button>
            </div>
          </div>

          <!-- TAB 3: Instant Quick FAQs -->
          <div v-if="activeTab === 'faq'" class="tab-pane tab-faq">
            <div
              v-for="(faq, fIdx) in quickFaqs"
              :key="fIdx"
              class="faq-mini-item"
              @click="toggleFaq(fIdx)"
            >
              <div class="faq-q-row">
                <span class="faq-q-text">{{ faq.q }}</span>
                <span class="faq-toggle-icon">{{ openFaqIdx === fIdx ? '−' : '+' }}</span>
              </div>
              <div v-if="openFaqIdx === fIdx" class="faq-a-box">
                <p>{{ faq.a }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel Footer Live Status Strip -->
        <div class="hub-footer">
          <span class="footer-dot-pulse"></span>
          <span class="footer-msg">Tamil Nadu & Puducherry • 38+1 Districts Live</span>
        </div>
      </div>
    </transition>

    <!-- Floating Hub Main Button Trigger -->
    <button
      class="creator-hub-trigger"
      :class="{ 'is-open': isOpen }"
      @click="toggleHub"
      aria-label="Toggle Creator Hub"
    >
      <div v-if="!isOpen" class="trigger-inner">
        <span class="trigger-emoji">⚡</span>
        <span class="trigger-btn-label">Support & Ideas</span>
      </div>
      <div v-else class="trigger-inner">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </div>
      <span class="trigger-beacon"></span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRegisterModal } from '../composables/useRegisterModal'

const { openRegisterModal } = useRegisterModal()

const isOpen = ref(false)
const showHint = ref(true)
const activeTab = ref('actions')
const openFaqIdx = ref(0)

const reelIdeas = [
  {
    theme: 'Leadership & Civic Action',
    prompt: 'Film a young college volunteer leading a neighborhood clean-up or traffic safety drive in your city, showing before/after impact.',
    district: 'Chennai & Across TN',
    style: 'Documentary Reel'
  },
  {
    theme: 'Green & Sustainable Tamil Nadu',
    prompt: 'Showcase local tree-planting, plastic ban awareness, or indigenous solar innovation by youth in your locality.',
    district: 'Coimbatore / Nilgiris',
    style: 'Cinematic Voiceover'
  },
  {
    theme: 'Culture, Heritage & Youth',
    prompt: 'Capture the timeless art of Silambam, Bharatanatyam, or temple architecture explained through the energetic eyes of a gen-z artist.',
    district: 'Madurai / Thanjavur',
    style: 'Dynamic Visual Montage'
  },
  {
    theme: 'Women Empowerment & Equality',
    prompt: 'Tell the inspiring 2-minute journey of a local woman entrepreneur or girl champion in sports breaking barriers.',
    district: 'Salem / Puducherry',
    style: 'Story Portrait'
  },
  {
    theme: 'Tech, Innovation & Skill TN',
    prompt: 'Highlight rural student innovators building assistive robotics, AI for farmers, or low-cost learning tools.',
    district: 'Trichy / Tirunelveli',
    style: 'Tech Demo Reel'
  }
]

const currentIdeaIdx = ref(0)
const currentIdea = ref(reelIdeas[0])

const generateNextIdea = () => {
  currentIdeaIdx.value = (currentIdeaIdx.value + 1) % reelIdeas.length
  currentIdea.value = reelIdeas[currentIdeaIdx.value]
}

const quickFaqs = [
  {
    q: 'Is there any registration fee?',
    a: 'No! Registration and submission are 100% Free for all participants across Tamil Nadu & Puducherry.'
  },
  {
    q: 'What is the video reel time limit?',
    a: 'Your reel should be between 30 seconds to a maximum of 180 seconds (3 minutes), in vertical 9:16 format.'
  },
  {
    q: 'Can I submit as a team?',
    a: 'Yes, you can register as an individual creator or a team of up to 4 members.'
  },
  {
    q: 'Will all participants get certificates?',
    a: 'Yes, every valid submission receives an official digital Certificate of Participation verified by We The Leaders.'
  }
]

const toggleFaq = (idx) => {
  openFaqIdx.value = openFaqIdx.value === idx ? -1 : idx
}

const toggleHub = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    showHint.value = false
  }
}

const handleRegisterClick = () => {
  isOpen.value = false
  openRegisterModal()
}

onMounted(() => {
  // Hide hint bubble after 12 seconds automatically
  setTimeout(() => {
    showHint.value = false
  }, 12000)
})
</script>

<style scoped>
/* Master Creator Hub Wrapper */
.creator-hub-wrapper {
  position: fixed;
  bottom: 26px;
  right: 26px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  font-family: var(--font-body, system-ui, sans-serif);
}

/* Floating Hint Bubble */
.floating-hint-bubble {
  background: rgba(16, 24, 63, 0.95);
  border: 1px solid rgba(59, 130, 246, 0.4);
  color: #FFFFFF;
  padding: 8px 14px;
  border-radius: 9999px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.25s ease;
  white-space: nowrap;
}

.floating-hint-bubble:hover {
  transform: translateY(-2px);
  border-color: #60A5FA;
}

.hint-sparkle {
  font-size: 1rem;
}

.hint-txt strong {
  color: #F59E0B;
}

.hint-close-btn {
  background: transparent;
  border: none;
  color: #94A3B8;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
}

.hint-close-btn:hover {
  color: #FFFFFF;
}

/* Creator Hub Panel */
.creator-hub-panel {
  width: 360px;
  max-width: calc(100vw - 32px);
  background: rgba(11, 17, 44, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(37, 99, 235, 0.25);
  overflow: hidden;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
}

/* Panel Header */
.hub-header {
  padding: 16px 18px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(16, 24, 63, 0.4) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hub-header-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hub-avatar-ring {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #1E293B;
  border: 2px solid #3B82F6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
}

.online-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10B981;
  border: 2px solid #0B112C;
}

.hub-brand-meta {
  display: flex;
  flex-direction: column;
}

.hub-title {
  font-family: var(--font-display);
  font-size: 0.925rem;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
}

.hub-status-text {
  font-size: 0.7rem;
  color: #93C5FD;
}

.hub-close-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94A3B8;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hub-close-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #EF4444;
  border-color: #EF4444;
}

/* Tabs Row */
.hub-tabs-row {
  display: flex;
  background: rgba(0, 0, 0, 0.25);
  padding: 4px;
  gap: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.hub-tab-btn {
  flex: 1;
  background: transparent;
  border: none;
  color: #94A3B8;
  padding: 8px 6px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hub-tab-btn:hover {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.05);
}

.hub-tab-btn.active {
  background: #2563EB;
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
}

/* Body Content */
.hub-body-content {
  padding: 16px;
  max-height: 340px;
  overflow-y: auto;
}

/* Action Cards in Tab 1 */
.tab-pane {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hub-action-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 14px;
  border-radius: 12px;
  text-decoration: none;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.25s ease;
}

.hub-action-card:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateX(3px);
}

.hub-register-card {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(37, 99, 235, 0.08) 100%);
  border-color: rgba(59, 130, 246, 0.5);
}

.card-icon-box {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.bg-blue { background: #2563EB; color: #FFFFFF; }
.bg-whatsapp { background: #25D366; color: #FFFFFF; }
.bg-indigo { background: #4F46E5; color: #FFFFFF; }
.bg-slate { background: #334155; color: #93C5FD; }

.card-text-box {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-family: var(--font-display);
  font-size: 0.825rem;
  font-weight: 700;
  color: #FFFFFF;
}

.card-sub {
  font-size: 0.685rem;
  color: #94A3B8;
}

.card-arrow-icon {
  font-size: 1rem;
  color: #60A5FA;
}

/* TAB 2: Reel Idea Generator Box */
.generator-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.generator-badge {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #F59E0B;
}

.gen-theme-name {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
}

.gen-idea-text {
  font-size: 0.825rem;
  color: #CBD5E1;
  line-height: 1.45;
  margin: 0;
  font-style: italic;
}

.gen-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 6px 0;
}

.gen-tag {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 0.65rem;
  font-weight: 600;
  color: #93C5FD;
}

.btn-spark-next {
  background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  font-weight: 800;
  font-size: 0.775rem;
  padding: 8px 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
  margin-top: 4px;
}

.btn-spark-next:hover {
  transform: translateY(-2px);
}

/* TAB 3: FAQ */
.faq-mini-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 10px 12px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.faq-mini-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.faq-q-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.faq-q-text {
  font-size: 0.8rem;
  font-weight: 700;
  color: #E2E8F0;
}

.faq-toggle-icon {
  font-size: 1rem;
  font-weight: 800;
  color: #60A5FA;
}

.faq-a-box {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.faq-a-box p {
  font-size: 0.75rem;
  color: #94A3B8;
  line-height: 1.4;
  margin: 0;
}

/* Footer Strip */
.hub-footer {
  padding: 10px 16px;
  background: rgba(0, 0, 0, 0.35);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-dot-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 6px #10B981;
}

.footer-msg {
  font-size: 0.685rem;
  color: #94A3B8;
}

/* Floating Hub Main Trigger Button */
.creator-hub-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
  border: 2px solid rgba(255, 255, 255, 0.35);
  color: #FFFFFF;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.45), 0 0 20px rgba(37, 99, 235, 0.3);
  position: relative;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.creator-hub-trigger:hover {
  transform: scale(1.06) translateY(-2px);
  box-shadow: 0 14px 35px rgba(37, 99, 235, 0.55);
}

.creator-hub-trigger.is-open {
  width: 50px;
  height: 50px;
  padding: 0;
  background: #0B112C;
  border-color: #EF4444;
  color: #EF4444;
}

.trigger-inner {
  display: flex;
  align-items: center;
  gap: 8px;
}

.trigger-emoji {
  font-size: 1.1rem;
}

.trigger-btn-label {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.trigger-beacon {
  position: absolute;
  top: -3px;
  right: -3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22C55E;
  border: 2px solid #FFFFFF;
  animation: beaconPing 2s infinite;
}

@keyframes beaconPing {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

/* Animations */
.fade-bounce-enter-active, .fade-bounce-leave-active {
  transition: all 0.3s ease;
}
.fade-bounce-enter-from, .fade-bounce-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

.widget-scale-enter-active, .widget-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.widget-scale-enter-from, .widget-scale-leave-to {
  opacity: 0;
  transform: scale(0.85) translateY(20px);
}

@media (max-width: 576px) {
  .creator-hub-wrapper {
    bottom: 18px;
    right: 18px;
  }
  .trigger-btn-label {
    display: none;
  }
  .creator-hub-trigger {
    width: 54px;
    height: 54px;
    padding: 0;
    border-radius: 50%;
  }
}
</style>
