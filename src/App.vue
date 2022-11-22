<template>
  <div>
    <site-nav @logout="logoutFn" :logFlag="logFlag"></site-nav>
    <router-view @mapmap="addedItem" :sendFinall="item" :productCart="item" @login="logUserFlag" />
  </div>
</template>

<script>
import SiteNav from "./components/SiteNav.vue";

export default {
  name: "App",
  components: {
    SiteNav,
  },
  data() {
    return {
      logFlag: false,
      logedUser: "",
      item:""
    };
  },
  methods: {
    logUserFlag(val, logedUser) {
      console.log(logedUser);
      this.logFlag = true;
      sessionStorage.setItem("user", JSON.stringify(logedUser));
      this.logedUser = logedUser;
    },
    logoutFn(value) {
      if (value) {
        this.logedUser = "";
        this.logFlag = false;
      }
    },
    addedItem(val) {
      this.item = val;
    },
  },
  mounted() {
    if (sessionStorage.getItem("user")) {
      try {
        this.logedUser = JSON.parse(localStorage.getItem("user"));
        this.logFlag = true;
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
  },
};
</script>

<style></style>
