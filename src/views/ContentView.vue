<template>
  <div class="content-guide-page">
    <!-- Page Hero Banner -->
    <PageBanner
      currentPage="Content Guide"
      badge="CREATOR MASTERCLASS & TOOLKIT"
      badgeIcon="🎬"
      subtitle="The ultimate guide to ideating, scripting, filming, and editing high-impact 3-minute reels for Reels For Real Change."
    >
      <template #title>
        Reel Content & <span class="text-gradient-hero">Creator Guide</span>
      </template>

      <template #actions>
        <button class="btn-primary" @click="openRegisterModal">
          <span>Submit Your Reel</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
        <router-link to="/themes" class="btn-secondary">
          <span>Browse 6 Themes</span>
        </router-link>
      </template>
    </PageBanner>

    <div class="page-content-wrap">
      <!-- Section 1: 4 Storytelling Formats -->
      <section class="formats-section">
        <div class="container-custom">
          <div class="section-header text-center">
            <span class="section-badge">NARRATIVE BLUEPRINTS</span>
            <h2 class="section-title">4 Proven Formats for 3-Minute Reels</h2>
            <p class="section-subtitle">Pick the cinematic style that best matches your crew, equipment, and story goal.</p>
          </div>

          <div class="formats-grid">
            <!-- Format 1 -->
            <div class="format-card card-glow">
              <div class="format-header">
                <span class="format-icon">🎙️</span>
                <span class="format-tag">DOCUMENTARY / STREET</span>
              </div>
              <h3 class="format-title">The Real-Voice Voxpop</h3>
              <p class="format-desc">
                Step onto the streets, college campuses, or local markets. Interview real citizens about everyday civic issues, capture candid reactions, and conclude with an inspiring youth action.
              </p>
              <div class="format-highlights">
                <div class="fh-item"><strong>Best for:</strong> Civic pride, hygiene, local heroes</div>
                <div class="fh-item"><strong>Pacing:</strong> Quick rapid-fire cuts + punchy voiceover</div>
              </div>
            </div>

            <!-- Format 2 -->
            <div class="format-card card-glow">
              <div class="format-header">
                <span class="format-icon">🎭</span>
                <span class="format-tag">NARRATIVE FICTION</span>
              </div>
              <h3 class="format-title">The Micro-Drama Sketch</h3>
              <p class="format-desc">
                A scripted story featuring 2-3 actors. Follow a relatable character facing a tough social dilemma (e.g. cyberbullying, academic stress, helping a neighbor) and finding their leadership moment.
              </p>
              <div class="format-highlights">
                <div class="fh-item"><strong>Best for:</strong> Youth leadership, digital wellness, equality</div>
                <div class="fh-item"><strong>Pacing:</strong> Emotional build-up + powerful climax</div>
              </div>
            </div>

            <!-- Format 3 -->
            <div class="format-card card-glow">
              <div class="format-header">
                <span class="format-icon">⚡</span>
                <span class="format-tag">CINEMATIC MONTAGE</span>
              </div>
              <h3 class="format-title">Visual Poetry & Culture</h3>
              <p class="format-desc">
                Fast-paced, aesthetic visual montage blending traditional art (Silambam, Therukoothu, folk dance) or raw urban shots with a gripping, poetic Tamil voiceover narration.
              </p>
              <div class="format-highlights">
                <div class="fh-item"><strong>Best for:</strong> Heritage, environmental care, empowerment</div>
                <div class="fh-item"><strong>Pacing:</strong> Rhythmic beats + stunning transition cuts</div>
              </div>
            </div>

            <!-- Format 4 -->
            <div class="format-card card-glow">
              <div class="format-header">
                <span class="format-icon">💡</span>
                <span class="format-tag">CREATIVE SATIRE</span>
              </div>
              <h3 class="format-title">Satire & Constructive Wit</h3>
              <p class="format-desc">
                Using clever sarcasm and everyday humor to mirror human habits (e.g., throwing trash beside a dustbin, forwarding fake news) before turning the mirror into an eye-opening solution.
              </p>
              <div class="format-highlights">
                <div class="fh-item"><strong>Best for:</strong> Road safety, civic hygiene, social awareness</div>
                <div class="fh-item"><strong>Pacing:</strong> Punchy comedic timing + thoughtful twist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Instagram Safe Zone & Framing Guide -->
      <section class="safe-zone-section">
        <div class="container-custom">
          <div class="safe-zone-box glass-panel">
            <div class="safe-zone-grid">
              <div class="safe-zone-info">
                <span class="section-badge">VISUAL MASTERCLASS</span>
                <h2 class="safe-title">Instagram 9:16 Safe Zones & Framing</h2>
                <p class="safe-desc">
                  Instagram displays icons (like, comment, share, caption, audio pill) directly on top of your reel. Follow these framing rules so your crucial subtitles and actor faces remain 100% visible:
                </p>

                <div class="safe-rules-list">
                  <div class="safe-rule-item">
                    <span class="safe-dot dot-blue"></span>
                    <div>
                      <strong>Keep Subtitles Centered (Lower-Middle):</strong>
                      <p>Position subtitles at 20% to 35% from the bottom to prevent them from being hidden behind the account username and caption text.</p>
                    </div>
                  </div>

                  <div class="safe-rule-item">
                    <span class="safe-dot dot-blue"></span>
                    <div>
                      <strong>Right Edge Margin (15% Clear Zone):</strong>
                      <p>Avoid placing essential graphics or text on the extreme right side where like, comment, and share buttons appear.</p>
                    </div>
                  </div>

                  <div class="safe-rule-item">
                    <span class="safe-dot dot-blue"></span>
                    <div>
                      <strong>Top Header Safe Area (10% Margin):</strong>
                      <p>Keep key visual subjects below the top 10% line where the Instagram camera/search bars sit.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Visual Safe Zone Preview Mockup -->
              <div class="safe-zone-visual-card">
                <div class="mockup-frame">
                  <div class="mockup-top-bar">
                    <span>Reels Safe Zone</span>
                    <span class="mockup-res">1080 × 1920 px</span>
                  </div>
                  <div class="mockup-body">
                    <div class="zone-danger top-danger">Top 10% Header Space</div>
                    <div class="zone-safe">
                      <div class="safe-content-box">
                        <span class="safe-badge-pill">✅ PRIMARY SAFE ZONE</span>
                        <p class="safe-instruction">Keep Face, Core Subject & Action Inside this Box</p>
                        <div class="subtitle-safe-box">
                          <span>📝 Subtitle Safe Zone (Centered)</span>
                        </div>
                      </div>
                      <div class="zone-right-danger">Icons (Like/Share)</div>
                    </div>
                    <div class="zone-danger bottom-danger">Bottom 20% Caption & Audio Space</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Recommended Free Toolkit -->
      <section class="toolkit-section">
        <div class="container-custom">
          <div class="section-header text-center">
            <span class="section-badge">CREATOR RESOURCES</span>
            <h2 class="section-title">Recommended Free Creator Toolkit</h2>
            <p class="section-subtitle">You don't need expensive gear. These powerful free mobile & desktop apps get the job done.</p>
          </div>

          <div class="toolkit-grid">
            <div class="tool-card card-glow">
              <div class="tool-icon">✂️</div>
              <h3 class="tool-name">VN Video Editor / CapCut</h3>
              <span class="tool-type">Mobile & Desktop Video Editing</span>
              <p class="tool-desc">
                Powerful multitrack timeline, keyframing, dynamic speed ramping, auto Tamil/English captions, and zero watermark export.
              </p>
            </div>

            <div class="tool-card card-glow">
              <div class="tool-icon">🎙️</div>
              <h3 class="tool-name">Adobe Podcast AI (Enhance)</h3>
              <span class="tool-type">Free Audio Cleaner</span>
              <p class="tool-desc">
                Removes wind noise, street echo, and background rumble with one click, giving your phone microphone studio-level voiceover quality.
              </p>
            </div>

            <div class="tool-card card-glow">
              <div class="tool-icon">🎨</div>
              <h3 class="tool-name">DaVinci Resolve / Canva</h3>
              <span class="tool-type">Color Grading & Title Graphics</span>
              <p class="tool-desc">
                Industry-standard color correction tools and eye-catching animated lower-third graphics to make your visuals pop.
              </p>
            </div>

            <div class="tool-card card-glow">
              <div class="tool-icon">🎵</div>
              <h3 class="tool-name">YouTube Audio Library / Freesound</h3>
              <span class="tool-type">Royalty-Free BGM & SFX</span>
              <p class="tool-desc">
                Copyright-safe background scores, whooshes, cinematic risers, and sound effects to elevate your reel's pacing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Instagram Caption & Hashtag Playbook -->
      <section class="hashtag-section">
        <div class="container-custom">
          <div class="hashtag-box glass-panel">
            <div class="hashtag-header">
              <span class="section-badge">VIRAL COLLAB STRATEGY</span>
              <h2 class="hashtag-title">Official Hashtags & Caption Guide</h2>
              <p class="hashtag-sub">
                Copy and paste these official competition tags into your Instagram reel caption for smooth tracking and evaluation:
              </p>
            </div>

            <div class="tags-copy-card">
              <div class="tags-text-block">
                <code>
                  #WeTheLeaders #ReelsForRealChange #WTL2026 #TamilNaduCreators #YouthLeadership #PondicherryYouth #TamilShortFilm #SocialImpact
                </code>
              </div>
              <button class="btn-secondary btn-copy" @click="copyTags">
                <span>{{ copied ? '✓ Copied to Clipboard!' : '📋 Copy Hashtag Pack' }}</span>
              </button>
            </div>

            <div class="collab-reminder-strip">
              <span class="collab-bell">🔔</span>
              <span><strong>Mandatory:</strong> Send Collaboration Invite to <strong>@wtl_leadingthechange</strong> when posting your reel on Instagram!</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Content Inquiry & Creator Support Form -->
      <ContentInquiryForm />

      <!-- Section 6: Bottom CTA -->
      <section class="page-cta-strip">
        <div class="container-custom">
          <div class="cta-banner-box">
            <div class="cta-banner-content">
              <h2 class="cta-title">Got Your Story Ready?</h2>
              <p class="cta-sub">Shoot your reel, post it on Instagram with collab invite, and submit your link here!</p>
            </div>
            <div class="cta-banner-btns">
              <button class="btn-primary btn-lg" @click="openRegisterModal">
                <span>Submit Your Reel</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <router-link to="/prizes" class="btn-secondary">
                <span>View ₹90,000+ Prize Pool</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageBanner from '../components/PageBanner.vue'
