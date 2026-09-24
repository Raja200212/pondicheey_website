<template>
  <div class="home-view">
    <!-- Section 1: Hero Section -->
    <HeroSection />

    <!-- Section 2: Quick Highlights Bar -->
    <HighlightsBar />

    <!-- Section 3: About We The Leaders & Reel Competition Preview -->
    <section class="home-section-wrap">
      <AboutSection />
      <div class="container-custom section-cta-center">
        <router-link to="/about" class="btn-secondary btn-more">
          <span>Read Full About We The Leaders Movement</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>
    </section>

    <!-- Section 4: Reel Themes & Content Topics -->
    <section class="home-section-wrap bg-alt">
      <ContentTopics />
      <div class="container-custom section-cta-center">
        <router-link to="/themes" class="btn-secondary btn-more">
          <span>Explore Detailed Themes & Video Hook Inspiration</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>
    </section>

    <!-- Section 5: Prize Pool & Awards -->
    <section class="home-section-wrap">
      <PrizePoolSection />
      <div class="container-custom section-cta-center">
        <router-link to="/prizes" class="btn-secondary btn-more">
          <span>View All 15 Awards & Chennai Finale Privileges</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>
    </section>

    <!-- Section 6: Judging Criteria -->
    <section class="home-section-wrap bg-alt">
      <JudgingCriteria />
      <div class="container-custom section-cta-center">
        <router-link to="/judging" class="btn-secondary btn-more">
          <span>Explore Detailed Judging Rubric & Top Scoring Tips</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>
    </section>

    <!-- Section 7 & 8: Important Rules & Event Timeline -->
    <section class="home-section-wrap">
      <RulesTimeline />
      <div class="container-custom section-cta-center">
        <router-link to="/rules" class="btn-secondary btn-more">
          <span>View Step-by-Step Instagram Collab Guide & Rulebook</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>
    </section>

    <!-- Section 9: Bottom Registration CTA Banner -->
    <section class="home-section-wrap bg-alt">
      <div class="container-custom">
        <div class="home-bottom-cta">
          <div class="bottom-cta-text">
            <span class="cta-mini-badge">FREE STATE-LEVEL COMPETITION</span>
            <h2 class="bottom-cta-title">Ready to Submit Your Reel?</h2>
            <p class="bottom-cta-desc">
              Over ₹90,000+ in cash prizes, 15 awards, and certificates for every participant. Free registration.
            </p>
          </div>
          <div class="bottom-cta-actions">
            <button class="btn-primary btn-lg" @click="openRegisterModal">
              <span>Submit Reel Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <router-link to="/rules" class="btn-secondary">
              <span>View Rulebook</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import HighlightsBar from '../components/HighlightsBar.vue'
import AboutSection from '../components/AboutSection.vue'
import ContentTopics from '../components/ContentTopics.vue'
import PrizePoolSection from '../components/PrizePoolSection.vue'
import JudgingCriteria from '../components/JudgingCriteria.vue'
import RulesTimeline from '../components/RulesTimeline.vue'
import { useRegisterModal } from '../composables/useRegisterModal'

const { openRegisterModal } = useRegisterModal()

defineEmits(['submitted'])
</script>

<style scoped>
.home-section-wrap {
  position: relative;
  padding-bottom: 50px;
}

.bg-alt {
  background-color: #F8FAFC;
}

.section-cta-center {
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 40px;
  position: relative;
  z-index: 5;
}

.btn-more {
  background: #FFFFFF;
  border: 1px solid #BFDBFE;
  color: #2563EB;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 9999px;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.08);
  transition: all 0.25s ease;
}

.btn-more:hover {
  background: #EFF6FF;
  border-color: #2563EB;
  color: #1D4ED8;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.16);
}

.home-bottom-cta {
  background: linear-gradient(135deg, #10183F 0%, #1E40AF 100%);
  border-radius: 24px;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  color: #FFFFFF;
  box-shadow: 0 16px 40px rgba(16, 24, 63, 0.25);
  margin-top: 20px;
}

.cta-mini-badge {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #93C5FD;
  background: rgba(37, 99, 235, 0.3);
  border: 1px solid rgba(147, 197, 253, 0.3);
  padding: 4px 14px;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 12px;
}

.bottom-cta-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.bottom-cta-desc {
  font-size: 1.05rem;
  color: #EFF6FF;
  max-width: 580px;
}

.bottom-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  flex-shrink: 0;
}

@media (max-width: 992px) {
  .home-bottom-cta {
    flex-direction: column;
    text-align: center;
    padding: 36px 24px;
  }
  .bottom-cta-actions {
    justify-content: center;
  }
}
</style>
