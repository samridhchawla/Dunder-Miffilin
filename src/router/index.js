import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ProductPage from "../components/ProductPage.vue";
import LoginPage from "../components/LoginPage.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "home-page",
    component: HomePage,
  },
  {
    path: "/product",
    name: "product-page",
    component: ProductPage,
  },
  {
    path: "/cart",
    name: "shopping-cart",
    component: ShoppingCart,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
