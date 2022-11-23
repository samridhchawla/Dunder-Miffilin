<template>
  <h1></h1>
  <checkout-compo :idx="idx" :item="item" v-if="item" @close="closeFn" @add="cartAdd" @wishlist="wishlist"></checkout-compo>
  <table-compo @buy2="buybuy" :products="products" @checkout="checkout"></table-compo>
  <section>
    <!-- <filter-compo></filter-compo> -->

    <!-- <article>
      <div class="row justify-content-start align-items-start g-2">
        <div class="col">
          <div class="row justify-content-start align-items-start g-2">
            <div class="col-6"> -->
    <!-- <div>
              <nav>
                <ul>
                  <li class="var_nav">
                    <div class="link_bg"></div>
                    <div class="link_title">
                      <div class="icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <a href="#"><span>Search</span></a>
                    </div>
                  </li>
                  <li class="var_nav">
                    <div class="link_bg"></div>
                    <div class="link_title">
                      <div class="icon">
                        <i class="fa-solid fa-filter"></i>
                      </div>
                      <a href="#"><span>Sort</span></a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div> -->

    <!-- </div> -->
    <!-- <div class="col-6" id="addtable">
              <h2>Added List</h2>
              <table-compo
                :shopping="shoppingList"
                @total="total"
              >
            </table-compo>
              <br />
              <hr />
              <h2>Total Price: ${{ sum }}</h2>
              <div id="total" v-on:click="calTotal()">
                <a>Calculate Total Price</a>
              </div>
              <br />
              <hr />
              <div v-on:click="sendMap()" id="sendMap">
                <a>Add to Shopping Cart</a>
              </div>
            </div> -->
    <!-- </div>
        </div>
      </div>
    </article> -->
  </section>
</template>
<script>
import TableCompo from "./TableCompo.vue";
import JsonService from "../services/JsonService.js";
import ProductClass from "../classes/ProductClass.js";
// import FilterCompo from "../components/FilterCompo.vue"
import CheckoutCompo from "../components/CheckoutCompo.vue"

export default {
  name: "ProductPage",
  components: {
    TableCompo,
    CheckoutCompo,
    // FilterCompo
  },
  props: ["productCart"],
  data() {
    return {
      products: new Array(),
      shoppingList: new Map(),
      wishList: new Map(),
      sum: "",
      item: "",
      idx: "",
    };
  },
  methods: {
    loadProducts() {
      JsonService.getJson()
        .then((res) => {
          this.products = res.data;
        })
        .catch((e) => console.log(e));
    },
    buybuy(idx) {
      let product = this.products[idx];
      // product is selected object
      let selectedProduct = null;
      if (this.shoppingList.has(product.id)) {
        // if user clicked same product, slectedProduct will get a object by using pId and add amount number
        selectedProduct = this.shoppingList.get(product.id);
        selectedProduct.amount = selectedProduct.amount + 1;
        selectedProduct.price = Math.floor(
          product.price * selectedProduct.amount
        );
      } else {
        console.log(product);
        selectedProduct = new ProductClass(
          product.id,
          product.product_name,
          Math.floor(product.price),
          product.url,
          product.category
        );
      }
      this.shoppingList.set(product.id, selectedProduct);
      this.sendMap();
    },
    sendMap() {
      // This emit will send a this.shoppingList to parent(App.vue) to display at ShoppingPageVue
      this.$emit("mapmap", this.shoppingList);
    },
    cartAdd(idx,amount){
      let product = this.products[idx];
      // product is selected object
      let selectedProduct = null;

        console.log(product);
        selectedProduct = new ProductClass(
          product.id,
          product.product_name,
          Math.floor(product.price),
          product.url,
          product.category
        );
        selectedProduct.amount = amount;
      this.shoppingList.set(product.id, selectedProduct);
      this.sendMap();
    },
    checkout(idx){
      let product = this.products[idx];
      this.item = product;
      this.idx = idx;
    },
    wishlist(idx){
      let product = this.products[idx];
      let wishProduct = null;
      if (this.wishList.has(product.id)) {
        return false;
      } else {
        console.log(product);
        wishProduct = new ProductClass(
          product.id,
          product.product_name,
          Math.floor(product.price),
          product.url,
          product.category
        );
      }
      this.wishList.set(product.id, wishProduct);
    },
    closeFn(){
      this.item = ''
      this.idx = '';

    },
    calTotal() {
      let total = 0;
      this.shoppingList.forEach(function (vall) {
        total = total + (vall.price + vall.price * 0.1);
      });
      return (this.sum = Math.floor(total));
    },
    // del(idx){
    //     this.shoppingList.delete(idx);
    //     this.calTotal()
    // },
    total(total) {
      this.sum = total;
    },
  },
  mounted() {
    this.loadProducts();
    if (this.productCart != "") {
      this.shoppingList = this.productCart;
    }
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
section {
  display: flex;
  padding-top: 5%;
  justify-content: space-around;
}
</style>
