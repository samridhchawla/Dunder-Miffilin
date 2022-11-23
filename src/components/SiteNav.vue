<template>
  <nav class="navbar navbar-expand-sm navbar-dark">
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    ></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link
            active-class="active"
            class="nav-link"
            to="/"
            aria-current="page"
          >
            <img
              class="dm-logo"
              src="../assets/NicePng_dunder-mifflin-logo-png_1784040.png"
              alt="DM-logo"
          /></router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/product"
            >Product Page</router-link
          >
        </li>
        <!-- search component  -->

        <div class="navbar container-fluid search-items">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/cart"
            >Cart <i class="fa-solid fa-cart-shopping"></i
          ></router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/wishlist"
            >Wishlist</router-link
          >
        </li>
        <li>
          <span v-if="logFlag">
            <button class="logout-btn" @click="logoutFn">Logout</button>
          </span>
          <!-- @click="handleSignOut" -->
          <span class="btns" v-else>
            <router-link class="login-btn" to="/sign-in"> Login </router-link>
          </span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<!-- <script setup>
import { ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoggedIn = ref(true);

// runs after firebase is initialized
onAuthStateChanged(getAuth(), function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
  } else {
    isLoggedIn.value = false; // if we do not
  }
});

const handleSignOut = () => {
  signOut(getAuth());
  router.push("/");
};
</script> -->
<script>
export default {
  name: "SiteNav",
  props: ["logFlag"],
  data() {},
  methods: {
    logoutFn() {
      sessionStorage.clear();
      this.$router.push("/sign-in");
      this.$emit("logout", true);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* search icon  */
.btn-outline-success {
  border-radius: 50%;
  color: red;
  border: 0px transparent;
}
.btn-outline-success:hover {
  background-color: white;
  color: black;
}
/* search parent */
.search-items {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
}
/* search field */
.search-items > input {
  width: 90%;
  padding: 2%;
  display: inline-block;
  height: 50px;
  box-sizing: border-box;
}

/* search field */
.search-items > button {
  position: absolute;
  right: 25px;
}
.search-items > button > i {
  color: black;
}

.dm-logo {
  width: 90px;
  height: 50px;
}
nav {
  background-color: black;
  align-items: center;
  width: 100%;
  padding: 1%;
}
#collapsibleNavId {
  display: flex;
}
#collapsibleNavId > ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
#collapsibleNavId > ul > li {
  display: flex;
  align-items: center;
  width: 15%;
  justify-content: center;
}
#collapsibleNavId > ul > a {
  align-items: center;
  justify-content: center;
}
.logout-btn {
  color: white;
  border: 0px solid transparent;
  border-radius: 50px;
  padding: 5%;
  background-color: transparent;
}
.logout-btn:hover {
  color: black;
  border: 1px solid white;
  border-radius: 50px;
  padding: 5%;
  background-color: white;
}
.btns {
  display: flex;
  justify-content: space-between;
  width: 120px;
}
.register-btn {
  color: floralwhite;
  text-decoration: none;
}
.register-btn:hover {
  color: white;
}
.login-btn {
  color: bisque;
  text-decoration: none;
}
.login-btn:hover {
  color: white;
}
</style>
