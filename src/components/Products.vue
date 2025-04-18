<template>
  <div class="products-container">
    <div class="products-header">
      <button>New Arrival</button>
      <button>Bestseller</button>
      <button>Featured Products</button>
    </div>
    <div class="products-grid">
      <ProductCard
        image="/Iphone14pro1.png"
        title="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
        price="900"
      />
      <ProductCard image="camera.png" title="Blackmagic Pocket Cinema Camera 6k" price="2535" />
      <ProductCard
        image="AppleWatch.png"
        title="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
        price="399"
      />
      <ProductCard image="AirPods.png" title="AirPods Max Silver" price="549" />
      <ProductCard
        image="SamsungGalaxy.png"
        title="Samsung Galaxy Watch6 Classic 47mm Black"
        price="369"
      />
      <ProductCard
        image="SamsungZFold.png"
        title="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
        price="1799"
      />
      <ProductCard
        image="CalaxyBuds.png"
        title="Galaxy Buds FE
Graphite"
        price="99.99"
      />
      <ProductCard
        image="AppleIpad.png"
        title="Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021"
        price="398"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
</script>

<style scoped>
.products-container {
  padding: 56px 160px;
  width: 1440px;
  background: var(--main-white);
}

.products-header {
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 32px;
  margin-bottom: 32px;
}

.products-header button {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 178%;
  text-align: center;
  color: #8b8b8b;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.products-header button:hover {
  color: var(--main-black);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 32px;
}
</style>
