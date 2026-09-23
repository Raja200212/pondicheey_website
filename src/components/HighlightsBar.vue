<template>
  <div class="highlights-bar">
    <div class="container-custom">
      <div class="highlights-grid">
        <!-- Item 1: Scope -->
        <div class="highlight-item">
          <div class="item-icon-box icon-blue">
            <span>📍</span>
          </div>
          <div class="item-info">
            <span class="item-label">Statewide Scope</span>
            <span class="item-value">All Over Tamil Nadu & PY</span>
          </div>
        </div>

        <div class="divider-line"></div>

        <!-- Item 2: Top Prize -->
        <div class="highlight-item">
          <div class="item-icon-box icon-orange">
            <span>💰</span>
          </div>
          <div class="item-info">
            <span class="item-label">Top Prize Cash</span>
            <span class="item-value text-accent-gold">₹50,000 Cash</span>
          </div>
        </div>

        <div class="divider-line"></div>

        <!-- Item 3: Deadline -->
        <div class="highlight-item">
          <div class="item-icon-box icon-green">
            <span>📅</span>
          </div>
          <div class="item-info">
            <span class="item-label">Submission Deadline</span>
            <span class="item-value">October 25</span>
          </div>
        </div>

        <div class="divider-line"></div>

        <!-- Item 4: Grand Finale -->
        <div class="highlight-item">
          <div class="item-icon-box icon-blue">
            <span>🎪</span>
          </div>
          <div class="item-info">
            <span class="item-label">Grand Finale & Awards</span>
            <span class="item-value">Chennai (Celebrity Jury)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.highlights-bar {
  background: #F3F6FA;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
  padding: 22px 0;
  position: relative;
  z-index: 20;
}

.highlights-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  min-width: 200px;
}

.item-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(16, 24, 63, 0.04);
}

.icon-blue {
  background: #EFF6FF;
  border-color: #BFDBFE;
}

.icon-orange {
  background: #EFF6FF;
  border-color: #BFDBFE;
}

.icon-green {
  background: #EFF6FF;
  border-color: #BFDBFE;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.item-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #526078;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.item-value {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: #10183F;
}

.text-accent-gold {
  color: #2563EB;
  font-weight: 800;
}

.divider-line {
  width: 1px;
  height: 38px;
  background: #E2E8F0;
}

@media (max-width: 992px) {
  .divider-line {
    display: none;
  }
  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 580px) {
  .highlights-grid {
    grid-template-columns: 1fr;
  }
}
</style>