import ContentInquiryForm from '../components/ContentInquiryForm.vue'
import { useRegisterModal } from '../composables/useRegisterModal'

const { openRegisterModal } = useRegisterModal()
const copied = ref(false)

const copyTags = () => {
  const tags = '#WeTheLeaders #ReelsForRealChange #WTL2026 #TamilNaduCreators #YouthLeadership #PondicherryYouth #TamilShortFilm #SocialImpact'
  navigator.clipboard.writeText(tags).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 3000)
  })
}
</script>

<style scoped>
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

/* Formats Grid */
.formats-section {
  padding: 80px 0;
  background-color: #FFFFFF;
}

.formats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.format-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
}

.format-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.format-icon {
  font-size: 2rem;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  padding: 6px;
  border-radius: 12px;
}

.format-tag {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #2563EB;
  background: #EFF6FF;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid #BFDBFE;
}

.format-title {
  font-family: var(--font-cinematic);
  font-size: 1.35rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 10px;
}

.format-desc {
  font-size: 0.925rem;
  color: #526078;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.format-highlights {
  border-top: 1px solid #E2E8F0;
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.85rem;
  color: #10183F;
}

.fh-item strong {
  color: #2563EB;
}

/* Safe Zone Section */
.safe-zone-section {
  padding: 80px 0;
  background-color: #F8FAFC;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
}

