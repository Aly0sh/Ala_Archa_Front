<template>
    <form>
        <input v-model.trim="area.areaName" placeholder="Enter area name" />
        <select v-model.trim="area.email">
            <option v-for="index in users" :key="index" :value="index.email"> {{index.lastName + ' ' + index.firstName}} </option>
        </select>
        <input type="submit" value="Add area" @click.prevent="createArea"/>
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
        area: {
            areaName: '',
            email: ''
        },
        users: []
      }
    },
  
  validations: {
      area: {
          areaName: {
              required
          },
          email: {
              required, email
          }
      },
  },

  methods: {
      createArea(){
        if (!this.v$.area.$error) {
            console.log("Валидация прошла успешно");
            axios
            .post("http://localhost:8083/area/create",
              this.area, 
              {
                headers:{
                  Authorization:this.$store.getters.getToken,
                }
              })
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
      }
  },

  mounted(){
    console.log("Getting users")
    axios
      .get("http://localhost:8083/user/get-admins")
      .then(response => {(this.users = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
      console.log(this.users);
    }
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