<template>
  <div class="cart-data">
    <table class="cart-table">
      <tbody>
        <tr v-for="(item, idx) in wishList" :key="idx">
          <td><img :src="'data/img/' + item.url" /></td>
          <td>{{ item.product_name }}</td>
          <td>${{ item.price }}</td>
          <td id="dele" @click="dele(idx)">
            <a>X</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "WishList",
  props: ["logFlag"],
  data() {
    return {
      wishList: [],
    };
  },
  methods: {
    dele(idx) {
      this.wishList.splice(idx, 1);
      this.wishList = sessionStorage.setItem(
        "wishlist",
        JSON.stringify(this.wishList)
      );
      this.wishList = JSON.parse(sessionStorage.getItem("wishlist"));
    },
  },
  mounted() {
    if (sessionStorage.getItem("wishlist")) {
      this.wishList = JSON.parse(sessionStorage.getItem("wishlist"));
    }
    if (this.logFlag == false) {
      this.$router.push("/sign-in");
    }
  },
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
  height: 30vh;
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
  width: 30%;
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
