<template>
  <h1>Products</h1>

  <ais-instant-search :search-client="searchClient" index-name="demo_ecommerce">
    <ais-search-box />
    <ais-hits>
      <template v-slot:item="{ item }">
        <h2>{{ item.name }}</h2>
      </template>
    </ais-hits>
  </ais-instant-search>

  <div class="card" style="width: 18rem">
    <img
      src="../assets/Dunder_Mifflin_Inc.svg.png"
      class="card-img-top"
      alt="something"
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

export default {
  name: "ProductPage",
  props: ["shop"],
  components: {},
  data() {
    return {
      searchClient: algoliasearch(
        'B1G2GM9NG0',
        'aadef574be1f9252bb48d4ea09b5cfe5'
      ),
    };
  },
  methods: {},
};
</script>
