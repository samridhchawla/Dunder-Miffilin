<template>
  <div>
    <h1>404: Page not found</h1>
    <router-link class="btn btn-primary" :to="{ name: 'home' }"
      >Back to Home</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style></style>
