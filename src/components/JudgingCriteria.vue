<template>
  <section class="judging-section">
    <div class="container-custom">
      <div class="section-header-center">
        <span class="section-badge">EVALUATION</span>
        <h2 class="section-title">Judging Criteria</h2>
        <p class="section-desc-center">Projects are evaluated based on their real-world effectiveness and the leadership demonstrated by the team.</p>
      </div>

      <div class="criteria-grid">
        <div class="criteria-card">
          <div class="c-header">
            <h3>Social Impact</h3>
            <span class="c-percent">30%</span>
          </div>
          <div class="progress-bar"><div class="fill" style="width: 30%;"></div></div>
          <p>The measurable difference made in the community and the sustainability of the solution.</p>
        </div>
        
        <div class="criteria-card">
          <div class="c-header">
            <h3>Creativity</h3>
            <span class="c-percent">20%</span>
          </div>
          <div class="progress-bar"><div class="fill" style="width: 20%;"></div></div>
          <p>Originality of the approach and innovative use of available resources.</p>
        </div>

        <div class="criteria-card">
          <div class="c-header">
            <h3>Leadership</h3>
            <span class="c-percent">20%</span>
          </div>
          <div class="progress-bar"><div class="fill" style="width: 20%;"></div></div>
          <p>Demonstrated ability to inspire others, organize efforts, and overcome challenges.</p>
        </div>

        <div class="criteria-card">
          <div class="c-header">
            <h3>Storytelling</h3>
            <span class="c-percent">15%</span>
          </div>
          <div class="progress-bar"><div class="fill" style="width: 15%;"></div></div>
          <p>How well the journey and impact are documented and communicated to the public.</p>
        </div>

        <div class="criteria-card">
          <div class="c-header">
            <h3>Community Engagement</h3>
            <span class="c-percent">15%</span>
          </div>
          <div class="progress-bar"><div class="fill" style="width: 15%;"></div></div>
          <p>The extent to which local stakeholders and community members were involved.</p>
        </div>
      </div>
      
      <div class="text-center mt-6">
        <router-link to="/judging" class="btn-secondary">View Detailed Rubric</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.judging-section {
  padding: 120px 0;
  background-color: var(--bg-secondary);
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

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
}

.criteria-card {
  background: #FFFFFF;
  padding: 32px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(11, 27, 61, 0.05);
  border: 1px solid rgba(11, 27, 61, 0.05);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.criteria-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.04) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.criteria-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(11, 27, 61, 0.1);
  border-color: rgba(37, 99, 235, 0.2);
}

.criteria-card:hover::after {
  opacity: 1;
}

.c-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.c-header h3 {
  font-family: var(--font-display, 'Inter', sans-serif);
  font-size: 1.4rem;
  font-weight: 800;
  color: #0B1B3D;
}

.c-percent {
  font-family: var(--font-display, 'Inter', sans-serif);
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--brand-blue);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #F1F5F9;
  border-radius: 9999px;
  margin-bottom: 20px;
  overflow: hidden;
}

.progress-bar .fill {
  height: 100%;
  background: linear-gradient(90deg, var(--brand-blue) 0%, #60A5FA 100%);
  border-radius: 9999px;
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
}

.criteria-card p {
  color: #64748B;
  font-size: 1.05rem;
  line-height: 1.6;
}

.text-center {
  text-align: center;
}

.mt-6 {
  margin-top: 48px;
}
</style>
