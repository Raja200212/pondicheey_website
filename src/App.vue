<template>
  <div class="app-root">
    <!-- Top Navigation Bar -->
    <Navbar />

    <!-- Active Routed Page -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" @submitted="handleSubmissionSuccess" />
        </transition>
      </router-view>
    </main>

    <!-- Site Footer -->
    <Footer />

    <!-- Global Registration & Submit Reel Popup Modal -->
    <RegistrationModal @submitted="handleSubmissionSuccess" />

    <!-- Global Post Submission Success Screen Modal -->
    <SuccessModal
      v-if="latestSubmission"
      :submission="latestSubmission"
      @close="latestSubmission = null"
    />

    <!-- Quick Floating Contact Buttons (Call, WhatsApp, Email) -->
    <FloatingContact />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import RegistrationModal from './components/RegistrationModal.vue'
import SuccessModal from './components/SuccessModal.vue'
import FloatingContact from './components/FloatingContact.vue'

const latestSubmission = ref(null)

const handleSubmissionSuccess = (submissionData) => {
  latestSubmission.value = submissionData
}

provide('onSubmissionSuccess', handleSubmissionSuccess)
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

/* Global Page Transition Animations */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
