<template>
  <section class="about-section">
    <!-- WHAT IS WE THE LEADERS? -->
    <div class="container-custom">
      <div class="editorial-layout">
        <div class="editorial-text">
          <span class="section-badge">WHAT IS WE THE LEADERS?</span>
          <h2 class="section-title">Empowering the Next Generation of Changemakers</h2>
          <p class="section-desc">
            We The Leaders is not just a competition—it's a movement. We provide a platform for passionate young individuals to step up, take action, and drive meaningful social change in their communities. 
          </p>
          <p class="section-desc">
            Through creative storytelling and grassroots action, we aim to amplify the voices of youth who are dedicated to solving real-world challenges, from environmental sustainability to education and social equality.
          </p>
          <router-link to="/about" class="link-arrow">
            Discover Our Story <span class="arrow">→</span>
          </router-link>
        </div>
        <div class="editorial-image">
          <div class="image-wrapper">
            <img src="/indian_youth_leaders.jpg" alt="Young Indian leaders" class="organic-img" />
            <div class="floating-stat-box">
              <span class="stat-num">50k+</span>
              <span class="stat-lbl">Lives Impacted</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- WHY SOCIAL IMPACT MATTERS -->
    <div class="impact-matters-wrap">
      <div class="container-custom">
        <div class="impact-header">
          <h2 class="section-title">Why Social Impact Matters</h2>
          <p class="impact-subtitle">Individual actions, when united, have the power to transform entire communities and create lasting systemic change.</p>
        </div>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-val">100+</div>
            <div class="stat-name">Social Initiatives</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">10k+</div>
            <div class="stat-name">Young Changemakers</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">38</div>
            <div class="stat-name">Communities Reached</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">High</div>
            <div class="stat-name">Community Impact</div>
          </div>
        </div>
      </div>
    </div>

    <!-- WHO CAN PARTICIPATE? -->
    <div class="container-custom participate-section">
      <div class="section-header-center">
        <span class="section-badge">ELIGIBILITY</span>
        <h2 class="section-title">Who Can Participate?</h2>
        <p class="section-desc-center">Whether you're an artist, an engineer, a student, or an activist, if you have the drive to make a difference, there is a place for you here.</p>
      </div>

      <div class="eligibility-grid">
        <div class="eligibility-card">
          <div class="e-icon">🎓</div>
          <h3>Students & Scholars</h3>
          <p>College and university students looking to apply their academic knowledge to real-world social challenges.</p>
        </div>
        <div class="eligibility-card">
          <div class="e-icon">🎨</div>
          <h3>Creators & Artists</h3>
          <p>Filmmakers, writers, and artists who use their voice and creativity to raise awareness and inspire action.</p>
        </div>
        <div class="eligibility-card">
          <div class="e-icon">🤝</div>
          <h3>Community Volunteers</h3>
          <p>Individuals already working on grassroots initiatives who want to amplify their impact and reach.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding-top: 100px;
  background-color: var(--bg-primary);
}

.section-badge {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--brand-coral);
  margin-bottom: 16px;
  text-transform: uppercase;
}

.section-title {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.2;
  margin-bottom: 24px;
}

.section-desc {
  font-size: 1.15rem;
  color: var(--text-muted);
  margin-bottom: 20px;
  max-width: 540px;
}

.text-white {
  color: #FFFFFF;
}

/* Editorial Layout */
.editorial-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 120px;
}

.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--brand-navy);
  text-decoration: none;
  margin-top: 16px;
  transition: color 0.3s ease;
}

.link-arrow:hover {
  color: var(--brand-coral);
}

.link-arrow .arrow {
  transition: transform 0.3s ease;
}

.link-arrow:hover .arrow {
  transform: translateX(6px);
}

.editorial-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(11, 27, 61, 0.1);
}

.organic-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 40px 10px 40px 10px;
  display: block;
}

.floating-stat-box {
  position: absolute;
  bottom: -20px;
  left: -20px;
  background: var(--bg-card);
  padding: 24px 32px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--brand-coral);
}

.stat-lbl {
  font-weight: 700;
  color: var(--text-muted);
}

/* Impact Section */
.impact-matters-wrap {
  background: #FFFFFF;
  padding: 100px 0;
  border-radius: 40px;
  margin: 0 20px;
  position: relative;
  overflow: hidden;
}

.impact-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
}

.impact-subtitle {
  font-size: 1.15rem;
  color: #64748B;
  opacity: 0.9;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 28px;
  padding: 40px 24px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(255, 107, 107, 0.15) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.stat-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 107, 107, 0.3);
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-val {
  font-family: var(--font-display, 'Inter', sans-serif);
  font-size: 3.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #01579B 0%, #2563EB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
  line-height: 1.1;
}

.stat-name {
  font-weight: 800;
  color: #2563EB;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
}

/* Participate Section */
.participate-section {
  padding: 120px 0;
}

.section-header-center {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
}

.section-desc-center {
  font-size: 1.15rem;
  color: var(--text-muted);
}

.eligibility-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.eligibility-card {
  background: var(--bg-card);
  padding: 40px;
  border-radius: 32px;
  box-shadow: 0 10px 40px rgba(11, 27, 61, 0.04);
  border: 1px solid var(--border-subtle);
  transition: all 0.4s ease;
}

.eligibility-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(11, 27, 61, 0.08);
  border-color: var(--brand-coral);
}

.e-icon {
  font-size: 3rem;
  margin-bottom: 24px;
}

.eligibility-card h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--brand-navy);
  margin-bottom: 16px;
}

.eligibility-card p {
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 992px) {
  .editorial-layout {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .eligibility-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 2.2rem;
  }
}
</style>
