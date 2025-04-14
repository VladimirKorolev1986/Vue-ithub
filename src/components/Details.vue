<script setup></script>
<template>
  <div class="details">
    <div class="title"><span>Details</span></div>
    <div class="description">
      <span
        >Just as a book is judged by its cover, the first thing you notice when you pick up a modern
        smartphone is the display. Nothing surprising, because advanced technologies allow you to
        practically level the display frames and cutouts for the front camera and speaker, leaving
        no room for bold design solutions. And how good that in such realities Apple everything is
        fine with displays. Both critics and mass consumers always praise the quality of the picture
        provided by the products of the Californian brand. And last year's 6.7-inch Retina panels,
        which had ProMotion, caused real admiration for many.</span
      >
    </div>
    <div class="info">
      <div class="line">
        <div class="name">Screen diagonal</div>
        <div class="number">6.7"</div>
      </div>
      <div class="line">
        <div class="name">The screen resolution</div>
        <div class="number">2796x1290</div>
      </div>
      <div class="line">
        <div class="name">The screen refresh rate</div>
        <div class="number">120 Hz</div>
      </div>
      <div class="line">
        <div class="name">The pixel density</div>
        <div class="number">460 ppi</div>
      </div>
      <div class="line">
        <div class="name">Screen type</div>
        <div class="number">OLED</div>
      </div>
      <div class="line">
        <div class="name">Additionally</div>
        <div class="number">
          <ul class="features">
            <li>Dynamic Island</li>
            <li>Always-On display</li>
            <li>HDR display</li>
            <li>True Tone</li>
            <li>Wide color (P3)</li>
          </ul>
        </div>
      </div>
      <div class="line">
        <div class="name">CPU</div>
        <div class="number">A16 Bionic</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 80px 160px;
  width: 1440px;
  height: 882px;
  background: #fafafa;
}
.title {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  color: var(--main-black);
}
.description {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 171%;
  color: #9d9d9d;
}
.name {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main-black);
}
.number {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  color: var(--main-black);
}
.line {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #cdcdcd;
  padding: 0px 0px 8px 0px;
  width: 1040px;
  min-height: 32px;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.features {
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 160%;
}

.features li {
  margin-bottom: 4px;
}
</style>
