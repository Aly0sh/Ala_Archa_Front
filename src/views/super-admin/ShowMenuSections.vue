<template>
    <div class="container">
        <div class="super-admin">
            <h2>Список секций меню</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th class="edit">Редактирование</th>
                    <th class="delete">Удаление</th>
                </tr>
                <tr v-for="(menuSection, i) in menuSections" :key="i">
                    <td>{{ menuSection.id }}</td>
                    <td>{{ menuSection.name }}</td>
                    <td class="edit"><a href="">Редактировать</a></td>
                    <td class="delete"><a @click="delete(menuSection.id)">Удалить</a></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      menuSections: []
    }
  },
  mounted(){
    axios
      .get("http://localhost:8083/menu/section/get-for-list")
      .then(response => {(this.menuSections = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
    },
  methods: {
      delete(id){
        axios
            .delete(('http://localhost:8083/menu/section/delete/' + id), 
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