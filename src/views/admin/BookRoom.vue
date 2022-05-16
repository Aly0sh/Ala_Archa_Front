<template>
    <div class="container">
        <div class="super-admin">
            <h2>Бронь комнаты</h2>
            <table>
                <tr>
                    <th>User Id</th>
                    <th>Имя пользователя</th>
                    <th>Название отеля</th>
                    <th>Тип комнаты</th>
                    <th>Номер комнаты</th>
                    <th>Дата приезда</th>
                    <th>Дата отъезда</th>
                    <th class="accept">Принять</th>
                    <th class="deny">Отклонить</th>
                </tr>
                <tr v-for="(room_book, i) in room_books" :key="i">
                    <td>{{ room_book.userId }}</td>
                    <td>{{ room_book.userFullName }}</td>
                    <td>{{ room_book.hotelName }}</td>
                    <td>{{ room_book.roomType }}</td>
                    <td>{{ room_book.roomNumber }}</td>
                    <td>{{ converterDate(room_book.startDate) }}</td>
                    <td>{{ converterDate(room_book.endDate) }}</td>
                    <td class="accept"><a @click="accept(room_book.id)">Принять</a></td>
                    <td class="deny"><a @click="decline(room_book.id)">Отклонить</a></td>
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
      room_books: []
    }
  },
  mounted(){
    axios
      .get("http://localhost:8083/room/order/get-in-process")
      .then(response => {(this.room_books = response.data.value);
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
      },

      accept(hotelHallId){
        console.log(hotelHallId)
        axios
        .post('http://localhost:8083/room/order/' + hotelHallId + '/accept',
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
            location.reload();
      },

      decline(hotelHallId){
        console.log(hotelHallId)
        axios
        .post('http://localhost:8083/room/order/' + hotelHallId + '/decline',
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

              location.reload();
      },
      
		converterDate(dateString){
			let date = new Date(dateString.split('T')[0]);
			let day = date.getDate();
			let month = date.getMonth();
			let year = date.getFullYear();
			if(day <= 9){
				day = '0' + day;
			}
			if(month <= 9){
				month = '0' + month;
			}
			return (day + '.' + month + '.' + year)
		}
  }
}
</script>

<style src="../../assets/css/super.css"/>