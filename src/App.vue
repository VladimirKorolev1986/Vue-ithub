<script setup>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import SmallerBanners from './components/SmallerBanners.vue'
import BrowseCategories from './components/BrowseCategories.vue'
import Products from './components/Products.vue'
import Banners from './components/Banners.vue'
import DiscountProducts from './components/DiscountProducts.vue'
import Banner2 from './components/Banner2.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-container">
    <Header />
    <Banner />
    <SmallerBanners />
    <BrowseCategories />
    <Products />
    <Banners />
    <DiscountProducts />
    <Banner2 />
    <Footer />
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
