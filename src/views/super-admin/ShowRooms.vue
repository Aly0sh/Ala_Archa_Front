<template>
    <div class="container">
        <div class="super-admin">
            <h2>Список комнат</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Номер</th>
                    <th>Количество мест</th>
                    <th>Тип комнаты</th>
                    <th class="edit">Редактирование</th>
                    <th class="delete">Удаление</th>
                </tr>
                <tr v-for="(room, i) in rooms" :key="i">
                    <td>{{ room.id }}</td>
                    <td>{{ room.roomNumber }}</td>
                    <td>{{ room.bedNumber }}</td>
                    <td>{{ room.roomTypeName }}</td>
                    <td class="edit"><a href="">Редактировать</a></td>
                    <td class="delete"><a @click="delete(room.id)">Удалить</a></td>
                </tr>
            </table>
        </div>
    </div>
    <button @click="$router.push('/super-admin/create-room')" class="super-admin-add-button">Добавить</button>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      rooms: []
    }
  },
  mounted(){
    axios
      .get("http://localhost:8083/room/get-for-list")
      .then(response => {(this.rooms = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
    },
  methods: {
      delete(id){
        axios
            .delete(('http://localhost:8083/room/delete/' + id), 
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