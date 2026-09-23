<template>
  <section id="judging" class="judging-section">
    <div class="container-custom">
      <div class="section-header text-center">
        <span class="section-badge">EVALUATION METRICS</span>
        <h2 class="section-title">
          Fair, Transparent <span class="text-gradient-hero">Judging Criteria</span>
        </h2>
        <p class="section-subtitle">
          Every submission is rigorously screened and reviewed by industry professionals across 4 core pillars.
        </p>
      </div>

      <div class="criteria-grid">
        <!-- Criteria 1 -->
        <div class="criteria-card card-glow">
          <div class="card-top">
            <span class="criteria-icon">🎨</span>
            <span class="criteria-weight weight-blue">25%</span>
          </div>
          <h3 class="criteria-title">Creativity & Storytelling</h3>
          <p class="criteria-desc">
            Novelty of concept, emotional engagement, clever narrative hooks, and originality of approach within the 3-minute format.
          </p>
          <ul class="criteria-points">
            <li>Original storyline & flow</li>
            <li>Unique thematic perspective</li>
            <li>Engaging opening & payoff</li>
          </ul>
        </div>

        <!-- Criteria 2 -->
        <div class="criteria-card card-glow">
          <div class="card-top">
            <span class="criteria-icon">🎬</span>
            <span class="criteria-weight weight-orange">25%</span>
          </div>
          <h3 class="criteria-title">Editing & Technical Excellence</h3>
          <p class="criteria-desc">
            Visual pacing, rhythmic cuts, clean sound mix, dynamic color grading, and technical camera mastery.
          </p>
          <ul class="criteria-points">
            <li>Seamless jump cuts & transitions</li>
            <li>Audio fidelity & background score</li>
            <li>Lighting and frame stability</li>
          </ul>
        </div>

        <!-- Criteria 3 -->
        <div class="criteria-card card-glow">
          <div class="card-top">
            <span class="criteria-icon">🎭</span>
            <span class="criteria-weight weight-green">25%</span>
          </div>
          <h3 class="criteria-title">Performance & Direction</h3>
          <p class="criteria-desc">
            Authenticity in acting, screen presence, directorial vision, dialogue delivery, and relatable character expression.
          </p>
          <ul class="criteria-points">
            <li>Believable acting & expressions</li>
            <li>Directorial control & staging</li>
            <li>Clear voice delivery / subtitle sync</li>
          </ul>
        </div>

        <!-- Criteria 4 -->
        <div class="criteria-card card-glow">
          <div class="card-top">
            <span class="criteria-icon">💡</span>
            <span class="criteria-weight weight-blue">25%</span>
          </div>
          <h3 class="criteria-title">Social Impact & Message Strength</h3>
          <p class="criteria-desc">
            Clarity of the constructive social message, resonance with youth, and potential to inspire real-world awareness or action.
          </p>
          <ul class="criteria-points">
            <li>Relevance to Tamil Nadu society</li>
            <li>Call to constructive action</li>
            <li>Inspiring & empowering tone</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.judging-section {
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
  color: #2563EB;
  text-transform: uppercase;
  margin-bottom: 12px;
  background: #EFF6FF;
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

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.criteria-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.criteria-icon {
  font-size: 2.2rem;
}

.criteria-weight {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 8px;
}

.weight-blue {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #2563EB;
}

.weight-orange {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #2563EB;
}

.weight-green {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #2563EB;
}

.criteria-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: #10183F;
  margin-bottom: 12px;
}

.criteria-desc {
  font-size: 0.875rem;
  color: #526078;
  line-height: 1.55;
  margin-bottom: 20px;
  flex-grow: 1;
}

.criteria-points {
  list-style: none;
  border-top: 1px solid #E2E8F0;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.825rem;
  color: #10183F;
}

.criteria-points li {
  position: relative;
  padding-left: 16px;
}

.criteria-points li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #2563EB;
  font-weight: bold;
}

@media (max-width: 1024px) {
  .criteria-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .criteria-grid {
    grid-template-columns: 1fr;
  }
}
</style>
