<template>
  <section id="prizes" class="prizes-section">
    <div class="container-custom">
      <div class="section-header text-center">
        <span class="section-badge">RECOGNITION & PRIZES</span>
        <h2 class="section-title">
          Prize Pool <span class="text-gradient-gold">₹90,000+</span> & Special Awards
        </h2>
        <p class="section-subtitle">
          Over 15 winning positions, prestigious trophies, and certificates for every single participant.
        </p>
      </div>

      <!-- Top 3 Podium Cards -->
      <div class="podium-grid">
        <!-- 2nd Prize -->
        <div class="podium-card silver-card">
          <div class="medal-badge silver-badge">🥈 2nd PRIZE</div>
          <div class="prize-amount silver-text">₹25,000</div>
          <div class="prize-title">Runner Up</div>
          <ul class="prize-perks">
            <li>✨ Prestigious Silver Trophy & Certificate</li>
            <li>🎬 Feature in We The Leaders Official Showcase</li>
            <li>🤝 Exclusive Invite to Grand Finale in Chennai</li>
          </ul>
        </div>

        <!-- 1st Prize (Center Spotlight) -->
        <div class="podium-card gold-card spotlight-podium">
          <div class="winner-crown">👑</div>
          <div class="medal-badge gold-badge">🥇 1st PRIZE (CHAMPION)</div>
          <div class="prize-amount gold-text">₹50,000</div>
          <div class="prize-title">Grand State Winner</div>
          <ul class="prize-perks">
            <li>🏆 Grand Gold Trophy & Framed State Honor</li>
            <li>🌟 Direct Handover from Celebrity Jury at Chennai Finale</li>
            <li>🎥 Mentorship & Networking with Film Industry Directors</li>
            <li>🚀 Statewide Social Media Blast & Media Coverage</li>
          </ul>
          <div class="top-tag">STATE CHAMPION</div>
        </div>

        <!-- 3rd Prize -->
        <div class="podium-card bronze-card">
          <div class="medal-badge bronze-badge">🥉 3rd PRIZE</div>
          <div class="prize-amount bronze-text">₹15,000</div>
          <div class="prize-title">2nd Runner Up</div>
          <ul class="prize-perks">
            <li>✨ Bronze Trophy & Official Certificate</li>
            <li>🎬 Spotlight Feature across Partner Channels</li>
            <li>🤝 Exclusive Invite to Grand Finale in Chennai</li>
          </ul>
        </div>
      </div>

      <!-- Total Pool Summary Banner -->
      <div class="prize-summary-strip">
        <div class="summary-content">
          <div class="summary-icon">📜</div>
          <div>
            <strong>100% Certificate of Participation</strong>
            <p>Every participant who registers and submits an eligible reel will receive an Official Digital Certificate.</p>
          </div>
        </div>
        <div class="summary-badge">
          <span>Up to 15 Winning Positions</span>
        </div>
      </div>

      <!-- 12 Special Category Badges Grid -->
      <div class="special-categories-wrapper">
        <h3 class="category-grid-title text-center">
          <span class="sparkle">✨</span> 12 Special Category Awards & Badges <span class="sparkle">✨</span>
        </h3>
        <p class="category-grid-sub text-center">
          Special citations awarded to outstanding craft and storytelling excellence
        </p>

        <div class="categories-grid">
          <div v-for="(cat, idx) in specialCategories" :key="idx" class="category-card card-glow">
            <div class="cat-icon">{{ cat.icon }}</div>
            <div class="cat-name">{{ cat.title }}</div>
            <div class="cat-desc">{{ cat.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const specialCategories = [
  { icon: "✂️", title: "Best Editing", desc: "Pacing, seamless transitions & visual rhythm" },
  { icon: "🎭", title: "Best Performance", desc: "Compelling on-screen acting & expressions" },
  { icon: "✍️", title: "Best Script & Story", desc: "Original, engaging concept & sharp dialogue" },
  { icon: "📹", title: "Best Cinematography", desc: "Visual composition, framing & camera work" },
  { icon: "🎨", title: "Most Creative Reel", desc: "Out-of-the-box perspective & style" },
  { icon: "💡", title: "Best Social Impact", desc: "Highest potential to drive positive change" },
  { icon: "🎙️", title: "Best Voice & Narration", desc: "Clarity, emotional tone & voice delivery" },
  { icon: "🎵", title: "Best Music & Sound Design", desc: "Impactful audio scoring & sound effects" },
  { icon: "🌱", title: "Best Environmental Awareness", desc: "Inspiring sustainability & green causes" },
  { icon: "🔥", title: "Best Youth Inspiration", desc: "Empowering today's youth into leadership" },
  { icon: "⚡", title: "Most Powerful Message", desc: "Leaving an unforgettable after-thought" },
  { icon: "👑", title: "Jury Special Award", desc: "Special recognition from our celebrity jury" }
]
</script>

<style scoped>
.prizes-section {
  padding: 90px 0;
  position: relative;
  background-color: #F8FAFC;
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

/* Podium Grid */
.podium-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr 1fr;
  gap: 24px;
  align-items: center;
  margin-bottom: 40px;
}

.podium-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(16, 24, 63, 0.05);
}

.podium-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(16, 24, 63, 0.1);
}

