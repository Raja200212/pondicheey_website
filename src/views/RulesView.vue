<template>
  <div class="page-container">
    <div class="page-header">
      <div class="container-custom">
        <h1 class="page-title">Rules & Eligibility</h1>
        <p class="page-subtitle">Everything you need to know before joining the movement.</p>
      </div>
    </div>
    
    <div class="container-custom page-content">
      <div class="rules-accordion">
        
        <div class="r-card">
          <div class="r-summary">Eligibility</div>
          <div class="r-content">
            <ul>
              <li>Participants must be aged between 16 and 35 years.</li>
              <li>You can participate as an individual or form a team of up to 4 members.</li>
              <li>The initiative must take place within the designated regions (Tamil Nadu or Puducherry).</li>
              <li>Both students and working professionals are welcome.</li>
            </ul>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">Participation Rules</div>
          <div class="r-content">
            <ul>
              <li>Only one project submission per team or individual is allowed.</li>
              <li>The project must address at least one of the 8 official themes.</li>
              <li>All project activities must comply with local laws and regulations.</li>
              <li>Projects must have been initiated or significantly executed within the last 12 months.</li>
            </ul>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">Content & Submission Requirements</div>
          <div class="r-content">
            <ul>
              <li>Submissions must include a 1-3 minute video documenting the impact.</li>
              <li>A written impact summary (max 500 words) must accompany the video.</li>
              <li>All content must be original. Use of copyrighted material without permission will result in disqualification.</li>
              <li>Submissions must be made through the official portal before the deadline.</li>
            </ul>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">Disqualification Conditions</div>
          <div class="r-content">
            <ul>
              <li>Plagiarizing another team's project or impact metrics.</li>
              <li>Falsifying data, impact numbers, or community testimonials.</li>
              <li>Submitting content that is discriminatory, offensive, or promotes hate speech.</li>
              <li>Failure to provide proof of impact if selected as a finalist.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-bottom: 120px;
  background: var(--bg-secondary);
  min-height: 100vh;
}

.page-header {
  background-image: linear-gradient(rgba(11, 27, 61, 0.6), rgba(11, 27, 61, 0.75)), url('/rules-eligibility-new.jpg');
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
  margin-top: 40px;
}

.rules-accordion {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.r-card {
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(11, 27, 61, 0.03);
  transition: box-shadow 0.3s ease;
}

.r-card:hover {
  box-shadow: 0 8px 25px rgba(11, 27, 61, 0.06);
}

.r-summary {
  padding: 24px 32px;
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--brand-navy);
  cursor: pointer;
  position: relative;
}

.r-summary::after {
  content: '+';
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: var(--brand-coral);
  transition: transform 0.3s ease;
}

.r-card:hover .r-summary::after {
  content: '−';
}

.r-content {
  max-height: 0;
  opacity: 0;
  padding: 0 32px;
  border-top: 1px solid transparent;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.r-card:hover .r-content {
  max-height: 400px;
  opacity: 1;
  padding: 24px 32px 32px;
  border-top: 1px solid var(--border-subtle);
}

.r-content ul {
  padding-left: 20px;
}

.r-content li {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

.r-content li:last-child {
  margin-bottom: 0;
}
</style>
