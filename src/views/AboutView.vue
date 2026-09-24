<template>
  <div class="about-page">
    <!-- Page Hero Banner -->
    <PageBanner
      currentPage="About"
      badge="THE MOVEMENT & VISION"
      badgeIcon="🌟"
      subtitle="Discover the story, mission, and youth-led driving force behind Reels For Real Change across Tamil Nadu and Puducherry."
    >
      <template #title>
        About <span class="text-gradient-hero">We The Leaders</span>
      </template>

      <template #actions>
        <button class="btn-primary" @click="openRegisterModal">
          <span>Submit Your Reel</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
        <router-link to="/themes" class="btn-secondary">
          <span>View Reel Themes</span>
        </router-link>
      </template>
    </PageBanner>

    <!-- Core About Section -->
    <div class="page-content-wrap">
      <AboutSection />

      <!-- Mission & Vision 3-Column Pillar Cards -->
      <section class="pillars-section">
        <div class="container-custom">
          <div class="section-header text-center">
            <span class="section-badge">CORE FOUNDATION</span>
            <h2 class="section-title">Our Mission, Vision & Purpose</h2>
            <p class="section-subtitle">Building a new generation of conscious leaders through short-form visual media.</p>
          </div>

          <div class="pillars-grid">
            <div class="pillar-card card-glow">
              <div class="pillar-icon-box icon-blue">🎯</div>
              <h3 class="pillar-title">Our Mission</h3>
              <p class="pillar-text">
                To empower young filmmakers, students, and digital creators across Tamil Nadu and Puducherry to use the power of digital video to address civic concerns, challenge complacency, and inspire tangible social progress.
              </p>
            </div>

            <div class="pillar-card card-glow">
              <div class="pillar-icon-box icon-purple">🔭</div>
              <h3 class="pillar-title">Our Vision</h3>
              <p class="pillar-text">
                To create India's largest youth network of social impact storytellers where creative talent meets civic responsibility, transforming ordinary reel creators into statewide thought leaders.
              </p>
            </div>

            <div class="pillar-card card-glow">
              <div class="pillar-icon-box icon-teal">⚡</div>
              <h3 class="pillar-title">Our Values</h3>
              <p class="pillar-text">
                Uncompromising authenticity, creative fearlessness, constructive problem-solving, inclusivity across all 38 districts, and transparent merit-based jury evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Participate Deep Dive -->
      <section class="why-join-section">
        <div class="container-custom">
          <div class="why-join-box glass-panel">
            <div class="why-grid">
              <div class="why-text-col">
                <span class="section-badge">WHY YOU SHOULD PARTICIPATE</span>
                <h2 class="why-title">Why Reels For Real Change Matters</h2>
                <p class="why-desc">
                  This isn't just another social media contest. It's a high-visibility creative festival connecting grassroots talent with the Tamil cinema industry and prominent social change organizations.
                </p>

                <div class="benefit-list">
                  <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                      <strong>Statewide Visibility:</strong>
                      <p>Your short film will be showcased before jury members comprising film directors, media producers, and digital influencers.</p>
                    </div>
                  </div>

                  <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                      <strong>Grand ₹90,000+ Prize Pool:</strong>
                      <p>Cash prizes for the Top 3 winners plus 12 special awards recognizing editing, cinematography, and script excellence.</p>
                    </div>
                  </div>

                  <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                      <strong>Celebrity Gala in Chennai:</strong>
                      <p>Finalists receive an exclusive invitation to attend the prestigious award ceremony with travel recognition.</p>
                    </div>
                  </div>

                  <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                      <strong>100% Free Entry & Participation Certificate:</strong>
                      <p>Every participant who registers with a valid reel link receives a verifiable certificate of participation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Side Visual Stats Card -->
              <div class="why-stats-col">
                <div class="stats-card-inner">
                  <h3 class="stats-card-title">Competition at a Glance</h3>
                  <div class="stats-list">
                    <div class="stat-row">
                      <span class="stat-number">38+1</span>
                      <span class="stat-info">Districts Covered in Tamil Nadu & Puducherry</span>
                    </div>
                    <div class="stat-row">
                      <span class="stat-number">3 Min</span>
                      <span class="stat-info">Maximum Video Duration Limit</span>
                    </div>
                    <div class="stat-row">
                      <span class="stat-number">₹90,000+</span>
                      <span class="stat-info">Total Cash & Trophy Rewards</span>
                    </div>
                    <div class="stat-row">
                      <span class="stat-number">15+</span>
                      <span class="stat-info">Winning & Special Recognition Positions</span>
                    </div>
                  </div>

                  <router-link to="/register" class="btn-primary w-full text-center mt-4">
                    <span>Register & Submit Reel Now</span>
                  </router-link>
                </div>
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
              <h2 class="cta-title">Ready to Tell Your Story?</h2>
              <p class="cta-sub">Pick your theme, craft your 3-minute video narrative, and submit today. Free registration!</p>
            </div>
            <div class="cta-banner-btns">
              <button class="btn-primary btn-lg" @click="openRegisterModal">
                <span>Submit Your Reel</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <router-link to="/rules" class="btn-secondary">
                <span>Check Rules & Guidelines</span>
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
import AboutSection from '../components/AboutSection.vue'
import { useRegisterModal } from '../composables/useRegisterModal'

const { openRegisterModal } = useRegisterModal()
</script>

<style scoped>
.page-content-wrap {
  position: relative;
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

/* Pillars Section */
.pillars-section {
  padding: 80px 0;
  background-color: #F8FAFC;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.pillar-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
}

.pillar-icon-box {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.icon-blue {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
}

.icon-purple {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
}

.icon-teal {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
}

.pillar-title {
  font-family: var(--font-cinematic);
  font-size: 1.35rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 14px;
}

.pillar-text {
  font-size: 0.95rem;
  color: #526078;
  line-height: 1.65;
}

/* Why Join Section */
.why-join-section {
  padding: 90px 0;
  background-color: #FFFFFF;
}

.why-join-box {
  padding: 48px;
  border-radius: 24px;
  border: 1px solid #E2E8F0;
  background: #F8FAFC;
}

.why-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 48px;
  align-items: center;
}

.why-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: #10183F;
  margin-bottom: 16px;
  line-height: 1.2;
}

.why-desc {
  font-size: 1.05rem;
  color: #526078;
  line-height: 1.65;
  margin-bottom: 28px;
}

.benefit-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.benefit-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #2563EB;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 800;
  flex-shrink: 0;
  margin-top: 2px;
}

.benefit-item strong {
  display: block;
  font-size: 1rem;
  color: #10183F;
  margin-bottom: 2px;
}

.benefit-item p {
  font-size: 0.875rem;
  color: #526078;
  line-height: 1.5;
}

/* Side Stats Card */
.stats-card-inner {
  background: #10183F;
  border-radius: 20px;
  padding: 36px 28px;
  color: #FFFFFF;
  box-shadow: 0 12px 35px rgba(16, 24, 63, 0.2);
}

.stats-card-title {
  font-family: var(--font-cinematic);
  font-size: 1.25rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 14px;
}

.stats-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
}

.stat-row {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 900;
  color: #60A5FA;
}

.stat-info {
  font-size: 0.825rem;
  color: #CBD5E1;
}

.mt-4 {
  margin-top: 16px;
}

.w-full {
  width: 100%;
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
  .pillars-grid {
    grid-template-columns: 1fr;
  }
  .why-grid {
    grid-template-columns: 1fr;
    gap: 36px;
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
