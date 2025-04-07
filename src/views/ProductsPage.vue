<script setup>
import FilterBlock from '../components/FilterBlock.vue'
import { ref } from 'vue'

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
</script>
<template>
  <aside class="filters">
    <FilterBlock title="Brand" :options="brands" :hasSearch="true" v-model="selectedBrands" />
    <FilterBlock title="Battery capacity" :options="capacities" v-model="selectedCapacities" />
    <FilterBlock title="Screen type" :options="screenTypes" v-model="selectedScreens" />
    <FilterBlock title="Screen diagonal" :options="screenDiagonal" v-model="selectedDiagonal" />
    <FilterBlock title="Protection class" :options="protectionClass" v-model="selectedProtection" />
    <FilterBlock title="Built-in memory" :options="builtInMemory" v-model="selectedbuiltInMemory" />
  </aside>
</template>

<style scoped>
.products-page {
  display: flex;
  gap: 32px;
}

.filters {
  width: 256px;
  height: 760px;
  max-width: 256px;
}

.product-list {
  flex: 1;
}
</style>
