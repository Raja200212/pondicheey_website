<template>
  <div class="page-banner-section">
    <div class="banner-spotlight spotlight-left"></div>
    <div class="banner-spotlight spotlight-right"></div>
    
    <div class="container-custom relative-box">
      <!-- Breadcrumb Navigation -->
      <nav class="breadcrumb-nav" aria-label="Breadcrumb">
        <router-link to="/" class="breadcrumb-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>Home</span>
        </router-link>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">{{ currentPage }}</span>
      </nav>

      <!-- Badge & Titles -->
      <div class="banner-content">
        <div v-if="badge" class="badge-pill banner-badge">
          <span v-if="badgeIcon" class="badge-icon">{{ badgeIcon }}</span>
          <span>{{ badge }}</span>
        </div>

        <h1 class="banner-title">
          <slot name="title">{{ title }}</slot>
        </h1>

        <p v-if="subtitle" class="banner-subtitle">
          {{ subtitle }}
        </p>

        <!-- Optional Quick Action Slot or Breadcrumb Chips -->
        <div v-if="$slots.actions" class="banner-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentPage: {
    type: String,
    required: true
  },
  badge: {
    type: String,
    default: ''
  },
  badgeIcon: {
    type: String,
    default: '✨'
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.page-banner-section {
  position: relative;
  background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
  border-bottom: 1px solid #E2E8F0;
  padding: 48px 0 54px;
  overflow: hidden;
}

.relative-box {
  position: relative;
  z-index: 2;
}

.banner-spotlight {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  opacity: 0.5;
  z-index: 1;
}

.spotlight-left {
  background: #DBEAFE;
  top: -100px;
  left: -50px;
}

.spotlight-right {
  background: #EFF6FF;
  top: -50px;
  right: -50px;
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #526078;
  margin-bottom: 20px;
}

.breadcrumb-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #2563EB;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #1D4ED8;
  text-decoration: underline;
}

.breadcrumb-sep {
  color: #94A3B8;
}

.breadcrumb-current {
  color: #10183F;
  font-weight: 700;
}

.banner-content {
  max-width: 860px;
}

.banner-badge {
  margin-bottom: 16px;
  background: #EFF6FF;
  border-color: #BFDBFE;
  color: #1E40AF;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.banner-title {
  font-family: var(--font-cinematic);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 900;
  color: #10183F;
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}

.banner-subtitle {
  font-size: 1.15rem;
  color: #526078;
  line-height: 1.65;
  max-width: 720px;
}

.banner-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}
</style>
