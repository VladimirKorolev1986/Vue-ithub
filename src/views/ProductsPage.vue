<script setup>
import FilterBrand from '../components/FilterBrand.vue'
import { ref } from 'vue'

const allBrands = ['Apple', 'Samsung', 'Xiaomi']
const selectedBrands = ref([])
</script>
<template>
  <div class="products-page">
    <aside class="filters">
      <FilterBrand :brands="allBrands" @update:selectedBrands="(val) => (selectedBrands = val)" />
    </aside>

    <section class="product-list">
      <!-- тут будут карточки товаров -->
      <p>Выбраны бренды: {{ selectedBrands }}</p>
    </section>
  </div>
</template>

<style scoped>
.products-page {
  display: flex;
  gap: 32px;
}

.filters {
  width: 250px;
}

.product-list {
  flex: 1;
}
</style>