.silver-card {
  background: #FFFFFF;
  border-color: #BFDBFE;
}

.silver-badge {
  color: #2563EB;
  background: #EFF6FF;
  padding: 4px 12px;
  border-radius: 9999px;
  display: inline-block;
}

.silver-text {
  color: #10183F;
}

.bronze-card {
  background: #FFFFFF;
  border-color: #BFDBFE;
}

.bronze-badge {
  color: #2563EB;
  background: #EFF6FF;
  padding: 4px 12px;
  border-radius: 9999px;
  display: inline-block;
}

.bronze-text {
  color: #10183F;
}

.spotlight-podium {
  background: #10183F;
  border: 2px solid #2563EB;
  box-shadow: 0 16px 40px rgba(16, 24, 63, 0.25);
  transform: scale(1.05);
  padding: 42px 28px;
  z-index: 5;
  color: #FFFFFF;
}

.spotlight-podium:hover {
  transform: scale(1.07) translateY(-4px);
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.3);
}

.spotlight-podium .prize-title {
  color: #94A3B8;
}

.spotlight-podium .prize-perks {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
}

.winner-crown {
  font-size: 2.2rem;
  margin-top: -15px;
  margin-bottom: 8px;
  animation: float 3s ease-in-out infinite;
}

.top-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #2563EB;
  color: #FFFFFF;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  padding: 4px 18px;
  border-radius: 9999px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.medal-badge {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.gold-badge {
  color: #93C5FD;
  background: rgba(37, 99, 235, 0.2);
  padding: 4px 14px;
  border-radius: 9999px;
  display: inline-block;
  border: 1px solid rgba(147, 197, 253, 0.3);
}

.prize-amount {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.7rem);
  font-weight: 900;
  margin-bottom: 4px;
}

.gold-text {
  color: #FFFFFF;
}

.prize-title {
  font-size: 1rem;
  font-weight: 700;
  color: #526078;
  margin-bottom: 20px;
}

.prize-perks {
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.875rem;
  color: #10183F;
  border-top: 1px solid rgba(16, 24, 63, 0.1);
  padding-top: 18px;
}

.prize-perks li {
  line-height: 1.45;
}

/* Summary Strip */
.prize-summary-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 32px;
  margin-bottom: 60px;
  border: 1px solid #E2E8F0;
  background: #FFFFFF;
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(16, 24, 63, 0.04);
}

.summary-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.summary-icon {
  font-size: 2rem;
}

.summary-content strong {
  display: block;
  font-size: 1.05rem;
  color: #10183F;
}

.summary-content p {
  font-size: 0.875rem;
  color: #526078;
}

.summary-badge span {
  background: #EFF6FF;
  padding: 8px 18px;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 800;
  color: #2563EB;
  border: 1px solid #BFDBFE;
  white-space: nowrap;
}

/* 12 Special Categories */
.category-grid-title {
  font-family: var(--font-cinematic);
  font-size: 1.7rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 6px;
}

.sparkle {
  color: #2563EB;
}

.category-grid-sub {
  color: #526078;
  font-size: 0.95rem;
  margin-bottom: 32px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.category-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  padding: 22px 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
}

.cat-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.cat-name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: #10183F;
  margin-bottom: 6px;
}

.cat-desc {
  font-size: 0.8rem;
  color: #526078;
  line-height: 1.4;
}

@media (max-width: 992px) {
  .podium-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto 40px;
  }
  .spotlight-podium {
    transform: none;
    order: -1;
  }
  .spotlight-podium:hover {
    transform: translateY(-6px);
  }
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .prize-summary-strip {
    flex-direction: column;
    text-align: center;
  }
  .summary-content {
    flex-direction: column;
  }
}

@media (max-width: 580px) {
  .categories-grid {
    grid-template-columns: 1fr;
  }
}
</style>
