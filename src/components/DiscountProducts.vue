<template>
  <div class="discount-products">
    <h2 class="discount-products-title">Discounts up to -50%</h2>
    <div class="discount-products-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<style scoped>
.discount-products {
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: var(--main-white);
  padding: 80px 160px;
  width: 1440px;
  height: 680px;
}
.discount-products-title {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  color: var(--main-black);
}
.discount-products-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
</style>

<script setup>
import ProductCard from './ProductCard.vue'
</script>
