<template>
  <div class="rules-page">
    <!-- Page Hero Banner -->
    <PageBanner
      currentPage="Rules & Timeline"
      badge="OFFICIAL RULEBOOK & DATES"
      badgeIcon="📋"
      subtitle="Detailed technical specifications, eligibility rules, step-by-step Instagram collab guide, and critical milestone dates."
    >
      <template #title>
        Competition Rules, <span class="text-gradient-hero">Guidelines & Timeline</span>
      </template>

      <template #actions>
        <button class="btn-primary" @click="openRegisterModal">
          <span>Submit Your Reel</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
        <router-link to="/themes" class="btn-secondary">
          <span>Explore Themes</span>
        </router-link>
      </template>
    </PageBanner>

    <div class="page-content-wrap">
      <!-- Main Rules and Timeline Component -->
      <RulesTimeline />

      <!-- Step-by-step Instagram Collab Walkthrough -->
      <section class="collab-guide-section">
        <div class="container-custom">
          <div class="section-header text-center">
            <span class="section-badge">SUBMISSION PROTOCOL</span>
            <h2 class="section-title">How to Post & Collab on Instagram</h2>
            <p class="section-subtitle">Follow these 4 simple steps to ensure your reel is officially registered and tracked.</p>
          </div>

          <div class="collab-steps-grid">
            <div class="collab-step-card card-glow">
              <div class="step-badge">Step 1</div>
              <div class="step-icon">📱</div>
              <h3 class="collab-step-title">Upload Video to Instagram</h3>
              <p class="collab-step-desc">
                Export your video in vertical format (9:16 aspect ratio, 1080x1920) with high audio clarity and upload it as an Instagram Reel.
              </p>
            </div>

            <div class="collab-step-card card-glow">
              <div class="step-badge">Step 2</div>
              <div class="step-icon">🤝</div>
              <h3 class="collab-step-title">Invite Collaborator</h3>
              <p class="collab-step-desc">
                In the Instagram Reel tagging screen, tap <strong>"Tag People"</strong> → select <strong>"Invite Collaborator"</strong> → search and invite <strong>@wtl_leadingthechange</strong>.
              </p>
            </div>

            <div class="collab-step-card card-glow">
              <div class="step-badge">Step 3</div>
              <div class="step-icon">✍️</div>
              <h3 class="collab-step-title">Include Mandatory Hashtags</h3>
              <p class="collab-step-desc">
                In your caption, include <strong>#WeTheLeaders #ReelsForRealChange #WTL2026</strong> and tag <strong>@wtl_leadingthechange</strong> in the caption text.
              </p>
            </div>

            <div class="collab-step-card card-glow">
              <div class="step-badge">Step 4</div>
              <div class="step-icon">🔗</div>
              <h3 class="collab-step-title">Submit Link on Portal</h3>
              <p class="collab-step-desc">
                Copy your published reel's public URL and paste it into our official registration form here to generate your Certificate ticket!
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Eligibility & Technical Specifications Grid -->
      <section class="specs-section">
        <div class="container-custom">
          <div class="specs-grid">
            <!-- Technical Specs -->
            <div class="specs-box glass-panel">
              <div class="specs-box-header">
                <span class="box-icon">⚙️</span>
                <h3 class="box-title">Technical Specifications</h3>
              </div>
              <ul class="specs-list">
                <li>
                  <strong>Aspect Ratio:</strong>
                  <span>9:16 Vertical format (Standard Instagram Reel / Shorts ratio)</span>
                </li>
                <li>
                  <strong>Resolution:</strong>
                  <span>Minimum 1080p Full HD (1080x1920 recommended)</span>
                </li>
                <li>
                  <strong>Duration:</strong>
                  <span>Strictly between 30 Seconds to 3 Minutes maximum</span>
                </li>
                <li>
                  <strong>Language:</strong>
                  <span>Tamil, English, or silent narrative with clear subtitles</span>
                </li>
                <li>
                  <strong>Audio:</strong>
                  <span>Clear dialogue, original voiceover, or licensed audio tracks</span>
                </li>
              </ul>
            </div>

            <!-- Disqualification & Fair Play -->
            <div class="specs-box glass-panel">
              <div class="specs-box-header">
                <span class="box-icon">⚠️</span>
                <h3 class="box-title">Fair Play & Disqualification Rules</h3>
              </div>
              <ul class="specs-list">
                <li>
                  <strong>Original Work:</strong>
                  <span>Plagiarism, downloading other creators' videos, or unauthorized movie clips will result in immediate disqualification.</span>
                </li>
                <li>
                  <strong>Public Account Required:</strong>
                  <span>Your Instagram account must remain public throughout the evaluation and judging cycle.</span>
                </li>
                <li>
                  <strong>Zero Hate Speech:</strong>
                  <span>Content promoting communal disharmony, violence, obscenity, or personal defamation is strictly barred.</span>
                </li>
                <li>
                  <strong>Solo or Team:</strong>
                  <span>You can participate individually or as a team (up to 4 members). One primary creator must submit.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Call To Action Banner -->
      <section class="page-cta-strip">
        <div class="container-custom">
          <div class="cta-banner-box">
            <div class="cta-banner-content">
              <h2 class="cta-title">Ready to Submit Your Entry?</h2>
              <p class="cta-sub">Free registration. Guaranteed certificate. Chance to win ₹50,000 champion prize.</p>
            </div>
            <div class="cta-banner-btns">
              <button class="btn-primary btn-lg" @click="openRegisterModal">
                <span>Submit Your Reel</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <router-link to="/prizes" class="btn-secondary">
                <span>View Prize Pool</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '../components/PageBanner.vue'
