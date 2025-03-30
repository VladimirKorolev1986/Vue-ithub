<template>
  <button
    class="button"
    :style="{
      '--border-color': borderColor,
      '--text-color': textColor,
      'background-color': backgroundColor,
    }"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
defineProps({
  borderColor: {
    type: String,
    default: 'var(--main-black)',
  },
  textColor: {
    type: String,
    default: 'var(--main-black)',
  },
  text: {
    type: String,
    default: 'Shop Now',
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
})
</script>

<style scoped>
.button {
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 16px 56px;
  width: 188px;
  height: 56px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: var(--text-color);
}
</style>
