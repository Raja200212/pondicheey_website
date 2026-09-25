<template>
  <section class="hero-carousel-section">
    <!-- Carousel Slides Main Viewport -->
    <div class="carousel-viewport">
      <transition-group name="slide-fade">
        <div
          v-for="(slide, idx) in slides"
          :key="slide.id"
          v-show="currentSlide === idx"
          class="carousel-slide-item"
        >
          <div class="slide-grid-layout">
            <!-- LEFT 50%: Content Column -->
            <div class="slide-left-content">
              <!-- Live Pretitle Badge -->
              <div class="slide-badge-pill">
                <span class="badge-icon-wrap">{{ slide.badgeIcon }}</span>
                <span class="badge-text">{{ slide.badgeText }}</span>
                <span class="badge-live-tag">LIVE</span>
              </div>

              <!-- Main Headline -->
              <h1 class="slide-title">
                {{ slide.titlePrefix }}
                <span class="title-gradient-span">{{ slide.titleHighlight }}</span>
                {{ slide.titleSuffix }}
              </h1>

              <!-- Supporting Description -->
              <p class="slide-description">
                {{ slide.description }}
              </p>

              <!-- Feature Pills Row -->
              <div class="slide-chips-row">
                <div v-for="(chip, cIdx) in slide.pills" :key="cIdx" class="slide-chip-tag">
                  <span class="chip-emoji">{{ chip.icon }}</span>
                  <span class="chip-label">{{ chip.text }}</span>
                </div>
              </div>

              <!-- Action Buttons Row -->
              <div class="slide-cta-row">
                <button class="btn-primary hero-main-cta" @click="openRegisterModal">
                  <span class="btn-glow-layer"></span>
                  <span class="btn-text-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    {{ slide.primaryCtaText }}
                  </span>
                </button>

                <router-link :to="slide.secondaryCtaLink" class="btn-secondary hero-sec-cta">
                  <span>{{ slide.secondaryCtaText }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </router-link>
              </div>

              <!-- Social Proof / Rating Strip -->
              <div class="slide-trust-strip">
                <div class="trust-stars">★★★★★</div>
                <span class="trust-note-text">
                  <strong>4.9/5 Rating</strong> • 100% Free Entry • Verified Certificate for All
                </span>
              </div>
            </div>

            <!-- RIGHT 50%: Carousel Image Showcase Column -->
            <div class="slide-right-visual">
              <img :src="slide.featuredImage" :alt="slide.titleHighlight" class="visual-main-img" />
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <!-- Outer Left & Right Navigation Arrows -->
    <button class="carousel-arrow-btn arrow-prev" @click="prevSlide" aria-label="Previous Slide">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <button class="carousel-arrow-btn arrow-next" @click="nextSlide" aria-label="Next Slide">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRegisterModal } from '../composables/useRegisterModal'

const { openRegisterModal } = useRegisterModal()

const currentSlide = ref(0)
let autoSlideTimer = null