import RulesTimeline from '../components/RulesTimeline.vue'
import { useRegisterModal } from '../composables/useRegisterModal'

const { openRegisterModal } = useRegisterModal()
</script>

<style scoped>
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

/* Collab Guide */
.collab-guide-section {
  padding: 80px 0;
  background-color: #FFFFFF;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
}

.collab-steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.collab-step-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 18px;
  padding: 28px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.step-badge {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 800;
  color: #2563EB;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  padding: 3px 10px;
  border-radius: 9999px;
  display: inline-block;
  align-self: flex-start;
  margin-bottom: 14px;
}

.step-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.collab-step-title {
  font-family: var(--font-cinematic);
  font-size: 1.15rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 8px;
}

.collab-step-desc {
  font-size: 0.85rem;
  color: #526078;
  line-height: 1.5;
}

/* Specs Section */
.specs-section {
  padding: 80px 0;
  background-color: #F8FAFC;
}

.specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.specs-box {
  background: #FFFFFF;
  padding: 36px 30px;
  border-radius: 20px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 20px rgba(16, 24, 63, 0.04);
}

.specs-box-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E2E8F0;
}

.box-icon {
  font-size: 1.8rem;
}

.box-title {
  font-family: var(--font-cinematic);
  font-size: 1.35rem;
  font-weight: 800;
  color: #10183F;
}

.specs-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.specs-list li {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-bottom: 1px dashed #E2E8F0;
  padding-bottom: 12px;
  font-size: 0.875rem;
}

.specs-list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.specs-list strong {
  color: #10183F;
  font-family: var(--font-display);
}

.specs-list span {
  color: #526078;
  line-height: 1.45;
}

/* Page CTA Strip */
.page-cta-strip {
  padding: 40px 0 90px;
  background-color: #FFFFFF;
}

.cta-banner-box {
  background: linear-gradient(135deg, #10183F 0%, #1E40AF 100%);
  border-radius: 24px;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  color: #FFFFFF;
  box-shadow: 0 16px 40px rgba(16, 24, 63, 0.25);
}

.cta-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.cta-sub {
  font-size: 1.05rem;
  color: #EFF6FF;
  max-width: 580px;
}

.cta-banner-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  flex-shrink: 0;
}

@media (max-width: 992px) {
  .collab-steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .specs-grid {
    grid-template-columns: 1fr;
  }
  .cta-banner-box {
    flex-direction: column;
    text-align: center;
    padding: 36px 24px;
  }
  .cta-banner-btns {
    justify-content: center;
  }
}

@media (max-width: 580px) {
  .collab-steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
