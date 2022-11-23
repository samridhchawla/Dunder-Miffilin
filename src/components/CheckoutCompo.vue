<template>
  <body>
    <div id="bgModalbox" @click="closeFn"></div>
    <section>
      <button @click="closeFn">&#9587;</button>
      <article>
        <img :src="'data/img/' + item.url" />
        <aside>
          <h3>Category: {{ item.category }}</h3>
          <h3>Name: {{ item.product_name }}</h3>
          <h3>Price: ${{ item.price }}</h3>
          <h3>Amount<input type="number" v-bind="itemAmount" /></h3>
          <h3><button @click="wishlistFn">Wish-List</button></h3>
          <h3><button @click="cartAdd">Add to cart</button></h3>
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
      itemAmount: 0,
    };
  },
  methods: {
    closeFn() {
      this.$emit("close");
    },
    cartAdd() {
      this.$emit("add", this.idx, this.itemAmount);
    },
    wishlistFn() {
      this.$emit("wishlist", this.idx);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  position: relative;
}
#bgModalbox {
  background-color: rgba(211, 211, 211, 0.6);
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100vh;
  top: 0;
}
section {
  z-index: 2;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 50vh;
  border: 1px solid yellow;
  display: flex;
  padding: 5%;
  flex-direction: column;
}
article {
  height: 50vh;
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  border: 1px solid red;
}
img {
  height: 100px;
  width: 100px;
}
</style>
