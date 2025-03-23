<template>
  <div class="category-item">
    <img :src="icon" alt="" class="icon" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    icon: String,
    name: String,
  },
})
</script>

<style scoped>
.category-item {
  border-radius: 15px;
  padding: 24px 52px;
  width: 160px;
  height: 128px;
  min-width: 135px;
  background: #ededed;
}
</style>
