<template>
    <div class="container">
        <div class="super-admin">
            <h2>
                Интерфейс для суперадмина
            </h2>
            <div class="column">
                <h2>Выберите, что хотите сделать</h2>
                <a><div class="item">
                    <p>Список животных и растений</p>
                </div></a>
                <a><div class="item">
                    <p>Список гостиниц</p>
                </div></a>
                <a><div class="item">
                    <p>Список типов комнат</p>
                </div></a>
                <a><div class="item">
                    <p>Список комнат</p>
                </div></a>
                <a><div class="item">
                    <p>Список доп. комнат</p>
                </div></a>
                <a><div class="item">
                    <p>Список типов объектов</p>
                </div></a>
                <a><div class="item">
                    <p>Список объектов</p>
                </div></a>
                <a><div class="item">
                    <p>Список зон</p>
                </div></a>
                <a><div class="item">
                    <p>Список секций меню</p>
                </div></a>
                <a><div class="item">
                    <p>Список меню</p>
                </div></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    mounted(){
    axios
      .get("http://localhost:8083/user/get-admins")
      .then(response => {(this.users = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
    },
    methods: {
      create(){
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
                // this.$router.push("/");
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
      }
    }
}
</script>

<style src="../../assets/css/super.css"/>