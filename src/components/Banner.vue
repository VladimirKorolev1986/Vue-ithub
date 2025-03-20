<template>
  <section class="banner">
    <div class="content">
      <div class="titles">
        <p class="beyond">Pro.Beyond.</p>
        <p class="iphone">IPhone 14 Pro</p>
      </div>
      <div class="created">Created to change everything for the better. For everyone</div>
    </div>
    <button class="button-show">Shop Now</button>
  </section>
</template>

<script setup></script>

<style scoped>
.banner {
  height: 632px;
  background-color: #211c24;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.beyond {
  align-self: stretch;
  opacity: 0.4;
  color: white;
  font-size: 25px;
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;
}
.iphone {
  color: white;
  font-size: 96px;
  font-family: Abel;
  font-weight: 400;
  line-height: 72px;
  word-wrap: break-word;
}
.created {
  align-self: stretch;
  color: #909090;
  font-size: 18px;
  font-family: ABeeZee;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}
.button-show {
  padding: 16px 56px;
  border-radius: 6px;
  border: 1px solid white;
  background: transparent;
  color: white;
  font-size: 16px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.button-show:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
