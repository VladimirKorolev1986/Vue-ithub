<template>
  <div class="filter-block">
    <div class="filter-header" @click="isOpen = !isOpen">
      <h3>{{ title }}</h3>
      <span>
        <template v-if="isOpen">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0.295L0 6.295L1.41 7.705L6 3.125L10.59 7.705L12 6.295L6 0.295Z"
              fill="black"
            />
          </svg>
        </template>
        <template v-else>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.59 8.29501L12 12.875L7.41 8.29501L6 9.70501L12 15.705L18 9.70501L16.59 8.29501Z"
              fill="black"
            />
          </svg>
        </template>
      </span>
    </div>

    <div v-if="isOpen" class="filter-content">
      <div class="filter-search">
        <svg
          class="search-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
            stroke="#989898"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <input v-if="hasSearch" v-model="search" placeholder="Search..." />
      </div>

      <div class="option" v-for="option in filteredOptions" :key="option">
        <label class="option-label">
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
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: 0.03em;
  color: var(--main-black);
}

.filter-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.filter-search {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 16px;
  width: 256px;
  height: 40px;
  background: #f5f5f5;
  opacity: 0.5;
}

.option label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  color: var(--main-black);
}
</style>
