<template>
    <form>
        <input v-model.trim="user.firstName" placeholder="Enter first name" />
        <input v-model.trim="user.lastName" placeholder="Enter last name" />
        <input v-model.trim="user.email" placeholder="Enter email" />
        <input v-model.trim="user.phone" type="phone" placeholder="Enter phonenumber" />
        <input v-model.trim="user.password" type="password" placeholder="Enter password" />
        <input type="submit" value="Sign up" @click.prevent="signup"/>
  </form>
</template>

<script>
import axios from "axios";
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, numeric } from '@vuelidate/validators';

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
      return{
        user: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: ''
        }
      }
    },
  
  validations: {
    user: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        email, required
      },
      phone: {
        required, numeric
      },
      password: {
        required, minLength: minLength(8)
      }
    }
  },

  methods: {
    signup() {
      this.v$.user.$touch();
      if (!this.v$.user.$error) {
        console.log("Валидация прошла успешно")
        console.log("inside sign up");
        let user = this.user
        axios
          .post("http://localhost:8083/user/sign-up", { user })
          .then((resp) => {
            if (resp.status == 200) {
              this.$router.push("/sign-in");
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
      } else{
        console.log("Валидация не удалась")
      }
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