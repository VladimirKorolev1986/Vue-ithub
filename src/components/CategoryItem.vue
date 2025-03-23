<template>
  <div class="category-item">
    <img :src="icon" alt="" class="icon" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
}

p {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: var(--main-black);
  margin: 0;
}
</style>
