<template>
  <section class="smaller-banners">
    <div class="banner-container">
      <div class="left-banner">
        <div class="wide-square">
          <img src="/PlayStation.png" alt="PlayStation" />
          <div class="playstation-text">
            <span class="playstation-title">Playstation 5</span>
            <span class="playstation-description"
              >Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
              PlayStation experience.</span
            >
          </div>
        </div>
        <div class="squares">
          <div class="square1">
            <img src="/hero.png" alt="наушники" />
            <div class="playstation-text">
              <p class="earsphone-title">Apple</p>
              <p class="earsphone-title">AirPods</p>
              <p class="earsphone-title">Max</p>
              <p class="earsphone-description">Computational audio.</p>
              <p class="earsphone-description">Listen, it's powerful</p>
            </div>
          </div>
          <div class="square">
            <img src="/image36.png" alt="Очки VR" />
            <div class="playstation-text">
              <p class="vision-title">Apple</p>
              <p class="vision-title">Vision Pro</p>
              <p class="vision-description">An immersive way to</p>
              <p class="vision-description">experience</p>
              <p class="vision-description">entertainment</p>
            </div>
          </div>
        </div>
      </div>
      <div class="big-banner">
        <div class="content">
          <div class="title">
            <p class="title-text">Macbook <span class="title-text-air">Air</span></p>
            <p class="title-description">
              The new 15‑inch MacBook Air makes room for more of what you love with a spacious
              Liquid Retina display.
            </p>
            <Button borderColor="var(--main-black)" textColor="var(--main-black)"></Button>
          </div>
        </div>
        <div class="image">
          <img src="/MacBookPro14.png" alt="MacBookPro14" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.smaller-banners {
  height: 600px;
}
.big-banner {
  width: 50%;
  height: 100%;
}
.banner-container {
  display: flex;
  height: 100%;
}
.left-banner {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.wide-square {
  width: 100%;
  height: 328px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.squares {
  display: flex;
  width: 100%;
  height: 272px;
  background-color: blue;
}
.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #353535;
}
.square1 {
  display: flex;
  width: 50%;
  height: 100%;
  background-color: #ededed;
}
.square2 {
  width: 50%;
  height: 100%;
  background-color: yellow;
}
.playstation-text {
  width: 100%;
  max-width: 404px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
  padding: 0 40px;
}
.playstation-title {
  color: var(--main-black);
  font-size: 49px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -1px;
}
.playstation-description {
  color: #909090;
  font-size: 14px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  max-width: 324px;
}
.earsphone-title {
  color: var(--main-black);
  font-size: 29px;
  font-family: var(--font-family);
  font-style: italic;
}
.earsphone-description {
  color: #909090;
  font-size: 14px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
}
.vision-title {
  color: var(--main-white);
  font-size: 29px;
  font-family: var(--font-family);
  font-style: italic;
}
.vision-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-family: var(--font-family);
  font-style: italic;
}
.big-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  padding-left: 56px;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 360px;
  height: 120px;
}
.title-text {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 64px;
  line-height: 87%;
  color: var(--main-black);
}
.title-text-air {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
}
.title-description {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 171%;
  color: #909090;
}
</style>

<script setup>
import Button from './Button.vue'
</script>
