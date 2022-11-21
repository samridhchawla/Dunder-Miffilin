<template>
  <div class="row justify-content-start align-items-start g-2">
    <div class="col">
      <h1>Login page</h1>
      <input v-model="username" type="name" placeholder="type your name" />
      <input
        v-model="password"
        type="password "
        placeholder="type your password "
      />
      <button @loginAuth="logFlag = true" @click="login" type="button">
        Login
      </button>
    </div>
  </div>
</template>
<script>
import JsonServiceUser from "../services/JsonService-user";

export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      users: new Map(),
      username: "",
      password: "",
    };
  },
  methods: {
    async loadUsers() {
      JsonServiceUser.getJson()
        .then((res) => {
          res.data.forEach((user) => {
            this.users.set(user.userName, user);
          });
        })
        .catch((e) => console.log(e));
    },
    login() {
      if (this.users.has(this.username)) {
        if (this.users.get(this.username).password === this.password) {
          this.$emit("login", true, this.users.get(this.username));
          this.$router.push("/home");
        } else {
          console.log("incorrect password or username");
        }
      } else {
        console.log("incorrect password or username");
      }
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>
