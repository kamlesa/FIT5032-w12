<script setup>
import SiteHeader from './SiteHeader.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-backblue">
    <header>
      <SiteHeader />
    </header>

    <main class="flex-grow p-4 bg-backblue">
      <router-view />
    </main>

    <footer class="bg-savoyblue text-center py-6 mt-auto">
      <p class="text-whiteblue text-sm">© 2025 Healthy Mental, A not-for-profit organisation.</p>
    </footer>
  </div>
</template>
