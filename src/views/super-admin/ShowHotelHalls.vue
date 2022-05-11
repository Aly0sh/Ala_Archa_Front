<template>
    <div class="container">
        <div class="super-admin">
            <h2>Список дополнительных залов</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Цена за след. часы</th>
                    <th>Количество мест</th>
                    <th>Название отеля</th>
                    <th class="edit">Редактирование</th>
                    <th class="delete">Удаление</th>
                </tr>
                <tr v-for="(hotelHall, i) in hotelHalls" :key="i">
                    <td>{{ hotelHall.id }}</td>
                    <td>{{ hotelHall.name }}</td>
                    <td>{{ hotelHall.price }}</td>
                    <td>{{ hotelHall.priceForNextHours }}</td>
                    <td>{{ hotelHall.numberOfSeats }}</td>
                    <td>{{ hotelHall.hotelName }}</td>
                    <td class="edit"><a href="">Редактировать</a></td>
                    <td class="delete"><a @click="delete(hotelHall.id)">Удалить</a></td>
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
      hotelHalls: []
    }
  },
  mounted(){
    axios
      .get("http://localhost:8083/hotelHall/get-for-list")
      .then(response => {(this.hotelHalls = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
    },
  methods: {
      delete(id){
        axios
            .delete(('http://localhost:8083/hotelHall/delete/' + id), 
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