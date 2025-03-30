<template>
  <div class="banner2">
    <img src="/image18.png" alt="tablet" class="tablet" />
    <img src="/image19.png" alt="tablet" class="tablet1" />
    <img src="/image6.png" alt="tablet" class="laptop1" />
    <img src="/image8.png" alt="tablet" class="smartphone" />
    <img src="/image7.png" alt="tablet" class="watch" />
    <div class="content">
      <div class="content-title">
        <h2 class="title">Big Summer Sale</h2>
        <p class="description">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
      </div>
      <Button
        borderColor="white"
        textColor="white"
        backgroundColor="transparent"
        text="Shop Now"
      ></Button>
    </div>
  </div>
</template>

<style scoped>
.banner2 {
  position: relative;
  width: 1440px;
  height: 448px;
  background: linear-gradient(157deg, #2e2e2e 0%, black 100%);
  overflow: hidden;
}
.tablet {
  width: 237px;
  height: 192px;
  left: 39px;
  top: 0px;
  position: absolute;
  z-index: 10;
}
.tablet1 {
  width: 345px;
  height: 262px;
  left: 0px;
  top: 172px;
  position: absolute;
  z-index: 9;
}
.laptop1 {
  width: 338px;
  height: 116px;
  left: 223px;
  top: 0px;
  position: absolute;
  z-index: 8;
}
.smartphone {
  width: 293.7px;
  height: 374.98px;
  left: 1150px;
  top: 0px;
  position: absolute;
  z-index: 7;
}
.watch {
  width: 397px;
  height: 201px;
  position: absolute;
  z-index: 8;
  left: 1043px;
  top: 247px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10;
  left: 505px;
  top: 159px;
}
.title {
  color: white;
  font-size: 72px;
  font-family: ABeeZee;
  font-style: italic;
  font-weight: 400;
  line-height: 72px;
  word-wrap: break-word;
}
.description {
  color: #787878;
  font-size: 16px;
  font-family: Abel;
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;
}
.content-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<script setup>
import Button from './Button.vue'
</script>
