<template>
    <div class="container">
        <div class="super-admin">
            <h2>Бронь комнаты</h2>
            <table>
                <tr>
                    <th>user</th>
                    <th>Название</th>
                    <th>Тип комнаты</th>
                    <th>Номер комнаты</th>
                    <th>Дата прибытия</th>
                    <th>Дата отъезда</th>
                    <th class="accept">Принять</th>
                    <th class="deny">Отклонить</th>
                </tr>
                <tr v-for="(room_book, i) in room_books" :key="i">
                    <td>{{ room_book.user }}</td>
                    <td>{{ room_book.name }}</td>
                    <td>{{ room_book.roomType }}</td>
                    <td>{{ room_book.roomNumber }}</td>
                    <td>{{ room_book.entryDate }}</td>
                    <td>{{ room_book.leaveDate }}</td>
                    <td class="accept"><a href="">Принять</a></td>
                    <td class="deny"><a @click="delete(room_book.id)">Удалить</a></td>
                </tr>
            </table>
            <a href="/admin/show-admin-menu"><div class="back">
                    <p>Назад</p>
                </div></a>
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