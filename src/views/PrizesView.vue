<template>
  <div class="prizes-page">
    <!-- Page Hero Banner -->
    <PageBanner
      currentPage="Prize Pool"
      badge="HONORS & CASH REWARDS"
      badgeIcon="🏆"
      subtitle="Total ₹90,000+ cash prizes, prestigious mementos, 12 special category awards, and grand Chennai finale honours."
    >
      <template #title>
        Prize Pool & <span class="text-gradient-gold">Awards Showcase</span>
      </template>

      <template #actions>
        <button class="btn-primary" @click="openRegisterModal">
          <span>Submit Your Reel</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
        <router-link to="/judging" class="btn-secondary">
          <span>View Judging Rubric</span>
        </router-link>
      </template>
    </PageBanner>

    <div class="page-content-wrap">
      <!-- Main Prize Pool Section -->
      <PrizePoolSection />

      <!-- Chennai Gala & Perks Deep Dive -->
      <section class="finale-gala-section">
        <div class="container-custom">
          <div class="finale-box glass-panel">
            <div class="finale-grid">
              <div class="finale-info">
                <span class="section-badge">GRAND FINALE IN CHENNAI</span>
                <h2 class="finale-title">An Unforgettable Silver Screen Experience</h2>
                <p class="finale-desc">
                  Winners and shortlisted finalists will be invited as VIP guests to the Grand Gala in Chennai. Walk the red carpet, screen your reel in front of industry stalwarts, and network with leading directors and producers.
                </p>

                <div class="gala-perks-list">
                  <div class="gala-perk">
                    <span class="perk-icon">🌟</span>
                    <div>
                      <strong>Direct Industry Mentorship</strong>
                      <p>1-on-1 feedback and advice from veteran Tamil cinema technicians and directors.</p>
                    </div>
                  </div>

                  <div class="gala-perk">
                    <span class="perk-icon">🎥</span>
                    <div>
                      <strong>Statewide Media & PR Coverage</strong>
                      <p>Winning reels will be distributed across We The Leaders digital channels and news outlets.</p>
                    </div>
                  </div>

                  <div class="gala-perk">
                    <span class="perk-icon">📜</span>
                    <div>
                      <strong>Official Verified Certification</strong>
                      <p>State-level certified awards that add tremendous value to your portfolio and resume.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Certificate Guarantee Card -->
              <div class="cert-guarantee-card">
                <div class="cert-card-inner">
                  <div class="cert-seal">🎖️</div>
                  <h3 class="cert-title">100% Certificate Guarantee</h3>
                  <p class="cert-text">
                    Every creator who completes registration and submits a valid, non-plagiarized reel link will be awarded an Official Digital Certificate of Participation.
                  </p>
                  <div class="cert-footer-points">
                    <div class="cert-pt">✓ Verifiable Digital Credential</div>
                    <div class="cert-pt">✓ No hidden registration fees</div>
                    <div class="cert-pt">✓ Delivered straight to your email</div>
                  </div>
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
              <h2 class="cta-title">Claim Your Shot at ₹50,000!</h2>
              <p class="cta-sub">Submit your 3-minute video entry before the deadline. Free online submission.</p>
            </div>
            <div class="cta-banner-btns">
              <button class="btn-primary btn-lg" @click="openRegisterModal">
                <span>Submit Reel Entry Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <router-link to="/rules" class="btn-secondary">
                <span>View Rules</span>
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
import PrizePoolSection from '../components/PrizePoolSection.vue'
import { useRegisterModal } from '../composables/useRegisterModal'

const { openRegisterModal } = useRegisterModal()
</script>

<style scoped>
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

/* Finale Gala Section */
.finale-gala-section {
  padding: 80px 0;
  background-color: #FFFFFF;
}

.finale-box {
  padding: 48px;
  border-radius: 24px;
  border: 1px solid #E2E8F0;
  background: #F8FAFC;
}

.finale-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 48px;
  align-items: center;
}

.finale-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: #10183F;
  margin-bottom: 16px;
  line-height: 1.2;
}

.finale-desc {
  font-size: 1.05rem;
  color: #526078;
  line-height: 1.65;
  margin-bottom: 28px;
}

.gala-perks-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.gala-perk {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.perk-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  padding: 6px;
  border-radius: 10px;
}

.gala-perk strong {
  display: block;
  font-size: 1rem;
  color: #10183F;
  margin-bottom: 2px;
}

.gala-perk p {
  font-size: 0.875rem;
  color: #526078;
  line-height: 1.45;
}

/* Cert Guarantee Card */
.cert-guarantee-card {
  background: #10183F;
  border-radius: 20px;
  padding: 36px 30px;
  color: #FFFFFF;
  box-shadow: 0 12px 35px rgba(16, 24, 63, 0.2);
  text-align: center;
}

.cert-seal {
  font-size: 3rem;
  margin-bottom: 12px;
}

.cert-title {
  font-family: var(--font-cinematic);
  font-size: 1.4rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 12px;
}

.cert-text {
  font-size: 0.925rem;
  color: #CBD5E1;
  line-height: 1.6;
  margin-bottom: 24px;
}

.cert-footer-points {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  font-size: 0.85rem;
  color: #93C5FD;
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
  .finale-grid {
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
