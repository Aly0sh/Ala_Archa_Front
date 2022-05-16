<template>
    <div class="container">
        <div class="super-admin">
            <h2>Бронь комнаты</h2>
            <table>
                <tr>
                    <th>User Id</th>
                    <th>Имя пользователя</th>
                    <th>Номер телефона</th>
                    <th>Название отеля</th>
                    <th>Тип комнаты</th>
                    <th>Номер комнаты</th>
                    <th>Дата прибытия</th>
                    <th>Дата отъезда</th>
                    <th class="status">Статус</th>
                </tr>
                <tr v-for="(room_book, i) in room_books" :key="i">
                    <td>{{ room_book.userId }}</td>
                    <td>{{ room_book.userFullName }}</td>
                    <td>{{ room_book.userPhone }}</td>
                    <td>{{ room_book.hotelName }}</td>
                    <td>{{ room_book.roomType }}</td>
                    <td>{{ room_book.roomNumber }}</td>
                    <td>{{ converterDate(room_book.startDate) }}</td>
                    <td>{{ converterDate(room_book.endDate) }}</td>
                    <td v-if="room_book.orderStatus == 'CONFIRMED'" class="accept">Принято</td>
                    <td v-else class="deny">Отклонено</td>
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
      .get("http://localhost:8083/room/order/get-confirmed-or-declined")
      .then(response => {(this.room_books = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
    },
  methods: {
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