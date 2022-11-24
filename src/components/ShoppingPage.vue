<template>
  <div class="cart-data">
    <table class="cart-table">
      <tbody>
        <tr v-for="(shop, idx) in sendFinall" :key="idx">
          <td><img :src="'data/img/' + shop[1].url" /></td>
          <td>{{ shop[1].product_name }}</td>
          <td>{{ shop[1].amount }}</td>
          <td>Price : ${{ shop[1].price }}</td>
          <td>Tax10% : ${{ shop[1].price * 0.1 + shop[1].price }}</td>
          <td id="dele" @click="dele(shop[0])">
            <a>X</a>
          </td>
        </tr>
      </tbody>
    </table>
    <section>
      <h2>Total Price:</h2>
      <h1>${{ sum2 }}</h1>
      <div id="total" v-on:click="calTotal2()">
        <a>Calculate Total Price</a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ShoppingPage",
  props: ["sendFinall", "logFlag"],

  // sendFinall is map of added products
  data() {
    return {
      sum2: "",
    };
  },
  methods: {
    dele(idx) {
      // sendFinall is map, so you can delete item by using delete.
      // If you deleted item, then total price will change, so i use this.calTotal2() to calculate again
      this.sendFinall.delete(idx);
      this.calTotal2();
    },
    calTotal2() {
      let total2 = 0;
      this.sendFinall.forEach(function (vall) {
        total2 = total2 + (vall.price + vall.price * 0.1);
      });
      return (this.sum2 = Math.floor(total2));
    },
  },
  mounted() {
    if (this.logFlag != true) {
      this.$router.push("/sign-in");
    }
    if (this.sendFinall != "") {
      this.calTotal2();
    }
  },
  watch() {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100&display=swap");
/* font-family: 'Big Shoulders Display', cursive; */
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100&family=Roboto+Mono:wght@100;200;300;400;500&display=swap");
/* font-family: 'Big Shoulders Display', cursive;

    font-family: 'Roboto Mono', monospace; */
img {
  width: 15vh;
  height: 25vh;
  border-radius: 10px;
}
section {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2vh;
  column-gap: 1vh;
  padding: 2%;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 1px solid black;
}
h2 {
  font-family: "Roboto Mono", monospace;
}
article {
  width: 23%;
  background-color: rgb(240, 237, 237);
}
h3 {
  font-size: 13px;
}
section {
  width: 40%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
}
tbody {
  padding-top: 2%;
  width: 100%;
  font-family: "Roboto Mono", monospace;
  border-radius: 20px;
}
tbody > tr {
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
}

tbody > tr > td {
  width: 16%;
  padding: 2%;
}

#dele {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 15%;
  padding: 1em 1.5em;
  color: black;
  font-size: 12px;
  font-weight: 700;
  border-radius: 20px;
  box-shadow: 0 5px 0 #aaaaaa;
  transition: 0.3s;
  border: 0.2px solid black;
}
#dele:hover {
  transform: translateY(3px);
  text-decoration: none;
  color: white;
  background: hotpink;
}
#total {
  display: flex;
  padding: 1em 0.5em;
  width: 200px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 0 #aaaaaa;
  background-image: linear-gradient(170deg, hotpink, slateblue);
  border-radius: 50vh;
  transition: 0.3s;
}
#total:hover {
  cursor: pointer;
  transform: translateY(3px);
  text-decoration: none;
  background-image: linear-gradient(-170deg, #659de6, #5abab8);
}
.cart-data {
  display: flex;
  padding: 5%;
  column-gap: 5%;
}
.cart-table {
  width: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid dimgray;
}
</style>
