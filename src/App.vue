<script setup>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
</script>

<template>
  <div class="app-container">
    <Header />
    <Banner />
    <footer class="footer">Footer</footer>
  </div>
</template>

<style>
.app-container {
  background-color: #f3f4f6;
  max-width: 1440px;
  margin: 0 auto;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 16px;
}
</style>
