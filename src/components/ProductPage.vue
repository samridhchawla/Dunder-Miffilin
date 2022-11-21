<template>
  <h1>Products</h1>
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
export default {
  name: "ProductPage",
  props: ["shop"],
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
