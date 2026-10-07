<template>
  <div class="page-container">
    <div class="page-header">
      <div class="container-custom">
        <h1 class="page-title">Rules & Regulations</h1>
        <p class="page-subtitle">Tamil Nadu & Puducherry • 38+1 Districts</p>
        <div class="header-highlights">
          <span>100% FREE Registration</span> • <span>SOLO / TEAM (Up to 4)</span> • <span>Deadline: 25 OCT 2026</span>
        </div>
      </div>
    </div>
    
    <div class="container-custom page-content">
      <div class="content-actions">
        <a href="/WTL_Rules_Regulations.pdf" download class="btn-secondary download-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="download-icon">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Rules And Regulations PDF
        </a>
      </div>

      <div class="rules-accordion">
        
        <div class="r-card">
          <div class="r-summary">1. Eligibility & Participation</div>
          <div class="r-content">
            <ul>
              <li><strong>Eligibility:</strong> Open to participants from Tamil Nadu and Puducherry.</li>
              <li><strong>Participation:</strong> Solo or team entries are allowed, with a maximum of 4 members per team.</li>
              <li><strong>Registration:</strong> Participation and registration are completely free.</li>
              <li><strong>Certificate:</strong> Eligible participants will receive a verified participation certificate, subject to competition requirements.</li>
            </ul>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">2. Reel Requirements</div>
          <div class="r-content">
            <ul>
              <li><strong>Duration:</strong> Each reel must be between 1 and 3 minutes.</li>
              <li><strong>Format:</strong> Vertical 9:16 format only.</li>
              <li><strong>Resolution:</strong> Minimum 1080p.</li>
              <li><strong>Language:</strong> Tamil, English and other local languages are allowed.</li>
              <li><strong>Subtitles:</strong> English subtitles are compulsory.</li>
              <li><strong>Theme:</strong> The reel must clearly address one of the official impact themes.</li>
            </ul>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">3. Official Impact Themes</div>
          <div class="r-content">
            <ul>
              <li>01 Youth Leadership</li>
              <li>02 Social Awareness</li>
              <li>03 Civic Pride</li>
              <li>04 Environmental Sustainability</li>
              <li>05 Gender Equality</li>
              <li>06 Other officially announced impact themes</li>
            </ul>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">4. Instagram Submission Process</div>
          <div class="r-content">
            <ol class="custom-list">
              <li>Complete the official registration form with the required details.</li>
              <li>Post the completed reel on your public Instagram profile.</li>
              <li>Send a Collab Request to <strong>@wtl_leadingthechange</strong>.</li>
              <li>Submit the published Instagram Reel link through the registration form.</li>
              <li>Save the Registration ID received after successful submission.</li>
            </ol>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">5. Originality & Content Standards</div>
          <div class="r-content">
            <ul>
              <li><strong>Original Work:</strong> Submitted reels must be original content created by the participant/team.</li>
              <li><strong>Rights & Permissions:</strong> Participants are responsible for permissions relating to third-party footage, music, images, logos or copyrighted material.</li>
              <li><strong>Responsible Content:</strong> Content must not contain hateful, abusive, discriminatory, defamatory, sexually explicit or otherwise inappropriate material.</li>
              <li><strong>Authenticity:</strong> Content should be respectful, responsible and relevant to the chosen theme.</li>
              <li><strong>Safety:</strong> Participants must not create content that places themselves or others at unreasonable risk.</li>
            </ul>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">6. Submission & Deadline</div>
          <div class="r-content">
            <ul>
              <li><strong>Last Date:</strong> All entries must be submitted on or before 25 October 2026.</li>
              <li><strong>Public Profile:</strong> The Instagram profile used for submission must remain public for verification.</li>
              <li><strong>Valid Entry:</strong> The reel must satisfy all duration, format, resolution, subtitle and theme requirements.</li>
              <li><strong>Late Entries:</strong> Entries submitted after the deadline may not be considered.</li>
            </ul>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">7. Evaluation & Recognition</div>
          <div class="r-content">
            <ul>
              <li><strong>Theme Relevance:</strong> Clarity and connection to the selected impact theme.</li>
              <li><strong>Creativity:</strong> Originality of concept, storytelling and presentation.</li>
              <li><strong>Social Impact:</strong> Strength of the message and potential to inspire positive change.</li>
              <li><strong>Execution:</strong> Overall quality, editing, visuals, clarity and effective use of the reel format.</li>
              <li><strong>Recognition:</strong> Selected entries may receive prizes, rewards and special category recognitions as announced by the organisers.</li>
            </ul>
          </div>
        </div>

        <div class="r-card">
          <div class="r-summary">8. Disqualification</div>
          <div class="r-content">
            <ul>
              <li>Entries that fail to follow the official requirements may be rejected.</li>
              <li>Plagiarised, duplicate or unauthorised content may lead to disqualification.</li>
              <li>Prohibited or inappropriate content will not be considered.</li>
              <li>False or misleading registration information may invalidate an entry.</li>
              <li>The organisers reserve the right to disqualify entries that breach the competition rules.</li>
            </ul>
          </div>
        </div>

      </div>
      
      <div class="important-note text-center">
        <h3 class="note-title">IMPORTANT</h3>
        <p>Please review the complete guidelines and theme details through the official registration link before submitting your reel.</p>
        <div class="tagline">REGISTER • CREATE • INSPIRE</div>
        <router-link to="/register" class="btn-primary mt-4">Go To Official Registration</router-link>
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
  background-image: linear-gradient(rgba(11, 27, 61, 0.7), rgba(11, 27, 61, 0.85)), url('/rules-eligibility-new.jpg');
  background-position: center 90%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 220px 0 120px;
  text-align: center;
  color: #FFFFFF;
}

.page-title {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--brand-coral);
  font-weight: 600;
  margin-bottom: 20px;
}

.header-highlights {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 24px;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.95rem;
  font-weight: 500;
}

.header-highlights span {
  color: #F8FAFC;
}

.page-content {
  margin-top: 50px;
}

.content-actions {
  max-width: 850px;
  margin: 0 auto 24px;
  display: flex;
  justify-content: flex-end;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--brand-navy);
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 50px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.download-btn:hover {
  background: transparent;
  color: var(--brand-navy);
  border-color: var(--brand-navy);
  box-shadow: 0 4px 15px rgba(16, 24, 63, 0.1);
}

.download-icon {
  flex-shrink: 0;
}

.rules-accordion {
  max-width: 850px;
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
  box-shadow: 0 8px 25px rgba(11, 27, 61, 0.08);
}

.r-summary {
  padding: 24px 32px;
  font-family: var(--font-display);
  font-size: 1.25rem;
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
  max-height: 800px;
  opacity: 1;
  padding: 24px 32px 32px;
  border-top: 1px solid var(--border-subtle);
}

.r-content ul {
  padding-left: 20px;
}

.custom-list {
  padding-left: 20px;
}

.r-content li {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

.r-content li strong {
  color: var(--brand-navy);
}

.r-content li:last-child {
  margin-bottom: 0;
}

.important-note {
  max-width: 850px;
  margin: 60px auto 0;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  padding: 40px;
  border-radius: 20px;
}

.note-title {
  color: #1E3A8A;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.important-note p {
  color: #334155;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.tagline {
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--brand-coral);
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.mt-4 {
  margin-top: 24px;
  display: inline-block;
}

.text-center {
  text-align: center;
}
</style>
