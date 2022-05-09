<template>
    <div class="container">
        <div class="super-admin">
            <h2>Список животных/растений</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Тип</th>
                    <th class="edit">Редактирование</th>
                    <th class="delete">Удаление</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Снежный барс</td>
                    <td>Фауна</td>
                    <td class="edit"><a href="">Редактировать</a></td>
                    <td class="delete"><a href="">Удалить</a></td>
                </tr>
            </table>
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