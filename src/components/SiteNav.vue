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
        <li>
          <router-link class="product-btn" to="/product">Products</router-link>
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
        <li>
          <router-link class="cart-btn" to="/cart"
            >Cart <i class="fa-solid fa-cart-shopping"></i
          ></router-link>
        </li>
        <li>
          <router-link class="wishlist-btn" to="/wishlist"
            >Wishlist</router-link
          >
        </li>
        <li class="login-logout-btn">
          <div v-if="logFlag" id="container">
            <button class="learn-more" @click="logoutFn">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <router-link to="/sign-in" class="button-text">
                logout</router-link
              >
            </button>
          </div>
          <div v-else id="container">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text"
                ><i class="fa-regular fa-user"></i> login</span
              >
            </button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
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
  mounted() {
    
  }
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
  width: 99%;
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
.product-btn,
.cart-btn,
.wishlist-btn {
  font-family: "Raleway", sans-serif;
  color: white;
  text-decoration: none;
  padding: 5%;
}
.product-btn:hover,
.cart-btn:hover,
.wishlist-btn:hover {
  color: hotpink;
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
  text-align: center;
}
#collapsibleNavId > ul > a {
  align-items: center;
  justify-content: center;
  text-align: center;
}

span {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  background-color: hotpink;
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

@import url("https://fonts.googleapis.com/css?family=Mukta:700");
* {
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Mukta", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  background: #f3f8fa;
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  color: white;
}
button.learn-more {
  width: 12rem;
  height: auto;
}
button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #282936;
  border-radius: 1.625rem;
}
button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}
button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}
button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}
button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #282936;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}
button.learn-more .button-text > i{
 padding: 3%;
}
button:hover .circle {
  width: 100%;
}
button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
}
button:hover .button-text {
  color: #fff;
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }
}
</style>
