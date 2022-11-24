<template>
  <section>
    <article
      v-for="(product, idx) in filterFlag ? products : filteredMap"
      :key="idx"
    >
      <button
        type="button"
        @click="buy(filterFlag ? idx : product[1].id - 1)"
        id="add"
      >
        +
      </button>
      <img
        :src="'data/img/' + (filterFlag ? product.url : product[1].url)"
        @click="checkout(filterFlag ? idx : product[1].id - 1)"
      />
      <aside>
        <h3 class="price">
          ${{ filterFlag ? product.price : product[1].price }}
        </h3>
        <h3 class="name">
          {{ filterFlag ? product.product_name : product[1].product_name }}
        </h3>
        <h3 class="category">
          {{ filterFlag ? product.category : product[1].category }}
        </h3>
        <vue3-star-rating
          class="rating"
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
  props: ["products", "shopping", "filteredMap", "filterFlag"],
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
    checkout(idx) {
      // This emit will send a index of added item
      this.$emit("checkout", idx);
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
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100&display=swap");
/* font-family: 'Big Shoulders Display', cursive; */
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100&family=Roboto+Mono:wght@100;200;300;400;500&display=swap");
/* font-family: 'Big Shoulders Display', cursive;

    font-family: 'Roboto Mono', monospace; */
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.shopping,
section {
  display: flex;

  flex-wrap: wrap;
  row-gap: 2vh;
  column-gap: 1vh;
}
article {
  width: 17%;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  margin-bottom: 3%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #aaaaaa;
  padding-bottom: 4%;
}
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
  padding-left: 5%;
  color: black;
}
.rating {
  display: flex;
  height: 10%;
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
  color: white;
  transform: translateY(3px);
  text-decoration: none;
  background: hotpink;
}
#add {
  background: white;
  border-radius: 999px;
  box-shadow: 0 5px 0 #aaaaaa;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  margin-top: 0.7%;
  margin-left: 11%;
  position: absolute;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
  font-size: 18px;
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
  transition: 0.3s;
}

.name {
  font-family: "Roboto Mono", monospace;
  font-size: 20px;
}
.category {
  font-family: "Big Shoulders Display", cursive;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 17px;
}
</style>
