<template>
    <div class="container">
        <div class="super-admin">
            <h2>Список гостиниц</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Зона</th>
                    <th class="edit">Редактирование</th>
                    <th class="delete">Удаление</th>
                </tr>
                <tr v-for="(hotel, i) in hotels" :key="i">
                    <td>{{ hotel.id }}</td>
                    <td>{{ hotel.hotelName }}</td>
                    <td>{{ hotel.areaName }}</td>
                    <td class="edit"><a href="">Редактировать</a></td>
                    <td class="delete"><a @click="delete(hotel.id)">Удалить</a></td>
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
      hotels: []
    }
  },
  mounted(){
    axios
      .get("http://localhost:8083/hotel/get-for-list")
      .then(response => {(this.hotels = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
    },
  methods: {
      delete(id){
        axios
            .delete(('http://localhost:8083/hotel/delete/' + id), 
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