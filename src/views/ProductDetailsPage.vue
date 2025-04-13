<script setup>
import MainInfo from '../components/MainInfo.vue'
import Details from '../components/Details.vue'
import Reviews from '../components/Reviews.vue'
import DiscountProducts from '@/components/DiscountProducts.vue'

const data = {
  id: 1,
  createdAt: '2022-03-08',
  price: 35900,
  discount_price: null,
  guarantee: 12,
  rating: 3.8,
  count_review: 23,
  is_available: true,
  store_address: null,
  color: 'Белый',
  brand: 'Apple',
  country: 'Китай',
  category: 'Смартфоны',
  name: 'iPhone SE 2022',
  images: ['image/iphone_se_2022_white.jpg'],
  characteristics: [
    {
      characteristic: 'Процессор',
      unit_type: 'значение',
      value: 'A15 Bionic',
    },
    {
      characteristic: 'Объем встроенной памяти',
      unit_type: 'ГБ',
      value: '128',
    },
    {
      characteristic: 'Аккумулятор',
      unit_type: 'mAh',
      value: '2018',
    },
    {
      characteristic: 'Питание',
      unit_type: 'значение',
      value: 'Li-Ion',
    },
    {
      characteristic: 'Материал корпуса',
      unit_type: 'значение',
      value: 'стекло/алюминий',
    },
    {
      characteristic: 'Вес',
      unit_type: 'г',
      value: '148',
    },
    {
      characteristic: 'Диагональ',
      unit_type: 'дюйма',
      value: '4.7',
    },
    {
      characteristic: 'Разрешение',
      unit_type: 'значение',
      value: '1334x750',
    },
  ],
}
</script>

<template>
  <div class="product-details-page">
    <MainInfo image="/ImagesDetail.png" title="iPhone SE 2022" price="1399" />
    <Details />
    <Reviews />
    <DiscountProducts />
  </div>
</template>

<style scoped>
.product-details-page {
  background: var(--main-white);
}
</style>
