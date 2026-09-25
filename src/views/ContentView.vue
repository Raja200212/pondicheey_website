<template>
  <div class="page-container">
    <div class="page-header">
      <div class="container-custom">
        <h1 class="page-title">Content & Creator Guide</h1>
        <p class="page-subtitle">How to tell your impact story effectively.</p>
      </div>
    </div>
    
    <div class="container-custom page-content">
      <!-- Storytelling Guidelines -->
      <section class="guide-section">
        <div class="section-title-wrap">
          <span class="badge">STORYTELLING</span>
          <h2>Crafting Your Message</h2>
        </div>
        <div class="guide-grid">
          <div class="guide-card">
            <div class="g-icon">❤️</div>
            <h3>Be Authentic</h3>
            <p>Show real emotions, real people, and real struggles. Don't stage or script interactions unnaturally.</p>
          </div>
          <div class="guide-card">
            <div class="g-icon">🎯</div>
            <h3>Focus on Action</h3>
            <p>Don't just talk about the problem. Show us the steps you are taking to solve it.</p>
          </div>
          <div class="guide-card">
            <div class="g-icon">🎙️</div>
            <h3>Elevate Voices</h3>
            <p>Let the community members speak for themselves instead of speaking for them.</p>
          </div>
        </div>
      </section>

      <!-- Content Format -->
      <section class="guide-section bg-light-wrap">
        <div class="section-title-wrap">
          <span class="badge">FORMAT</span>
          <h2>Technical Requirements</h2>
        </div>
        <div class="format-grid">
          <div class="format-card">
            <div class="f-icon">⏱️</div>
            <div class="f-info">
              <strong>Length</strong>
              <p>1 to 3 minutes maximum.</p>
            </div>
          </div>
          <div class="format-card">
            <div class="f-icon">📱</div>
            <div class="f-info">
              <strong>Orientation</strong>
              <p>Vertical (9:16) optimized for mobile viewing.</p>
            </div>
          </div>
          <div class="format-card">
            <div class="f-icon">🎬</div>
            <div class="f-info">
              <strong>Resolution</strong>
              <p>1080p minimum. Clear audio is crucial.</p>
            </div>
          </div>
          <div class="format-card">
            <div class="f-icon">🌍</div>
            <div class="f-info">
              <strong>Language</strong>
              <p>Local languages are encouraged. English subtitles required.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Do's and Don'ts -->
      <section class="guide-section">
        <div class="section-title-wrap">
          <span class="badge">GUIDELINES</span>
          <h2>Do's & Don'ts</h2>
        </div>
        <div class="dos-donts-grid">
          <div class="dos-card">
            <h3>✅ DO</h3>
            <ul>
              <li>Focus on the impact and the people.</li>
              <li>Use natural lighting and authentic settings.</li>
              <li>Keep the message clear and concise.</li>
              <li>Include a call-to-action for the viewer.</li>
            </ul>
          </div>
          <div class="donts-card">
            <h3>❌ DON'T</h3>
            <ul>
              <li>Use copyrighted music without permission.</li>
              <li>Create overly corporate or promotional content.</li>
              <li>Exploit vulnerable individuals for views.</li>
              <li>Use excessive filters or artificial effects.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-bottom: 120px;
}

.page-header {
  background: linear-gradient(rgba(11, 27, 61, 0.6), rgba(11, 27, 61, 0.75)), url('/indian_creators_filming.jpg') center 30%/cover no-repeat;
  padding: 300px 0 200px;
  text-align: center;
  color: #FFFFFF;
}

.page-title {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 16px;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--brand-coral);
  font-weight: 600;
}

.page-content {
  margin-top: 60px;
}

.guide-section {
  margin-bottom: 80px;
}

.section-title-wrap {
  text-align: center;
  margin-bottom: 48px;
}

.badge {
  display: inline-block;
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--brand-blue);
  letter-spacing: 2px;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.section-title-wrap h2 {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--brand-navy);
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.guide-card {
  background: #FFFFFF;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(11, 27, 61, 0.05);
  border: 1px solid var(--border-subtle);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.guide-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(37, 99, 235, 0) 100%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.guide-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.15);
  border-color: rgba(37, 99, 235, 0.3);
}

.guide-card:hover::before {
  opacity: 1;
}

.g-icon {
  font-size: 3.5rem;
  margin-bottom: 24px;
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.guide-card:hover .g-icon {
  transform: scale(1.2) rotate(5deg);
}

.guide-card h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--brand-navy);
  margin-bottom: 16px;
}

.guide-card p {
  color: var(--text-muted);
  line-height: 1.6;
}

.bg-light-wrap {
  background: var(--bg-secondary);
  padding: 60px;
  border-radius: 32px;
}

.format-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.format-card {
  background: #FFFFFF;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(11, 27, 61, 0.04);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  gap: 24px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.format-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(37, 99, 235, 0.1);
  border-color: rgba(37, 99, 235, 0.2);
}

.f-icon {
  font-size: 2.5rem;
  background: var(--bg-secondary);
  width: 70px;
  height: 70px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform 0.3s ease, background 0.3s ease;
}

.format-card:hover .f-icon {
  transform: scale(1.1) rotate(-10deg);
  background: rgba(37, 99, 235, 0.08);
}

.f-info strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--brand-navy);
  margin-bottom: 4px;
}

.f-info p {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.5;
}

.dos-donts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.dos-card, .donts-card {
  padding: 40px;
  border-radius: 24px;
}

.dos-card {
  background: rgba(46, 125, 50, 0.05);
  border: 1px solid rgba(46, 125, 50, 0.2);
}

.donts-card {
  background: rgba(255, 107, 107, 0.05);
  border: 1px solid rgba(255, 107, 107, 0.2);
}

.dos-card h3 {
  color: var(--brand-green);
  font-family: var(--font-display);
  font-size: 1.6rem;
  margin-bottom: 24px;
}

.donts-card h3 {
  color: var(--brand-coral);
  font-family: var(--font-display);
  font-size: 1.6rem;
  margin-bottom: 24px;
}

.dos-card ul, .donts-card ul {
  padding-left: 20px;
}

.dos-card li, .donts-card li {
  margin-bottom: 16px;
  font-size: 1.1rem;
  color: var(--text-main);
  line-height: 1.5;
}

@media (max-width: 992px) {
  .guide-grid, .dos-donts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
