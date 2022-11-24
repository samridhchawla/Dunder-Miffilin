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
        <li class="nav-item product-page">
          <router-link active-class="active" class="nav-link" to="/product"
            >Products</router-link
          >
        </li>
        <!-- search component  -->

        <div class="navbar container-fluid search-items">
          <input
            v-model="searchTxt"
            class="form-control me-2"
            type="search"
            placeholder="Search Dunder Mifflin..."
            aria-label="Search"
          />
          <button
            @click="searchFn"
            class="btn btn-outline-success"
            type="submit"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <!-- search component end -->
        <li class="nav-item">
          <router-link
            active-class="active"
            class="nav-link cart-btn"
            to="/cart"
            >Cart <i class="fa-solid fa-cart-shopping"></i
          ></router-link>
        </li>
        <li class="nav-item">
          <router-link
            active-class="active"
            class="nav-link wishlist-btn"
            to="/wishlist"
            >Wishlist</router-link
          >
        </li>
        <li>
          <span v-if="logFlag">
            <button class="logout-btn" @click="logoutFn">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>Logout
            </button>
          </span>
          <!-- @click="handleSignOut" -->
          <span v-else>
            <router-link class="login-btn" to="/sign-in"
              ><i class="fa-regular fa-user"></i> Login
            </router-link>
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
    searchFn() {
      this.$emit("search", this.searchTxt);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600&display=swap");
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
  width: 90%;
  position: relative;
  display: flex;
  justify-content: flex-end;

  margin-left: 0%;
}
/* search field */
.search-items > input {
  width: 98%;
  padding: 2%;
  display: inline-block;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid black;
  -webkit-box-shadow: inset 0 0 10px black;
  -moz-box-shadow: inset 0 0 10px black;
  box-shadow: inset 0 0 5px black;

  background: white;
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
.product-page,
.cart-btn,
.wishlist-btn {
  font-family: "Raleway", sans-serif;
  color: white;
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
span {
  width: 100%;
}
.logout-btn {
  color: black;
  border: 1px solid white;
  border-radius: 50px;
  padding: 7%;
  background-color: white;
  position: relative;
  font-size: 12px;
  display: flex;

  justify-content: center;
  align-items: center;
}
.logout-btn > i {
  margin-right: 5px;
  font-size: 15px;
}
.logout-btn:hover {
  color: white;
  border: 1px solid white;
  border-radius: 50px;
  padding: 7%;
  background-color: black;
}

.login-btn {
  color: black;
  text-decoration: none;
  border: 1px solid white;
  background-color: white;
  border-radius: 50px;
  padding: 7%;
  font-size: 14px;
}
.login-btn > i {
  margin-right: 5px;
  font-size: 14px;
}

.login-btn:hover {
  color: white;
  background-color: mediumslateblue;
  padding: 7%;
  border-radius: 50px;
  border: 1px solid mediumslateblue;
}
</style>
