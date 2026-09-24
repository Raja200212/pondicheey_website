<template>
  <div class="themes-page">
    <!-- Page Hero Banner -->
    <PageBanner
      currentPage="Themes & Topics"
      badge="CREATOR'S INSPIRATION GUIDE"
      badgeIcon="💡"
      subtitle="Explore 6 compelling thematic tracks tailored for short-form storytelling. Pick a theme, craft your 3-minute reel, and spark positive societal change."
    >
      <template #title>
        Reel Themes & <span class="text-gradient-hero">Content Topics</span>
      </template>

      <template #actions>
        <button class="btn-primary" @click="openRegisterModal">
          <span>Submit Your Reel</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
        <router-link to="/rules" class="btn-secondary">
          <span>View Guidelines</span>
        </router-link>
      </template>
    </PageBanner>

    <!-- Main Thematic Guide -->
    <div class="page-content-wrap">
      <ContentTopics />

      <!-- Storytelling Framework 3-Step Guide -->
      <section class="framework-section">
        <div class="container-custom">
          <div class="section-header text-center">
            <span class="section-badge">WINNING BLUEPRINT</span>
            <h2 class="section-title">How to Structure Your 3-Minute Story</h2>
            <p class="section-subtitle">A proven cinematic structure to maximize emotional engagement and score high with jury members.</p>
          </div>

          <div class="framework-grid">
            <div class="framework-card card-glow">
              <div class="step-num">01</div>
              <div class="step-timing">0:00 – 0:15 Sec</div>
              <h3 class="step-heading">The Irresistible Hook</h3>
              <p class="step-text">
                Start in media res (in the middle of the action). Introduce a relatable friction, striking visual juxtaposition, or a question that stops the viewer from scrolling.
              </p>
              <div class="step-tip">
                💡 <strong>Tip:</strong> Avoid long logo intros or static title cards in the first 5 seconds.
              </div>
            </div>

            <div class="framework-card card-glow">
              <div class="step-num">02</div>
              <div class="step-timing">0:15 – 2:15 Min</div>
              <h3 class="step-heading">The Core Conflict & Journey</h3>
              <p class="step-text">
                Deepen the narrative. Show real people dealing with the issue, present authentic struggles, and maintain quick, rhythmic video pacing.
              </p>
              <div class="step-tip">
                💡 <strong>Tip:</strong> Keep dialogue natural and balance speech with ambient sound and B-roll visuals.
              </div>
            </div>

            <div class="framework-card card-glow">
              <div class="step-num">03</div>
              <div class="step-timing">2:15 – 3:00 Min</div>
              <h3 class="step-heading">The Constructive Payoff</h3>
              <p class="step-text">
                Conclude with empowerment rather than despair. Give the audience a clear resolution, inspiring insight, or a direct call to civic action.
              </p>
              <div class="step-tip">
                💡 <strong>Tip:</strong> Leave the viewer thinking long after the video ends with a poignant final line.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Call To Action Banner -->
      <section class="page-cta-strip">
        <div class="container-custom">
          <div class="cta-banner-box">
            <div class="cta-banner-content">
              <h2 class="cta-title">Have a Reel Idea Ready?</h2>
              <p class="cta-sub">Shoot, edit, post on Instagram, tag <strong>@wtl_leadingthechange</strong>, and submit your link here.</p>
            </div>
            <div class="cta-banner-btns">
              <button class="btn-primary btn-lg" @click="openRegisterModal">
                <span>Submit Your Reel Link</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <router-link to="/prizes" class="btn-secondary">
                <span>Check Prize Breakdown</span>
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
import ContentTopics from '../components/ContentTopics.vue'
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

/* Framework Section */
.framework-section {
  padding: 80px 0;
  background-color: #F8FAFC;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
}

.framework-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.framework-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 36px 28px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.step-num {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 900;
  color: #DBEAFE;
  line-height: 1;
  margin-bottom: 6px;
}

.step-timing {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #2563EB;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.step-heading {
  font-family: var(--font-cinematic);
  font-size: 1.3rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 12px;
}

.step-text {
  font-size: 0.925rem;
  color: #526078;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.step-tip {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 0.825rem;
  color: #1E40AF;
  line-height: 1.45;
}

/* Page CTA Strip */
.page-cta-strip {
  padding: 70px 0 90px;
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
  .framework-grid {
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
</style>
