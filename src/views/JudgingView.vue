<template>
  <div class="judging-page">
    <!-- Page Hero Banner -->
    <PageBanner
      currentPage="Judging Criteria"
      badge="EVALUATION RUBRIC"
      badgeIcon="⚖️"
      subtitle="Discover how your 3-minute reel will be scored. Learn the 4 evaluation pillars, jury weightages, and tips from industry experts."
    >
      <template #title>
        Fair & Transparent <span class="text-gradient-hero">Judging Criteria</span>
      </template>

      <template #actions>
        <button class="btn-primary" @click="openRegisterModal">
          <span>Submit Your Reel</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
        <router-link to="/rules" class="btn-secondary">
          <span>View Competition Rules</span>
        </router-link>
      </template>
    </PageBanner>

    <div class="page-content-wrap">
      <!-- Main Judging Criteria Component -->
      <JudgingCriteria />

      <!-- 3-Stage Jury Evaluation Process -->
      <section class="evaluation-stages-section">
        <div class="container-custom">
          <div class="section-header text-center">
            <span class="section-badge">SELECTION PIPELINE</span>
            <h2 class="section-title">The 3-Stage Screening Process</h2>
            <p class="section-subtitle">How your reel progresses from initial link submission to the Grand Chennai Stage.</p>
          </div>

          <div class="stages-grid">
            <div class="stage-card card-glow">
              <div class="stage-number">Stage 01</div>
              <h3 class="stage-title">Compliance & Tech Screening</h3>
              <p class="stage-desc">
                Entries are checked for rule compliance: duration within 3 minutes, active Instagram link, collaboration tag with <strong>@wtl_leadingthechange</strong>, original non-plagiarized footage, and clear audio.
              </p>
              <div class="stage-tag tag-blue">Pass/Fail Filter</div>
            </div>

            <div class="stage-card card-glow">
              <div class="stage-number">Stage 02</div>
              <h3 class="stage-title">Grand Technical Jury Review</h3>
              <p class="stage-desc">
                Shortlisted reels are independently reviewed by a panel of film educators, screenwriters, and cinematographers across our 4 core rubric pillars (100 total marks).
              </p>
              <div class="stage-tag tag-orange">Top 50 Selection</div>
            </div>

            <div class="stage-card card-glow">
              <div class="stage-number">Stage 03</div>
              <h3 class="stage-title">Celebrity Jury Final Ranking</h3>
              <p class="stage-desc">
                Distinguished silver screen personalities and cinema directors review the top finalists to decide the ₹50,000 Champion, Runners-Up, and 12 Special Category trophy winners.
              </p>
              <div class="stage-tag tag-green">Final Trophy Allocation</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pro-Tips from the Judges -->
      <section class="judge-tips-section">
        <div class="container-custom">
          <div class="judge-tips-box glass-panel">
            <div class="tips-grid">
              <div class="tips-info-col">
                <span class="section-badge">INSIDER ADVICE</span>
                <h2 class="tips-title">5 Tips to Score Top Marks</h2>
                <p class="tips-sub">
                  Common elements that elevate an ordinary reel into a top contender:
                </p>

                <div class="tips-accordion">
                  <div class="tip-row">
                    <span class="tip-num">1</span>
                    <div>
                      <strong>Invest in Clear Audio:</strong>
                      <p>Viewers tolerate mediocre lighting, but bad audio causes immediate disengagement. Use a lavalier mic or ensure crisp voiceovers.</p>
                    </div>
                  </div>

                  <div class="tip-row">
                    <span class="tip-num">2</span>
                    <div>
                      <strong>Add Hardcoded Subtitles:</strong>
                      <p>Many viewers watch without volume first. Dynamic subtitles in Tamil or English help retain attention and clarify fast dialogue.</p>
                    </div>
                  </div>

                  <div class="tip-row">
                    <span class="tip-num">3</span>
                    <div>
                      <strong>Focus on Local Nuances:</strong>
                      <p>Authentic stories rooted in Tamil Nadu's real streets, colleges, coastal towns, and villages connect much deeper than generic scripts.</p>
                    </div>
                  </div>

                  <div class="tip-row">
                    <span class="tip-num">4</span>
                    <div>
                      <strong>Avoid Preachiness:</strong>
                      <p>Show, don't just lecture. Let the characters' choices and narrative consequences communicate the social message naturally.</p>
                    </div>
                  </div>

                  <div class="tip-row">
                    <span class="tip-num">5</span>
                    <div>
                      <strong>Tighten the Edit:</strong>
                      <p>Every single second must earn its place. If a scene doesn't advance the plot or evoke an emotion, cut it.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Side CTA Box -->
              <div class="tips-side-card">
                <div class="side-card-inner">
                  <div class="side-icon">🎬</div>
                  <h3 class="side-card-title">Ready to Benchmark Your Craft?</h3>
                  <p class="side-card-desc">
                    Show the jury what you've got. Submissions are 100% free and open to all districts.
                  </p>
                  <router-link to="/register" class="btn-primary w-full text-center">
                    <span>Submit Your Reel</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Call To Action Banner -->
      <section class="page-cta-strip">
        <div class="container-custom">
          <div class="cta-banner-box">
            <div class="cta-banner-content">
              <h2 class="cta-title">Ready for the Grand Stage?</h2>
              <p class="cta-sub">Lock in your submission today and get evaluated by top industry masters.</p>
            </div>
            <div class="cta-banner-btns">
              <button class="btn-primary btn-lg" @click="openRegisterModal">
                <span>Submit Your Reel</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <router-link to="/themes" class="btn-secondary">
                <span>Explore Themes</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '../components/PageBanner.vue'
