<template>
  <section class="hero-carousel-section" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
    <!-- Ambient Cinematic Lighting & Grid Backdrop -->
    <div class="hero-backdrop">
      <div class="ambient-glow glow-blue"></div>
      <div class="ambient-glow glow-purple"></div>
      <div class="ambient-glow glow-amber"></div>
      <div class="backdrop-grid-overlay"></div>
    </div>

    <!-- Carousel Slides Main Viewport -->
    <div class="carousel-viewport">
      <transition-group name="slide-fade">
        <div
          v-for="(slide, idx) in slides"
          :key="slide.id"
          v-show="currentSlide === idx"
          class="carousel-slide-item"
        >
          <div class="container-custom slide-grid-layout">
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
              <div class="visual-carousel-card">
                <!-- Image Wrapper - Preserves Aspect Ratio Without Distortion -->
                <div class="visual-image-box">
                  <img :src="slide.featuredImage" :alt="slide.titleHighlight" class="visual-main-img" />
                </div>

                <!-- Floating Top-Left Tag Badge -->
                <div class="floating-visual-badge badge-top-left">
                  <span class="f-badge-icon">{{ slide.badgeIcon }}</span>
                  <span class="f-badge-txt">{{ slide.visualTag }}</span>
                </div>

                <!-- Floating Top-Right Stat Chip -->
                <div class="floating-visual-badge badge-top-right">
                  <span class="f-stat-star">⭐</span>
                  <span class="f-stat-txt">{{ slide.floatingStatTop }}</span>
                </div>

                <!-- Floating Bottom Metric Pill -->
                <div class="floating-visual-badge badge-bottom-right">
                  <span class="f-dot-pulse"></span>
                  <span class="f-stat-txt">{{ slide.floatingStatBottom }}</span>
                </div>

                <!-- Small Bottom Glassmorphic Caption Card -->
                <div class="visual-caption-glass">
                  <div class="caption-metric-sub">{{ slide.visualSub }}</div>
                  <h3 class="caption-heading">{{ slide.visualTitle }}</h3>
                </div>
              </div>

              <!-- Small Carousel Dot Indicators Below Image -->
              <div class="carousel-dots-row">
                <span
                  v-for="(s, sIdx) in slides"
                  :key="sIdx"
                  class="carousel-dot"
                  :class="{ active: currentSlide === sIdx }"
                  @click="goToSlide(sIdx)"
                ></span>
              </div>
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

    <!-- Bottom Carousel Navigation Tabs Bar -->
    <div class="carousel-tabs-bar">
      <div class="container-custom">
        <div class="tabs-grid-container">
          <div
            v-for="(slide, idx) in slides"
            :key="slide.id"
            class="tab-nav-item"
            :class="{ 'is-active': currentSlide === idx }"
            @click="goToSlide(idx)"
          >
            <!-- Progress Fill Line -->
            <div class="tab-progress-track">
              <div
                class="tab-progress-fill"
                :style="{ width: currentSlide === idx ? '100%' : '0%' }"
              ></div>
            </div>

            <!-- Tab Content Header -->
            <div class="tab-info-row">
              <span class="tab-index-tag">0{{ idx + 1 }}</span>
              <div class="tab-text-cluster">
                <span class="tab-main-label">{{ slide.tabTitle }}</span>
                <span class="tab-sub-label">{{ slide.tabSubtitle }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Metric Ticker Ribbon -->
    <div class="hero-metric-ribbon">
      <div class="container-custom">
        <div class="ribbon-flex-row">
          <div class="ribbon-node">
            <span class="ribbon-icon">💰</span>
            <div class="ribbon-text">
              <span class="ribbon-val">₹50,000</span>
              <span class="ribbon-lbl">Champion 1st Cash Prize</span>
            </div>
          </div>

          <div class="ribbon-separator"></div>

          <div class="ribbon-node">
            <span class="ribbon-icon">🗺️</span>
            <div class="ribbon-text">
              <span class="ribbon-val">38 + 1</span>
              <span class="ribbon-lbl">Districts & UT Connected</span>
            </div>
          </div>

          <div class="ribbon-separator"></div>

          <div class="ribbon-node">
            <span class="ribbon-icon">🏆</span>
            <div class="ribbon-text">
              <span class="ribbon-val">15+</span>
              <span class="ribbon-lbl">Category Trophies & Honors</span>
            </div>
          </div>

          <div class="ribbon-separator"></div>

          <div class="ribbon-node">
            <span class="ribbon-icon">📜</span>
            <div class="ribbon-text">
              <span class="ribbon-val">100% FREE</span>
              <span class="ribbon-lbl">Entry & Verified Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    featuredImage: '/tn-map-3d.jpg',
    badgeIcon: '🗺️',
    badgeText: 'STATE-WIDE REEL COMPETITION • 38+1 DISTRICTS',
    titlePrefix: 'Create a 3-Minute Reel,',
    titleHighlight: 'Inspire Tamil Nadu',
    titleSuffix: '& Win Big',
    description: 'Tamil Nadu & Puducherry State-Level Short-Form Reel Competition. 38+1 districts connected through creative youth filmmaking.',
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
    featuredImage: '/youth-awareness.jpg',
    badgeIcon: '⚡',
    badgeText: 'YOUTH LEADERSHIP & SOCIAL AWARENESS',
    titlePrefix: 'Empowering Youngsters To',
    titleHighlight: 'Drive Real Change',
    titleSuffix: 'Through Reels',
    description: 'Grab your smartphone, tell authentic stories of youth leadership, social awareness, civic pride, environment, and equality that inspire the state.',
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
    featuredImage: '/awards-trophy.jpg',
    badgeIcon: '🏆',
    badgeText: 'HONORS, TROPHIES & ₹90,000+ CASH REWARDS',
    titlePrefix: 'Win Big with',
    titleHighlight: '₹90,000+ Cash Prizes',
    titleSuffix: '& State Trophy',
    description: '₹50,000 Champion Cash Prize, 15+ Category Winner Trophies, official Certificates of Excellence, and live Grand Finale screening in Chennai with cinema icons.',
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
    }, 5500)
  }
}

