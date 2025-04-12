<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: [String, Number],
    required: true,
  },
})
</script>

<template>
  <div class="product-card">
    <div class="top-section">
      <img src="/Icon/Like.svg" alt="Product Image" />
    </div>
    <div class="image-container">
      <img :src="image" alt="Product Image" />
    </div>
    <div class="text-icon-container">
      <div class="text-container">
        <p>{{ title }}</p>
      </div>
      <div class="price-container">
        <p>{{ price }}</p>
      </div>
      <button>Buy Now</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  padding: 24px 16px;
  width: 268px;
  min-width: 200px;
  background: #f6f6f6;
  height: 456px;
  justify-content: flex-start;
  gap: 16px;
}
.top-section {
  display: flex;
  justify-content: flex-end;
  width: 100%; /* Вместо 236px */
  height: auto; /* Или минимальная высота иконки */
}
.text-container {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: var(--main-black);
  margin-bottom: 16px;
}
.price-container {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.03em;
  text-align: center;
  color: var(--main-black);
  margin-bottom: 24px;
}
button {
  border-radius: 8px;
  padding: 12px 64px;
  width: 186px;
  height: 48px;
  background: var(--main-black);
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 171%;
  text-align: center;
  color: var(--main-white);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:active {
  background: var(--main-white);
  color: var(--main-black);
}

.text-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
