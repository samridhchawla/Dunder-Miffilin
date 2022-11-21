<template>
  <div id="app">
    <AppHeader />
  </div>
  <header>
    <router-link to="/">
      <h1><span>Quickie Search </span>Movies</h1>
    </router-link>
  </header>
  <main></main>
  <router-view />
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
  &::selection {
    background: transparentize(#42b883, 0.5);
  }
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #35495e;
  font-family: sans-serif;
}
a {
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2c3d4e;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  h1 {
    color: #fff;
    font-size: 28px;
    span {
      color: #42b883;
    }
  }
}

</style>