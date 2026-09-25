<template>
  <div class="page-container">
    <div class="page-header">
      <div class="container-custom">
        <h1 class="page-title">Prize Pool & Recognition</h1>
        <p class="page-subtitle">Funding and resources to scale your community impact.</p>
      </div>
    </div>
    
    <div class="container-custom page-content">
      <div class="prize-showcase">
        
        <div class="grand-prize-card">
          <div class="gp-content">
            <span class="badge-gold">GRAND WINNER</span>
            <h2>₹50,000 Project Funding</h2>
            <p>The top initiative will receive a direct grant of ₹50,000 to scale their project, along with 6 months of dedicated mentorship from industry leaders, and the "Social Innovator of the Year" trophy.</p>
            <ul class="gp-perks">
              <li>🏆 Official State Trophy</li>
              <li>🤝 6 Months Mentorship</li>
              <li>📢 Media Feature & Press Release</li>
            </ul>
          </div>
          <div class="gp-visual">
            <img src="/winner-cup-medal.jpg" alt="Winner Cup and Gold Medal" class="gold-orb" />
          </div>
        </div>

        <div class="other-prizes-grid">
          <div class="prize-card">
            <div class="p-rank">02</div>
            <h3>Runner-Up Grant</h3>
            <div class="p-val">₹25,000</div>
            <p>Funding to sustain the initiative and an official certificate of excellence.</p>
          </div>
          
          <div class="prize-card">
            <div class="p-rank">03</div>
            <h3>Community Impact Award</h3>
            <div class="p-val">₹15,000</div>
            <p>Awarded to the project that demonstrates the highest grassroots engagement.</p>
          </div>

          <div class="prize-card">
            <div class="p-rank">⭐</div>
            <h3>Special Recognition</h3>
            <div class="p-val">15 Categories</div>
            <p>Trophies and honors across different themes like Environment, Education, etc.</p>
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
  background-image: linear-gradient(rgba(11, 27, 61, 0.6), rgba(11, 27, 61, 0.75)), url('/prize-trophy-new.jpg');
  background-position: center 10%;
  background-size: cover;
  background-repeat: no-repeat;
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

.grand-prize-card {
  background: var(--bg-card);
  border-radius: 32px;
  padding: 60px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  box-shadow: 0 20px 60px rgba(11, 27, 61, 0.1);
  border: 1px solid var(--border-highlight);
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
}

.badge-gold {
  display: inline-block;
  background: linear-gradient(135deg, #FFB75E, #ED8F03);
  color: #FFF;
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.gp-content h2 {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--brand-navy);
  margin-bottom: 24px;
  line-height: 1.1;
}

.gp-content p {
  font-size: 1.15rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 32px;
}

.gp-perks {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.gp-perks li {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--brand-navy);
  display: flex;
  align-items: center;
  gap: 12px;
}

.gp-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.gold-orb {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 20px 80px rgba(255, 183, 94, 0.4);
  animation: float 6s ease-in-out infinite;
  border: 8px solid #FFFFFF;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.other-prizes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.prize-card {
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid var(--border-subtle);
  transition: transform 0.3s ease;
}

.prize-card:hover {
  transform: translateY(-8px);
  border-color: var(--brand-coral);
}

.p-rank {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--border-highlight);
  margin-bottom: 16px;
}

.prize-card h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--brand-navy);
  margin-bottom: 8px;
}

.p-val {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--brand-coral);
  margin-bottom: 16px;
}

.prize-card p {
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 992px) {
  .grand-prize-card {
    grid-template-columns: 1fr;
    padding: 40px;
  }
  .gp-visual {
    display: none;
  }
  .other-prizes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
