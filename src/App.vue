<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/sign-in"  v-if="!this.$store.getters.getSignInFlag">Sign in</router-link> |
    <div v-if="this.$store.getters.getSignInFlag">
      <a @click="signOut">Sign out</a>
    </div>
  </nav>
  <router-view />
</template>

<script>
import axios from "axios"
export default {
  methods: {
    signOut() {
      this.$router.push("/");
      this.$store.commit("setCredentials", {
        email: "please log in",
        token: "",
        signInFlag: false,
      });
      sessionStorage.clear();
      localStorage.removeItem("clickedMenu");
    },
  },
  watch: {
    $route() {
      if (
        this.$route.path != "/" &&
        this.$route.path != "/sign-in" &&
        !this.$store.getters.getSignInFlag &&
        !Object.values(this.$store.getters.getError).length
      ) {
        this.$router.push("/sign-in");
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
