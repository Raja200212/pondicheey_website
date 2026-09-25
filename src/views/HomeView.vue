<template>
  <div class="home-view">
    <!-- Section 1: Hero Section (Preserved as requested) -->
    <HeroSection />

    <!-- 1. WHAT IS WE THE LEADERS? & 2. WHY SOCIAL IMPACT MATTERS -->
    <AboutSection />

    <!-- 4. EXPLORE THE THEMES -->
    <ContentTopics />

    <!-- 5. HOW IT WORKS & 8. IMPORTANT DATES -->
    <RulesTimeline />

    <!-- 7. JUDGING CRITERIA -->
    <JudgingCriteria />

    <!-- 6. PRIZE POOL & 9. FINAL CTA -->
    <PrizePoolSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ContentTopics from '../components/ContentTopics.vue'
import PrizePoolSection from '../components/PrizePoolSection.vue'
import JudgingCriteria from '../components/JudgingCriteria.vue'
import RulesTimeline from '../components/RulesTimeline.vue'
</script>

<style scoped>
.home-view {
  background-color: var(--bg-primary);
  width: 100%;
}
</style>
