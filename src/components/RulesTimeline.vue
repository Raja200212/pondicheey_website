<template>
  <section id="rules" class="rules-section">
    <div class="container-custom">
      <div class="section-header text-center">
        <span class="section-badge">ESSENTIAL INFORMATION</span>
        <h2 class="section-title">
          Rules, Guidelines & <span class="text-gradient-hero">Timeline</span>
        </h2>
        <p class="section-subtitle">
          Everything you need to know before submitting your masterpiece.
        </p>
      </div>

      <div class="rules-timeline-grid">
        <!-- Left: Important Rules -->
        <div class="rules-box glass-panel">
          <div class="box-header">
            <span class="header-icon">📜</span>
            <h3 class="box-title">Important Rules & Guidelines</h3>
          </div>

          <div class="rules-list">
            <div class="rule-card">
              <div class="rule-badge badge-blue">⏱️ Duration</div>
              <h4>Maximum 3 Minutes</h4>
              <p>Reels should be between 30 seconds to 3 minutes in length. Ensure your narrative is tight and impactful.</p>
            </div>

            <div class="rule-card">
              <div class="rule-badge badge-orange">🗣️ Language</div>
              <h4>Tamil / English / Silent with Subtitles</h4>
              <p>Content can be in Tamil, English, or silent/visual storytelling. Adding clear subtitles is strongly encouraged.</p>
            </div>

            <div class="rule-card">
              <div class="rule-badge badge-green">✨ Originality</div>
              <h4>100% Original Content</h4>
              <p>Must be original creative work created by the participant or team. Plagiarized clips will be disqualified.</p>
            </div>

            <div class="rule-card">
              <div class="rule-badge badge-blue">📍 Eligibility</div>
              <h4>Open to All Youth & Creators</h4>
              <p>Open to students, creators, indie filmmakers, and enthusiasts across all districts of Tamil Nadu & Puducherry.</p>
            </div>
          </div>
        </div>

        <!-- Right: Event Timeline -->
        <div class="timeline-box glass-panel">
          <div class="box-header">
            <span class="header-icon">⏳</span>
            <h3 class="box-title">Official Event Timeline</h3>
          </div>

          <div class="timeline-stepper">
            <!-- Step 1 -->
            <div class="timeline-step step-completed">
              <div class="step-indicator">
                <span class="pulse-ring"></span>
                <span class="step-dot active">1</span>
              </div>
              <div class="step-content">
                <span class="step-date active-date">LIVE NOW</span>
                <h4 class="step-title">Registration & Submission Opens</h4>
                <p class="step-desc">Free online registrations and reel link submissions are officially open.</p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="timeline-step">
              <div class="step-indicator">
                <span class="step-dot highlight">2</span>
              </div>
              <div class="step-content">
                <span class="step-date deadline-date">OCTOBER 25</span>
                <h4 class="step-title">Last Date for Submission</h4>
                <p class="step-desc">Portals close at 11:59 PM. Make sure your Instagram reel is public and collab request sent.</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="timeline-step">
              <div class="step-indicator">
                <span class="step-dot dot-blue">3</span>
              </div>
              <div class="step-content">
                <span class="step-date">MID-NOVEMBER</span>
                <h4 class="step-title">Top Shortlist Announcement</h4>
                <p class="step-desc">Jury evaluates entries and announces finalists invited to the state gala.</p>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="timeline-step">
              <div class="step-indicator">
                <span class="step-dot finale-dot">🏆</span>
              </div>
              <div class="step-content">
                <span class="step-date finale-date">GRAND FINALE • CHENNAI</span>
                <h4 class="step-title">Award Ceremony & Celebrity Jury Meet</h4>
                <p class="step-desc">Live screening, celebrity award handovers, and networking in Chennai (Date & Venue to be updated).</p>
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
.rules-section {
  padding: 90px 0;
  position: relative;
  background-color: #F3F6FA;
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
  color: #1E40AF;
  text-transform: uppercase;
  margin-bottom: 12px;
  background: #EAF3FF;
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

.rules-timeline-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.rules-box, .timeline-box {
  background: #FFFFFF;
  padding: 36px 30px;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(16, 24, 63, 0.05);
}

.box-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E2E8F0;
}

.header-icon {
  font-size: 1.8rem;
}

.box-title {
  font-family: var(--font-cinematic);
  font-size: 1.4rem;
  font-weight: 800;
  color: #10183F;
}

/* Rules List */
.rules-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.rule-card {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  padding: 16px 20px;
  transition: all 0.25s ease;
}

.rule-card:hover {
  border-color: #CBD5E1;
  background: #FFFFFF;
  transform: translateX(4px);
  box-shadow: 0 4px 14px rgba(16, 24, 63, 0.06);
}

.rule-badge {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 4px;
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
}

.badge-blue {
  background: #EAF3FF;
  color: #1E40AF;
}

.badge-orange {
  background: #FFF4E5;
  color: #9A3412;
}

.badge-green {
  background: #EFF9EC;
  color: #166534;
}

.rule-card h4 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: #10183F;
  margin-bottom: 4px;
}

.rule-card p {
  font-size: 0.85rem;
  color: #526078;
  line-height: 1.5;
}

/* Timeline Stepper */
.timeline-stepper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  padding-left: 10px;
}

.timeline-step {
  display: flex;
  gap: 20px;
  position: relative;
}

.timeline-step:not(:last-child)::before {
  content: '';
  position: absolute;
  top: 36px;
  left: 17px;
  bottom: -24px;
  width: 2px;
  background: #CBD5E1;
}

.step-indicator {
  position: relative;
  flex-shrink: 0;
}

.step-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #F3F6FA;
  border: 2px solid #CBD5E1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.9rem;
  color: #10183F;
}

.step-dot.active {
  background: #16A34A;
  border-color: #16A34A;
  color: #FFFFFF;
}

.step-dot.highlight {
  background: #D97706;
  border-color: #D97706;
  color: #FFFFFF;
}

.step-dot.dot-blue {
  background: #1E40AF;
  border-color: #1E40AF;
  color: #FFFFFF;
}

.step-dot.finale-dot {
  background: #10183F;
  border-color: #10183F;
  color: #FFFFFF;
}

.pulse-ring {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(22, 163, 74, 0.4);
  animation: pulse-glow 2s infinite;
}

.step-content {
  display: flex;
  flex-direction: column;
}

.step-date {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #526078;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.active-date {
  color: #16A34A;
  font-weight: 800;
}

.deadline-date {
  color: #D97706;
  font-weight: 800;
}

.finale-date {
  color: #10183F;
  font-weight: 800;
}

.step-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: #10183F;
  margin-bottom: 4px;
}

.step-desc {
  font-size: 0.85rem;
  color: #526078;
  line-height: 1.5;
}

@media (max-width: 992px) {
  .rules-timeline-grid {
    grid-template-columns: 1fr;
  }
}
</style>
