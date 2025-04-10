<script setup>
import ProductCard from '@/components/ProductCard.vue'
import FilterBlock from '../components/FilterBlock.vue'
import { ref, computed } from 'vue'

const brands = ['Apple', 'Samsung', 'Xiaomi', 'Realme']
const capacities = ['3000 mAh', '4000 mAh', '5000 mAh']
const screenTypes = ['AMOLED', 'IPS']
const screenDiagonal = ['6.1"', '6.2"', '6.3"']

const selectedBrands = ref([])
const selectedCapacities = ref([])
const selectedScreens = ref([])
const selectedDiagonal = ref([])
const selectedProtection = ref([])
const selectedbuiltInMemory = ref([])

const currentPage = ref(1)
const itemsPerPage = 9

const products = ref(
  Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
  })),
)

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return products.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage))
</script>
<template>
  <div class="products-page">
    <aside class="filters">
      <div class="filter-blocks">
        <FilterBlock title="Brand" :options="brands" :hasSearch="true" v-model="selectedBrands" />
        <FilterBlock title="Battery capacity" :options="capacities" v-model="selectedCapacities" />
        <FilterBlock title="Screen type" :options="screenTypes" v-model="selectedScreens" />
        <FilterBlock title="Screen diagonal" :options="screenDiagonal" v-model="selectedDiagonal" />
        <FilterBlock
          title="Protection class"
          :options="protectionClass"
          v-model="selectedProtection"
        />
        <FilterBlock
          title="Built-in memory"
          :options="builtInMemory"
          v-model="selectedbuiltInMemory"
        />
      </div>
    </aside>
    <div class="product-list">
      <div class="header">
        <div class="selected-products">
          <p>Selected Products: {{ count }}</p>
        </div>
        <div class="sort-by">
          <select>
            <option value="rating">By rating</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div class="product-grid">
        <ProductCard v-for="product in paginatedProducts" :key="product.id" :product="product" />
      </div>
      <div class="pagination">
        <button @click="currentPage--" :disabled="currentPage === 1">Prev</button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>
        <button @click="currentPage++" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-page {
  display: flex;
  gap: 32px;
  background-color: var(--main-white);
  padding: 24px 160px 56px 160px;
}

.filters {
  width: 256px;
  height: 760px;
  max-width: 256px;
}

.product-list {
  flex: 1;
}
.filter-blocks {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: 0.03em;
  color: var(--main-black);
}
.selected-products p {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.03em;
  color: #6c6c6c;
}
.sort-by select {
  border: 0.5px solid #d4d4d4;
  border-radius: 8px;
  padding: 8px 16px;
  width: 256px;
  height: 40px;
  min-width: 140px;
  max-width: 256px;
  background: var(--main-white);
}
option {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 15px;
  line-height: 107%;
  letter-spacing: -0.01em;
  color: var(--main-black);
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}

.pagination button {
  padding: 8px 12px;
  border: none;
  background: #eee;
  cursor: pointer;
}

.pagination button.active {
  font-weight: bold;
  background: #000;
  color: white;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
