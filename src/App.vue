<template>
  <div>
    <site-nav></site-nav>
    <router-view />
  </div>
</template>

<script>
import SiteNav from "./components/SiteNav.vue";
export default {
  name: "App",
  components: {
    SiteNav,
  },
};
</script>

<style></style>