.safe-zone-box {
  padding: 48px;
  border-radius: 24px;
  border: 1px solid #E2E8F0;
  background: #FFFFFF;
}

.safe-zone-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 48px;
  align-items: center;
}

.safe-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: #10183F;
  margin-bottom: 14px;
  line-height: 1.2;
}

.safe-desc {
  font-size: 1.05rem;
  color: #526078;
  line-height: 1.65;
  margin-bottom: 24px;
}

.safe-rules-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.safe-rule-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.safe-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2563EB;
  margin-top: 8px;
  flex-shrink: 0;
}

.safe-rule-item strong {
  display: block;
  font-size: 0.95rem;
  color: #10183F;
  margin-bottom: 2px;
}

.safe-rule-item p {
  font-size: 0.85rem;
  color: #526078;
  line-height: 1.45;
}

/* Visual Mockup Frame */
.safe-zone-visual-card {
  display: flex;
  justify-content: center;
}

.mockup-frame {
  width: 100%;
  max-width: 340px;
  height: 480px;
  background: #10183F;
  border: 3px solid #CBD5E1;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(16, 24, 63, 0.15);
  display: flex;
  flex-direction: column;
}

.mockup-top-bar {
  background: #0B112C;
  color: #FFFFFF;
  padding: 10px 16px;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mockup-res {
  color: #60A5FA;
}

.mockup-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #1E293B;
  color: #FFFFFF;
}

