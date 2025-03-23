<template>
  <div class="container">
    <div class="browse-categories">
      <h2 class="title">Browse By Category</h2>
      <img src="/Icon/Arrows.svg" alt="Стрелки" class="arrows" />
    </div>
    <div class="category-items">
      <CategoryItem
        v-for="(cat, index) in categories"
        :key="index"
        :icon="cat.icon"
        :name="cat.name"
      />
    </div>
  </div>
</template>

<script setup>
import CategoryItem from './CategoryItem.vue'
const categories = [
  { icon: '/Icon/Phones.svg', name: 'Phones' },
  { icon: '/Icon/SmartWatches.svg', name: 'Smart Watches' },
  { icon: '/Icon/Cameras.svg', name: 'Cameras' },
  { icon: '/Icon/Headphones.svg', name: 'Headphones' },
  { icon: '/Icon/Computers.svg', name: 'Computers' },
  { icon: '/Icon/Gaming.svg', name: 'Gaming' },
]
</script>

<style scoped>
.container {
  padding: 80px 160px;
  width: 1440px;
  height: 352px;
  background: #fafafa;
}
.category-items {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 32px;
  width: 1440px;
  height: 128px;
}
.title {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: 0.01em;
  color: var(--main-black);
}
.browse-categories {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
}
</style>
