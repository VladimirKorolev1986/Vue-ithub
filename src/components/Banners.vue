<template>
  <div class="banner">
    <div class="big-banner white">
      <img src="/Group1.png" alt="часы и наушники" />
      <div class="banner-content">
        <b class="banner-title">Popular Products</b>
        <p class="banner-description">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking
          and ease of use.
        </p>
        <button class="banner-button">Shop Now</button>
      </div>
    </div>
    <div class="big-banner gray">
      <img src="/image64.png" alt="iPad" />
      <div class="banner-content">
        <b class="banner-title">Ipad Pro</b>
        <p class="banner-description">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking
          and ease of use.
        </p>
        <button class="banner-button">Shop Now</button>
      </div>
    </div>
    <div class="big-banner gray-light">
      <img src="/image41.png" alt="Samsung Galaxy " />
      <div class="banner-content">
        <b class="banner-title">Samsung Galaxy </b>
        <p class="banner-description">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking
          and ease of use.
        </p>
        <button class="banner-button">Shop Now</button>
      </div>
    </div>
    <div class="big-banner black">
      <img src="/Macbook1.png" alt="Macbook Pro" />
      <div class="banner-content">
        <b class="banner-title color-white">Macbook Pro</b>
        <p class="banner-description">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking
          and ease of use.
        </p>
        <button class="banner-button color-white border-white">Shop Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 1440px;
  height: 640px;
  display: flex;
  justify-content: space-between;
}
.white {
  background: var(--main-white);
}
.gray {
  background: #f9f9f9;
}
.gray-light {
  background: #eaeaea;
}
.black {
  background: #2c2c2c;
}
.big-banner {
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 360px;
  height: 640px;
  min-width: 280px;
  box-sizing: border-box;
}
.banner-title {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 33px;
  line-height: 145%;
  color: var(--main-black);
}
.banner-description {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 171%;
  color: #909090;
}
.banner-button {
  border: 1px solid var(--main-black);
  border-radius: 6px;
  padding: 16px 56px;
  width: 188px;
  height: 56px;
  color: var(--main-black);
  cursor: pointer;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: var(--main-black);
}
.border-white {
  border: 1px solid var(--main-white);
}

.color-white {
  color: var(--main-white);
}
.banner-content {
  margin-top: auto;
}
</style>