const pauseAutoPlay = () => {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer)
    autoSlideTimer = null
  }
}

const resumeAutoPlay = () => {
  startAutoPlay()
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
  background: #080D24;
  color: #FFFFFF;
  overflow: hidden;
  padding-top: 40px;
  padding-bottom: 0px;
}

/* Ambient Backdrop Glow & Grid Pattern */
.hero-backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.backdrop-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
}

.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.42;
  animation: glowFloat 9s ease-in-out infinite alternate;
}

.glow-blue {
  width: 550px;
  height: 550px;
  background: #2563EB;
  top: -120px;
  left: -100px;
}

.glow-purple {
  width: 500px;
  height: 500px;
  background: #7C3AED;
  top: 10%;
  right: -80px;
  animation-delay: 2.5s;
}

.glow-amber {
  width: 400px;
  height: 400px;
  background: #F59E0B;
  bottom: 40px;
  left: 30%;
  opacity: 0.22;
  animation-delay: 4.5s;
}

@keyframes glowFloat {
  0% { transform: translate(0, 0) scale(1); opacity: 0.35; }
  100% { transform: translate(25px, 20px) scale(1.12); opacity: 0.55; }
}

/* Carousel Viewport */
.carousel-viewport {
  position: relative;
  min-height: 520px;
  z-index: 10;
  display: flex;
  align-items: center;
}

.carousel-slide-item {
  width: 100%;
}

/* Slide Transition Animations */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

/* 50% Left + 50% Right Desktop Two-Column Layout */
.slide-grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  padding-bottom: 28px;
}

/* LEFT 50%: Content Column */
.slide-left-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.45);
  color: #93C5FD;
  padding: 5px 13px;
  border-radius: 9999px;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  width: fit-content;
  margin-bottom: 14px;
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
  font-size: clamp(2rem, 3.2vw, 3rem);
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin-bottom: 14px;
}

.title-gradient-span {
  background: linear-gradient(135deg, #60A5FA 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-description {
  font-size: 0.98rem;
  color: #CBD5E1;
  line-height: 1.55;
  max-width: 520px;
  margin-bottom: 20px;
}

/* Chips Row */
.slide-chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
}

.slide-chip-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 5px 12px;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #F8FAFC;
  backdrop-filter: blur(6px);
}

/* CTA Row */
.slide-cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}

.hero-main-cta {
  position: relative;
  overflow: hidden;
  font-size: 0.925rem;
  font-weight: 800;
  padding: 13px 26px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
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
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
}

.hero-sec-cta:hover {
  background: #FFFFFF;
  color: #0B112C;
  border-color: #FFFFFF;
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
  color: #94A3B8;
}

.trust-note-text strong {
  color: #E2E8F0;
}

/* RIGHT 50%: Carousel Image Showcase Column */
.slide-right-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.visual-carousel-card {
  position: relative;
  width: 100%;
  max-width: 550px;
  aspect-ratio: 1 / 1;
  border-radius: 22px;
  overflow: hidden;
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55), 0 0 30px rgba(37, 99, 235, 0.25);
  background: #0B112C;
  backdrop-filter: blur(12px);
}

.visual-image-box {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #070C20;
}

.visual-main-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.6s ease;
}

.visual-carousel-card:hover .visual-main-img {
  transform: scale(1.02);
}

/* Floating Badges Over Image */
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
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.35);
}

.badge-top-left {
  top: 12px;
  left: 12px;
  background: rgba(11, 17, 44, 0.9);
  border: 1px solid rgba(59, 130, 246, 0.55);
  color: #93C5FD;
}

.badge-top-right {
  top: 12px;
  right: 12px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(245, 158, 11, 0.55);
  color: #FDE68A;
}

.badge-bottom-right {
  bottom: 68px;
  right: 12px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(16, 185, 129, 0.55);
  color: #A7F3D0;
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
  padding: 12px 16px;
  z-index: 6;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: linear-gradient(to top, rgba(8, 13, 36, 0.96) 0%, rgba(8, 13, 36, 0.6) 80%, transparent 100%);
}

.caption-metric-sub {
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #F59E0B;
  text-transform: uppercase;
}

.caption-heading {
  font-family: var(--font-cinematic);
  font-size: 0.95rem;
  font-weight: 800;
  color: #FFFFFF;
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
  top: 42%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
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
  .slide-grid-layout {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 32px;
  }
  .visual-carousel-card {
    max-width: 440px;
  }
}

@media (max-width: 768px) {
  /* Mobile: Stack vertically with content first and carousel below */
  .slide-grid-layout {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 32px;
    padding-bottom: 20px;
  }
  .slide-left-content {
    align-items: center;
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
    margin: 0 auto;
  }
  .visual-carousel-card {
    width: 90%;
    max-width: 90%;
    margin: 0 auto;
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
