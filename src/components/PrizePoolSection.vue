<template>
  <section class="prize-cta-section">
    <!-- PRIZE POOL PREVIEW -->
    <div class="prize-preview">
      <div class="container-custom">
        <div class="prize-grid">
          <div class="prize-text">
            <span class="section-badge">REWARDS</span>
            <h2 class="section-title">Recognizing Real Impact</h2>
            <p class="section-desc">We believe in rewarding those who step up to lead. The top initiatives will receive funding, recognition, and resources to scale their impact.</p>
            <router-link to="/prizes" class="btn-secondary mt-2">View Prize Pool</router-link>
          </div>
          <div class="prize-cards">
            <div class="p-card winner">
              <span class="p-rank">01</span>
              <h3>Grand Winner</h3>
              <p>Funding + Mentorship</p>
            </div>
            <div class="p-card special">
              <span class="p-rank">⭐</span>
              <h3>Community Impact Award</h3>
              <p>Special Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FINAL CTA -->
    <div class="final-cta">
      <div class="cta-overlay"></div>
      <div class="container-custom cta-content">
        <h2 class="cta-title">Your community needs leaders.<br/>Be one.</h2>
        <button class="btn-primary cta-btn">
          <span>Become a Leader</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prize-cta-section {
  background-color: var(--bg-primary);
}

.prize-preview {
  padding: 120px 0;
}

.prize-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.section-badge {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--brand-blue);
  margin-bottom: 16px;
  text-transform: uppercase;
}

.section-title {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--brand-navy);
  line-height: 1.2;
  margin-bottom: 20px;
}

.section-desc {
  font-size: 1.15rem;
  color: var(--text-muted);
  margin-bottom: 30px;
}

.mt-2 {
  margin-top: 10px;
}

.prize-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.p-card {
  background: linear-gradient(135deg, var(--brand-navy) 0%, #1a275c 100%);
  padding: 32px 40px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(11, 27, 61, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.p-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.3);
  border-color: rgba(37, 99, 235, 0.5);
}

.p-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.p-card:hover::before {
  opacity: 1;
}

.p-rank {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
  color: #FFB75E;
  margin-bottom: 8px;
  transition: transform 0.4s ease;
  display: inline-block;
}

.p-card:hover .p-rank {
  transform: scale(1.1) translateX(4px);
}

.p-card h3 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 4px;
}

.p-card p {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
}

/* Final CTA */
.final-cta {
  position: relative;
  background: url('/volunteers.jpg') center 40%/cover no-repeat;
  padding: 160px 0;
  text-align: center;
  margin: 0 20px 40px 20px;
  border-radius: 40px;
  overflow: hidden;
}

.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(11, 27, 61, 0.95), rgba(11, 27, 61, 0.8));
}

.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1.15;
  margin-bottom: 40px;
}

.cta-btn {
  padding: 18px 40px;
  font-size: 1.1rem;
}

@media (max-width: 992px) {
  .prize-grid {
    grid-template-columns: 1fr;
  }
  .final-cta {
    padding: 100px 0;
  }
}
</style>
