<template>
  <div class="app-root">
    <!-- Navbar -->
    <Navbar />

    <main>
      <!-- Section 1: Hero Section -->
      <HeroSection />

      <!-- Section 2: Quick Highlights Bar -->
      <HighlightsBar />

      <!-- Section 3: About We The Leaders & Reel Competition -->
      <AboutSection />

      <!-- Section 4: Reel Themes & Content Topics -->
      <ContentTopics />

      <!-- Section 5: Prize Pool & Awards -->
      <PrizePoolSection />

      <!-- Section 6: Judging Criteria -->
      <JudgingCriteria />

      <!-- Section 7 & 8: Important Rules & Event Timeline -->
      <RulesTimeline />

      <!-- Section 9: Registration & Reel Submission Form -->
      <RegistrationForm @submitted="handleSubmissionSuccess" />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Section 10: Post Submission Success Screen Modal -->
    <SuccessModal
      v-if="latestSubmission"
      :submission="latestSubmission"
      @close="latestSubmission = null"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import HighlightsBar from './components/HighlightsBar.vue'
import AboutSection from './components/AboutSection.vue'
import ContentTopics from './components/ContentTopics.vue'
import PrizePoolSection from './components/PrizePoolSection.vue'
import JudgingCriteria from './components/JudgingCriteria.vue'
import RulesTimeline from './components/RulesTimeline.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import SuccessModal from './components/SuccessModal.vue'
import Footer from './components/Footer.vue'

const latestSubmission = ref(null)

const handleSubmissionSuccess = (submissionData) => {
  latestSubmission.value = submissionData
}
</script>

<style>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  color: var(--text-main);
}

main {
  flex-grow: 1;
}
</style>
