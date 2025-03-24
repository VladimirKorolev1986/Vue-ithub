<template>
  <div class="products-container">
    <div class="products-header">
      <button>New Arrival</button>
      <button>Bestseller</button>
      <button>Featured Products</button>
    </div>
    <ProductCard />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
</script>

<style scoped>
.products-container {
  padding: 56px 160px;
  width: 1440px;
  height: 1080px;
  background: var(--main-white);
}
.products-header {
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 32px;
}
.products-header button {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 178%;
  text-align: center;
  color: #8b8b8b;
  background: none;
  border: none;
  cursor: pointer;
}
.products-header button:hover {
  color: var(--main-black);
}
</style>
