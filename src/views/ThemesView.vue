<template>
  <div class="page-container">
    <div class="page-header">
      <div class="container-custom">
        <h1 class="page-title">Explore the Themes</h1>
        <p class="page-subtitle">Choose your path and start creating impact.</p>
      </div>
    </div>
    
    <div class="container-custom page-content">
      <div class="themes-list">
        <div v-for="(theme, idx) in themes" :key="idx" class="theme-row" :style="{ animationDelay: `${idx * 0.15}s` }">
          <div class="t-img-box">
            <img :src="theme.img" alt="Theme image" class="t-img" />
            <div class="t-icon-overlay">{{ theme.icon }}</div>
          </div>
          <div class="t-info">
            <h2>{{ theme.title }}</h2>
            <p>{{ theme.desc }}</p>
          </div>
          <div class="t-action">
            <button class="btn-secondary">Explore Theme</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const themes = [
  { title: 'Education', desc: 'Ensuring access to quality learning and skill development for underserved youth.', icon: '📚', img: '/education.jpg' },
  { title: 'Environment', desc: 'Protecting our planet through climate action and restoring natural ecosystems.', icon: '🌱', img: '/theme-environment.jpg' },
  { title: 'Women Empowerment', desc: 'Championing gender equality and creating safe spaces for women to thrive.', icon: '✊', img: '/theme-women-new.jpg' },
  { title: 'Health & Wellbeing', desc: 'Promoting physical health and mental wellbeing in local communities.', icon: '🏥', img: '/theme-health.jpg' },
  { title: 'Community Development', desc: 'Building better local infrastructure and strengthening neighborhood networks.', icon: '🏘️', img: '/community.jpg' },
  { title: 'Technology for Good', desc: 'Leveraging digital tools to solve pressing social challenges.', icon: '💻', img: '/theme-tech.jpg' },
  { title: 'Sustainability', desc: 'Advocating for circular economies and responsible consumption practices.', icon: '♻️', img: '/theme-sustain.jpg' },
  { title: 'Social Awareness', desc: 'Raising voices against injustice and driving public dialogue for policy changes.', icon: '📢', img: '/theme-awareness.jpg' }
]
</script>

<style scoped>
.page-container {
  padding-bottom: 120px;
  background: var(--bg-secondary);
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(rgba(11, 27, 61, 0.6), rgba(11, 27, 61, 0.75)), url('/education.jpg') center 30%/cover no-repeat;
  padding: 240px 0 160px;
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
  margin-top: -60px;
}

.themes-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.theme-row {
  background: var(--bg-card);
  border-radius: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 32px;
  box-shadow: 0 10px 30px rgba(11, 27, 61, 0.05);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  border: 1px solid var(--border-subtle);
  animation: fadeUp 0.6s ease-out backwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.theme-row:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.15);
  border-color: #2563EB;
}

.t-img-box {
  width: 200px;
  height: 140px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.t-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.theme-row:hover .t-img {
  transform: scale(1.1);
}

.t-icon-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #FFFFFF;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.t-info {
  flex: 1;
}

.t-info h2 {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--brand-navy);
  margin-bottom: 8px;
}

.t-info p {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
}

.t-action {
  flex-shrink: 0;
  padding-right: 20px;
}

@media (max-width: 992px) {
  .theme-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
  }
  .t-img-box {
    width: 100%;
    height: 200px;
  }
}
</style>
