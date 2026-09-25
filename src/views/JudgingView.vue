<template>
  <div class="page-container">
    <div class="page-header">
      <div class="container-custom">
        <h1 class="page-title">Judging Process</h1>
        <p class="page-subtitle">Transparent criteria for evaluating community impact.</p>
      </div>
    </div>
    
    <div class="container-custom page-content">
      <div class="judging-panel">
        <div class="intro-box">
          <h2>How We Evaluate</h2>
          <p>The evaluation process focuses heavily on the tangible difference your project makes. We are not just looking for creative ideas; we are looking for executed solutions that demonstrate leadership, community involvement, and long-term potential.</p>
        </div>

        <div class="criteria-list">
          
          <div class="c-row">
            <div class="c-stats">
              <span class="c-percent">30%</span>
              <div class="bar-bg"><div class="bar-fill" style="width:30%"></div></div>
            </div>
            <div class="c-details">
              <h3>Social Impact & Effectiveness</h3>
              <p>How many people were positively affected? Is the solution sustainable? Did it solve the core problem identified in the community?</p>
            </div>
          </div>

          <div class="c-row">
            <div class="c-stats">
              <span class="c-percent">20%</span>
              <div class="bar-bg"><div class="bar-fill" style="width:20%"></div></div>
            </div>
            <div class="c-details">
              <h3>Creativity & Innovation</h3>
              <p>Does the project approach the problem from a unique angle? Does it use resources efficiently in a novel way?</p>
            </div>
          </div>

          <div class="c-row">
            <div class="c-stats">
              <span class="c-percent">20%</span>
              <div class="bar-bg"><div class="bar-fill" style="width:20%"></div></div>
            </div>
            <div class="c-details">
              <h3>Youth Leadership</h3>
              <p>Did the participants demonstrate strong organizational skills, resilience in the face of challenges, and the ability to mobilize others?</p>
            </div>
          </div>

          <div class="c-row">
            <div class="c-stats">
              <span class="c-percent">15%</span>
              <div class="bar-bg"><div class="bar-fill" style="width:15%"></div></div>
            </div>
            <div class="c-details">
              <h3>Storytelling & Documentation</h3>
              <p>How compelling is the project presentation? Is the journey documented clearly to inspire others to take action?</p>
            </div>
          </div>

          <div class="c-row">
            <div class="c-stats">
              <span class="c-percent">15%</span>
              <div class="bar-bg"><div class="bar-fill" style="width:15%"></div></div>
            </div>
            <div class="c-details">
              <h3>Community Engagement</h3>
              <p>Were local stakeholders involved? Did the project foster collaboration rather than a top-down approach?</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-bottom: 120px;
  background: var(--bg-primary);
}

.page-header {
  background-image: linear-gradient(rgba(11, 27, 61, 0.6), rgba(11, 27, 61, 0.75)), url('/judging-process-new.jpg');
  background-position: center 90%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 300px 0 160px;
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
  margin-top: -40px;
}

.judging-panel {
  background: var(--bg-card);
  padding: 60px;
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(11, 27, 61, 0.08);
  max-width: 900px;
  margin: 0 auto;
}

.intro-box {
  text-align: center;
  margin-bottom: 60px;
}

.intro-box h2 {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--brand-navy);
  margin-bottom: 16px;
}

.intro-box p {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.7;
}

.criteria-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.c-row {
  display: flex;
  align-items: center;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border-subtle);
}

.c-row:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.c-stats {
  width: 150px;
  flex-shrink: 0;
}

.c-percent {
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--brand-coral);
  margin-bottom: 8px;
}

.bar-bg {
  width: 100%;
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: var(--brand-navy);
  border-radius: 4px;
}

.c-details h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--brand-navy);
  margin-bottom: 12px;
}

.c-details p {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .judging-panel {
    padding: 30px;
  }
  .c-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .c-stats {
    width: 100%;
  }
}
</style>
