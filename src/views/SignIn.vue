<template>
    <form>
        <input v-model="email" placeholder="enter email" />
        <input type="password" v-model="password" placeholder="enter password" />
        <!-- <a href="/restore-password">Forget password?</a> -->
        <input type="submit" v-on:click.prevent="signin" value="Sign in"/>
        <div v-if="signInErrorFlag">{{ signInErrorMessage }}</div>
  </form>
</template>

<script>
import axios from "axios";

export default {
    name:"SignIn",
    data: function () {
    return {
      email: "",
      password: "",
      signInErrorFlag: false,
      signInErrorMessage: "",
    };
  },
  methods: {
    signin() {
      console.log("inside sign in");
      let email = this.email;
      let password = this.password;
      axios
        .post("http://localhost:8083/user/sign-in", { email, password })
        .then((resp) => {
          if (resp.status == 200) {
            this.$store.commit("setCredentials", {
              email: resp.data.value.email,
              token: 'Bearer ' + resp.data.value.token,
              signInFlag: true,
            });

            this.$router.push("/home");

            sessionStorage.setItem("email", resp.data.value.email);
            sessionStorage.setItem("token", 'Bearer ' + resp.data.value.token);
            sessionStorage.setItem("signInFlag", true);
          }

          console.log(this.$store.state);
        })
        .catch((error) => {
          if (!error.response) {
            this.$router.push("/error");
            this.$store.commit("setError", error);
          } else if (error.response.data.details === undefined) {
            this.$router.push("/error");
            this.$store.commit("setError", error);
          } else {
            this.signInErrorFlag = true;
            this.signInErrorMessage = error.response.data.details;
            console.log(error.response.data);
          }
        });
    },
  },
};
</script>

<style scoped>
#imgSignInLogo {
  display: block;
  width: 64px;
  margin: 16px auto;
}
form {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 100px auto;
  padding: 16px;
  border: 2px solid gray;
  border-radius: 8px;
  height: 400px;
}
input,
button {
  margin: 15px;
}
input {
  font-size: 20px;
  padding: 8px 8px;
  border-radius: 8px;
  border: 1px solid #e60077;
}
a {
  font-weight: bold;
  color: gray;
  margin: 10px auto;
}
button {
  border-radius: 8px;
  font-size: 20px;
  padding: 8px;
  background-color: #e60077;
  border-color: #e60077;
  color: white;
}
</style>