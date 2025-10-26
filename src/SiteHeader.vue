<template>
  <header class="site-header">
    <div class="nav-container">
      <!-- Logo + Site name -->
      <div class="logo-group">
        <div class="logo-circle" aria-label="White Circle (Imaginary Logo)"></div>
        <span class="site-name">Healthy Mental</span>
      </div>

      <!-- Tabs -->
      <nav class="nav-links" role="navigation">
        <router-link to="/" class="nav-item" role="button">Home</router-link>
        <router-link to="/resources" class="nav-item" role="button">Resources</router-link>
        <router-link to="/map" class="nav-item" role="button">Support Locations</router-link>
        <router-link to="/admin" class="nav-item" role="button">Admin</router-link>
        <router-link to="/mood" class="nav-item" role="button">Mood Check</router-link>
        <router-link to="/helloworld" class="nav-item" role="button">Hello World</router-link>
        <router-link to="/weather" class="nav-item" role="button">W10: Get Weather</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
// no changes needed here
</script>

<style scoped>

/* Header styling */
.site-header {
  width: 100%;
  background-color: #5A62BC;
  color: #EFFFFD;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}

/* Main layout */
.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo + Name */
.logo-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-circle {
  width: 40px;
  height: 40px;
  background-color: #EFFFFD;
  border-radius: 50%;
}

.site-name {
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
}

/* Navigation links */
.nav-links {
  display: flex;
  gap: 24px;
}

.nav-item {
  padding: 8px 16px;
  font-weight: 600;
  text-decoration: none;
  color: #EFFFFD;
  border-radius: 6px;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.nav-item:hover {
  background-color: #A9CEF4;
  color: #2B2D42;
}
</style>
