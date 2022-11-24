<template>
  <section class="textanime">
    <p>What's missing in your office today?</p>
  </section>
  <checkout-compo
    :idx="idx"
    :item="item"
    v-if="item"
    @close="closeFn"
    @add="cartAdd"
    @wishlist="wishlist"
    class="modal-content"
  ></checkout-compo>
  <table-compo
    @buy2="buybuy"
    :products="products"
    @checkout="checkout"
    :filteredMap="filteredMap"
    :filterFlag="filterFlag"
  ></table-compo>
</template>
<script>
import TableCompo from "./TableCompo.vue";
import JsonService from "../services/JsonService.js";
import ProductClass from "../classes/ProductClass.js";
import CheckoutCompo from "./CheckoutCompo.vue";

export default {
  name: "ProductPage",
  components: {
    TableCompo,
    CheckoutCompo,
  },
  props: ["productCart", "logFlag", "search"],
  data() {
    return {
      products: new Array(),
      shoppingList: new Map(),
      filteredMap: new Map(),
      wishList: [],
      sum: "",
      item: "",
      idx: "",
      filterFlag: true,
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
      if (this.logFlag) {
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
      } else {
        this.$router.push("/sign-in");
      }
    },
    sendMap() {
      // This emit will send a this.shoppingList to parent(App.vue) to display at ShoppingPageVue
      this.$emit("mapmap", this.shoppingList);
    },
    cartAdd(idx, amount) {
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
    checkout(idx) {
      if (this.logFlag) {
        let product = this.products[idx];
        this.item = product;
        this.idx = idx;
      } else {
        this.$router.push("/sign-in");
      }
    },
    wishlist(idx) {
      let product = this.products[idx];
      let wishProduct = null;
      this.wishList.forEach((item) => {
        if (item.id == product.id) {
          wishProduct = item;
        }
      });
      if (wishProduct) {
        return false;
      } else {
        wishProduct = new ProductClass(
          product.id,
          product.product_name,
          Math.floor(product.price),
          product.url,
          product.category
        );
      }
      this.wishList.push(wishProduct);
      sessionStorage.setItem("wishlist", JSON.stringify(this.wishList));
    },
    closeFn() {
      this.item = "";
      this.idx = "";
    },
    calTotal() {
      let total = 0;
      this.shoppingList.forEach(function (vall) {
        total = total + (vall.price + vall.price * 0.1);
      });
      return (this.sum = Math.floor(total));
    },
    total(total) {
      this.sum = total;
    },
  },
  watch: {
    search: function (val) {
      if (val != "") {
        this.filteredMap = new Map();
        let vall = val.toString().toLowerCase();
        console.log(vall);
        this.products.filter((product) => {
          if (product.product_name.toLowerCase().indexOf(vall) > -1) {
            console.log(product, "hi");
            this.filteredMap.set(product.id, product);
            console.log(this.filteredMap);
          }
        });
        this.filterFlag = false;
      } else {
        this.loadProducts();
        this.filterFlag = true;
      }
    },
  },
  mounted() {
    this.loadProducts();
    if (this.productCart != "") {
      this.shoppingList = this.productCart;
    }
    if (sessionStorage.getItem("wishlist")) {
      this.wishList = JSON.parse(sessionStorage.getItem("wishlist"));
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Special+Elite&display=swap");
* {
  margin: 0;
  padding: 0;
}
section {
  display: flex;
  padding: 2% 5% 2% 5%;
  justify-content: space-around;
}

.textanime {
  margin: 1%;
}
/* DEMO-SPECIFIC STYLES */
.textanime p {
  color: black;
  overflow: hidden;
  border-right: 0.15em solid black;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
  font-family: "Special Elite", cursive;
  font-size: 26px;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}
</style>
