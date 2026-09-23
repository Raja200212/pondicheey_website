<template>
  <section id="content-themes" class="content-topics-section">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="section-header text-center">
        <span class="section-badge">CONTENT GUIDE & INSPIRATION</span>
        <h2 class="section-title">
          Reel Themes & <span class="text-gradient-hero">Content Topics</span>
        </h2>
        <p class="section-subtitle">
          Choose a theme that sparks your creative passion. Your 3-minute story can ignite real transformation.
        </p>
      </div>

      <!-- Theme Selector Tabs -->
      <div class="theme-tabs-wrapper">
        <button
          v-for="(theme, idx) in themes"
          :key="theme.id"
          class="theme-tab-btn"
          :class="{ active: activeThemeIndex === idx }"
          @click="activeThemeIndex = idx"
        >
          <span class="tab-icon">{{ theme.icon }}</span>
          <span class="tab-title">{{ theme.title }}</span>
        </button>
      </div>

      <!-- Active Theme Detail Card -->
      <div class="active-theme-card glass-panel animate-fade">
        <div class="theme-card-grid">
          <div class="theme-info-col">
            <div class="theme-header-row">
              <span class="theme-category-pill">{{ currentTheme.category }}</span>
              <span class="theme-badge-id">Theme #{{ activeThemeIndex + 1 }}</span>
            </div>

            <h3 class="active-theme-title">
              {{ currentTheme.title }}
            </h3>

            <p class="active-theme-desc">
              {{ currentTheme.description }}
            </p>

            <!-- Suggested Video Hooks / Story Ideas -->
            <div class="hooks-section">
              <h4 class="hooks-heading">
                <span>💡</span> Suggested Story Concepts & Angles:
              </h4>
              <ul class="hooks-list">
                <li v-for="(idea, i) in currentTheme.ideas" :key="i">
                  <span class="hook-bullet">▹</span>
                  <span>{{ idea }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Quick Creator Prompt Box -->
          <div class="theme-prompt-col">
            <div class="prompt-box">
              <div class="prompt-box-header">
                <span class="prompt-icon">🎬</span>
                <div>
                  <span class="prompt-subtitle">READY-TO-USE CONCEPT HOOK</span>
                  <h4 class="prompt-title">The 3-Minute Blueprint</h4>
                </div>
              </div>

              <div class="prompt-quote-box">
                <p class="prompt-text">"{{ currentTheme.sampleHook }}"</p>
              </div>

              <div class="prompt-meta-grid">
                <div class="meta-item">
                  <span class="meta-label">Ideal Pacing</span>
                  <span class="meta-val">Fast Hook + Core Story</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Suggested Audio</span>
                  <span class="meta-val">Tamil / Voiceover / Instrumental</span>
                </div>
              </div>

              <a href="#register" class="btn-primary w-full text-center">
                <span>I Have a Concept — Register Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- All 6 Themes Grid Overview -->
      <div class="all-themes-grid">
        <div
          v-for="(theme, idx) in themes"
          :key="theme.id"
          class="theme-mini-card card-glow"
          :class="{ 'card-active-border': activeThemeIndex === idx }"
          @click="activeThemeIndex = idx"
        >
          <div class="mini-icon-box">{{ theme.icon }}</div>
          <div class="mini-content">
            <h4 class="mini-title">{{ theme.title }}</h4>
            <p class="mini-summary">{{ theme.shortSummary }}</p>
          </div>
          <span class="explore-arrow">→</span>
        </div>
      </div>

      <!-- Content Guidelines: Do's & Don'ts Strip -->
      <div class="guidelines-container">
        <div class="guideline-card dos-card">
          <div class="guideline-header">
            <span class="guideline-icon">✅</span>
            <h3>Content DO's (Winning Practices)</h3>
          </div>
          <ul class="guideline-list">
            <li><strong>Hook in 3 Seconds:</strong> Grab attention immediately with dynamic framing or powerful opening dialogue.</li>
            <li><strong>Constructive Takeaway:</strong> Conclude with an inspiring solution, call to action, or uplifting perspective.</li>
            <li><strong>Clear Audio & Subtitles:</strong> Ensure dialogue is crystal clear; add Tamil/English subtitles for wider reach.</li>
            <li><strong>Original Footage:</strong> Capture real shots, authentic acting, and genuine local storytelling.</li>
            <li><strong>Mandatory Collab:</strong> Post publicly on Instagram & send collaboration request to <strong>@wtl_leadingthechange</strong>.</li>
          </ul>
        </div>

        <div class="guideline-card donts-card">
          <div class="guideline-header">
            <span class="guideline-icon">🚫</span>
            <h3>Content DON'Ts (Avoid Disqualification)</h3>
          </div>
          <ul class="guideline-list">
            <li><strong>No Exceeding 3 Minutes:</strong> Keep duration strictly between 30 seconds and 3 minutes.</li>
            <li><strong>No Copyright Infringement:</strong> Avoid using uncredited full film clips or unauthorized copyrighted visuals.</li>
            <li><strong>No Hate Speech or Defamation:</strong> Content promoting hostility, vulgarity, or targeted defamation is strictly disqualified.</li>
            <li><strong>No Dangerous Stunts:</strong> Do not perform or showcase unsafe, illegal, or hazardous activities without safety measures.</li>
            <li><strong>No Private Accounts:</strong> Do not keep your Instagram profile on private mode during the evaluation period.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeThemeIndex = ref(0)

const themes = [
  {
    id: 'youth',
    icon: '🚀',
    title: 'Youth Leadership & Social Progress',
    category: 'LEADERSHIP & INSPIRATION',
    shortSummary: 'Empowering youngsters to lead initiatives, solve community challenges, and drive innovation.',
    description: 'Spotlight the energy, fearless initiative, and proactive leadership of young people transforming neighborhoods, campus communities, and societal outlooks.',
    ideas: [
      'A student starting a peer-mentoring or community-help initiative',
      'Overcoming self-doubt to voice out an important social concern',
      'The difference one proactive youth can make in their neighborhood',
      'Young entrepreneurs building sustainable local solutions'
    ],
    sampleHook: '“They said one young person can’t change how a whole street thinks. Here’s what happened when we tried.”'
  },
  {
    id: 'civic',
    icon: '🏙️',
    title: 'Civic Pride, Cleanliness & Community Solutions',
    category: 'CIVIC AWARENESS',
    shortSummary: 'Highlighting public hygiene, road safety, responsible citizenship, and local community love.',
    description: 'Encourage everyday civic responsibility — from keeping Pondicherry & Tamil Nadu clean, obeying traffic rules, to caring for public heritage and helping neighbors.',
    ideas: [
      'Transforming an ignored waste dump into a green corner',
      'The silent heroes: sanitary workers and community caretakers',
      'Road safety, helmet awareness, and defensive driving habits',
      'Preserving local historic streets and neighborhood heritage'
    ],
    sampleHook: '“We pass this corner every single day complaining about the trash. Today, 5 of us decided to fix it.”'
  },
  {
    id: 'environment',
    icon: '🌱',
    title: 'Environmental Protection & Coastal Care',
    category: 'SUSTAINABILITY',
    shortSummary: 'Plastic reduction, water conservation, beach protection, and eco-friendly daily practices.',
    description: 'Address pressing climate and local ecological topics: preserving coastal beaches, planting trees, minimizing single-use plastics, and adopting green lifestyles.',
    ideas: [
      'A day in the life of a beach cleanup volunteer along the coastline',
      'Simple zero-waste swaps anyone can make in daily Tamil Nadu households',
      'Water harvesting and conserving our precious lakes and reservoirs',
      'Protecting urban birds, wildlife, and native trees'
    ],
    sampleHook: '“Every plastic bottle you drop at the beach takes 450 years to degrade. What if your 3-minute reel could stop 1,000 bottles?”'
  },
  {
    id: 'digital',
    icon: '💡',
    title: 'Digital Wellness, Cyber Safety & Mental Health',
    category: 'DIGITAL & WELLBEING',
    shortSummary: 'Positive internet usage, cyberbullying awareness, digital balance, and emotional well-being.',
    description: 'Explore the modern digital landscape — combating cyber harassment, fake news, screen addiction, and fostering open conversations around mental wellness and empathy.',
    ideas: [
      'Navigating social media pressure versus authentic real-life connections',
      'Recognizing and stopping cyberbullying and online scam awareness',
      'The power of checking in on a friend who is silently struggling',
      'Using technology as an equalizer for rural and underprivileged education'
    ],
    sampleHook: '“We scroll 4,000 feet of content every day. But when was the last time we checked on the person sitting right beside us?”'
  },
  {
    id: 'equality',
    icon: '🤝',
    title: 'Social Equality, Inclusivity & Women Empowerment',
    category: 'EMPOWERMENT & EQUALITY',
    shortSummary: 'Breaking stereotypes, celebrating women leaders, honoring elders, and fostering inclusivity.',
    description: 'Celebrate stories of resilience, respect, equal opportunities, breaking gender stereotypes, supporting differently-abled individuals, and uplifting marginalized voices.',
    ideas: [
      'A woman breaking conventional barriers in unconventional careers',
      'Creating inclusive spaces for differently-abled friends and peers',
      'Honoring the wisdom, companionship, and care for our elders',
      'Fostering kindness and equal respect across all walks of life'
    ],
    sampleHook: '“When society told her to follow the standard script, she chose to write her own story of leadership.”'
  },
  {
    id: 'arts',
    icon: '🎭',
    title: 'Culture, Local Heritage & Cinematic Art',
    category: 'CULTURE & CREATIVITY',
    shortSummary: 'Celebrating regional art forms, folk heritage, creative storytelling, and local identity.',
    description: 'Blend classical and folk arts (Therukoothu, Bharatanatyam, Silambam, street theatre) with modern cinematic techniques to communicate impactful progressive themes.',
    ideas: [
      'Using traditional martial arts (Silambam) as a metaphor for discipline and focus',
      'Folk storytelling reimagined through dynamic short-form transitions',
      'Preserving local artisans, handloom weavers, and native crafts',
      'The unifying power of cinema and performing arts for social good'
    ],
    sampleHook: '“Our ancestors used folk art to awaken villages. Today, we use reels to awaken the entire state.”'
  }
]

const currentTheme = computed(() => themes[activeThemeIndex.value])
</script>

<style scoped>
.content-topics-section {
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

/* Theme Tabs */
.theme-tabs-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 36px;
}

.theme-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  padding: 10px 18px;
  border-radius: 9999px;
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  color: #526078;
  cursor: pointer;
  transition: all 0.25s ease;
}

