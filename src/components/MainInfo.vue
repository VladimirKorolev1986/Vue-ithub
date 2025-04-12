<script>
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
  <div class="main-info">
    <div class="images"></div>
    <div class="info"></div>
  </div>
</template>

<style scoped></style>
