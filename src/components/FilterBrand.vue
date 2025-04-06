<template>
  <div class="filter-block">
    <div class="filter-title" @click="isOpen = !isOpen">
      <h3>Brand</h3>
    </div>

    <div v-if="isOpen" class="filter-options">
      <label v-for="brand in brands" :key="brand">
        <input type="checkbox" :value="brand" v-model="selected" @change="emitSelection" />
        {{ brand }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  brands: Array,
})

const emit = defineEmits(['update:selectedBrands'])

const selected = ref([])
const isOpen = ref(true)

function emitSelection() {
  emit('update:selectedBrands', selected.value)
}
</script>

<style scoped>
.filter-block {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  background-color: #f9f9f9;
}

.filter-title {
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 8px;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
