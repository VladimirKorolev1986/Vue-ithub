<script setup>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import SmallerBanners from './components/SmallerBanners.vue'
import BrowseCategories from './components/BrowseCategories.vue'
import Products from './components/Products.vue'
import Banners from './components/Banners.vue'
</script>

<template>
  <div class="app-container">
    <Header />
    <Banner />
    <SmallerBanners />
    <BrowseCategories />
    <Products />
    <Banners />
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
