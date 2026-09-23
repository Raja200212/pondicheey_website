<template>
  <footer class="footer-wrapper">
    <div class="container-custom">
      <div class="footer-grid">
        <!-- Brand Info -->
        <div class="footer-brand-col">
          <div class="footer-logo">
            <div class="footer-logo-circle">
              <img src="/logo.png" alt="We The Leaders Logo" class="footer-logo-img" />
            </div>
            <div class="logo-text">
              <span class="footer-org">WE THE LEADERS</span>
              <span class="footer-event">REELS FOR REAL CHANGE</span>
            </div>
          </div>
          <p class="footer-tagline">
            Tamil Nadu State-Level Reel Competition empowering creators to inspire society through powerful 3-minute video narratives.
          </p>
          <div class="social-tags">
            <a href="https://instagram.com/wtl_leadingthechange" target="_blank" rel="noopener noreferrer" class="social-link-pill">
              <span>📸 Follow @wtl_leadingthechange</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links-col">
          <h4 class="footer-heading">Quick Navigation</h4>
          <ul class="footer-links-list">
            <li><a href="#about">About We The Leaders</a></li>
            <li><a href="#content-themes">Reel Themes & Topics</a></li>
            <li><a href="#prizes">Prize Pool & Awards</a></li>
            <li><a href="#judging">Judging Criteria</a></li>
            <li><a href="#rules">Rules & Guidelines</a></li>
            <li><a href="#register">Submit Your Reel</a></li>
          </ul>
        </div>

        <!-- Support & Event Inquiries -->
        <div class="footer-contact-col">
          <h4 class="footer-heading">Support & Queries</h4>
          <p class="contact-text">
            For collaboration, campus partnership, or submission inquiries, reach out to the We The Leaders organizing committee.
          </p>
          <div class="support-badges">
            <div class="support-badge-item">
              <span class="badge-dot dot-green"></span>
              <span>100% Free Entry • Tamil Nadu & Puducherry</span>
            </div>
            <div class="support-badge-item">
              <span class="badge-dot dot-blue"></span>
              <span>Grand Finale in Chennai</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>© 2026 We The Leaders. All Rights Reserved. Reels For Real Change Competition.</p>
        <p class="built-with">Igniting Youth Leadership & Social Progress Across Tamil Nadu</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-wrapper {
  background: #10183F;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 70px 0 30px;
  position: relative;
  z-index: 10;
  color: #FFFFFF;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 1fr;
  gap: 40px;
  margin-bottom: 50px;
}

.footer-brand-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-logo-circle {
  width: 60px;
  height: 60px;
  background: #FFFFFF;
  border: 2px solid #E2E8F0;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  overflow: hidden;
}

.footer-logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.footer-org {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #60A5FA;
  text-transform: uppercase;
}

.footer-event {
  font-family: var(--font-cinematic);
  font-size: 1.1rem;
  font-weight: 800;
  color: #FFFFFF;
}

.footer-tagline {
  font-size: 0.875rem;
  color: #94A3B8;
  line-height: 1.6;
  max-width: 380px;
}

.social-link-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 0.825rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.2s;
}

.social-link-pill:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #FFFFFF;
  transform: translateY(-2px);
}

.footer-heading {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.footer-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links-list a {
  color: #94A3B8;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links-list a:hover {
  color: #FFFFFF;
}

.contact-text {
  font-size: 0.875rem;
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 20px;
}

.support-badges {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.support-badge-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: #E2E8F0;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.dot-green {
  background: #60A5FA;
}

.dot-blue {
  background: #3B82F6;
}

.footer-bottom {
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 0.8rem;
  color: #94A3B8;
}

.built-with {
  color: #CBD5E1;
}

@media (max-width: 860px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