const slides = [
  {
    id: 1,
    featuredImage: '/tn-map-3d-nobg.png',
    badgeIcon: '🗺️',
    badgeText: 'STATE-WIDE REEL COMPETITION • 38+1 DISTRICTS',
    titlePrefix: 'Create a 3-Minute Reel,',
    titleHighlight: 'Inspire Tamil Nadu',
    titleSuffix: '& Win Big',
    description: 'Welcome to the ultimate Tamil Nadu & Puducherry State-Level Short-Form Reel Competition. We are connecting all 38+1 districts through the powerful lens of creative youth filmmaking. This is your chance to showcase your talent, tell a story that matters, and proudly represent your district on the grandest stage possible.',
    pills: [
      { icon: '🔥', text: '100% Free Registration' },
      { icon: '🗺️', text: '38+1 Districts Live' },
      { icon: '📜', text: 'Verified Certificate for All' }
    ],
    primaryCtaText: 'REGISTER & SUBMIT REEL NOW',
    secondaryCtaText: 'Explore 6 Themes',
    secondaryCtaLink: '/themes',
    visualTag: 'STATE-WIDE PARTICIPATION',
    visualSub: '38 DISTRICTS + PUDUCHERRY',
    visualTitle: 'Tamil Nadu & Puducherry Reel Map',
    floatingStatTop: '38+1 Districts Reach',
    floatingStatBottom: 'Open to All 18-35 Youth',
    tabTitle: '01 TN Project Map',
    tabSubtitle: '38 Districts & Puducherry'
  },
  {
    id: 2,
    featuredImage: '/youth-awareness-3d-nobg.png',
    badgeIcon: '⚡',
    badgeText: 'YOUTH LEADERSHIP & SOCIAL AWARENESS',
    titlePrefix: 'Empowering Youngsters To',
    titleHighlight: 'Drive Real Change',
    titleSuffix: 'Through Reels',
    description: 'Grab your smartphone and start directing! We want you to tell authentic, powerful stories focusing on youth leadership, social awareness, civic pride, environmental sustainability, and gender equality. Your 3-minute reel has the potential to spark meaningful conversations, challenge perspectives, and truly inspire the entire state.',
    pills: [
      { icon: '🎬', text: '3-Minute Short Stories' },
      { icon: '💡', text: '6 Impact Themes' },
      { icon: '👥', text: 'Solo or Team (1-4)' }
    ],
    primaryCtaText: 'SUBMIT YOUR IMPACT REEL',
    secondaryCtaText: 'View Creator Guide',
    secondaryCtaLink: '/content',
    visualTag: 'YOUTH AWARENESS IN ACTION',
    visualSub: 'NEXT-GEN CREATORS & LEADERS',
    visualTitle: 'College & Youth Filmmakers Uniting',
    floatingStatTop: '6 Impact Story Themes',
    floatingStatBottom: '3-Min Short Reels',
    tabTitle: '02 Youth Awareness',
    tabSubtitle: 'Empowering Young Creators'
  },
  {
    id: 3,
    featuredImage: '/prize-trophy-nobg.png',
    badgeIcon: '🏆',
    badgeText: 'HONORS, TROPHIES & ₹90,000+ CASH REWARDS',
    titlePrefix: 'Win Big with',
    titleHighlight: '₹90,000+ Cash Prizes',
    titleSuffix: '& State Trophy',
    description: 'Your creativity deserves to be rewarded. Compete for a massive ₹50,000 Champion Cash Prize, alongside 15+ specialized Category Winner Trophies and official Certificates of Excellence. Top creators will be invited to a spectacular live Grand Finale screening in Chennai, where your work will be showcased in front of renowned cinema icons and industry leaders.',
    pills: [
      { icon: '🥇', text: '₹50,000 1st Prize Cash' },
      { icon: '🏆', text: '15+ Category Trophies' },
      { icon: '🏛️', text: 'Grand Finale in Chennai' }
    ],
    primaryCtaText: 'WIN ₹50,000 CHAMPION PRIZE',
    secondaryCtaText: 'View Prize Breakdown',
    secondaryCtaLink: '/prizes',
    visualTag: 'CHAMPIONSHIP RECOGNITION',
    visualSub: 'GRAND FINALE IN CHENNAI',
    visualTitle: '₹90,000+ Cash & State Trophies',
    floatingStatTop: '₹50,000 1st Prize Cash',
    floatingStatBottom: '15+ Trophies & Awards',
    tabTitle: '03 Prizes & Trophies',
    tabSubtitle: '₹90,000+ & Grand Finale'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (idx) => {
  currentSlide.value = idx
}

const startAutoPlay = () => {
  if (!autoSlideTimer) {
    autoSlideTimer = setInterval(() => {
      nextSlide()
    }, 5000)
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer)
  }
})
</script>

<style scoped>
/* Master Full-Width Hero Section */
.hero-carousel-section {
  position: relative;
  width: 100%;
  background: #FFFFFF;
  color: #0F172A;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 0px;
}