.theme-tab-btn:hover {
  background: #EFF6FF;
  border-color: #BFDBFE;
  color: #2563EB;
}

.theme-tab-btn.active {
  background: #10183F;
  border-color: #10183F;
  color: #FFFFFF;
  box-shadow: 0 4px 14px rgba(16, 24, 63, 0.2);
}

.tab-icon {
  font-size: 1.1rem;
}

/* Active Theme Card */
.active-theme-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 24px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(16, 24, 63, 0.06);
}

.theme-card-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
}

.theme-header-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.theme-category-pill {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #2563EB;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  padding: 4px 12px;
  border-radius: 6px;
  text-transform: uppercase;
}

.theme-badge-id {
  font-size: 0.75rem;
  font-weight: 700;
  color: #526078;
}

.active-theme-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: 800;
  color: #10183F;
  line-height: 1.25;
  margin-bottom: 14px;
}

.active-theme-desc {
  font-size: 1rem;
  color: #526078;
  line-height: 1.65;
  margin-bottom: 24px;
}

.hooks-section {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 20px;
}

.hooks-heading {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 12px;
}

.hooks-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hooks-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.875rem;
  color: #10183F;
  line-height: 1.45;
}

.hook-bullet {
  color: #2563EB;
  font-weight: bold;
}

/* Prompt Box */
.prompt-box {
  background: #10183F;
  border-radius: 20px;
  padding: 30px 24px;
  color: #FFFFFF;
  box-shadow: 0 12px 35px rgba(16, 24, 63, 0.25);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.prompt-box-header {
  display: flex;
  align-items: center;
  gap: 14px;
}

.prompt-icon {
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.1);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prompt-subtitle {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #93C5FD;
  display: block;
}

.prompt-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 800;
  color: #FFFFFF;
}

