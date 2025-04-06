<script setup>
import { onMounted } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'

import Footer from './components/Footer.vue'

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:1452/api/products/1')

    console.log(data)
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <div class="app-container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>
.app-container {
  background-color: #f3f4f6;
  max-width: 1440px;
  margin: 0 auto;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 16px;
}
</style>
