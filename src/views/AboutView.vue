<template>
  <div class="page-container">
    <div class="page-header">
      <div class="container-custom">
        <h1 class="page-title">About We The Leaders</h1>
        <p class="page-subtitle">A movement to empower the next generation of social changemakers.</p>
      </div>
    </div>
    
    <div class="container-custom page-content">
      <div class="editorial-grid">
        <div class="e-content">
          <div class="animated-text" style="animation-delay: 0.1s;">
            <h2>Our Vision</h2>
            <p>We envision a world where young people are actively engaged in solving the most pressing challenges in their communities. By providing a platform, resources, and recognition, we aim to cultivate a generation of leaders driven by empathy and action.</p>
          </div>
          
          <div class="animated-text" style="animation-delay: 0.3s;">
            <h2 class="mt-4">Our Mission</h2>
            <p>Our mission is to identify, support, and amplify the voices of young changemakers. We believe that youth leadership is the key to sustainable community development. Through "We The Leaders," we connect passionate individuals with the resources they need to turn their ideas into tangible impact.</p>
          </div>
          
          <div class="animated-text" style="animation-delay: 0.5s;">
            <h2 class="mt-4">Why the Initiative Exists</h2>
            <p>Often, young people have brilliant ideas for social improvement but lack the platform or resources to execute them. This initiative was created to bridge that gap. We want to prove that you don't need to be in a position of power to create real change—you just need the dedication to start.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-bottom: 120px;
}

.page-header {
  background: linear-gradient(rgba(11, 27, 61, 0.6), rgba(11, 27, 61, 0.75)), url('/youngster_awareness_new.jpg') center 30%/cover no-repeat;
  padding: 240px 0 160px;
  text-align: center;
  color: #FFFFFF;
}

.page-title {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 16px;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--brand-coral);
  font-weight: 600;
}

.page-content {
  margin-top: 60px;
}

.editorial-grid {
  display: block;
  max-width: 900px;
  margin: 0 auto;
}

.e-content h2 {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--brand-navy);
  margin-bottom: 16px;
}

.e-content p {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 24px;
}

.mt-4 {
  margin-top: 40px;
}

.animated-text {
  animation: fadeUp 0.6s ease-out backwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.single-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(11, 27, 61, 0.15);
  animation: fadeIn 0.8s ease-out backwards;
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@media (max-width: 992px) {
  .editorial-grid {
    grid-template-columns: 1fr;
  }
  .image-wrapper {
    margin-top: 40px;
  }
}
</style>
