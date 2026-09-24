<template>
  <div class="register-page">
    <!-- Page Hero Banner -->
    <PageBanner
      currentPage="Submit Reel"
      badge="OFFICIAL REGISTRATION & SUBMISSION"
      badgeIcon="🎬"
      subtitle="Complete your free registration and submit your Instagram Reel link below. 100% Free Entry • ₹90,000+ Prize Pool • Guaranteed Participation Certificate."
    >
      <template #title>
        Submit Your Reel & <span class="text-gradient-hero">Register</span>
      </template>

      <template #actions>
        <router-link to="/rules" class="btn-secondary">
          <span>Check Submission Rules</span>
        </router-link>
        <router-link to="/themes" class="btn-secondary">
          <span>Browse Themes</span>
        </router-link>
      </template>
    </PageBanner>

    <div class="page-content-wrap">
      <!-- Quick Pre-submission Checklist Strip -->
      <section class="checklist-section">
        <div class="container-custom">
          <div class="checklist-box">
            <h3 class="checklist-title">
              <span>⚡</span> Quick Pre-Submission Checklist:
            </h3>
            <div class="checklist-items">
              <div class="check-item">
                <span class="check-badge">1</span>
                <span>Video is strictly under 3 minutes & 9:16 vertical</span>
              </div>
              <div class="check-item">
                <span class="check-badge">2</span>
                <span>Reel is posted publicly on Instagram</span>
              </div>
              <div class="check-item">
                <span class="check-badge">3</span>
                <span>Invited <strong>@wtl_leadingthechange</strong> as Collaborator</span>
              </div>
              <div class="check-item">
                <span class="check-badge">4</span>
                <span>Used hashtags #WeTheLeaders #ReelsForRealChange</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Registration Form -->
      <div class="form-container-wrap">
        <RegistrationForm @submitted="$emit('submitted', $event)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '../components/PageBanner.vue'
import RegistrationForm from '../components/RegistrationForm.vue'

defineEmits(['submitted'])
</script>

<style scoped>
.checklist-section {
  padding: 36px 0 10px;
  background-color: #F8FAFC;
}

.checklist-box {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  border-radius: 18px;
  padding: 24px 28px;
}

.checklist-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 800;
  color: #10183F;
  margin-bottom: 16px;
}

.checklist-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: #10183F;
  background: #FFFFFF;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #DBEAFE;
}

.check-badge {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #2563EB;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  flex-shrink: 0;
}

.form-container-wrap {
  padding-bottom: 60px;
}

@media (max-width: 992px) {
  .checklist-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .checklist-items {
    grid-template-columns: 1fr;
  }
}
</style>