.prompt-quote-box {
  background: rgba(255, 255, 255, 0.08);
  border-left: 3px solid #2563EB;
  border-radius: 0 10px 10px 0;
  padding: 14px 16px;
}

.prompt-text {
  font-style: italic;
  font-size: 0.95rem;
  color: #EFF6FF;
  line-height: 1.5;
}

.prompt-meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.meta-item {
  display: flex;
  flex-direction: column;
}

.meta-label {
  font-size: 0.675rem;
  font-weight: 700;
  color: #93C5FD;
  text-transform: uppercase;
}

.meta-val {
  font-size: 0.8rem;
  font-weight: 700;
  color: #FFFFFF;
}

/* All Themes Grid */
.all-themes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 50px;
}

.theme-mini-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: all 0.25s ease;
}

.theme-mini-card:hover {
  transform: translateY(-4px);
  border-color: #2563EB;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.12);
}

.card-active-border {
  border-color: #2563EB;
  background: #EFF6FF;
}

.mini-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.mini-content {
  flex-grow: 1;
}

.mini-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: #10183F;
  margin-bottom: 3px;
}

.mini-summary {
  font-size: 0.775rem;
  color: #526078;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.explore-arrow {
  color: #2563EB;
  font-weight: bold;
  font-size: 1.1rem;
}

/* Do's & Don'ts */
.guidelines-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.guideline-card {
  border-radius: 20px;
  padding: 30px 24px;
  border: 1px solid #E2E8F0;
}

.dos-card {
  background: #EFF6FF;
  border-color: #BFDBFE;
}

.donts-card {
  background: #F8FAFC;
  border-color: #E2E8F0;
}

.guideline-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(16, 24, 63, 0.08);
}

.guideline-icon {
  font-size: 1.5rem;
}

.guideline-header h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 800;
  color: #10183F;
}

.guideline-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.85rem;
  color: #10183F;
}

.guideline-list li {
  line-height: 1.5;
}

.guideline-list strong {
  color: #10183F;
}

.animate-fade {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 992px) {
  .theme-card-grid {
    grid-template-columns: 1fr;
  }
  .all-themes-grid {
    grid-template-columns: 1fr;
  }
  .guidelines-container {
    grid-template-columns: 1fr;
  }
  .active-theme-card {
    padding: 24px 18px;
  }
}
</style>
