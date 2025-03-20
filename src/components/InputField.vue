<template>
  <div class="input-container">
    <img src="/Search.svg" alt="Поиск" class="search-icon" />
    <input type="text" :placeholder="placeholder" v-model="inputValue" class="input-field" />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
  data() {
    return {
      inputValue: '',
    }
  },
}
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px;
  width: 372px;
  background-color: white;
}

.search-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.input-field {
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  background: transparent;
}
</style>
