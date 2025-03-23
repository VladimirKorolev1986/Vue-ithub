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
      <div class="big-banner">3</div>
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
  color: black;
  font-size: 49px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -1px;
}
.playstation-description {
  color: #909090;
  font-size: 14px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  max-width: 324px;
}
.earsphone-title {
  color: black;
  font-size: 29px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
}
.earsphone-description {
  color: #909090;
  font-size: 14px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
}
.vision-title {
  color: white;
  font-size: 29px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
}
.vision-description {
  color: #909090;
  font-size: 14px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
}
</style>