/* Carousel Viewport */
.carousel-viewport {
  position: relative;
  min-height: 85vh;
  padding: 0;
  display: flex;
  align-items: center;
}

.carousel-slide-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: #FFFFFF;
}

/* Slide Transition Animations */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

/* Full-Width Background Layout */
.slide-grid-layout {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LEFT 50%: Content Column */
.slide-left-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 55%;
  padding-left: calc(max(20px, (100% - 1240px) / 2));
  padding-right: 40px;
}

.slide-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #F0F9FF;
  border: 1px solid #BAE6FD;
  color: #0369A1;
  padding: 5px 13px;
  border-radius: 9999px;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  width: fit-content;
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
}

.badge-icon-wrap {
  font-size: 0.85rem;
}

.badge-live-tag {
  background: #2563EB;
  color: #FFFFFF;
  font-size: 0.58rem;
  font-weight: 900;
  padding: 1px 6px;
  border-radius: 4px;
  margin-left: 2px;
  letter-spacing: 0.5px;
}

.slide-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  font-weight: 900;
  color: #01579B;
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.title-gradient-span {
  background: linear-gradient(90deg, #00A859 0%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-description {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.75;
  max-width: 580px;
  margin-bottom: 32px;
}

/* Chips Row */
.slide-chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
}

.slide-chip-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #F0F9FF;
  border: 1px solid #BAE6FD;
  padding: 5px 12px;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #0369A1;
  backdrop-filter: blur(6px);
}

/* CTA Row */
.slide-cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.hero-main-cta {
  position: relative;
  overflow: hidden;
  font-size: 0.925rem;
  font-weight: 800;
  padding: 13px 26px;
  border-radius: 10px;
  background: #00A859 !important;
  color: #FFFFFF !important;
  box-shadow: 0 8px 20px rgba(0, 168, 89, 0.4) !important;
}

.btn-text-content {
  display: flex;
  align-items: center;
  gap: 7px;
  position: relative;
  z-index: 2;
}

.btn-glow-layer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  transform: skewX(-20deg);
  animation: btnShimmer 3.5s infinite;
}

@keyframes btnShimmer {
  0% { left: -100%; }
  30% { left: 200%; }
  100% { left: 200%; }
}

.hero-sec-cta {
  font-size: 0.9rem;
  font-weight: 700;
  padding: 13px 20px;
  border-radius: 10px;
  background: #F1F5F9;
  border-color: #E2E8F0;
  color: #0F172A;
}

.hero-sec-cta:hover {
  background: #E2E8F0;
  color: #0F172A;
  border-color: #CBD5E1;
}

.slide-trust-strip {
  display: flex;
  align-items: center;
  gap: 8px;
}

.trust-stars {
  color: #F59E0B;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
}

.trust-note-text {
  font-size: 0.78rem;
  color: #64748B;
}

.trust-note-text strong {
  color: #334155;
}

/* RIGHT 50%: Carousel Image Showcase Column */
.slide-right-visual {
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  min-height: 400px;
}

.visual-main-img {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  object-position: center;
}

.floating-visual-badge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 11px;
  border-radius: 9999px;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.6px;
  backdrop-filter: blur(10px);
  z-index: 6;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #E1F5FE;
  color: #01579B;
}

.badge-top-left {
  top: 24px;
  left: 24px;
}

.badge-top-right {
  top: 24px;
  right: 24px;
}

.badge-bottom-right {
  bottom: 84px;
  right: 24px;
}

.f-dot-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 6px #10B981;
}

/* Small Bottom Glassmorphic Caption Card */
.visual-caption-glass {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  z-index: 6;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: transparent;
}

.caption-metric-sub {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #00A859;
  text-transform: uppercase;
}

.caption-heading {
  font-family: var(--font-cinematic);
  font-size: 1.5rem;
  font-weight: 900;
  color: #01579B;
  margin: 0;
  line-height: 1.25;
}

