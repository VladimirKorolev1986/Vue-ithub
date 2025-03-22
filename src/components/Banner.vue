<template>
  <section class="banner">
    <div class="content">
      <div class="titles">
        <p class="beyond animate-fade-in">Pro.Beyond.</p>
        <p class="iphone animate-slide-up">IPhone 14 Pro</p>
      </div>
      <div class="created animate-fade-in">
        Created to change everything for the better. For everyone
      </div>
    </div>
    <button class="button-show animate-fade-in" @click="handleShopNow">Shop Now</button>
    <div class="image-container animate-fade-in">
      <img src="/IphoneImage.png" alt="IPhone 14 Pro" />
    </div>
  </section>
</template>

<script setup>
const handleShopNow = () => {
  // Здесь можно добавить логику для перехода в магазин
  console.log('Shop Now clicked')
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0 80px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
  padding-top: 80px;
}

.banner {
  min-height: 632px;
  background-color: #211c24;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.beyond {
  opacity: 0.4;
  color: white;
  font-size: 25px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 16px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  letter-spacing: 0.5px;
}

.iphone {
  color: white;
  font-size: 96px;
  font-family: Abel, sans-serif;
  font-weight: 400;
  line-height: 72px;
  margin-bottom: 24px;
  letter-spacing: -2px;
}

.created {
  color: #909090;
  font-size: 18px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 40px;
  max-width: 600px;
  letter-spacing: 0.5px;
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
  transition: all 0.3s ease;
  z-index: 2;
  letter-spacing: 0.5px;
}

.button-show:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.image-container {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.image-container img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.3));
}

/* Анимации */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Медиа-запросы для адаптивности */
@media (max-width: 768px) {
  .banner {
    min-height: 500px;
  }

  .iphone {
    font-size: 48px;
    line-height: 56px;
  }

  .beyond {
    font-size: 20px;
  }

  .created {
    font-size: 16px;
  }

  .image-container {
    width: 100%;
    opacity: 0.3;
  }

  .content {
    z-index: 2;
  }
}

@media (max-width: 480px) {
  .banner {
    min-height: 400px;
  }

  .iphone {
    font-size: 36px;
    line-height: 42px;
  }

  .beyond {
    font-size: 18px;
  }

  .created {
    font-size: 14px;
  }

  .button-show {
    padding: 12px 40px;
    font-size: 14px;
  }
}
</style>
