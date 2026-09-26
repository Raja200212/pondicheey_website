<template>
  <section class="themes-section">
    <div class="container-custom">
      <div class="section-header-center">
        <span class="section-badge">EXPLORE THE THEMES</span>
        <h2 class="section-title">Where Will You Lead?</h2>
        <p class="section-desc-center">Choose a focus area where you want to make an impact. Each theme represents a critical challenge facing our communities today.</p>
      </div>

      <div class="themes-grid">
        <div v-for="(theme, idx) in themes" :key="theme.id" class="theme-card" :style="{ animationDelay: `${idx * 0.1}s` }">
          <div class="card-img-top">
            <img :src="theme.img" alt="Theme Image" class="t-img" />
          </div>
          <div class="card-body">
            <div class="theme-icon-box">{{ theme.icon }}</div>
            <h3 class="theme-title">{{ theme.title }}</h3>
            <p class="theme-desc">{{ theme.desc }}</p>
            <router-link to="/themes" class="explore-btn">
              <span>Explore Theme</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import educationImg from '../images/Education.jpeg'
import environmentImg from '../images/Environment.jpeg'
import womenEmpowermentImg from '../images/WomenEmpowerment.jpeg'
import wellbeingImg from '../images/wellbeing.jpeg'
const themes = [
  { id: 1, title: 'Education', desc: 'Ensuring access to quality learning and skill development.', icon: '📚', img: educationImg },
  { id: 2, title: 'Environment', desc: 'Protecting our planet and restoring natural ecosystems.', icon: '🌱', img: environmentImg },
  { id: 3, title: 'Women Empowerment', desc: 'Championing equality and supporting female leaders.', icon: '✊', img: womenEmpowermentImg },
  { id: 4, title: 'Health & Wellbeing', desc: 'Promoting physical and mental health in the community.', icon: '🏥', img: wellbeingImg }
]
</script>

<style scoped>
.themes-section {
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
  color: var(--text-heading);
  line-height: 1.2;
  margin-bottom: 20px;
}

.section-desc-center {
  font-size: 1.15rem;
  color: var(--text-muted);
}

.themes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.theme-card {
  background: var(--bg-card);
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(11, 27, 61, 0.04);
  border: 1px solid var(--border-subtle);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  animation: fadeUp 0.6s ease-out backwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.theme-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.15);
  border-color: #2563EB;
}

.card-img-top {
  height: 160px;
  width: 100%;
  overflow: hidden;
}

.t-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.theme-card:hover .t-img {
  transform: scale(1.1);
}

.card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}

.theme-icon-box {
  width: 50px;
  height: 50px;
  background: #FFFFFF;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-top: -50px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid var(--border-subtle);
  position: relative;
  z-index: 2;
}

.theme-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--brand-navy);
  margin-bottom: 12px;
}

.theme-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--brand-coral);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto;
}

.explore-btn:hover {
  color: var(--brand-coral-hover);
}

.explore-btn svg {
  transition: transform 0.3s ease;
}

.explore-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 1100px) {
  .themes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .themes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
