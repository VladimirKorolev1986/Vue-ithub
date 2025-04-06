import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Products from '../views/ProductsPage.vue'

const routes = [
  { path: '/', component: App },
  { path: '/products', component: Products },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
