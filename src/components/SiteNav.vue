<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark"
    style="background-color: grey"
  >
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
            >Dunder Mifflin</router-link
          >
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/product"
            >Product Page</router-link
          >
        </li>
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/cart"
            >Cart</router-link
          >
        </li>
        <span v-if="isLoggedIn">
          <button @click="handleSignOut">Logout</button>
        </span>
        <span v-else>
          <router-link to="/register"> Register </router-link> |
          <router-link to="/sign-in"> Login </router-link>
        </span>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"; // used for conditional rendering
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
</script>

<style></style>
