<template>
  <header class="header-container">
    <div>
      <img src="/Logo.svg" alt="Лого" class="logo" />
    </div>

    <InputField placeholder="Введите запрос..." />

    <Icons />
  </header>
</template>

<script setup>
import InputField from './InputField.vue'
import Icons from './Icons.vue'
</script>

<style scoped>
.header-container {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: white;
  border-bottom: 1px solid #ddd;
}

.logo {
  height: 40px;
}
</style>
