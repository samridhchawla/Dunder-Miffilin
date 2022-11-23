<template>
<section>
    <article v-for="(product, idx) in products" :key="idx">
      <button type="button" @click="buy(idx)" id="add">+</button>
     
      <img :src="'data/img/' + product.url" />
      <aside>
        <h3>Category: {{ product.category }}</h3>
        <h3>Name: {{ product.product_name }}</h3>
        <h3>Price: ${{ product.price }}</h3>
        <vue3-star-rating
          v-bind:star-size="20"
          @update:rating="setRating"
        ></vue3-star-rating>
      
      </aside>
    </article>
</section>
</template>
<script>
import Vue3StarRating from "vue-star-rating";
export default {
  name: "TableCompo",
  props: ["products", "shopping"],
  data() {
    return {
      sum: "",
      rating: "",
    };
  },
  components: {
    Vue3StarRating,
  },
  methods: {
    del(idx) {
      this.shopping.delete(idx);
      this.calTotal();
    },
    buy(idx) {
      // This emit will send a index of added item
      this.$emit("buy2", idx);
      // this.calTotal()
    },
    setRating: function (rating) {
      this.rating = rating;
      console.log(this.rating);
    },
    setRating1: function (rating) {
      this.rating1 = rating;
      console.log(this.rating1);
    },
    calTotal() {
      let total = 0;
      this.shopping.forEach(function (vall) {
        total = total + (vall.price + vall.price * 0.1);
      });
      this.sum = Math.floor(total);
      console.log(this.sum);
      return this.$emit("total", this.sum);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 80%;
   border-top-right-radius: 30px;
   border-top-left-radius: 30px;

}
.shopping,
section {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2vh;
  column-gap: 1vh;
  width: 100%;
}
section {
  border-right: 2px dotted black;
}
article {
  width: 17%;
  height: 35vh;
  background: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
  display: flex;
  flex-direction: column;
  row-gap: 2vh;

  border-radius: 30px;
 
}
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  padding-bottom: 4%;
  padding-left: 5%;
  color: black;
  
}
.added {
  width: 23%;
  background: linear-gradient(#f06330, #ffb499);
}
h2 {
  width: 100%;
}
h3 {
  font-size: 13px;
}
#dele {
  width: 30%;
}
#dele {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 1em 2em;
  color: #333;
  font-size: 12px;
  font-weight: 700;
  background-color: #cccccc;
  box-shadow: 0 5px 0 #aaaaaa;
  transition: 0.3s;
}
#dele:hover {
  transform: translateY(3px);
  text-decoration: none;
  box-shadow: 0 2px 0 #aaaaaa;
}
#add:hover {
  transform: translateY(3px);
  text-decoration: none;
}
#add {
  background: #5e5df0;
  border-radius: 999px;
  box-shadow: #5e5df0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  margin-top: 0.7%;
  margin-left: 13%;
  position: absolute;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;

}
</style>
