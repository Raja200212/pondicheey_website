<template>
  <section class="how-it-works-timeline">
    <div class="container-custom">
      <!-- 5. HOW IT WORKS -->
      <div class="how-it-works">
        <div class="section-header-center">
          <span class="section-badge">PROCESS</span>
          <h2 class="section-title">How It Works</h2>
          <p class="section-desc-center">Your journey to creating real social impact starts here. Follow these four simple steps.</p>
        </div>

        <div class="steps-journey">
          <div class="step-card">
            <div class="step-num">01</div>
            <h3>Discover</h3>
            <p>Identify a social issue in your community that you are passionate about.</p>
          </div>
          <div class="step-connector"></div>
          <div class="step-card">
            <div class="step-num">02</div>
            <h3>Create</h3>
            <p>Develop a creative solution or story that addresses the issue effectively.</p>
          </div>
          <div class="step-connector"></div>
          <div class="step-card">
            <div class="step-num">03</div>
            <h3>Take Action</h3>
            <p>Implement your idea and document your journey to share with the world.</p>
          </div>
          <div class="step-connector"></div>
          <div class="step-card">
            <div class="step-num">04</div>
            <h3>Create Impact</h3>
            <p>Inspire others, scale your project, and become a recognized leader.</p>
          </div>
        </div>
      </div>

      <!-- 8. IMPORTANT DATES -->
      <div class="timeline-section">
        <div class="section-header-center">
          <span class="section-badge">TIMELINE</span>
          <h2 class="section-title">Important Dates</h2>
        </div>

        <div class="timeline-container">
          <div class="timeline-item">
            <div class="t-date">Oct 15</div>
            <div class="t-content">
              <h4>Registrations Open</h4>
              <p>Start your journey by signing up for the initiative.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="t-date">Nov 30</div>
            <div class="t-content">
              <h4>Submission Deadline</h4>
              <p>Submit your project documentation and impact report.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="t-date">Dec 15</div>
            <div class="t-content">
              <h4>Finalists Announced</h4>
              <p>Top projects are selected for the final showcase.</p>
            </div>
          </div>
          <div class="timeline-item highlight">
            <div class="t-date">Jan 10</div>
            <div class="t-content">
              <h4>Grand Showcase Event</h4>
              <p>Celebrate the leaders and award the prize pool.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works-timeline {
  padding: 120px 0;
  background-color: var(--bg-primary);
}

.section-header-center {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
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
  color: var(--brand-navy);
  line-height: 1.2;
  margin-bottom: 20px;
}

.section-desc-center {
  font-size: 1.15rem;
  color: var(--text-muted);
}

/* Steps Journey */
.steps-journey {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 140px;
  position: relative;
}

.step-card {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 0 20px;
}

.step-num {
  width: 80px;
  height: 80px;
  background: #FFFFFF;
  border: 2px solid rgba(37, 99, 235, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--brand-blue);
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.12);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.step-card:hover .step-num {
  border-color: var(--brand-blue);
  background: linear-gradient(135deg, var(--brand-blue) 0%, #60A5FA 100%);
  color: #FFFFFF;
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 15px 40px rgba(37, 99, 235, 0.3);
}

.step-card h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--brand-navy);
  margin-bottom: 12px;
}

.step-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.step-connector {
  flex: 0.5;
  height: 2px;
  background: var(--border-subtle);
  margin-top: 40px;
  position: relative;
}

.step-connector::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: var(--brand-coral);
  transition: width 1s ease;
}

.how-it-works:hover .step-connector::after {
  width: 100%;
}

/* Timeline */
.timeline-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 120px;
  width: 2px;
  background: var(--border-subtle);
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  position: relative;
  transition: transform 0.4s ease;
  animation: fadeRight 0.6s ease-out backwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeRight {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

.timeline-item:hover {
  transform: translateX(10px);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.t-date {
  width: 100px;
  text-align: right;
  padding-right: 40px;
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--brand-blue);
  font-size: 1.15rem;
  padding-top: 4px;
}

.t-content {
  flex: 1;
  padding-left: 40px;
  position: relative;
}

.t-content::before {
  content: '';
  position: absolute;
  left: -27px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 3px solid var(--brand-navy);
  box-shadow: 0 0 0 4px rgba(255,255,255,1);
  transition: all 0.4s ease;
}

.timeline-item:hover .t-content::before {
  border-color: var(--brand-blue);
  background: var(--brand-blue);
  box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.25);
  transform: scale(1.3);
}

.timeline-item.highlight .t-content::before {
  border-color: var(--brand-blue);
  background: var(--brand-blue);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
}

.t-content h4 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--brand-navy);
  margin-bottom: 8px;
  transition: color 0.3s ease;
}

.timeline-item:hover .t-content h4 {
  color: var(--brand-blue);
}

.t-content p {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .steps-journey {
    flex-direction: column;
    gap: 40px;
  }
  .step-connector {
    display: none;
  }
  .timeline-container::before {
    left: 20px;
  }
  .t-date {
    width: 60px;
    padding-right: 15px;
    font-size: 0.9rem;
    text-align: left;
  }
  .t-content {
    padding-left: 30px;
  }
  .t-content::before {
    left: -47px;
  }
}
</style>
