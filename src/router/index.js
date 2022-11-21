import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ProductPage from "../components/ProductPage.vue";
import SignIn from "../components/SignIn.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
import RegisterUser from "../components/RegisterUser.vue";
import NotFound from "../components/NotFound.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/product",
    name: "products",
    component: ProductPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterUser,
  },
  {
    path: "/:PthMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access to this page!!!");
      next("/sign-in");
    }
  } else {
    next();
  }
});
export default router;