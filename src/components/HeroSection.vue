<template>
  <section class="hero-section">
    <!-- Ambient Background Spotlights -->
    <div class="spotlight-glow spotlight-red"></div>
    <div class="spotlight-glow spotlight-orange"></div>
    <div class="spotlight-glow spotlight-gold"></div>

    <div class="container-custom relative-container">
      <div class="hero-grid">
        <!-- Hero Text & CTAs -->
        <div class="hero-content">
          <!-- Badges Cluster -->
          <div class="badges-row">
            <span class="badge-pill badge-fire">
              <span class="badge-icon">🔥</span> 100% Free Registration
            </span>
            <span class="badge-pill badge-trophy">
              <span class="badge-icon">🏆</span> Cash Prizes Up to ₹90,000+
            </span>
            <span class="badge-pill badge-cert">
              <span class="badge-icon">📜</span> Certificate for EVERY Participant
            </span>
          </div>

          <!-- Main Headlines -->
          <h1 class="hero-title">
            <span class="subtitle-org">WE THE LEADERS PRESENTS</span>
            <span class="text-gradient-hero main-title-text">REELS FOR REAL CHANGE</span>
          </h1>

          <p class="hero-subtitle">
            <span class="highlight-text">Tamil Nadu State-Level Reel Competition</span>
            <span class="divider-dot">•</span>
            <span class="punch-text">Your 3 Minutes Can Inspire Tamil Nadu!</span>
          </p>

          <p class="hero-description">
            Step into the spotlight. Channel your filmmaking passion, tell stories that ignite positive social transformation, and get recognized by leading cinema icons.
          </p>

          <!-- Action Buttons -->
          <div class="hero-cta-group">
            <a href="#register" class="btn-primary hero-btn-main">
              <span>REGISTER & SUBMIT REEL NOW</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            
            <a href="#rules" class="btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              <span>View Guidelines</span>
            </a>
          </div>

          <!-- Quick Trust Highlights -->
          <div class="hero-footer-strip">
            <div class="footer-feature">
              <span class="dot-live"></span>
              <span>Submissions Open • Open to All TN & PY Youth</span>
            </div>
          </div>
        </div>

        <!-- Hero Visual Poster / Card -->
        <div class="hero-visual-col">
          <div class="cinematic-poster-card animate-float">
            <div class="poster-inner">
              <div class="poster-badge-top">
                <span class="live-pill">STATE-LEVEL COMPETITION</span>
              </div>

              <div class="poster-artwork">
                <div class="film-reel-art">
                  <div class="poster-logo-box">
                    <img src="/logo.png" alt="We The Leaders Official Logo" class="poster-logo-img" />
                  </div>
                  <div class="awards-wreath">✨ 🏆 ✨</div>
                </div>
              </div>

              <div class="poster-details">
                <h3 class="poster-heading">GRAND FINALE IN CHENNAI</h3>
                <p class="poster-jury-tag">
                  🌟 Live with Celebrated Silver Screen Personalities & Cinema Industry Veterans
                </p>
                
                <div class="poster-stats-grid">
                  <div class="stat-box">
                    <span class="stat-num">₹50,000</span>
                    <span class="stat-label">1st Prize Cash</span>
                  </div>
                  <div class="stat-box">
                    <span class="stat-num">38+1</span>
                    <span class="stat-label">Districts</span>
                  </div>
                  <div class="stat-box">
                    <span class="stat-num">15+</span>
                    <span class="stat-label">Total Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 60px 0 80px;
  overflow: hidden;
  background-color: #FFFFFF;
}

.relative-container {
  position: relative;
  z-index: 10;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 40px;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
}

.badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.badge-icon {
  font-size: 1rem;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
}

.subtitle-org {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 3px;
  color: #DC2626;
  text-transform: uppercase;
}

.main-title-text {
  font-family: var(--font-cinematic);
  font-size: clamp(2.5rem, 5.5vw, 4.2rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  font-weight: 600;
  color: #10183F;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.highlight-text {
  color: #1E40AF;
  font-weight: 800;
}

.divider-dot {
  color: #D97706;
  font-weight: bold;
}

.punch-text {
  color: #10183F;
  font-weight: 700;
}

.hero-description {
  font-size: 1.05rem;
  color: #526078;
  max-width: 580px;
  margin-bottom: 32px;
  line-height: 1.65;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-bottom: 28px;
}

.hero-btn-main {
  font-size: 1.05rem;
  padding: 16px 36px;
}

.hero-footer-strip {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #526078;
  font-size: 0.9rem;
}

.footer-feature {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot-live {
  width: 8px;
  height: 8px;
  background: #16A34A;
  border-radius: 50%;
  box-shadow: 0 0 10px #16A34A;
  display: inline-block;
  animation: pulse-glow 2s infinite;
}

/* Poster Card */
.cinematic-poster-card {
  border: 1px solid #E2E8F0;
  background: #FFFFFF;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 12px 35px rgba(16, 24, 63, 0.08);
  position: relative;
  overflow: hidden;
}

.poster-inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.poster-badge-top {
  display: flex;
  justify-content: center;
}

.live-pill {
  background: #FFF4E5;
  border: 1px solid #FED7AA;
  color: #9A3412;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 6px 16px;
  border-radius: 9999px;
  text-transform: uppercase;
}

.poster-artwork {
  background: #F3F6FA;
  border-radius: 18px;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E2E8F0;
}

.film-reel-art {
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.poster-logo-box {
  width: 115px;
  height: 115px;
  background: #FFFFFF;
  border-radius: 50%;
  padding: 0;
  border: 2px solid #E2E8F0;
  box-shadow: 0 6px 20px rgba(16, 24, 63, 0.1);
  margin-bottom: 10px;
  overflow: hidden;
}

.poster-logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.awards-wreath {
  font-size: 1.4rem;
}

.poster-details {
  text-align: center;
}

.poster-heading {
  font-family: var(--font-cinematic);
  font-size: 1.35rem;
  font-weight: 800;
  color: #10183F;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.poster-jury-tag {
  font-size: 0.875rem;
  color: #526078;
  line-height: 1.5;
  margin-bottom: 20px;
}

.poster-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background: #F3F6FA;
  border-radius: 14px;
  padding: 14px 8px;
  border: 1px solid #E2E8F0;
}

.stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-num {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.15rem;
  color: #10183F;
}

.stat-label {
  font-size: 0.725rem;
  color: #526078;
  text-transform: uppercase;
  font-weight: 600;
}

@media (max-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-content {
    align-items: center;
  }
  .badges-row {
    justify-content: center;
  }
  .hero-subtitle {
    justify-content: center;
  }
  .hero-cta-group {
    justify-content: center;
  }
  .hero-visual-col {
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
  }
}
</style>
