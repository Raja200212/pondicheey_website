<template>
  <Teleport to="body">
    <div v-if="isRegisterModalOpen" class="modal-backdrop animate-fade" @click.self="closeRegisterModal">
      <div class="modal-dialog glass-panel animate-scale">
        <!-- Close Button -->
        <button class="modal-close-btn" @click="closeRegisterModal" aria-label="Close Registration Modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <!-- Modal Header -->
        <div class="modal-header">
          <div class="header-badge">
            <span>🎬 OFFICIAL ENTRY PORTAL</span>
          </div>
          <h2 class="modal-title">
            Register & <span class="text-gradient-hero">Submit Your Reel</span>
          </h2>
          <p class="modal-subtitle">
            Fill in your creator details and Instagram Reel link below. 100% Free Entry • ₹90,000+ Prize Pool.
          </p>
        </div>

        <!-- Scrollable Modal Body containing the Registration Form -->
        <div class="modal-body-scroll">
          <RegistrationForm @submitted="handleSubmitted" :isModalMode="true" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRegisterModal } from '../composables/useRegisterModal'
import RegistrationForm from './RegistrationForm.vue'

const emit = defineEmits(['submitted'])
const { isRegisterModalOpen, closeRegisterModal } = useRegisterModal()

const handleSubmitted = (data) => {
  closeRegisterModal()
  emit('submitted', data)
}

// Handle ESC key to close
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && isRegisterModalOpen.value) {
    closeRegisterModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(16, 24, 63, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}

.modal-dialog {
  background: #FFFFFF;
  border-radius: 28px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 25px 60px rgba(16, 24, 63, 0.35);
  border: 1px solid #E2E8F0;
  overflow: hidden;
}

.modal-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #F3F6FA;
  border: 1px solid #E2E8F0;
  color: #10183F;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
}

.modal-close-btn:hover {
  background: #EFF6FF;
  border-color: #BFDBFE;
  color: #2563EB;
  transform: rotate(90deg) scale(1.05);
}

.modal-header {
  padding: 32px 36px 20px;
  background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
  border-bottom: 1px solid #E2E8F0;
  text-align: center;
  position: relative;
}

.header-badge {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #2563EB;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  padding: 4px 14px;
  border-radius: 9999px;
  margin-bottom: 8px;
}

.modal-title {
  font-family: var(--font-cinematic);
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  color: #10183F;
  line-height: 1.2;
  margin-bottom: 6px;
}

.modal-subtitle {
  font-size: 0.95rem;
  color: #526078;
  max-width: 600px;
  margin: 0 auto;
}

.modal-body-scroll {
  flex-grow: 1;
  overflow-y: auto;
  padding: 24px 36px 36px;
}

/* Scrollbar */
.modal-body-scroll::-webkit-scrollbar {
  width: 6px;
}
.modal-body-scroll::-webkit-scrollbar-track {
  background: #F1F5F9;
}
.modal-body-scroll::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 3px;
}

.animate-fade {
  animation: fadeIn 0.25s ease-out;
}

.animate-scale {
  animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.94) translateY(12px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding: 12px;
  }
  .modal-dialog {
    max-height: 94vh;
    border-radius: 20px;
  }
  .modal-header {
    padding: 24px 20px 16px;
  }
  .modal-body-scroll {
    padding: 16px 18px 24px;
  }
}
</style>
