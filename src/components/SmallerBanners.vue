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
          <div class="square1">4</div>
          <div class="square">5</div>
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
  background-color: gray; /* временно, чтобы видеть блок */
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
  width: 50%;
  height: 100%;
  background-color: green;
}
.square1 {
  width: 50%;
  height: 100%;
  background-color: rgb(101, 6, 87);
}
.square2 {
  width: 50%;
  height: 100%;
  background-color: yellow;
}
.playstation-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.playstation-title {
  font-size: 49px;
  font-family: ABeeZee;
  font-style: italic;
  font-weight: 400;
  word-wrap: break-word;
  color: #000;
}
</style>
