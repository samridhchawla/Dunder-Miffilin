<template>
  <div>
    <main-menu v-if="logFlag"></main-menu>

    <div class="container-fluid">
      <router-view
        :logFlag="true"
        @login="userInfo"
        :userDetails="userinf"
        :total="total"
        :shop="shopList"
        @buy="buy"
      ></router-view>
    </div>
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";
import ProductClass from "./classes/ProductClass";
import JsonService from "./services/JsonService.js";
export default {
  name: "App",

  components: {
    MainMenu,
  },
  data() {
    return {
      userDetails: "",
      userinf: "",
      logFlag: false,
      shopList: new Map(),
      products: new Array(),
    };
  },
  methods: {
    userInfo(val, data) {
      this.logFlag = val;
      this.userinf = data;
    },
    loadProducts() {
      JsonService.getJson()
        .then((res) => {
          this.products = res.data;
        })
        .catch((e) => console.log(e));
    },

    buy(idx) {
      let product = this.products[idx];
      let selectedProduct = null;
      if (this.shopList.has(product.pId)) {
        selectedProduct = this.shopList.get(product.pId);
        selectedProduct.amount = selectedProduct.amount + 1;
      } else {
        selectedProduct = new ProductClass(
          product.pId,
          product.pName,
          product.price
        );
      }
      this.shopList.set(product.pId, selectedProduct);
    },
    shop(idx) {
      let product = this.products[idx];
      let selectedProduct = null;
      if (this.shopList.has(product.pId)) {
        selectedProduct = this.shopList.get(product.pId);
        selectedProduct.amount = selectedProduct.amount + 1;
      } else {
        selectedProduct = new ProductClass(
          product.pId,
          product.pName,
          product.price
        );
      }
      this.shopList.set(product.pId, selectedProduct);
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>

<style></style>
