import { createWebHistory, createRouter } from "vue-router";
import ProductPage from '../components/ProductPage.vue';
import ShoppingPage from '../components/ShoppingPage.vue';
// import StarRating from 'vue-star-rating'
// Vue.use(StarRating);
const routes = [
    {
        path:'/product',
        name:'product-page',
        component:ProductPage,
    },
    {
        path:'/cart',
        name:'shopping-page',
        component:ShoppingPage,
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;