.zone-danger {
  background: rgba(239, 68, 68, 0.25);
  border: 1px dashed #EF4444;
  color: #FCA5A5;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6px;
}

.top-danger {
  height: 45px;
}

.bottom-danger {
  height: 85px;
}

.zone-safe {
  flex-grow: 1;
  display: flex;
  position: relative;
}

.safe-content-box {
  flex-grow: 1;
  border: 2px dashed #2563EB;
  background: rgba(37, 99, 235, 0.12);
  margin: 8px;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
}

.safe-badge-pill {
  font-size: 0.7rem;
  font-weight: 800;
  color: #FFFFFF;
  background: #2563EB;
  padding: 3px 10px;
  border-radius: 9999px;
}

.safe-instruction {
  font-size: 0.75rem;
  color: #EFF6FF;
  line-height: 1.35;
}

.subtitle-safe-box {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #BFDBFE;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.7rem;
  color: #FFFFFF;
  font-weight: 700;
  margin-top: 8px;
}

.zone-right-danger {
  width: 50px;
  background: rgba(239, 68, 68, 0.25);
  border-left: 1px dashed #EF4444;
  color: #FCA5A5;
  font-size: 0.65rem;
  font-weight: 700;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

/* Toolkit Grid */
.toolkit-section {
  padding: 80px 0;
  background-color: #FFFFFF;
}

.toolkit-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.tool-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 18px;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
}

.tool-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.tool-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 4px;
}

.tool-type {
  font-size: 0.75rem;
  font-weight: 800;
  color: #2563EB;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.tool-desc {
  font-size: 0.85rem;
  color: #526078;
  line-height: 1.5;
}

/* Hashtag Section */
.hashtag-section {
  padding: 80px 0;
  background-color: #F8FAFC;
}

.hashtag-box {
  background: #FFFFFF;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #E2E8F0;
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
}

.hashtag-title {
  font-family: var(--font-cinematic);
  font-size: 1.8rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 8px;
}

.hashtag-sub {
  font-size: 0.95rem;
  color: #526078;
  margin-bottom: 24px;
}

.tags-copy-card {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.tags-text-block code {
  font-family: monospace;
  font-size: 0.95rem;
  color: #2563EB;
  font-weight: 700;
  word-break: break-word;
  line-height: 1.6;
}

.btn-copy {
  font-size: 0.9rem;
  font-weight: 700;
}

.collab-reminder-strip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  padding: 10px 20px;
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #10183F;
}

.collab-bell {
  font-size: 1.1rem;
}

/* Page CTA Strip */
.page-cta-strip {
  padding: 40px 0 90px;
  background-color: #FFFFFF;
}

.cta-banner-box {
  background: linear-gradient(135deg, #10183F 0%, #1E40AF 100%);
  border-radius: 24px;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  color: #FFFFFF;
  box-shadow: 0 16px 40px rgba(16, 24, 63, 0.25);
}

.cta-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.cta-sub {
  font-size: 1.05rem;
  color: #EFF6FF;
  max-width: 580px;
}

.cta-banner-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  flex-shrink: 0;
}

@media (max-width: 992px) {
  .formats-grid {
    grid-template-columns: 1fr;
  }
  .safe-zone-grid {
    grid-template-columns: 1fr;
  }
  .toolkit-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cta-banner-box {
    flex-direction: column;
    text-align: center;
    padding: 36px 24px;
  }
  .cta-banner-btns {
    justify-content: center;
  }
}

@media (max-width: 580px) {
  .toolkit-grid {
    grid-template-columns: 1fr;
  }
}
</style>
