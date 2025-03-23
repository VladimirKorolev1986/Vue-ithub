<template>
  <div class="container">
    <div class="browse-categories">
      <h2 class="title">Browse By Category</h2>
      <img src="/Icon/Arrows.svg" alt="Стрелки" class="arrows" />
    </div>
    <div class="category-items">
      <CategoryItem />
    </div>
  </div>
</template>

<script setup>
import CategoryItem from './CategoryItem.vue'
</script>

<style scoped>
.container {
  padding: 80px 160px;
  width: 1440px;
  height: 352px;
  background: #fafafa;
}
.category-items {
  padding: 80px 160px;
  width: 1440px;
  height: 352px;
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
}
</style>
