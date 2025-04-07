<template>
  <div class="filter-block">
    <div class="filter-header" @click="isOpen = !isOpen">
      <h3>{{ title }}</h3>
      <span>{{ isOpen ? '−' : '+' }}</span>
    </div>

    <div v-if="isOpen" class="filter-content">
      <input v-if="hasSearch" v-model="search" placeholder="Search..." class="filter-search" />

      <div class="option" v-for="option in filteredOptions" :key="option">
        <label>
          <input type="checkbox" :value="option" v-model="selectedLocal" @change="emitChange" />
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  title: String,
  options: Array,
  modelValue: Array,
  hasSearch: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(true)
const search = ref('')
const selectedLocal = ref([...props.modelValue])

watch(
  () => props.modelValue,
  (val) => {
    selectedLocal.value = [...val]
  },
)

const filteredOptions = computed(() => {
  if (!search.value) return props.options
  return props.options.filter((opt) => opt.toLowerCase().includes(search.value.toLowerCase()))
})

function emitChange() {
  emit('update:modelValue', selectedLocal.value)
}
</script>

<style scoped>
.filter-block {
  width: 256px;
  height: 400px;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 8px;
}

.filter-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.filter-search {
  padding: 6px;
  margin-bottom: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.option label {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