import JudgingCriteria from '../components/JudgingCriteria.vue'
import { useRegisterModal } from '../composables/useRegisterModal'

const { openRegisterModal } = useRegisterModal()
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

/* Evaluation Stages */
.evaluation-stages-section {
  padding: 80px 0;
  background-color: #F8FAFC;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
}

.stages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.stage-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
}

.stage-number {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #2563EB;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.stage-title {
  font-family: var(--font-cinematic);
  font-size: 1.3rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 14px;
}

.stage-desc {
  font-size: 0.925rem;
  color: #526078;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.stage-tag {
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 14px;
  border-radius: 9999px;
  display: inline-block;
  align-self: flex-start;
}

.tag-blue {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #2563EB;
}

.tag-orange {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #2563EB;
}

.tag-green {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #2563EB;
}

/* Judge Tips Section */
.judge-tips-section {
  padding: 90px 0;
  background-color: #FFFFFF;
}

.judge-tips-box {
  padding: 48px;
  border-radius: 24px;
  border: 1px solid #E2E8F0;
  background: #F8FAFC;
}

.tips-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 48px;
  align-items: center;
}

.tips-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: #10183F;
  margin-bottom: 12px;
}

.tips-sub {
  font-size: 1.05rem;
  color: #526078;
  margin-bottom: 24px;
}

.tips-accordion {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tip-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.tip-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #2563EB;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.85rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.tip-row strong {
  display: block;
  font-size: 1rem;
  color: #10183F;
  margin-bottom: 2px;
}

.tip-row p {
  font-size: 0.875rem;
  color: #526078;
  line-height: 1.45;
}

/* Side Card */
.tips-side-card {
  background: #10183F;
  border-radius: 20px;
  padding: 36px 28px;
  color: #FFFFFF;
  box-shadow: 0 12px 35px rgba(16, 24, 63, 0.2);
  text-align: center;
}

.side-icon {
  font-size: 2.6rem;
  margin-bottom: 12px;
}

.side-card-title {
  font-family: var(--font-cinematic);
  font-size: 1.35rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 12px;
}

.side-card-desc {
  font-size: 0.925rem;
  color: #CBD5E1;
  line-height: 1.6;
  margin-bottom: 24px;
}

.w-full {
  width: 100%;
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
  .stages-grid {
    grid-template-columns: 1fr;
  }
  .tips-grid {
    grid-template-columns: 1fr;
    gap: 36px;
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
</style>
