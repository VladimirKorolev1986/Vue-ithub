<template>
  <header class="header-container">
    <Logo />

    <InputField placeholder="Введите запрос..." />

    <Icons />
  </header>
</template>

<script setup>
import InputField from './InputField.vue'
import Icons from './Icons.vue'
import Logo from './Logo.vue'
</script>

<style scoped>
.header-container {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 160px;
  padding-right: 160px;
  background: white;
  border-bottom: 1px solid #ddd;
}
</style>
