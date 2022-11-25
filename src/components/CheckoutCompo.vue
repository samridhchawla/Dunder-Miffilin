<template>
  <body>
    <div id="bgModalbox" @click="closeFn"></div>
    <section>
      <button class="close-btn" @click="closeFn">
        <i class="fa-solid fa-arrow-left"></i>Back
      </button>
      <article>
        <img :src="'data/img/' + item.url" />
        <aside>
          <div class="info-container">
            <h3 class="name">{{ item.product_name }}</h3>
            <h3 class="category">{{ item.category }}</h3>
            <h3 class="price">${{ item.price }}</h3>
          </div>
          <div class="all-btns">
            <input
              class="amt-input"
              type="number"
              placeholder="Amount"
              v-model="itemAmount"
            />

            <button class="added" v-if="cartFlag">Added to cart</button>
            <button class="cart-btn" v-else @click="cartAdd">
              Add to cart
            </button>
            <button class="wishlist-btn" @click="wishlistFn">
              Add to wishlist
            </button>
          </div>
        </aside>
      </article>
    </section>
  </body>
</template>
<script>
export default {
  name: "CheckoutCompo",
  props: ["item", "idx"],
  data() {
    return {
      itemAmount: "",
      cartFlag: false,
    };
  },
  methods: {
    closeFn() {
      this.$emit("close");
    },
    cartAdd() {
      this.cartFlag = true;
      this.$emit("add", this.idx, this.itemAmount);
    },
    wishlistFn() {
      this.$emit("wishlist", this.idx);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100&family=Nunito:wght@200;300;400;500;600;700;800&family=Roboto+Mono:wght@100;200;300;400;500&display=swap");
/* font-family: 'Big Shoulders Display', cursive;

    font-family: 'Nunito', sans-serif;

    font-family: 'Roboto Mono', monospace; */
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100&family=Roboto+Mono:wght@100;200;300;400;500&display=swap");
/* font-family: 'Big Shoulders Display', cursive;

    font-family: 'Roboto Mono', monospace; */
* {
  margin: 0;
  padding: 0;
}
body {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#bgModalbox {
  background-color: rgba(211, 211, 211, 0.3);
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100vh;
  top: 0;
}
.info-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.name {
  font-family: "Roboto Mono", monospace;
  width: 60%;
  font-size: 40px;
}
.category {
  font-family: "Roboto Mono", monospace;
  font-size: 20px;
}
.price {
  padding-top: 40px;
  font-family: "Nunito", sans-serif;
  font-size: 30px;
}
section {
  z-index: 2;
  position: fixed;
  background-color: white;
  width: 90%;
  height: 80vh;
  display: flex;
  box-shadow: 5px 5px 5px #aaaaaa;
  flex-direction: column;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
  top: 0;
}
article {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 25px;
}
img {
  height: 500px;
  margin-left: 5%;
  min-height: min-content;
  border-radius: 10px;
}
.close-btn {
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  margin-top: 30px;
  margin-left: 30px;
  border: 0px solid transparent;
}
.close-btn > i {
  margin-right: 5px;
}
aside {
  padding-left: 2%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 5%;
}
.all-btns {
  display: flex;
  width: 100%;
  column-gap: 10px;
}
.wishlist-btn,
.cart-btn,
.added {
  color: white;
  border: 0px solid transparent;
  border-radius: 10px;
  background: mediumslateblue;
  width: 25%;
  padding: 2%;
}
.added {
  background: green;
}
.wishlist-btn:hover,
.cart-btn:hover {
  color: white;
  border: 0px solid transparent;
  border-radius: 10px;
  background: slateblue;
  width: 25%;
  padding: 2%;
}
.amt-input {
  width: 25%;
  border-radius: 10px;
  background: whitesmoke;
  border: 0px solid transparent;
}
.amt-input::placeholder {
  text-align: center;
  justify-content: center;
  align-items: center;
}
:-moz-placeholder {
  text-align: center;
  justify-content: center;
  align-items: center;
}
::-webkit-input-placeholder {
  text-align: center;
  justify-content: center;
  align-items: center;
}
input[type="number"] {
  text-align: center;
}
</style>
