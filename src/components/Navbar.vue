<template>
  <div class="header-container">
    <!-- Top Contact Utility Bar Above Navbar -->
    <div class="top-contact-bar">
      <div class="container-custom">
        <div class="top-bar-content">
          <!-- Left Highlights Tagline -->
          <div class="top-tagline">
            <span class="live-dot"></span>
            <span>Free Registration Open • Tamil Nadu & Puducherry</span>
          </div>

          <!-- Right Contact Links (Phone, Email, WhatsApp) -->
          <div class="top-contact-links">
            <!-- Phone Number -->
            <a href="tel:9677861461" class="top-contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+91 9677861461</span>
            </a>

            <span class="top-sep">|</span>

            <!-- Email Address -->
            <a href="mailto:reels4realchange.wtl@gmail.com" class="top-contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <span>reels4realchange.wtl@gmail.com</span>
            </a>

            <span class="top-sep">|</span>

            <!-- WhatsApp Chat -->
            <a
              href="https://wa.me/919677861461?text=Hi%20We%20The%20Leaders%20Team%2C%20I%20have%20a%20query%20regarding%20Reels%20For%20Real%20Change%20competition."
              target="_blank"
              rel="noopener noreferrer"
              class="top-contact-link top-wa-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <header class="navbar-wrapper">
      <div class="container-custom">
        <div class="nav-content">
          <!-- Brand Logo -->
          <router-link to="/" class="brand-link">
            <div class="logo-icon-box">
              <img src="/logo.png" alt="We The Leaders Logo" class="brand-logo-img" />
            </div>
            <div class="brand-text">
              <span class="org-name">WE THE LEADERS</span>
              <span class="event-title">REELS FOR REAL CHANGE</span>
            </div>
          </router-link>

          <!-- Desktop Menu -->
          <nav class="nav-links">
            <router-link to="/" class="nav-item" exact-active-class="router-link-active">Home</router-link>
            <router-link to="/about" class="nav-item">About</router-link>
            <router-link to="/themes" class="nav-item">Themes</router-link>
            <router-link to="/content" class="nav-item">Content Guide</router-link>
            <router-link to="/prizes" class="nav-item">Prize Pool</router-link>
            <router-link to="/judging" class="nav-item">Judging</router-link>
            <router-link to="/rules" class="nav-item">Rules</router-link>
          </nav>

          <!-- CTA Button -->
          <div class="nav-action">
            <button class="btn-primary btn-sm" @click="openRegisterModal">
              <span>Submit Reel</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
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
          <router-link to="/" @click="isMobileMenuOpen = false" class="mobile-nav-item">Home</router-link>
          <router-link to="/about" @click="isMobileMenuOpen = false" class="mobile-nav-item">About Event</router-link>
          <router-link to="/themes" @click="isMobileMenuOpen = false" class="mobile-nav-item">Themes & Topics</router-link>
          <router-link to="/content" @click="isMobileMenuOpen = false" class="mobile-nav-item">Content & Creator Guide</router-link>
          <router-link to="/prizes" @click="isMobileMenuOpen = false" class="mobile-nav-item">Prize Pool & Awards</router-link>
          <router-link to="/judging" @click="isMobileMenuOpen = false" class="mobile-nav-item">Judging Criteria</router-link>
          <router-link to="/rules" @click="isMobileMenuOpen = false" class="mobile-nav-item">Rules & Timeline</router-link>
          <button @click="openMobileRegister" class="btn-primary w-full text-center mt-2">
            Register & Submit Reel Now
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRegisterModal } from '../composables/useRegisterModal'

const isMobileMenuOpen = ref(false)
const { openRegisterModal } = useRegisterModal()

const openMobileRegister = () => {
  isMobileMenuOpen.value = false
  openRegisterModal()
}
</script>

<style scoped>
.header-container {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  box-shadow: 0 2px 12px rgba(16, 24, 63, 0.05);
}

/* Top Utility Contact Bar */
.top-contact-bar {
  background: #10183F;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 6px 0;
  font-size: 0.775rem;
  color: #FFFFFF;
}

.top-bar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.top-tagline {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #CBD5E1;
  font-weight: 600;
  font-size: 0.75rem;
}

.live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #60A5FA;
  display: inline-block;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 0.4; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.1); }
}

.top-contact-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.top-contact-link {
  color: #EFF6FF;
  text-decoration: none;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  font-size: 0.775rem;
}

.top-contact-link:hover {
  color: #93C5FD;
}

.top-wa-link {
  color: #25D366;
}

.top-wa-link:hover {
  color: #4ADE80;
}

.top-sep {
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.7rem;
}

.navbar-wrapper {
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
  padding: 10px 0;
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
  color: #2563EB;
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
  gap: 20px;
}

.nav-item {
  color: #526078;
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  padding: 4px 0;
  white-space: nowrap;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: #2563EB;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2.5px;
  background: #2563EB;
  border-radius: 2px;
  transition: width 0.25s ease;
}

.nav-item:hover::after,
.nav-item.router-link-active::after {
  width: 100%;
}

.btn-sm {
  padding: 10px 20px;
  font-size: 0.9rem;
  white-space: nowrap;
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
  gap: 10px;
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

.mobile-nav-item:hover,
.mobile-nav-item.router-link-active {
  background: #EFF6FF;
  color: #2563EB;
}

.w-full {
  width: 100%;
}

.mt-2 {
  margin-top: 8px;
}

.text-center {
  text-align: center;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1100px) {
  .nav-links, .nav-action {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}

@media (max-width: 768px) {
  .top-tagline {
    display: none;
  }
  .top-bar-content {
    justify-content: center;
  }
  .top-contact-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    font-size: 0.72rem;
  }
}
</style>