/* Carousel Small Dots Row Below Image */
.carousel-dots-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot.active {
  width: 24px;
  border-radius: 9999px;
  background: #2563EB;
  box-shadow: 0 0 8px #2563EB;
}

/* Outer Edge Navigation Arrows */
.carousel-arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.1);
  border: 1px solid rgba(15, 23, 42, 0.2);
  color: #0F172A;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 25;
  backdrop-filter: blur(10px);
  transition: all 0.25s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
}

.carousel-arrow-btn:hover {
  background: #2563EB;
  border-color: #2563EB;
  transform: translateY(-50%) scale(1.1);
}

.arrow-prev { left: 16px; }
.arrow-next { right: 16px; }

/* Bottom Carousel Navigation Tabs Bar */
.carousel-tabs-bar {
  background: rgba(8, 13, 36, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 14px 0;
  backdrop-filter: blur(12px);
  position: relative;
  z-index: 15;
}

.tabs-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.tab-nav-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 3px 0;
  opacity: 0.55;
  transition: opacity 0.3s ease;
}

.tab-nav-item:hover {
  opacity: 0.85;
}

.tab-nav-item.is-active {
  opacity: 1;
}

.tab-progress-track {
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  overflow: hidden;
}

.tab-progress-fill {
  height: 100%;
  background: #2563EB;
  border-radius: 9999px;
  transition: width 0.4s ease;
  box-shadow: 0 0 8px #2563EB;
}

.tab-info-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tab-index-tag {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 800;
  color: #93C5FD;
}

.tab-text-cluster {
  display: flex;
  flex-direction: column;
}

.tab-main-label {
  font-family: var(--font-display);
  font-size: 0.825rem;
  font-weight: 800;
  color: #FFFFFF;
}

.tab-sub-label {
  font-size: 0.685rem;
  color: #94A3B8;
}

/* Metric Ribbon Strip */
.hero-metric-ribbon {
  background: #060A1D;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 14px 0;
  position: relative;
  z-index: 15;
}

.ribbon-flex-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.ribbon-node {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ribbon-icon {
  font-size: 1.25rem;
}

.ribbon-text {
  display: flex;
  flex-direction: column;
}

.ribbon-val {
  font-family: var(--font-cinematic);
  font-size: 1.2rem;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1.1;
}

.ribbon-lbl {
  font-size: 0.7rem;
  color: #94A3B8;
  font-weight: 600;
}

.ribbon-separator {
  width: 1px;
  height: 26px;
  background: rgba(255, 255, 255, 0.12);
}

/* Responsive Design */
@media (max-width: 1024px) {
  /* Tablet: 55% Content + 45% Image */
  .slide-left-content {
    width: 55%;
    padding-right: 32px;
  }
  .slide-right-visual {
    width: 45%;
  }
}

@media (max-width: 768px) {
  /* Mobile: Stack vertically with content first and carousel below */
  .slide-grid-layout {
    flex-direction: column;
    text-align: center;
    padding-bottom: 20px;
  }
  .slide-left-content {
    width: 100%;
    align-items: center;
    padding-right: calc(max(20px, (100% - 1240px) / 2));
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .slide-chips-row {
    justify-content: center;
  }
  .slide-cta-row {
    justify-content: center;
  }
  .slide-trust-strip {
    justify-content: center;
  }
  .slide-right-visual {
    width: 100%;
    height: 200px;
    margin: 0 auto;
  }
  .visual-main-img {
    height: 100%;
    object-fit: contain;
  }
  .tabs-grid-container {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .carousel-arrow-btn {
    display: none;
  }
  .ribbon-flex-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .ribbon-separator {
    display: none;
  }
}

@media (max-width: 576px) {
  .hero-carousel-section {
    padding-top: 20px;
  }
  .slide-title {
    font-size: 1.85rem;
  }
  .hero-main-cta, .hero-sec-cta {
    width: 100%;
    justify-content: center;
  }
  .badge-bottom-right {
    display: none;
  }
}
</style>
