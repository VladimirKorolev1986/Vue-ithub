<script setup>
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
    <div class="images">
      <img class="image" :src="image" alt="Фото товара" />
    </div>
    <div class="info">
      <div class="title">
        <div class="title-text">{{ title }}</div>
        <div class="title-price">
          <div class="title-new-price">${{ price }}</div>
          <div class="title-old-price">${{ price }}</div>
        </div>
      </div>
      <div>
        <div class="details">
          <div class="detail">
            <div class="detail-icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2603_2781)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.60749 3.75032C5.76459 4.59322 5.76464 5.94979 5.76459 8.66305L5.76459 16.3371C5.76459 19.0504 5.76459 20.407 6.60753 21.2499C7.4504 22.0928 8.80698 22.0928 11.5202 22.0928L12.4795 22.0928C15.1927 22.0928 16.5493 22.0928 17.3922 21.2499C18.235 20.407 18.235 19.0504 18.235 16.3372L18.2351 8.66306C18.2351 5.9498 18.2351 4.59324 17.3922 3.75032C16.5493 2.90743 15.1927 2.90743 12.4795 2.90743L11.5202 2.90743C8.80699 2.90743 7.45038 2.90743 6.60749 3.75032ZM14.3977 6.53565C14.8119 6.53565 15.1477 6.19986 15.1477 5.78565C15.1477 5.37143 14.8119 5.03565 14.3977 5.03565L9.60133 5.03564C9.18711 5.03565 8.85133 5.37143 8.85133 5.78564C8.85133 6.19986 9.18711 6.53565 9.60133 6.53564L14.3977 6.53565ZM11.9993 19.2155C12.794 19.2154 13.4382 18.5712 13.4382 17.7765C13.4382 16.9819 12.794 16.3376 11.9994 16.3376C11.2046 16.3377 10.5605 16.9819 10.5604 17.7766C10.5604 18.5712 11.2046 19.2155 11.9993 19.2155Z"
                    fill="#4E4E4E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2603_2781">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="screen-size">
              <div class="title-screen"><span>Screen size</span></div>
              <div class="title-number"><span>6.7"</span></div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 3C12.3853 3 12.6977 3.31236 12.6977 3.69767V6.48884C13.2084 6.48991 13.6717 6.49342 14.0932 6.50495L14.093 6.48837V3.69767C14.093 3.31236 14.4054 3 14.7907 3C15.176 3 15.4884 3.31236 15.4884 3.69767V6.48837C15.4884 6.52487 15.4856 6.56072 15.4802 6.5957C16.4162 6.71067 17.0648 6.94879 17.558 7.44198C18.0512 7.93517 18.2893 8.58381 18.4043 9.51984C18.4393 9.51443 18.4751 9.51163 18.5116 9.51163H21.3023C21.6876 9.51163 22 9.82399 22 10.2093C22 10.5946 21.6876 10.907 21.3023 10.907H18.5116L18.495 10.9068C18.5066 11.3283 18.5106 11.7916 18.5116 12.3023H21.3023C21.6876 12.3023 22 12.6147 22 13C22 13.3853 21.6876 13.6977 21.3023 13.6977H18.5112C18.5101 14.2084 18.5066 14.6717 18.495 15.0932L18.5116 15.093H21.3023C21.6876 15.093 22 15.4054 22 15.7907C22 16.176 21.6876 16.4884 21.3023 16.4884H18.5116C18.4751 16.4884 18.4393 16.4856 18.4043 16.4802C18.2893 17.4162 18.0512 18.0648 17.558 18.558C17.0648 19.0512 16.4162 19.2893 15.4802 19.4043C15.4856 19.4393 15.4884 19.4751 15.4884 19.5116V22.3023C15.4884 22.6876 15.176 23 14.7907 23C14.4054 23 14.093 22.6876 14.093 22.3023V19.5116L14.0932 19.495C13.6717 19.5066 13.2084 19.5106 12.6977 19.5116V22.3023C12.6977 22.6876 12.3853 23 12 23C11.6147 23 11.3023 22.6876 11.3023 22.3023V19.5112C10.7916 19.5101 10.3283 19.5066 9.90678 19.495L9.90698 19.5116V22.3023C9.90698 22.6876 9.59462 23 9.2093 23C8.82399 23 8.51163 22.6876 8.51163 22.3023V19.5116C8.51163 19.4751 8.51443 19.4393 8.51984 19.4043C7.58381 19.2893 6.93517 19.0512 6.44198 18.558C5.94879 18.0648 5.71067 17.4162 5.5957 16.4802C5.56071 16.4856 5.52487 16.4884 5.48837 16.4884H2.69767C2.31236 16.4884 2 16.176 2 15.7907C2 15.4054 2.31236 15.093 2.69767 15.093H5.48837L5.50495 15.0932C5.49342 14.6717 5.48944 14.2084 5.48837 13.6977H2.69767C2.31236 13.6977 2 13.3853 2 13C2 12.6147 2.31236 12.3023 2.69767 12.3023H5.48884C5.48991 11.7916 5.49342 11.3283 5.50495 10.9068L5.48837 10.907H2.69767C2.31236 10.907 2 10.5946 2 10.2093C2 9.82399 2.31236 9.51163 2.69767 9.51163H5.48837C5.52487 9.51163 5.56071 9.51443 5.5957 9.51984C5.71067 8.58381 5.94879 7.93517 6.44198 7.44198C6.93517 6.94879 7.58381 6.71067 8.51984 6.5957C8.51443 6.56072 8.51163 6.52487 8.51163 6.48837V3.69767C8.51163 3.31236 8.82399 3 9.2093 3C9.59462 3 9.90698 3.31236 9.90698 3.69767V6.48837L9.90678 6.50495C10.3283 6.49342 10.7916 6.48944 11.3023 6.48837V3.69767C11.3023 3.31236 11.6147 3 12 3ZM11.0238 8.5814C10.4054 8.58136 9.87247 8.58133 9.44573 8.63871C8.98839 8.70019 8.55001 8.83885 8.19443 9.19443C7.83885 9.55001 7.70019 9.98839 7.63871 10.4457C7.58133 10.8725 7.58136 11.4054 7.5814 12.0238V13.9762C7.58136 14.5946 7.58133 15.1275 7.63871 15.5543C7.70019 16.0116 7.83885 16.45 8.19443 16.8056C8.55001 17.1612 8.98839 17.2998 9.44573 17.3613C9.87247 17.4187 10.4054 17.4186 11.0238 17.4186H12.9762C13.5946 17.4186 14.1275 17.4187 14.5543 17.3613C15.0116 17.2998 15.45 17.1612 15.8056 16.8056C16.1612 16.45 16.2998 16.0116 16.3613 15.5543C16.4187 15.1275 16.4186 14.5946 16.4186 13.9762V12.0238C16.4186 11.4054 16.4187 10.8725 16.3613 10.4457C16.2998 9.98839 16.1612 9.55001 15.8056 9.19443C15.45 8.83885 15.0116 8.70019 14.5543 8.63871C14.1275 8.58133 13.5947 8.58136 12.9762 8.5814H11.0238Z"
                  fill="#4E4E4E"
                />
                <path
                  opacity="0.5"
                  d="M9.18091 10.1809C9.23402 10.1278 9.32886 10.0621 9.63147 10.0214C9.95415 9.97804 10.3921 9.97656 11.0696 9.97656H12.9301C13.6075 9.97656 14.0455 9.97804 14.3682 10.0214C14.6708 10.0621 14.7656 10.1278 14.8187 10.1809C14.8718 10.234 14.9375 10.3289 14.9782 10.6315C15.0216 10.9542 15.0231 11.3921 15.0231 12.0696V13.9301C15.0231 14.6075 15.0216 15.0455 14.9782 15.3682C14.9375 15.6708 14.8718 15.7656 14.8187 15.8187C14.7656 15.8718 14.6708 15.9375 14.3682 15.9782C14.0455 16.0216 13.6075 16.0231 12.9301 16.0231H11.0696C10.3921 16.0231 9.95415 16.0216 9.63147 15.9782C9.32886 15.9375 9.23402 15.8718 9.18091 15.8187C9.1278 15.7656 9.06211 15.6708 9.02143 15.3682C8.97804 15.0455 8.97656 14.6075 8.97656 13.9301V12.0696C8.97656 11.3921 8.97804 10.9542 9.02143 10.6315C9.06211 10.3289 9.1278 10.234 9.18091 10.1809Z"
                  fill="#4E4E4E"
                />
              </svg>
            </div>
            <div class="screen-size">
              <div class="title-screen"><span>CPU</span></div>
              <div class="title-number"><span>Apple A16 Bionic</span></div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 11C7 9.11438 7 8.17157 7.58579 7.58579C8.17157 7 9.11438 7 11 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 14.8856 17 15.8284 16.4142 16.4142C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 16.4142C7 15.8284 7 14.8856 7 13V11Z"
                  stroke="#4E4E4E"
                  stroke-linecap="round"
                />
                <path
                  d="M13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10Z"
                  fill="#4E4E4E"
                />
                <path d="M10 7V4" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M14 7V4" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M17 10H20" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M17 14H20" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M10 20V17" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M14 20V17" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M4 10H7" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M4 14H7" stroke="#4E4E4E" stroke-linecap="round" />
              </svg>
            </div>
            <div class="screen-size">
              <div class="title-screen"><span>Number of Cores</span></div>
              <div class="title-number"><span>6</span></div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 11C7 9.11438 7 8.17157 7.58579 7.58579C8.17157 7 9.11438 7 11 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 14.8856 17 15.8284 16.4142 16.4142C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 16.4142C7 15.8284 7 14.8856 7 13V11Z"
                  stroke="#4E4E4E"
                  stroke-linecap="round"
                />
                <path
                  d="M13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10Z"
                  fill="#4E4E4E"
                />
                <path d="M10 7V4" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M14 7V4" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M17 10H20" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M17 14H20" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M10 20V17" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M14 20V17" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M4 10H7" stroke="#4E4E4E" stroke-linecap="round" />
                <path d="M4 14H7" stroke="#4E4E4E" stroke-linecap="round" />
              </svg>
            </div>
            <div class="screen-size">
              <div class="title-screen"><span>Number of Cores</span></div>
              <div class="title-number"><span>6</span></div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2603_2781)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.60749 3.75032C5.76459 4.59322 5.76464 5.94979 5.76459 8.66305L5.76459 16.3371C5.76459 19.0504 5.76459 20.407 6.60753 21.2499C7.4504 22.0928 8.80698 22.0928 11.5202 22.0928L12.4795 22.0928C15.1927 22.0928 16.5493 22.0928 17.3922 21.2499C18.235 20.407 18.235 19.0504 18.235 16.3372L18.2351 8.66306C18.2351 5.9498 18.2351 4.59324 17.3922 3.75032C16.5493 2.90743 15.1927 2.90743 12.4795 2.90743L11.5202 2.90743C8.80699 2.90743 7.45038 2.90743 6.60749 3.75032ZM14.3977 6.53565C14.8119 6.53565 15.1477 6.19986 15.1477 5.78565C15.1477 5.37143 14.8119 5.03565 14.3977 5.03565L9.60133 5.03564C9.18711 5.03565 8.85133 5.37143 8.85133 5.78564C8.85133 6.19986 9.18711 6.53565 9.60133 6.53564L14.3977 6.53565ZM11.9993 19.2155C12.794 19.2154 13.4382 18.5712 13.4382 17.7765C13.4382 16.9819 12.794 16.3376 11.9994 16.3376C11.2046 16.3377 10.5605 16.9819 10.5604 17.7766C10.5604 18.5712 11.2046 19.2155 11.9993 19.2155Z"
                    fill="#4E4E4E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2603_2781">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="screen-size">
              <div class="title-screen"><span>Screen size</span></div>
              <div class="title-number"><span>6.7"</span></div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2603_2781)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.60749 3.75032C5.76459 4.59322 5.76464 5.94979 5.76459 8.66305L5.76459 16.3371C5.76459 19.0504 5.76459 20.407 6.60753 21.2499C7.4504 22.0928 8.80698 22.0928 11.5202 22.0928L12.4795 22.0928C15.1927 22.0928 16.5493 22.0928 17.3922 21.2499C18.235 20.407 18.235 19.0504 18.235 16.3372L18.2351 8.66306C18.2351 5.9498 18.2351 4.59324 17.3922 3.75032C16.5493 2.90743 15.1927 2.90743 12.4795 2.90743L11.5202 2.90743C8.80699 2.90743 7.45038 2.90743 6.60749 3.75032ZM14.3977 6.53565C14.8119 6.53565 15.1477 6.19986 15.1477 5.78565C15.1477 5.37143 14.8119 5.03565 14.3977 5.03565L9.60133 5.03564C9.18711 5.03565 8.85133 5.37143 8.85133 5.78564C8.85133 6.19986 9.18711 6.53565 9.60133 6.53564L14.3977 6.53565ZM11.9993 19.2155C12.794 19.2154 13.4382 18.5712 13.4382 17.7765C13.4382 16.9819 12.794 16.3376 11.9994 16.3376C11.2046 16.3377 10.5605 16.9819 10.5604 17.7766C10.5604 18.5712 11.2046 19.2155 11.9993 19.2155Z"
                    fill="#4E4E4E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2603_2781">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="screen-size">
              <div class="title-screen"><span>Screen size</span></div>
              <div class="title-number"><span>6.7"</span></div>
            </div>
          </div>
        </div>
        <div class="text">text</div>
      </div>
      <div>
        <button>Add to wishlist</button>
        <button>Add to cart</button>
      </div>
      <div class="icons">
        <div class="features"></div>
        <div class="features"></div>
        <div class="features"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-info {
  display: flex;
  gap: 48px;
  padding: 112px 160px;
  width: 1440px;
  height: 769px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 536px;
  height: 545px;
}
.details {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 в строке, 2 строки */
  gap: 20px;
  text-align: center;
}
.image {
  width: 536px;
  height: 516px;
}
.title-text {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  color: var(--main-black);
}
.title-price {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
}
.title-new-price {
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: 0.03em;
  color: var(--main-black);
}
.title-old-price {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: 0.03em;
  text-decoration: line-through;
  color: #a0a0a0;
}
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 7px;
  padding: 16px;
  width: 168px;
  height: 65px;
  min-width: 168px;
  background: #f4f4f4;
}
.title-screen {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 114%;
  color: #a7a7a7;
}
.title-number {
  font-family: var(--font-family);
  font-style: italic;
  color: #4e4e4e;
}
.screen-size {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>
