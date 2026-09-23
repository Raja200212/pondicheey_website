<template>
  <section id="about" class="about-section">
    <div class="container-custom">
      <div class="section-header text-center">
        <span class="section-badge">ABOUT THE MOVEMENT</span>
        <h2 class="section-title">
          Empowering Creators, <span class="text-gradient-hero">Igniting Change</span>
        </h2>
        <p class="section-subtitle">
          Turning 3-minute stories into a catalyst for statewide social impact.
        </p>
      </div>

      <div class="about-grid">
        <!-- Main Quote Box -->
        <div class="about-main-card">
          <div class="quote-decor">“</div>
          <div class="about-content">
            <h3 class="about-lead">
              <strong>We The Leaders</strong> is a youth-centric movement dedicated to channeling the energy, passion, and creative vision of young minds into constructive social progress.
            </h3>
            <p class="about-body">
              <strong>Reels for Real Change</strong> provides a high-impact platform for Tamil Nadu’s creators to turn short-form video storytelling into a force for inspiration, awareness, and positive transformation. Whether you are an aspiring filmmaker, digital creator, actor, or story enthusiast, this is your arena to captivate hearts and make your voice count.
            </p>
          </div>
          
          <div class="creator-support-strip">
            <div class="support-item">
              <span class="support-icon icon-orange">💡</span>
              <div>
                <strong>Inspire Action</strong>
                <p>Highlight solutions to everyday community issues</p>
              </div>
            </div>
            <div class="support-item">
              <span class="support-icon icon-blue">🌟</span>
              <div>
                <strong>Gain Recognition</strong>
                <p>Direct exposure to top film directors & media producers</p>
              </div>
            </div>
            <div class="support-item">
              <span class="support-icon icon-green">🤝</span>
              <div>
                <strong>Lead The Shift</strong>
                <p>Join a state-wide network of proactive young changemakers</p>
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
.about-section {
  padding: 90px 0;
  position: relative;
  background-color: #FFFFFF;
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

.about-main-card {
  position: relative;
  padding: 48px;
  border: 1px solid #E2E8F0;
  background: #F3F6FA;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(16, 24, 63, 0.04);
}

.quote-decor {
  position: absolute;
  top: 10px;
  right: 30px;
  font-family: var(--font-cinematic);
  font-size: 10rem;
  line-height: 1;
  color: rgba(16, 24, 63, 0.04);
  user-select: none;
  pointer-events: none;
}

.about-content {
  position: relative;
  z-index: 2;
  margin-bottom: 40px;
}

.about-lead {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2vw, 1.45rem);
  font-weight: 500;
  line-height: 1.65;
  color: #10183F;
  margin-bottom: 18px;
}

.about-lead strong {
  color: #1E40AF;
  font-weight: 700;
}

.about-body {
  font-size: 1.05rem;
  color: #526078;
  line-height: 1.8;
}

.about-body strong {
  color: #DC2626;
}

.creator-support-strip {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-top: 32px;
  border-top: 1px solid #E2E8F0;
}

.support-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: #FFFFFF;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid #E2E8F0;
}

.support-icon {
  font-size: 1.6rem;
  padding: 8px;
  border-radius: 10px;
  flex-shrink: 0;
}

.icon-orange {
  background: #FFF4E5;
  border: 1px solid #FED7AA;
}

.icon-blue {
  background: #EAF3FF;
  border: 1px solid #BFDBFE;
}

.icon-green {
  background: #EFF9EC;
  border: 1px solid #BBF7D0;
}

.support-item strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1rem;
  color: #10183F;
  margin-bottom: 4px;
}

.support-item p {
  font-size: 0.85rem;
  color: #526078;
  line-height: 1.45;
}

@media (max-width: 860px) {
  .about-main-card {
    padding: 30px 20px;
  }
  .creator-support-strip {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
