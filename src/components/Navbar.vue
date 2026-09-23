<template>
  <header class="navbar-wrapper">
    <div class="container-custom">
      <div class="nav-content">
        <!-- Brand Logo -->
        <a href="#" class="brand-link">
          <div class="logo-icon-box">
            <img src="/logo.png" alt="We The Leaders Logo" class="brand-logo-img" />
          </div>
          <div class="brand-text">
            <span class="org-name">WE THE LEADERS</span>
            <span class="event-title">REELS FOR REAL CHANGE</span>
          </div>
        </a>

        <!-- Desktop Menu -->
        <nav class="nav-links">
          <a href="#about" class="nav-item">About</a>
          <a href="#prizes" class="nav-item">Prize Pool</a>
          <a href="#judging" class="nav-item">Judging</a>
          <a href="#rules" class="nav-item">Rules & Timeline</a>
        </nav>

        <!-- CTA Button -->
        <div class="nav-action">
          <a href="#register" class="btn-primary btn-sm">
            <span>Submit Reel</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle Navigation">
          <span :class="{ 'open': isMobileMenuOpen }"></span>
          <span :class="{ 'open': isMobileMenuOpen }"></span>
          <span :class="{ 'open': isMobileMenuOpen }"></span>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <a href="#about" @click="isMobileMenuOpen = false" class="mobile-nav-item">About Event</a>
        <a href="#prizes" @click="isMobileMenuOpen = false" class="mobile-nav-item">Prize Pool & Awards</a>
        <a href="#judging" @click="isMobileMenuOpen = false" class="mobile-nav-item">Judging Criteria</a>
        <a href="#rules" @click="isMobileMenuOpen = false" class="mobile-nav-item">Rules & Timeline</a>
        <a href="#register" @click="isMobileMenuOpen = false" class="btn-primary w-full text-center mt-2">
          Register & Submit Reel Now
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
  box-shadow: 0 2px 10px rgba(16, 24, 63, 0.04);
  padding: 12px 0;
  transition: all 0.3s ease;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}

.logo-icon-box {
  width: 56px;
  height: 56px;
  background: #FFFFFF;
  border: 2px solid #E2E8F0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: 0 2px 8px rgba(16, 24, 63, 0.08);
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease;
  flex-shrink: 0;
}

.brand-link:hover .logo-icon-box {
  transform: scale(1.06);
  border-color: #CBD5E1;
}

.brand-logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.org-name {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #DC2626;
  text-transform: uppercase;
}

.event-title {
  font-family: var(--font-cinematic);
  font-size: 1.15rem;
  font-weight: 800;
  color: #10183F;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-item {
  color: #526078;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item:hover {
  color: #10183F;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #10183F;
  transition: width 0.25s ease;
}

.nav-item:hover::after {
  width: 100%;
}

.btn-sm {
  padding: 10px 20px;
  font-size: 0.9rem;
}

.mobile-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
}

.mobile-toggle span {
  width: 24px;
  height: 2.5px;
  background: #10183F;
  border-radius: 2px;
  transition: 0.3s;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  margin-top: 14px;
  border-radius: 16px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  box-shadow: 0 10px 25px rgba(16, 24, 63, 0.1);
  animation: fadeIn 0.2s ease-in-out;
}

.mobile-nav-item {
  color: #10183F;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 14px;
  border-radius: 8px;
  transition: all 0.2s;
}

.mobile-nav-item:hover {
  background: #F3F6FA;
  color: #10183F;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .nav-links, .nav-action {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}
</style>
