import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/ProductsPage.vue'
import Product from '../views/ProductDetailsPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/products/1', component: Product },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
